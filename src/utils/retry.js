/**
 * @fileoverview Retry utility with exponential backoff for handling rate limits
 * and transient errors in Asana API requests.
 * 
 * This module provides intelligent retry logic that:
 * - Automatically retries on rate limit errors (429)
 * - Retries on server errors (5xx) with exponential backoff
 * - Respects Retry-After headers from rate limit responses
 * - Configurable retry attempts and backoff strategies
 * - Supports custom retry predicates for fine-grained control
 * 
 * @module utils/retry
 * @version 3.1.5
 * @author Asana SDK Contributors
 * @license Apache-2.0
 */

'use strict';

/**
 * @typedef {Object} RetryOptions
 * @property {number} [maxRetries=3] - Maximum number of retry attempts (default: 3)
 * @property {number} [baseDelay=1000] - Base delay in milliseconds for exponential backoff (default: 1000ms)
 * @property {number} [maxDelay=30000] - Maximum delay in milliseconds (default: 30000ms)
 * @property {number} [jitter=true] - Whether to add random jitter to prevent thundering herd (default: true)
 * @property {function(Error): boolean} [shouldRetry] - Custom function to determine if error should be retried
 * @property {function(number, Error): void} [onRetry] - Callback invoked before each retry attempt
 */

/**
 * @typedef {Object} RetryResult
 * @property {*} value - The resolved value from the operation
 * @property {number} attempts - Total number of attempts made
 * @property {boolean} retried - Whether any retries occurred
 */

/**
 * HTTP status codes that should trigger retries.
 * @const {Array<number>}
 */
const RETRYABLE_STATUS_CODES = [
    429, // Too Many Requests (Rate Limit)
    500, // Internal Server Error
    502, // Bad Gateway
    503, // Service Unavailable
    504  // Gateway Timeout
];

/**
 * Checks if an error is retryable based on status code.
 * 
 * @param {Error|Object} error - The error to check
 * @returns {boolean} True if the error is retryable
 */
function isRetryableError(error) {
    if (!error) return false;
    
    // Check for superagent error with response
    if (error.response && error.response.status) {
        return RETRYABLE_STATUS_CODES.includes(error.response.status);
    }
    
    // Check for error with status property
    if (error.status) {
        return RETRYABLE_STATUS_CODES.includes(error.status);
    }
    
    // Check for network/timeout errors
    if (error.code === 'ECONNRESET' || 
        error.code === 'ETIMEDOUT' || 
        error.code === 'ENOTFOUND' ||
        error.message && error.message.includes('timeout')) {
        return true;
    }
    
    return false;
}

/**
 * Extracts retry delay from response headers.
 * 
 * @param {Object} error - The error object with response
 * @returns {number|null} Delay in milliseconds, or null if not specified
 */
function getRetryAfterDelay(error) {
    if (!error || !error.response || !error.response.headers) {
        return null;
    }
    
    var retryAfter = error.response.headers['retry-after'] || 
                     error.response.headers['Retry-After'];
    
    if (!retryAfter) return null;
    
    // Retry-After can be either seconds (number) or HTTP date
    var delay = parseFloat(retryAfter);
    
    if (!isNaN(delay) && delay > 0) {
        // If it's a number, it's in seconds
        return Math.floor(delay * 1000);
    }
    
    // If it's a date, calculate the difference
    try {
        var retryDate = new Date(retryAfter);
        var now = new Date();
        var diff = retryDate.getTime() - now.getTime();
        return diff > 0 ? diff : null;
    } catch (e) {
        return null;
    }
}

/**
 * Calculates exponential backoff delay with optional jitter.
 * 
 * @param {number} attempt - Current attempt number (0-indexed)
 * @param {number} baseDelay - Base delay in milliseconds
 * @param {number} maxDelay - Maximum delay in milliseconds
 * @param {boolean} jitter - Whether to add random jitter
 * @returns {number} Delay in milliseconds
 */
function calculateBackoffDelay(attempt, baseDelay, maxDelay, jitter) {
    // Exponential backoff: baseDelay * 2^attempt
    var delay = baseDelay * Math.pow(2, attempt);
    
    // Cap at maxDelay
    delay = Math.min(delay, maxDelay);
    
    // Add jitter to prevent thundering herd problem
    if (jitter) {
        // Add random jitter between 0% and 25% of the delay
        var jitterAmount = delay * 0.25 * Math.random();
        delay = delay + jitterAmount;
    }
    
    return Math.floor(delay);
}

/**
 * Sleeps for the specified number of milliseconds.
 * 
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise<void>}
 */
function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

