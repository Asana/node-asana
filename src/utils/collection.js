/**
 * @fileoverview Enhanced Collection utility for paginated Asana API responses.
 * 
 * This module provides a powerful abstraction over paginated API responses with:
 * - ES6+ async iteration support (for-await-of)
 * - Functional programming helpers (map, filter, reduce, find)
 * - Memory-efficient streaming capabilities
 * - Progress tracking for large datasets
 * 
 * @module utils/Collection
 * @version 3.1.5
 * @author Asana SDK Contributors
 * @license Apache-2.0
 */

'use strict';

/**
 * @typedef {Object} CollectionOptions
 * @property {number} [pageSize] - Maximum items per page (1-100)
 * @property {function(PageInfo): void} [onPage] - Callback invoked after each page fetch
 */

/**
 * @typedef {Object} PageInfo
 * @property {number} pageNumber - Current page number (1-indexed)
 * @property {number} itemsInPage - Number of items in current page
 * @property {number} totalItemsFetched - Running total of all items fetched
 * @property {boolean} hasNextPage - Whether more pages exist
 */

/**
 * Creates a Collection object from a response containing a list of resources.
 * 
 * Collection provides an ergonomic interface for working with paginated Asana API
 * responses, supporting both traditional promise-based iteration and modern
 * async iteration patterns.
 * 
 * @class Collection
 * @param {Object} response_and_data - Raw API response containing data and metadata
 * @param {ApiClient} apiClient - The API client instance for making subsequent requests
 * @param {Object} apiRequestData - Original request parameters for pagination
 * @throws {Error} If response does not contain a valid collection
 * 
 * @example
 * // Basic usage with nextPage()
 * const tasks = await tasksApi.getTasks({ project: projectGid, limit: 50 });
 * let page = tasks;
 * while (page.data) {
 *     console.log(page.data);
 *     page = await page.nextPage();
 * }
 * 
 * @example
 * // Modern async iteration
 * const tasks = await tasksApi.getTasks({ project: projectGid, limit: 50 });
 * for await (const task of tasks) {
 *     console.log(task.name);
 * }
 * 
 * @example
 * // Functional helpers
 * const tasks = await tasksApi.getTasks({ project: projectGid, limit: 100 });
 * const completedTasks = await tasks.filter(task => task.completed);
 * const taskNames = await tasks.map(task => task.name);
 */
function Collection(response_and_data, apiClient, apiRequestData) {
    if (!Collection.isCollectionResponse(response_and_data.data.data)) {
        throw new Error(
            'Cannot create Collection from response that does not have resources'
        );
    }
    
    /** @type {Array<Object>} The current page of data items */
    this.data = response_and_data.data.data;
    
    /** @type {Object} The full API response including metadata */
    this._response = response_and_data.data;
    
    /** @type {ApiClient} Reference to the API client for pagination */
    this._apiClient = apiClient;
    
    /** @type {Object} Original request data for fetching subsequent pages */
    this._apiRequestData = apiRequestData;
    
    /** @type {number} Running count of items fetched across all pages */
    this._totalFetched = this.data.length;
    
    /** @type {number} Current page number (1-indexed) */
    this._pageNumber = 1;
}

/**
 * Transforms a Promise of a raw response into a Promise for a Collection.
 * 
 * @static
 * @param {Promise<Object>} promise - Promise resolving to API response
 * @param {ApiClient} apiClient - The API client instance
 * @param {Object} apiRequestData - Original request parameters
 * @returns {Promise<Collection>} Promise resolving to a Collection instance
 */
Collection.fromApiClient = function(promise, apiClient, apiRequestData) {
    return promise.then(function(response_and_data) {
        return new Collection(response_and_data, apiClient, apiRequestData);
    });
};

/**
 * Determines if a response represents a collection (array of resources).
 * 
 * @static
 * @param {*} responseData - Response data to check
 * @returns {boolean} True if the response is a valid collection
 */
Collection.isCollectionResponse = function(responseData) {
    return typeof responseData === 'object' &&
           responseData !== null &&
           typeof responseData.length === 'number';
};

/**
 * Fetches the next page of results in the collection.
 * 
 * @method nextPage
 * @memberof Collection
 * @instance
 * @returns {Promise<Collection|{data: null}>} Resolves to a new Collection for
 *          the next page, or an object with `data: null` if no more pages exist
 * 
 * @example
 * let page = await tasksApi.getTasks({ limit: 10 });
 * while (page.data) {
 *     page.data.forEach(task => console.log(task.name));
 *     page = await page.nextPage();
 * }
 */
