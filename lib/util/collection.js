var Bluebird = require('bluebird');
var ResourceStream = require('./resource_stream');

/*
 * @type {Number} Maximum number of items in a collection this library will
 *     ever return. This is currently way higher than the practical limit
 *     of items one can expect to get from the API.
 */
var MAX_COLLECTION_SIZE = 100000;

/**
 * Create a Collection object from a response containing a list of resources.
 *
 * @param {Object} response Full payload from a response to a
 *     collection request.
 * @param {Dispatcher} dispatcher
 * @param {Object} [dispatchOptions]
 * @returns {Object} Collection
 */

function Collection(response, dispatcher, dispatchOptions) {
  if (!Collection.isCollectionResponse(response)) {
    throw new Error(
        'Cannot create Collection from response that does not have resources');
  }

  this.data = response.data;
  this._response = response;
  this._dispatcher = dispatcher;
  this._dispatchOptions = dispatchOptions;
}

/**
 * Transforms a Promise of a raw response into a Promise for a Collection.
 *
 * @param {Promise<Object>} promise
 * @param {Dispatcher} dispatcher
 * @param {Object} [dispatchOptions]
 * @returns {Promise<Collection>}
 */
Collection.fromDispatch = function(promise, dispatcher, dispatchOptions) {
  return promise.then(function(response) {
    return new Collection(response, dispatcher, dispatchOptions);
  });
};

/**
 * @param response {Object} Response that a request promise resolved to
 * @returns {boolean} True iff the response is a collection (possibly empty)
 */
Collection.isCollectionResponse = function(response) {
  return typeof(response) === 'object' &&
      typeof(response.data) === 'object' &&
      typeof(response.data.length) === 'number';
};


/**
 * Return a stream for all the remaining elements in the collection. It will
 * automatically fetch more pages as needed.
 * @return {ResourceStream}
 */
Collection.prototype.stream = function() {
  return new ResourceStream(this);
};


/**
 * Get the next page of results in a collection.
 *
 * @returns {Promise<Collection?>} Resolves to either a collection representing
 *     the next page of results, or null if no more pages.
 */
Collection.prototype.nextPage = function() {
  /* jshint camelcase:false */
  var me = this;
  var next = me._response.next_page;
  if (typeof(next) === 'object' && next !== null) {
    var url = next.uri;
    return Collection.fromDispatch(
        me._dispatcher.dispatch({
          method: 'GET',
          url: url,
          json: true
        }, me._dispatchOptions),
        me._dispatcher,
        me._dispatchOptions);
  } else {
    // No more results.
    return Bluebird.resolve(null);
  }
};


/**
 * Get remaining results from a collection request, transparently
 * paginating until pages exhausted or until `maxItems` items collected.
 *
 * @param {Number} [maxItems] Maximum number of items to return.
 * @returns {Promise} Resolves to the entire set of results for the collection
 *     request.
 */
Collection.prototype.fetch = function(maxItems) {
  var me = this;
  maxItems = maxItems || MAX_COLLECTION_SIZE;
  return new Bluebird(function(resolve, reject) {
    // We will build up these results in pages.
    var results = [];

    function fetch(collection) {
      if (collection === null) {
        // Reached end of pages.
        resolve(results);
      } else {
        // Add collected data to results
        [].push.apply(results, collection.data);
        if (results.length >= maxItems) {
          // We have enough - ensure the returned collection is limited by the
          // given size, and resolve.
          results = results.slice(0, maxItems);
          resolve(results);
        } else {
          // We need more - try to get another page.
          collection.nextPage().then(fetch).catch(reject);
        }
      }
    }

    fetch(me);
  });
};

module.exports = Collection;
