var util = require('util');

/**
 * Access to the Workspaces resource
 * @class
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

/**
 * Dispatches a GET request to /workspaces/:workspaceId/typeahead to run a
 * typeahead search in the specified workspace
 * @type {Number} workspaceId The workspace id
 * @type {Object} data        The data to be sent to the workspace
 */
Workspaces.prototype.typeahead = function(workspaceId, data) {
  var path = util.format('/workspaces/%d/typeahead', workspaceId);
  return this.dispatcher.get(path, data);
};

module.exports = Workspaces;