Collection.prototype.nextPage = function() {
    var me = this;
    var next = me._response.next_page;
    var apiRequestData = me._apiRequestData;
    
    if (typeof next === 'object' && next !== null && me.data && me.data.length > 0) {
        apiRequestData.queryParams['offset'] = next.offset;
        
        return me._apiClient.callApi(
            apiRequestData.path,
            apiRequestData.httpMethod,
            apiRequestData.pathParams,
            apiRequestData.queryParams,
            apiRequestData.headerParams,
            apiRequestData.formParams,
            apiRequestData.bodyParam,
            apiRequestData.authNames,
            apiRequestData.contentTypes,
            apiRequestData.accepts,
            apiRequestData.returnType
        ).then(function(response_and_data) {
            var collection = new Collection(response_and_data, me._apiClient, me._apiRequestData);
            collection._totalFetched = me._totalFetched + collection.data.length;
            collection._pageNumber = me._pageNumber + 1;
            return collection;
        });
    } else {
        return Promise.resolve({ data: null });
    }
};

/**
 * Checks if there are more pages available to fetch.
 * 
 * @method hasNextPage
 * @memberof Collection
 * @instance
 * @returns {boolean} True if more pages exist
 * 
 * @example
 * const tasks = await tasksApi.getTasks({ limit: 10 });
 * if (tasks.hasNextPage()) {
 *     const moreTasks = await tasks.nextPage();
 * }
 */
Collection.prototype.hasNextPage = function() {
    var next = this._response.next_page;
    return typeof next === 'object' && 
           next !== null && 
           this.data && 
           this.data.length > 0;
};

/**
 * Returns the current page number (1-indexed).
 * 
 * @method getPageNumber
 * @memberof Collection
 * @instance
 * @returns {number} Current page number
 */
Collection.prototype.getPageNumber = function() {
    return this._pageNumber;
};

/**
 * Returns the total number of items fetched so far across all pages.
 * 
 * @method getTotalFetched
 * @memberof Collection
 * @instance
 * @returns {number} Total items fetched
 */
Collection.prototype.getTotalFetched = function() {
    return this._totalFetched;
};

/**
 * Makes Collection iterable with for-await-of syntax.
 * Iterates through all items across all pages automatically.
 * 
 * This is the recommended way to process large datasets as it:
 * - Automatically handles pagination
 * - Processes items as they arrive (memory efficient)
 * - Supports early termination with `break`
 * 
 * @method [Symbol.asyncIterator]
 * @memberof Collection
 * @instance
 * @yields {Object} Individual resource items from all pages
 * 
 * @example
 * const tasks = await tasksApi.getTasks({ project: projectGid, limit: 100 });
 * 
 * // Process all tasks across all pages
 * for await (const task of tasks) {
 *     console.log(`Task: ${task.name}`);
 *     
 *     // Early termination is supported
 *     if (task.completed) break;
 * }
 * 
 * @example
 * // Using with async generators
 * async function* getIncompleteTasks(collection) {
 *     for await (const task of collection) {
 *         if (!task.completed) yield task;
 *     }
 * }
 */
Collection.prototype[Symbol.asyncIterator] = function() {
    var collection = this;
    var currentIndex = 0;
    var currentPage = collection;
    
    return {
        async next() {
            // If we've exhausted the current page's data
            while (currentIndex >= currentPage.data.length) {
                // Try to get the next page
                if (!currentPage.hasNextPage()) {
                    return { done: true, value: undefined };
                }
                
                currentPage = await currentPage.nextPage();
                
                // Handle case where nextPage returns { data: null }
                if (!currentPage.data) {
                    return { done: true, value: undefined };
                }
                
                currentIndex = 0;
            }
            
            // Return the next item
            var value = currentPage.data[currentIndex];
            currentIndex++;
            return { done: false, value: value };
        }
    };
};

/**
 * Collects all items from all pages into a single array.
 * 
 * ⚠️ Warning: Use with caution on large datasets as this loads
 * all items into memory. For large datasets, prefer using
 * async iteration or the streaming methods.
 * 
 * @method toArray
 * @memberof Collection
 * @instance
 * @param {CollectionOptions} [options] - Configuration options
 * @param {function(PageInfo): void} [options.onPage] - Callback after each page
 * @returns {Promise<Array<Object>>} All items from all pages
 * 
 * @example
 * const tasks = await tasksApi.getTasks({ project: projectGid, limit: 100 });
 * const allTasks = await tasks.toArray();
 * console.log(`Total tasks: ${allTasks.length}`);
 * 
 * @example
 * // With progress tracking
 * const allTasks = await tasks.toArray({
 *     onPage: (info) => {
 *         console.log(`Page ${info.pageNumber}: ${info.totalItemsFetched} items so far`);
 *     }
 * });
 */
