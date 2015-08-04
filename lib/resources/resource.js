var Collection = require('../util/collection');

/**
 * Base class for a resource accessible via the API. Uses a `Dispatcher` to
 * access the resources.
 * @param {Dispatcher} dispatcher
 * @constructor
 */
function Resource(dispatcher) {
  /**
   * An instance of the dispatcher. This is usually passed from the client.
   * @type {Dispatcher}
   */
  this.dispatcher = dispatcher;
}

/**
 * @type {number} Default number of items to get per page.
 */
Resource.DEFAULT_PAGE_LIMIT = 50;

/**
 * Helper method that dispatches a GET request to the API, where the expected
 * result is a collection.
 * @param  {Dispatcher} dispatcher
 * @param  {String}     path    The path of the API
 * @param  {Object}     [query] The query params
 * @param  {Object}     [dispatchOptions] Options for handling the request and
 *     response. See `Dispatcher.dispatch`.
 * @return {Promise<Collection>} The Collection response for the request
 */
Resource.getCollection = function(dispatcher, path, query, dispatchOptions) {
  query = query || {};
  query.limit = query.limit || Resource.DEFAULT_PAGE_LIMIT;
  return Collection.fromDispatch(
      dispatcher.get(path, query, dispatchOptions),
      dispatcher,
      dispatchOptions);
};

/**
 * Helper method for any request Promise from the Dispatcher, unwraps the `data`
 * value from the payload.
 * @param  {Promise} promise A promise returned from a `Dispatcher` request.
 * @return {Promise}         The `data` portion of the response payload.
 */
Resource.unwrap = function(promise) {
  return promise.then(function(payload) {
    return payload.data;
  });
};

/**
 * Dispatches a GET request to the API, where the expected result is a
 * single resource.
 * @param  {String}     path    The path of the API
 * @param  {Object}     [query] The query params
 * @param  {Object}     [dispatchOptions] Options for handling the request and
 *     response. See `Dispatcher.dispatch`.
 * @return {Promise}            The response for the request
 */
Resource.prototype.dispatchGet = function(path, query, dispatchOptions) {
  return Resource.unwrap(this.dispatcher.get(path, query, dispatchOptions));
};

/**
 * Dispatches a GET request to the API, where the expected result is a
 * collection.
 * @param  {String}     path    The path of the API
 * @param  {Object}     [query] The query params
 * @param  {Object}     [dispatchOptions] Options for handling the request and
 *     response. See `Dispatcher.dispatch`.
 * @return {Promise}            The response for the request
 */
Resource.prototype.dispatchGetCollection =
    function(path, query, dispatchOptions) {
  return Resource.getCollection(this.dispatcher, path, query, dispatchOptions);
};

/**
 * Dispatches a POST request to the API, where the expected response is a
 * single resource.
 * @param  {String}     path    The path of the API
 * @param  {Object}     [query] The query params
 * @param  {Object}     [dispatchOptions] Options for handling the request and
 *     response. See `Dispatcher.dispatch`.
 * @return {Promise}            The response for the request
 */
Resource.prototype.dispatchPost = function(path, query, dispatchOptions) {
  return Resource.unwrap(this.dispatcher.post(path, query, dispatchOptions));
};

/**
 * Dispatches a POST request to the API, where the expected response is a
 * single resource.
 * @param  {String}     path    The path of the API
 * @param  {Object}     [query] The query params
 * @param  {Object}     [dispatchOptions] Options for handling the request and
 *     response. See `Dispatcher.dispatch`.
 * @return {Promise}            The response for the request
 */
Resource.prototype.dispatchPut = function(path, query, dispatchOptions) {
  return Resource.unwrap(this.dispatcher.put(path, query, dispatchOptions));
};

/**
 * Dispatches a DELETE request to the API. The expected response is an
 * empty resource.
 * @param  {String}     path    The path of the API
 * @param  {Object}     [dispatchOptions] Options for handling the request and
 *     response. See `Dispatcher.dispatch`.
 * @return {Promise}            The response for the request
 */
Resource.prototype.dispatchDelete = function(path, dispatchOptions) {
  return Resource.unwrap(this.dispatcher.delete(path, dispatchOptions));
};

module.exports = Resource;
