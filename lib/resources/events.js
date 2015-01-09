var EventStream = require('../util/event_stream');

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
  var params = {
    resource: resourceId
  };
  if (syncToken) {
    params.sync = syncToken;
  }
  return this.dispatcher.get('/events', params, {
    fullPayload: true
  });
};


/**
 * Begins polling the /events endpoint of the API to listent to changes
 * to a resource.
 * @param  {Number} resourceId  The id of the resource to get events for
 * @param  {Object} [options]   Additional options to pass the stream.
 *     {Number} periodSeconds
 * @return {EventStream}      An EventEmitter that emits notifications
 *                              about changes.
 */
Events.prototype.stream = function(resourceId, options) {
  return new EventStream(this, resourceId, options);
};

Events.EventStream = EventStream;
module.exports = Events;