var EventStream = require('../util/event_stream');
var Events = require('./gen/events');

/**
 * Dispatches a GET request to /events of the API to get a set of recent
 * changes to a resource.
 * @param  {Number} resourceId  The id of the resource to get events for
 * @param  {String} [syncToken] Token from a previous sync, if any
 * @param  {Object} [params] Parameters for the request
 * @return {Promise}            The result of the API call:
 *     {String} sync     The new sync token to use for the next request
 *     {Object[]} [data] The changes on the resource since the last sync,
 *                       may not exist if sync token is new.
 */
Events.prototype.get = function(resourceId, syncToken, params) {
  var requestParams = params || {};
  requestParams.resource = resourceId;
  if (syncToken) {
    requestParams.sync = syncToken;
  }
  return this.dispatcher.get('/events', requestParams);
};

/**
 * Begins polling the /events endpoint of the API to listen to changes
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
