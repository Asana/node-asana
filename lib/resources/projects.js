var util = require('util');

/**
 * Access to the Projects resource
 * @constructor
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Projects(dispatcher) {
  this.dispatcher = dispatcher;
}

/**
 * Creates a new project
 * @param  {Object} data The data for the project
 * @return {Promise}     The result of the API call
 */
Projects.prototype.create = function(data) {
  return this.dispatcher.post('/projects', data);
};

/**
 * Creates a new project in the workspace
 * @param  {Number} workspaceId The workspace id
 * @param  {Object} data        The data for the project
 * @return {Promise}            The result of the API call
 */
Projects.prototype.createInWorkspace = function(workspaceId, data) {
  var path = util.format('/workspaces/%d/projects', workspaceId);
  return this.dispatcher.post(path, data);
};

/**
 * Returns the project
 * @param  {Number} projectId    The project id
 * @param  {Object} [params]     Extra params for the dispatcher
 * @return {Promise}             The result of the API call
 */
Projects.prototype.findById = function(projectId, params) {
  var path = util.format('/projects/%d', projectId);
  return this.dispatcher.get(path, params);
};

/**
 * Returns all projects that the dispatcher has access to
 * @param  {Object} [params] Extra params for the dispatcher
 * @return {Promise}         The result of the API call
 */
Projects.prototype.findAll = function(params) {
  return this.dispatcher.get('/projects', params);
};

/**
 * Finds a project by workspace
 * @param  {Number} workspaceId The workspace id
 * @param  {Object} [params]    Extra params for the dispatcher
 * @return {Promise}            The result of the API call
 */
Projects.prototype.findByWorkspace = function(workspaceId, params) {
  var path = util.format('/workspaces/%d/projects', workspaceId); 
  return this.dispatcher.get(path, params);
};

/**
 * Update a project
 * @param  {Number} projectId The project id
 * @param  {Object} data  The data to be sent to the workspace
 * @return {Promise}      The result of the API call
 */
Projects.prototype.update = function(projectId, data) {
  var path = util.format('/projects/%d', projectId);
  return this.dispatcher.put(path, data);
};

module.exports = Projects;