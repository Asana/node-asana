var BufferedReadable = require('./buffered_readable');
var util = require('util');

function EventStream(events, resourceId, options) {
  BufferedReadable.call(this, {
    objectMode: true
  });
  this.resourceId = resourceId;
  this.events = events;
  this.syncToken = null;
  this.options = options || {};
  this.options.periodSeconds = this.options.periodSeconds || 5;
  this._lastPollTime = 0;
  this._polling = false;
}

util.inherits(EventStream, BufferedReadable);

EventStream.prototype._readUnbuffered = function() {
  // Poll if we're not already.
  if (!this._polling) {
    this._schedule();
  }
};

EventStream.prototype._schedule = function() {
  var me = this;
  if (me._lastPollTime === 0) {
    // First time reading - just do it.
    me._poll();
  } else {
    // Schedule a poll for some time in the future based on when we last
    // polled.
    var now = Date.now();
    var delay = Math.max(
      0, me.options.periodSeconds * 1000 - (now - me._lastPollTime));
    setTimeout(function() {
      me._poll();
    }, delay);
  }
};

EventStream.prototype._poll = function() {
  var me = this;
  me._polling = true;

  me._lastPollTime = Date.now();
  me.events.get(me.resourceId, me.syncToken).then(function(response) {
    // Successful request (though may lack actual data)
    // Store off new sync token.
    me.syncToken = response.sync;
    var available = true;
    if (response.data && response.data.length > 0) {
      // Response contained actual events! Push them to the stream, or
      // buffer them if the stream doesn't want any more.
      response.data.forEach(function(event) {
        available = available && me.pushBuffered(event);
      });
    }
    if (available) {
      me._schedule();
    }
  }).catch(function(error) {
    // Failure - emit error. If we survive then the error was "handled"
    // and we'll continue to fetch events.
    me.emit('error', error);
    me._schedule();
  });
};

module.exports = EventStream;