var EventEmitter = require('events').EventEmitter;
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


function EventStream(events, resourceId, options) {
  this.resourceId = resourceId;
  this.events = events;
  this.syncToken = null;
  this.started = false;
  this.options = options || {};
  this.options.periodSeconds = this.options.periodSeconds || 5;
}

util.inherits(EventStream, EventEmitter);

EventStream.prototype.start = function() {
  if (!this.started) {
    this.started = true;
    this._poll();
  }
};

EventStream.prototype.stop = function() {
  this.started = false;
};

EventStream.prototype._poll = function() {
  var me = this;

  function schedule() {
    Promise.delay(me.options.periodSeconds * 1000).then(function() {
      me._poll();
    })
  }

  me.events.get(me.resourceId, me.syncToken).then(function(response) {
    me.syncToken = response.sync_token;
    if (response.data) {
      data.forEach(function(event) {
        me.emit('event', event);
      });
    }
    schedule();
  }).catch(function(error) {
    if (me.options.continueOnError) {
      schedule();
    } else {
      me.started = false;
    }
    me.emit('error', error);
  });
};


module.exports = Events;