Collection.prototype.toArray = async function(options) {
    options = options || {};
    var result = [];
    var page = this;
    var pageNumber = 0;
    
    while (page.data) {
        pageNumber++;
        result = result.concat(page.data);
        
        if (options.onPage) {
            options.onPage({
                pageNumber: pageNumber,
                itemsInPage: page.data.length,
                totalItemsFetched: result.length,
                hasNextPage: page.hasNextPage()
            });
        }
        
        if (!page.hasNextPage()) break;
        page = await page.nextPage();
    }
    
    return result;
};

/**
 * Executes a callback for each item across all pages.
 * More memory efficient than toArray() for side-effect operations.
 * 
 * @method forEach
 * @memberof Collection
 * @instance
 * @param {function(Object, number): void|Promise<void>} callback - Function to execute
 *        for each item. Receives (item, index). If it returns a promise, iteration
 *        waits for it to resolve.
 * @param {CollectionOptions} [options] - Configuration options
 * @returns {Promise<number>} Total number of items processed
 * 
 * @example
 * const tasks = await tasksApi.getTasks({ project: projectGid, limit: 100 });
 * 
 * const count = await tasks.forEach(async (task, index) => {
 *     console.log(`${index + 1}. ${task.name}`);
 *     await processTask(task);
 * });
 * 
 * console.log(`Processed ${count} tasks`);
 */
Collection.prototype.forEach = async function(callback, options) {
    options = options || {};
    var index = 0;
    var page = this;
    var pageNumber = 0;
    
    while (page.data) {
        pageNumber++;
        
        for (var i = 0; i < page.data.length; i++) {
            await callback(page.data[i], index);
            index++;
        }
        
        if (options.onPage) {
            options.onPage({
                pageNumber: pageNumber,
                itemsInPage: page.data.length,
                totalItemsFetched: index,
                hasNextPage: page.hasNextPage()
            });
        }
        
        if (!page.hasNextPage()) break;
        page = await page.nextPage();
    }
    
    return index;
};

/**
 * Maps each item across all pages using a transform function.
 * 
 * @method map
 * @memberof Collection
 * @instance
 * @param {function(Object, number): *|Promise<*>} transform - Function to transform
 *        each item. Receives (item, index). Can be async.
 * @param {CollectionOptions} [options] - Configuration options
 * @returns {Promise<Array<*>>} Array of transformed items
 * 
 * @example
 * const tasks = await tasksApi.getTasks({ project: projectGid, limit: 100 });
 * 
 * const taskSummaries = await tasks.map(task => ({
 *     id: task.gid,
 *     name: task.name,
 *     done: task.completed
 * }));
 * 
 * @example
 * // Async transform
 * const enrichedTasks = await tasks.map(async (task) => {
 *     const details = await fetchExternalDetails(task.gid);
 *     return { ...task, details };
 * });
 */
Collection.prototype.map = async function(transform, options) {
    options = options || {};
    var result = [];
    var index = 0;
    var page = this;
    var pageNumber = 0;
    
    while (page.data) {
        pageNumber++;
        
        for (var i = 0; i < page.data.length; i++) {
            var transformed = await transform(page.data[i], index);
            result.push(transformed);
            index++;
        }
        
        if (options.onPage) {
            options.onPage({
                pageNumber: pageNumber,
                itemsInPage: page.data.length,
                totalItemsFetched: index,
                hasNextPage: page.hasNextPage()
            });
        }
        
        if (!page.hasNextPage()) break;
        page = await page.nextPage();
    }
    
    return result;
};

/**
 * Filters items across all pages using a predicate function.
 * 
 * @method filter
 * @memberof Collection
 * @instance
 * @param {function(Object, number): boolean|Promise<boolean>} predicate - Function
 *        that returns true for items to include. Receives (item, index). Can be async.
 * @param {CollectionOptions} [options] - Configuration options
 * @returns {Promise<Array<Object>>} Array of items that pass the predicate
 * 
 * @example
 * const tasks = await tasksApi.getTasks({ project: projectGid, limit: 100 });
 * 
 * // Get incomplete tasks
 * const incompleteTasks = await tasks.filter(task => !task.completed);
 * 
 * // Get high-priority tasks (async predicate)
 * const highPriority = await tasks.filter(async (task) => {
 *     const priority = await getPriority(task.gid);
 *     return priority === 'high';
 * });
 */
