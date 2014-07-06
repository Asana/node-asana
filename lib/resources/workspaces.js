var util = require('util');

/**
 * Access to the Workspaces resource
 * @constructor
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Workspaces(dispatcher) {
  this.dispatcher = dispatcher;
}

/**
 * Show all available workspaces
 * @param  {Object} [params] Extra params for the dispatcher
 * @return {Promise}         The result of the API call
 */
Workspaces.prototype.findAll = function(params) {
  return this.dispatcher.get('/workspaces', params);
};

/**
 * Update a workspace
 * @param  {Number} workspaceId The workspace id
 * @param  {Object} data        The data to be sent to the workspace
 * @return {Promise}            The result of the API call
 */
Workspaces.prototype.update = function(workspaceId, data) {
  var path = util.format('/workspaces/%d', workspaceId);
  return this.dispatcher.put(path, data);
};

module.exports = Workspaces;