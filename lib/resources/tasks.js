var util = require('util');

/**
 * Access to the Tasks resource
 * @constructor
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Tasks(dispatcher) {
  this.dispatcher = dispatcher;
}

/**
 * Creates a new task
 * @param  {Object} data The data for the task
 * @return {Promise}     The result of the API call
 */
Tasks.prototype.create = function(data) {
  return this.dispatcher.post('/tasks', data);
};

/**
 * Creates a new task in the workspace
 * @param  {Number} workspaceId The workspace id
 * @param  {Object} data        The data for the task
 * @return {Promise}            The result of the API call
 */
Tasks.prototype.createInWorkspace = function(workspaceId, data) {
  var path = util.format('/workspaces/%d/tasks', workspaceId);
  return this.dispatcher.post(path, data);
};

/**
 * Returns the task
 * @param  {Number} taskId   The task id
 * @param  {Object} [params] Extra params for the dispatcher
 * @return {Promise}         The result of the API call
 */
Tasks.prototype.findById = function(taskId, params) {
  var path = util.format('/tasks/%d', taskId);
  return this.dispatcher.get(path, params);
};

/**
 * Returns all tasks that the dispatcher has access to
 * @param  {Object} [params] Extra params for the dispatcher
 * @return {Promise}         The result of the API call
 */
Tasks.prototype.findAll = function(params) {
  return this.dispatcher.get('/tasks', params);
};

/**
 * Finds a task by workspace
 * @param  {Number} workspaceId The workspace id
 * @param  {Object} [params]    Extra params for the dispatcher
 * @return {Promise}            The result of the API call
 */
Tasks.prototype.findByWorkspace = function(workspaceId, params) {
  var path = util.format('/workspaces/%d/tasks', workspaceId); 
  return this.dispatcher.get(path, params);
};

/**
 * Update a task
 * @param  {Number} taskId    The task id
 * @param  {Object} data      The data to be sent to the workspace
 * @return {Promise}          The result of the API call
 */
Tasks.prototype.update = function(taskId, data) {
  var path = util.format('/tasks/%d', taskId);
  return this.dispatcher.put(path, data);
};

/**
 * Deletes a task
 * @param  {Number} taskId The task id
 * @return {Promise}       The result of the API call
 */
Tasks.prototype.delete = function(taskId) {
  var path = util.format('/tasks/%d', taskId);
  return this.dispatcher.delete(path);
};

module.exports = Tasks;