Collection.prototype.filter = async function(predicate, options) {
    options = options || {};
    var result = [];
    var index = 0;
    var page = this;
    var pageNumber = 0;
    
    while (page.data) {
        pageNumber++;
        
        for (var i = 0; i < page.data.length; i++) {
            var item = page.data[i];
            var matches = await predicate(item, index);
            if (matches) {
                result.push(item);
            }
            index++;
        }
        
        if (options.onPage) {
            options.onPage({
                pageNumber: pageNumber,
                itemsInPage: page.data.length,
                totalItemsFetched: index,
                hasNextPage: page.hasNextPage()
            });
        }
        
        if (!page.hasNextPage()) break;
        page = await page.nextPage();
    }
    
    return result;
};

/**
 * Finds the first item across all pages that satisfies a predicate.
 * Stops iteration as soon as a match is found (early termination).
 * 
 * @method find
 * @memberof Collection
 * @instance
 * @param {function(Object, number): boolean|Promise<boolean>} predicate - Function
 *        that returns true when item is found. Receives (item, index). Can be async.
 * @returns {Promise<Object|undefined>} The first matching item, or undefined
 * 
 * @example
 * const tasks = await tasksApi.getTasks({ project: projectGid, limit: 100 });
 * 
 * // Find the first incomplete task
 * const firstIncomplete = await tasks.find(task => !task.completed);
 * 
 * if (firstIncomplete) {
 *     console.log(`First incomplete: ${firstIncomplete.name}`);
 * }
 */
Collection.prototype.find = async function(predicate) {
    var index = 0;
    var page = this;
    
    while (page.data) {
        for (var i = 0; i < page.data.length; i++) {
            var item = page.data[i];
            var matches = await predicate(item, index);
            if (matches) {
                return item;
            }
            index++;
        }
        
        if (!page.hasNextPage()) break;
        page = await page.nextPage();
    }
    
    return undefined;
};

/**
 * Reduces all items across all pages to a single value.
 * 
 * @method reduce
 * @memberof Collection
 * @instance
 * @param {function(*, Object, number): *|Promise<*>} reducer - Function that
 *        accumulates values. Receives (accumulator, item, index). Can be async.
 * @param {*} initialValue - Initial value for the accumulator
 * @param {CollectionOptions} [options] - Configuration options
 * @returns {Promise<*>} Final accumulated value
 * 
 * @example
 * const tasks = await tasksApi.getTasks({ project: projectGid, limit: 100 });
 * 
 * // Count completed tasks
 * const completedCount = await tasks.reduce(
 *     (count, task) => task.completed ? count + 1 : count,
 *     0
 * );
 * 
 * @example
 * // Group tasks by assignee
 * const tasksByAssignee = await tasks.reduce((groups, task) => {
 *     const assignee = task.assignee?.gid || 'unassigned';
 *     groups[assignee] = groups[assignee] || [];
 *     groups[assignee].push(task);
 *     return groups;
 * }, {});
 */
Collection.prototype.reduce = async function(reducer, initialValue, options) {
    options = options || {};
    var accumulator = initialValue;
    var index = 0;
    var page = this;
    var pageNumber = 0;
    
    while (page.data) {
        pageNumber++;
        
        for (var i = 0; i < page.data.length; i++) {
            accumulator = await reducer(accumulator, page.data[i], index);
            index++;
        }
        
        if (options.onPage) {
            options.onPage({
                pageNumber: pageNumber,
                itemsInPage: page.data.length,
                totalItemsFetched: index,
                hasNextPage: page.hasNextPage()
            });
        }
        
        if (!page.hasNextPage()) break;
        page = await page.nextPage();
    }
    
    return accumulator;
};

/**
 * Checks if at least one item across all pages satisfies a predicate.
 * Stops iteration as soon as a match is found (early termination).
 * 
 * @method some
 * @memberof Collection
 * @instance
 * @param {function(Object, number): boolean|Promise<boolean>} predicate - Function
 *        to test each item. Receives (item, index). Can be async.
 * @returns {Promise<boolean>} True if at least one item matches
 * 
 * @example
 * const tasks = await tasksApi.getTasks({ project: projectGid, limit: 100 });
 * 
 * const hasOverdue = await tasks.some(task => {
 *     return task.due_on && new Date(task.due_on) < new Date();
 * });
 * 
 * if (hasOverdue) {
 *     console.log('Warning: Project has overdue tasks!');
 * }
 */
Collection.prototype.some = async function(predicate) {
    var found = await this.find(predicate);
    return found !== undefined;
};

