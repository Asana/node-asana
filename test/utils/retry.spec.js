/**
 * @fileoverview Comprehensive test suite for the retry utility.
 * 
 * Tests cover:
 * - Exponential backoff calculation
 * - Retry-After header handling
 * - Rate limit error detection
 * - Custom retry predicates
 * - Retry callbacks
 * - Edge cases and error handling
 * 
 * @module test/utils/retry
 */

'use strict';

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['expect.js', 'sinon', '../../src/utils/retry'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('expect.js'), require('sinon'), require('../../src/utils/retry'));
    } else {
        factory(root.expect, root.sinon, root.retry);
    }
}(this, function(expect, sinon, retryUtil) {

    describe('retry utility', function() {
        
        describe('isRetryableError', function() {
            it('should return true for 429 rate limit errors', function() {
                var error = { status: 429 };
                expect(retryUtil.isRetryableError(error)).to.be(true);
            });

            it('should return true for 5xx server errors', function() {
                expect(retryUtil.isRetryableError({ status: 500 })).to.be(true);
                expect(retryUtil.isRetryableError({ status: 502 })).to.be(true);
                expect(retryUtil.isRetryableError({ status: 503 })).to.be(true);
                expect(retryUtil.isRetryableError({ status: 504 })).to.be(true);
            });

            it('should return false for 4xx client errors (except 429)', function() {
                expect(retryUtil.isRetryableError({ status: 400 })).to.be(false);
                expect(retryUtil.isRetryableError({ status: 401 })).to.be(false);
                expect(retryUtil.isRetryableError({ status: 404 })).to.be(false);
            });

            it('should handle superagent error format', function() {
                var error = {
                    response: {
                        status: 429
                    }
                };
                expect(retryUtil.isRetryableError(error)).to.be(true);
            });

            it('should return true for network errors', function() {
                expect(retryUtil.isRetryableError({ code: 'ECONNRESET' })).to.be(true);
                expect(retryUtil.isRetryableError({ code: 'ETIMEDOUT' })).to.be(true);
                expect(retryUtil.isRetryableError({ code: 'ENOTFOUND' })).to.be(true);
                expect(retryUtil.isRetryableError({ message: 'timeout' })).to.be(true);
            });

            it('should return false for null/undefined', function() {
                expect(retryUtil.isRetryableError(null)).to.be(false);
                expect(retryUtil.isRetryableError(undefined)).to.be(false);
            });
        });

        describe('isRateLimitError', function() {
            it('should return true for 429 errors', function() {
                expect(retryUtil.isRateLimitError({ status: 429 })).to.be(true);
                expect(retryUtil.isRateLimitError({ response: { status: 429 } })).to.be(true);
            });

            it('should return false for other errors', function() {
                expect(retryUtil.isRateLimitError({ status: 500 })).to.be(false);
                expect(retryUtil.isRateLimitError({ status: 400 })).to.be(false);
            });
        });

        describe('getRetryAfterDelay', function() {
            it('should extract delay from Retry-After header (seconds)', function() {
                var error = {
                    response: {
                        headers: {
                            'retry-after': '5'
                        }
                    }
                };
                var delay = retryUtil.getRateLimitDelay(error);
                expect(delay).to.be(5000);
            });

            it('should extract delay from Retry-After header (case insensitive)', function() {
                var error = {
                    response: {
                        headers: {
                            'Retry-After': '10'
                        }
                    }
                };
                var delay = retryUtil.getRateLimitDelay(error);
                expect(delay).to.be(10000);
            });

            it('should return null if no Retry-After header', function() {
                var error = {
                    response: {
                        headers: {}
                    }
                };
                expect(retryUtil.getRateLimitDelay(error)).to.be(null);
            });

            it('should return null if no response', function() {
                expect(retryUtil.getRateLimitDelay({})).to.be(null);
                expect(retryUtil.getRateLimitDelay(null)).to.be(null);
            });
        });

        describe('calculateBackoffDelay', function() {
            it('should calculate exponential backoff', function() {
                var delay1 = retryUtil.calculateBackoffDelay(0, 1000, 30000, false);
                var delay2 = retryUtil.calculateBackoffDelay(1, 1000, 30000, false);
                var delay3 = retryUtil.calculateBackoffDelay(2, 1000, 30000, false);
                
                expect(delay1).to.be(1000);
                expect(delay2).to.be(2000);
                expect(delay3).to.be(4000);
            });

            it('should cap at maxDelay', function() {
                var delay = retryUtil.calculateBackoffDelay(10, 1000, 30000, false);
                expect(delay).to.be(30000);
            });

            it('should add jitter when enabled', function() {
                var delay = retryUtil.calculateBackoffDelay(1, 1000, 30000, true);
                // Should be between 2000 and 2500 (2000 + up to 25% jitter)
                expect(delay).to.be.above(2000);
                expect(delay).to.be.below(2500);
            });

            it('should return integer', function() {
                var delay = retryUtil.calculateBackoffDelay(1, 1000, 30000, true);
                expect(delay % 1).to.be(0);
            });
        });

        describe('retry', function() {
            it('should succeed on first attempt', async function() {
                var operation = sinon.stub().resolves('success');
                
                var result = await retryUtil.retry(operation);
                
                expect(result.value).to.be('success');
                expect(result.attempts).to.be(1);
                expect(result.retried).to.be(false);
                expect(operation.calledOnce).to.be(true);
            });

            it('should retry on rate limit error', async function() {
                var attempts = 0;
                var operation = function() {
                    attempts++;
                    if (attempts === 1) {
                        var error = new Error('Rate limit');
                        error.status = 429;
                        return Promise.reject(error);
                    }
                    return Promise.resolve('success');
                };
                
                var startTime = Date.now();
                var result = await retryUtil.retry(operation, {
                    maxRetries: 3,
                    baseDelay: 100,
                    jitter: false
                });
                var elapsed = Date.now() - startTime;
                
                expect(result.value).to.be('success');
                expect(result.attempts).to.be(2);
                expect(result.retried).to.be(true);
                expect(elapsed).to.be.above(90); // Should have waited ~100ms
            });

            it('should retry on server error', async function() {
                var attempts = 0;
                var operation = function() {
                    attempts++;
                    if (attempts < 2) {
                        var error = new Error('Server error');
                        error.status = 500;
                        return Promise.reject(error);
                    }
                    return Promise.resolve('success');
                };
                
                var result = await retryUtil.retry(operation, {
                    maxRetries: 3,
                    baseDelay: 50,
                    jitter: false
                });
                
                expect(result.value).to.be('success');
                expect(result.attempts).to.be(2);
            });

            it('should respect Retry-After header', async function() {
                var attempts = 0;
                var operation = function() {
                    attempts++;
                    if (attempts === 1) {
                        var error = new Error('Rate limit');
                        error.response = {
                            status: 429,
                            headers: {
                                'retry-after': '0.1' // 100ms
                            }
                        };
                        return Promise.reject(error);
                    }
                    return Promise.resolve('success');
                };
                
                var startTime = Date.now();
                var result = await retryUtil.retry(operation, {
                    maxRetries: 3,
                    baseDelay: 1000,
                    jitter: false
                });
                var elapsed = Date.now() - startTime;
                
                expect(result.value).to.be('success');
                // Should have used Retry-After (100ms) instead of baseDelay (1000ms)
                // Allow some margin for test execution time
                expect(elapsed).to.be.above(90);
                expect(elapsed).to.be.below(250);
            });

            it('should not retry non-retryable errors', async function() {
                var operation = sinon.stub().rejects({ status: 400 });
                
                try {
                    await retryUtil.retry(operation);
                    expect().fail('Should have thrown');
                } catch (error) {
                    expect(error.status).to.be(400);
                    expect(operation.calledOnce).to.be(true);
                }
            });

            it('should throw after max retries', async function() {
                var operation = sinon.stub().rejects({ status: 500 });
                
                try {
                    await retryUtil.retry(operation, {
                        maxRetries: 2,
                        baseDelay: 10,
                        jitter: false
                    });
                    expect().fail('Should have thrown');
                } catch (error) {
                    expect(error.status).to.be(500);
                    expect(operation.callCount).to.be(3); // Initial + 2 retries
                }
            });

            it('should call onRetry callback', async function() {
                var attempts = 0;
                var operation = function() {
                    attempts++;
                    if (attempts === 1) {
                        return Promise.reject({ status: 429 });
                    }
                    return Promise.resolve('success');
                };
                
                var retryCalls = [];
                var result = await retryUtil.retry(operation, {
                    maxRetries: 3,
                    baseDelay: 10,
                    jitter: false,
                    onRetry: function(attempt, error, delay) {
                        retryCalls.push({ attempt: attempt, error: error, delay: delay });
                    }
                });
                
                expect(result.value).to.be('success');
                expect(retryCalls.length).to.be(1);
                expect(retryCalls[0].attempt).to.be(1);
                expect(retryCalls[0].error.status).to.be(429);
            });

            it('should use custom shouldRetry predicate', async function() {
                var attempts = 0;
                var operation = function() {
                    attempts++;
                    if (attempts === 1) {
                        return Promise.reject({ status: 400, custom: true });
                    }
                    return Promise.resolve('success');
                };
                
                var result = await retryUtil.retry(operation, {
                    maxRetries: 3,
                    baseDelay: 10,
                    shouldRetry: function(error) {
                        return error.custom === true;
                    }
                });
                
                expect(result.value).to.be('success');
                expect(result.attempts).to.be(2);
            });

            it('should handle custom shouldRetry returning false', async function() {
                var operation = sinon.stub().rejects({ status: 429 });
                
                try {
                    await retryUtil.retry(operation, {
                        maxRetries: 3,
                        shouldRetry: function() {
                            return false; // Don't retry even for 429
                        }
                    });
                    expect().fail('Should have thrown');
                } catch (error) {
                    expect(operation.calledOnce).to.be(true);
                }
            });

            it('should handle network errors', async function() {
                var attempts = 0;
                var operation = function() {
                    attempts++;
                    if (attempts === 1) {
                        var error = new Error('Connection reset');
                        error.code = 'ECONNRESET';
                        return Promise.reject(error);
                    }
                    return Promise.resolve('success');
                };
                
                var result = await retryUtil.retry(operation, {
                    maxRetries: 3,
                    baseDelay: 10,
                    jitter: false
                });
                
                expect(result.value).to.be('success');
                expect(result.attempts).to.be(2);
            });
        });

        describe('createRetry', function() {
            it('should create retry function with bound options', async function() {
                var retryFn = retryUtil.createRetry({
                    maxRetries: 2,
                    baseDelay: 10,
                    jitter: false
                });
                
                var attempts = 0;
                var operation = function() {
                    attempts++;
                    if (attempts === 1) {
                        return Promise.reject({ status: 429 });
                    }
                    return Promise.resolve('success');
                };
                
                var result = await retryFn(operation);
                
                expect(result.value).to.be('success');
                expect(result.attempts).to.be(2);
            });

            it('should allow reusing retry configuration', async function() {
                var retryFn = retryUtil.createRetry({
                    maxRetries: 1,
                    baseDelay: 10,
                    jitter: false
                });
                
                var op1 = sinon.stub().resolves('result1');
                var op2 = sinon.stub().resolves('result2');
                
                var result1 = await retryFn(op1);
                var result2 = await retryFn(op2);
                
                expect(result1.value).to.be('result1');
                expect(result2.value).to.be('result2');
            });
        });

        describe('edge cases', function() {
            it('should handle operation that throws synchronously', async function() {
                var operation = function() {
                    throw new Error('Sync error');
                };
                
                try {
                    await retryUtil.retry(operation);
                    expect().fail('Should have thrown');
                } catch (error) {
                    expect(error.message).to.be('Sync error');
                }
            });

            it('should handle empty options', async function() {
                var operation = sinon.stub().resolves('success');
                
                var result = await retryUtil.retry(operation, {});
                
                expect(result.value).to.be('success');
            });

            it('should handle onRetry callback throwing', async function() {
                var attempts = 0;
                var operation = function() {
                    attempts++;
                    if (attempts === 1) {
                        return Promise.reject({ status: 429 });
                    }
                    return Promise.resolve('success');
                };
                
                // Should not throw even if callback throws
                var result = await retryUtil.retry(operation, {
                    maxRetries: 3,
                    baseDelay: 10,
                    onRetry: function() {
                        throw new Error('Callback error');
                    }
                });
                
                expect(result.value).to.be('success');
            });

            it('should cap Retry-After at maxDelay', async function() {
                var attempts = 0;
                var operation = function() {
                    attempts++;
                    if (attempts === 1) {
                        var error = new Error('Rate limit');
                        error.response = {
                            status: 429,
                            headers: {
                                'retry-after': '100' // 100 seconds = 100000ms
                            }
                        };
                        return Promise.reject(error);
                    }
                    return Promise.resolve('success');
                };
                
                var startTime = Date.now();
                var result = await retryUtil.retry(operation, {
                    maxRetries: 3,
                    maxDelay: 1000, // Should cap at 1000ms
                    jitter: false
                });
                var elapsed = Date.now() - startTime;
                
                expect(result.value).to.be('success');
                // Should have used maxDelay (1000ms) instead of Retry-After (100000ms)
                expect(elapsed).to.be.below(1100);
            });
        });
    });

}));

