var BufferedReadable = require('./buffered_readable');
var util = require('util');

/**
 * A ResourceStream is a Node stream implementation for objects that are
 * fetched from the API. Basically, any Collection of resources from the
 * API can be wrapped in this stream, and the stream will fetch new pages
 * of items as needed.
 *
 * @param {Collection} collection Response from initial collection request.
 * @constructor
 */

function ResourceStream(collection) {
  var me = this;
  BufferedReadable.call(me, {
    objectMode: true
  });

  // @type {Collection} The collection whose data was last pushed into the
  //     stream, such that if we have to go back for more, we should fetch
  //     its `nextPage`.
  me._collection = collection;

  // @type {boolean} True iff a request for more items is in flight.
  me._fetching = false;

  // Ensure the initial collection's data is in the stream.
  me._pushCollection();
}

util.inherits(ResourceStream, BufferedReadable);

ResourceStream.prototype._pushCollection = function() {
  var me = this;
  me._collection.data.forEach(function(resource) {
    me.pushBuffered(resource);
  });
};

ResourceStream.prototype._readUnbuffered = function() {
  /* jshint camelcase:false */
  var me = this;

  if (!me._collection) {
    // No more resources to get.
    me.pushBuffered(null);
    return;
  }

  // Avoid fetching more than the next page, in case a `_read` comes in
  // while we are still waiting for results.
  if (me._fetching) {
    return;
  }
  me._fetching = true;

  function updateStream(collection) {
    me._fetching = false;
    if (!collection) {
      // No more pages
      me.pushBuffered(null);
    } else {
      me._collection = collection;
      me._pushCollection();
    }
  }

  function handleError(error) {
    // Failure - emit error.
    me._fetching = false;
    me._collection = null;
    me.emit('error', error);
  }

  // When response comes back, we will push to stream.
  me._collection.nextPage().then(updateStream).catch(handleError);
};

module.exports = ResourceStream;