/**
 * Retries an async operation with exponential backoff.
 * 
 * Automatically handles:
 * - Rate limit errors (429) with Retry-After header support
 * - Server errors (5xx) with exponential backoff
 * - Network errors with retry logic
 * - Custom retry predicates
 * 
 * @param {function(): Promise<*>} operation - Async function to retry
 * @param {RetryOptions} [options] - Retry configuration options
 * @returns {Promise<RetryResult>} Promise resolving to result and retry metadata
 * 
 * @example
 * // Basic usage with defaults
 * const result = await retry(async () => {
 *     return await apiClient.callApi(...);
 * });
 * 
 * @example
 * // Custom retry configuration
 * const result = await retry(async () => {
 *     return await tasksApi.getTasks({ limit: 100 });
 * }, {
 *     maxRetries: 5,
 *     baseDelay: 2000,
 *     onRetry: (attempt, error) => {
 *         console.log(`Retry attempt ${attempt} after error: ${error.message}`);
 *     }
 * });
 * 
 * @example
 * // Custom retry predicate
 * const result = await retry(async () => {
 *     return await apiClient.callApi(...);
 * }, {
 *     shouldRetry: (error) => {
 *         // Only retry on 429 or 503
 *         return error.status === 429 || error.status === 503;
 *     }
 * });
 */
async function retry(operation, options) {
    options = options || {};
    
    var maxRetries = options.maxRetries !== undefined ? options.maxRetries : 3;
    var baseDelay = options.baseDelay !== undefined ? options.baseDelay : 1000;
    var maxDelay = options.maxDelay !== undefined ? options.maxDelay : 30000;
    var jitter = options.jitter !== undefined ? options.jitter : true;
    var shouldRetryFn = options.shouldRetry || isRetryableError;
    var onRetry = options.onRetry;
    
    var lastError = null;
    var attempts = 0;
    var retried = false;
    
    for (var attempt = 0; attempt <= maxRetries; attempt++) {
        attempts++;
        
        try {
            var value = await operation();
            
            return {
                value: value,
                attempts: attempts,
                retried: retried
            };
        } catch (error) {
            lastError = error;
            
            // Check if we should retry this error
            if (!shouldRetryFn(error)) {
                throw error;
            }
            
            // Don't retry on the last attempt
            if (attempt >= maxRetries) {
                throw error;
            }
            
            retried = true;
            
            // Calculate delay
            var delay = getRetryAfterDelay(error);
            
            if (delay === null || delay <= 0) {
                // Use exponential backoff if no Retry-After header
                delay = calculateBackoffDelay(attempt, baseDelay, maxDelay, jitter);
            } else {
                // Cap the Retry-After delay at maxDelay
                delay = Math.min(delay, maxDelay);
            }
            
            // Invoke retry callback if provided
            if (onRetry) {
                try {
                    onRetry(attempt + 1, error, delay);
                } catch (callbackError) {
                    // Don't let callback errors break retry logic
                    console.warn('Retry callback error:', callbackError);
                }
            }
            
            // Wait before retrying
            await sleep(delay);
        }
    }
    
    // This should never be reached, but TypeScript/static analysis likes it
    throw lastError || new Error('Retry failed without error');
}

/**
 * Creates a retry wrapper function with pre-configured options.
 * Useful for creating reusable retry configurations.
 * 
 * @param {RetryOptions} options - Retry configuration options
 * @returns {function(function(): Promise<*>): Promise<RetryResult>} Retry function with bound options
 * 
 * @example
 * // Create a retry function with custom config
 * const retryWithConfig = createRetry({
 *     maxRetries: 5,
 *     baseDelay: 2000,
 *     onRetry: (attempt, error) => logger.warn(`Retry ${attempt}: ${error.message}`)
 * });
 * 
 * // Use it multiple times
 * const tasks = await retryWithConfig(() => tasksApi.getTasks({ limit: 100 }));
 * const projects = await retryWithConfig(() => projectsApi.getProjects({ limit: 50 }));
 */
function createRetry(options) {
    return function(operation) {
        return retry(operation, options);
    };
}

/**
 * Checks if an error is a rate limit error (429).
 * 
 * @param {Error|Object} error - The error to check
 * @returns {boolean} True if the error is a rate limit error
 */
function isRateLimitError(error) {
    if (!error) return false;
    
    var status = error.response && error.response.status || error.status;
    return status === 429;
}

/**
 * Gets the retry delay from rate limit headers.
 * 
 * @param {Error|Object} error - The error with response headers
 * @returns {number|null} Delay in milliseconds, or null if not available
 */
function getRateLimitDelay(error) {
    return getRetryAfterDelay(error);
}

module.exports = {
    retry: retry,
    createRetry: createRetry,
    isRetryableError: isRetryableError,
    isRateLimitError: isRateLimitError,
    getRateLimitDelay: getRateLimitDelay,
    calculateBackoffDelay: calculateBackoffDelay,
    RETRYABLE_STATUS_CODES: RETRYABLE_STATUS_CODES
};

