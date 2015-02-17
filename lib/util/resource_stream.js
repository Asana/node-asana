var BufferedReadable = require('./buffered_readable');
var util = require('util');
var paging = require('./paging');

/**
 * A ResourceStream is a Node stream implementation for objects that are
 * fetched from the API. Basically, any promise for a collection of resources
 * from the API can be wrapped in this stream, and the stream will fetch
 * new pages of items as needed.
 *
 * @param {Dispatcher} dispatcher  Dispatcher to use for requests.
 * @param {Promise} promise        Promise for initial collection request.
 * @param {Object} dispatchOptions Dispatcher options to use for requests.
 * @constructor
 */

function ResourceStream(dispatcher, promise, dispatchOptions) {
  BufferedReadable.call(this, {
    objectMode: true
  });
  this.dispatcher = dispatcher;
  this.dispatchOptions = dispatchOptions;
  this.promise = promise;
  this._fetching = false;
}

util.inherits(ResourceStream, BufferedReadable);

ResourceStream.prototype._readUnbuffered = function() {
  /* jshint camelcase:false */
  var me = this;
  if (!me.promise) {
    // No more resources to get.
    this.push(null);
    return;
  }

  // Avoid fetching more than the next page, in case a _read comes in
  // while we are still waiting for results.
  if (me._fetching) {
    return;
  }
  me._fetching = true;

  // When response comes back, we will push to stream.
  me.promise.then(function(response) {
    if (!response.data || response.data.length === undefined ||
        response.next_page === undefined) {
      // We got a successful response back but it did not appear to contain
      // an array of items. So maybe we did not fetch a collection.
      throw new Error('Response did not contain next page information');
    }
    response.data.forEach(function(resource) {
      me.pushBuffered(resource);
    });
    // Update promise to represent the next set of resources.
    me.promise = paging.nextPage(response, me.dispatcher, me.dispatchOptions);
    me._fetching = false;
  }).catch(function(error) {
    // Failure - emit error.
    me.emit('error', error);
  });
};

module.exports = ResourceStream;