/**
 * Checks if all items across all pages satisfy a predicate.
 * Stops iteration as soon as a non-match is found (early termination).
 * 
 * @method every
 * @memberof Collection
 * @instance
 * @param {function(Object, number): boolean|Promise<boolean>} predicate - Function
 *        to test each item. Receives (item, index). Can be async.
 * @returns {Promise<boolean>} True if all items match
 * 
 * @example
 * const tasks = await tasksApi.getTasks({ project: projectGid, limit: 100 });
 * 
 * const allAssigned = await tasks.every(task => task.assignee !== null);
 * 
 * if (allAssigned) {
 *     console.log('All tasks are assigned!');
 * }
 */
Collection.prototype.every = async function(predicate) {
    var index = 0;
    var page = this;
    
    while (page.data) {
        for (var i = 0; i < page.data.length; i++) {
            var item = page.data[i];
            var matches = await predicate(item, index);
            if (!matches) {
                return false;
            }
            index++;
        }
        
        if (!page.hasNextPage()) break;
        page = await page.nextPage();
    }
    
    return true;
};

/**
 * Takes the first N items from the collection across pages.
 * More efficient than toArray() when you only need a subset.
 * 
 * @method take
 * @memberof Collection
 * @instance
 * @param {number} count - Maximum number of items to take
 * @returns {Promise<Array<Object>>} Array of up to `count` items
 * 
 * @example
 * const tasks = await tasksApi.getTasks({ project: projectGid, limit: 100 });
 * 
 * // Get first 5 tasks (may span multiple pages if limit is small)
 * const firstFive = await tasks.take(5);
 */
Collection.prototype.take = async function(count) {
    if (count <= 0) return [];
    
    var result = [];
    var page = this;
    
    while (page.data && result.length < count) {
        var needed = count - result.length;
        var available = page.data.slice(0, needed);
        result = result.concat(available);
        
        if (result.length >= count || !page.hasNextPage()) break;
        page = await page.nextPage();
    }
    
    return result;
};

/**
 * Creates a stream-like interface for processing items in batches.
 * Useful for processing large datasets with controlled concurrency.
 * 
 * @method batch
 * @memberof Collection
 * @instance
 * @param {number} batchSize - Number of items per batch
 * @param {function(Array<Object>, number): void|Promise<void>} processor - Function
 *        to process each batch. Receives (items, batchIndex). Can be async.
 * @param {CollectionOptions} [options] - Configuration options
 * @returns {Promise<number>} Total number of batches processed
 * 
 * @example
 * const tasks = await tasksApi.getTasks({ project: projectGid, limit: 100 });
 * 
 * // Process tasks in batches of 10
 * const batchCount = await tasks.batch(10, async (batch, batchIndex) => {
 *     console.log(`Processing batch ${batchIndex + 1} with ${batch.length} tasks`);
 *     await Promise.all(batch.map(task => processTask(task)));
 * });
 * 
 * console.log(`Processed ${batchCount} batches`);
 */
Collection.prototype.batch = async function(batchSize, processor, options) {
    options = options || {};
    var currentBatch = [];
    var batchIndex = 0;
    var page = this;
    var pageNumber = 0;
    var totalItems = 0;
    
    while (page.data) {
        pageNumber++;
        
        for (var i = 0; i < page.data.length; i++) {
            currentBatch.push(page.data[i]);
            totalItems++;
            
            if (currentBatch.length >= batchSize) {
                await processor(currentBatch, batchIndex);
                batchIndex++;
                currentBatch = [];
            }
        }
        
        if (options.onPage) {
            options.onPage({
                pageNumber: pageNumber,
                itemsInPage: page.data.length,
                totalItemsFetched: totalItems,
                hasNextPage: page.hasNextPage()
            });
        }
        
        if (!page.hasNextPage()) break;
        page = await page.nextPage();
    }
    
    // Process any remaining items
    if (currentBatch.length > 0) {
        await processor(currentBatch, batchIndex);
        batchIndex++;
    }
    
    return batchIndex;
};

/**
 * Returns pagination metadata for the current response.
 * 
 * @method getPageInfo
 * @memberof Collection
 * @instance
 * @returns {PageInfo} Current page information
 * 
 * @example
 * const tasks = await tasksApi.getTasks({ project: projectGid, limit: 50 });
 * const info = tasks.getPageInfo();
 * console.log(`Page ${info.pageNumber}: ${info.itemsInPage} items, hasMore: ${info.hasNextPage}`);
 */
Collection.prototype.getPageInfo = function() {
    return {
        pageNumber: this._pageNumber,
        itemsInPage: this.data.length,
        totalItemsFetched: this._totalFetched,
        hasNextPage: this.hasNextPage()
    };
};

module.exports = Collection;
