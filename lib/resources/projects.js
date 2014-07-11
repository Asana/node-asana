var util = require('util');

/**
 * Constructs a resource accessor for Projects that will use the dispatcher
 * for all requests to the API
 * @class
 * @classdesc A wrapper for the Projects resource
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Projects(dispatcher) {
  /**
   * An instance of the dispatcher. This is usually passed from the client.
   * @type {Dispatcher}
   */
  this.dispatcher = dispatcher;
}

/**
 * Dispatches a POST request to /projects of the API to create a new project.
 * @param  {Object} data The data for the project
 * @return {Promise}     The result of the API call
 */
Projects.prototype.create = function(data) {
  return this.dispatcher.post('/projects', data);
};

/**
 * Dispatches a POST request to /workspaces/:workspaceId/projects of the API to
 * create a new project within the workspace.
 * @param  {Number} workspaceId The workspace id
 * @param  {Object} data        The data for the project
 * @return {Promise}            The result of the API call
 */
Projects.prototype.createInWorkspace = function(workspaceId, data) {
  var path = util.format('/workspaces/%d/projects', workspaceId);
  return this.dispatcher.post(path, data);
};

/**
 * Dispatches a GET request to /projects/:projectId of the API to get
 * information about the project.
 * @param  {Number} projectId    The project id
 * @param  {Object} [params]     Extra params for the dispatcher
 * @return {Promise}             The result of the API call
 */
Projects.prototype.findById = function(projectId, params) {
  var path = util.format('/projects/%d', projectId);
  return this.dispatcher.get(path, params);
};

/**
 * Dispatches a GET request to /projects of the API to get information about all
 * projects that the dispatcher as access to.
 * @param  {Object} [params] Extra params for the dispatcher
 * @return {Promise}         The result of the API call
 */
Projects.prototype.findAll = function(params) {
  return this.dispatcher.get('/projects', params);
};

/**
 * Dispatches a GET request to /workspaces/:workspaceId/projects to get all the
 * projects associated with the workspace.
 * @param  {Number} workspaceId The workspace id
 * @param  {Object} [params]    Extra params for the dispatcher
 * @return {Promise}            The result of the API call
 */
Projects.prototype.findByWorkspace = function(workspaceId, params) {
  var path = util.format('/workspaces/%d/projects', workspaceId); 
  return this.dispatcher.get(path, params);
};

/**
 * Dispatches a PUT request to /projects/:projectId to update the project.
 * @param  {Number} projectId The project id
 * @param  {Object} data      The data to be sent to the workspace
 * @return {Promise}          The result of the API call
 */
Projects.prototype.update = function(projectId, data) {
  var path = util.format('/projects/%d', projectId);
  return this.dispatcher.put(path, data);
};

/**
 * Dispatches a DELETE requte to /projects/:projectId to delete the project.
 * @param  {Number} projectId The project id
 * @return {Promise}          The result of the API call
 */
Projects.prototype.delete = function(projectId) {
  var path = util.format('/projects/%d', projectId);
  return this.dispatcher.delete(path);
};

module.exports = Projects;