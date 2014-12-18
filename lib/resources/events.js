var Readable = require('stream').Readable;
var util = require('util');
var Promise = require('bluebird');

/**
 * Constructs an accessor for Events that will use the dispatcher
 * for all requests to the API
 * @class
 * @classdesc A wrapper for Events resource
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Events(dispatcher) {
  /**
   * An instance of the dispatcher. This is usually passed from the client.
   * @type {Dispatcher}
   */
  this.dispatcher = dispatcher;
}

/**
 * Dispatches a GET request to /events of the API to get a set of recent
 * changes to a resource.
 * @param  {Number} resourceId  The id of the resource to get events for
 * @param  {String} [syncToken] Token from a previous sync, if any
 * @return {Promise}            The result of the API call:
 *     {String} sync     The new sync token to use for the next request
 *     {Object[]} [data] The changes on the resource since the last sync,
 *                       may not exist if sync token is new.
 */
Events.prototype.get = function(resourceId, syncToken) {
  var params = { resource: resourceId };
  if (syncToken) {
    params.sync = syncToken;
  }
  return this.dispatcher.get('/events', params, { fullPayload: true});
};


/**
 * Begins polling the /events endpoint of the API to listent to changes
 * to a resource.
 * @param  {Number} resourceId  The id of the resource to get events for
 * @param  {Object} [options]   Additional options to pass the stream.
 *     {Number} periodSeconds
 *     {Boolean} continueOnError
 * @return {EventStream}      An EventEmitter that emits notifications
 *                              about changes.
 */
Events.prototype.stream = function(resourceId, options) {
  return new EventStream(this, resourceId, options);
};

//xcxc test error during read, closing stream, etc.

function EventStream(events, resourceId, options) {
  Readable.call(this, { objectMode: true });
  this.resourceId = resourceId;
  this.events = events;
  this.syncToken = null;
  this.options = options || {};
  this.options.periodSeconds = this.options.periodSeconds || 5;
  this.options.now = this.options.now || function() {
    return new Date().getTime();
  };
  this._lastPollTime = 0;
  this._polling = false;
  this._bufferedEvents = [];
}

util.inherits(EventStream, Readable);

EventStream.prototype._read = function() {
  // Empty buffer of events, if we can.
  for (var i = 0; i < this._bufferedEvents.length; i++) {
    if (!this.push(this._bufferedEvents[i])) {
      this._bufferedEvents = this._bufferedEvents.slice(i);
      return;
    }
  }
  // Poll if we're not already.
  if (!this._polling) {
    this._poll();
  }
};

EventStream.prototype._poll = function() {
  var me = this;
  me._polling = true;

  function schedule() {
    var now = me.options.now();
    var delay = Math.max(
        0, me.options.periodSeconds * 1000 - (now - me._lastPollTime));
    setTimeout(function() {
      me._poll();
    }, delay);
  }

  me._lastPollTime = me.options.now();
  me.events.get(me.resourceId, me.syncToken).then(function(response) {
    me.syncToken = response.sync;
    if (response.data && response.data.length > 0) {
      var buffering = false;
      response.data.forEach(function(event) {
        if (!buffering && !me.push(event)) {
          buffering = true;
        }
        if (buffering) {
          me._bufferedEvents.push(event);
        }
      });
    }
    schedule();
  }).catch(function(error) {
    me.emit('error', error);
    if (me.options.continueOnError) {
      schedule();
    } else {
      me.push(null);
    }
  });
};


module.exports = Events;