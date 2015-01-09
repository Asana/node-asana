var BufferedReadable = require('./buffered_readable');
var util = require('util');
var paging = require('./paging');

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
  var me = this;
  if (!me.promise) {
    // No more resources to get.
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
    if (!response.data || response.data.length === undefined) {
      // We got a successful response back but it did not appear to contain
      // an array of items. So maybe we did not fetch a collection.
      throw new Error("Did not recognize response for collection request");
    }
    response.data.forEach(function(resource) {
      me._bufferedPush(resource);
    });
    // Update promise to represent the next set of resources.
    me.promise = paging.nextPage(me.dispatcher, response, me.dispatchOptions);
    me._fetching = false;
  }).catch(function(error) {
    // Failure - emit error.
    me.emit('error', error);
  });
};

module.exports = ResourceStream;