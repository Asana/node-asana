var util = require('util');

/**
 * Access to the Tasks resource
 * @class
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Tasks(dispatcher) {
  this.dispatcher = dispatcher;
}

/**
 * Creates a new task
 * @param  {Object} data The data for the task
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}     The result of the API call
 */
Tasks.prototype.create = function(data, dispatchOptions) {
  return this.dispatcher.post('/tasks', data, dispatchOptions);
};

/**
 * Creates a new task in the workspace
 * @param  {Number} workspaceId The workspace id
 * @param  {Object} data        The data for the task
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}            The result of the API call
 */
Tasks.prototype.createInWorkspace = function(workspaceId, data, dispatchOptions) {
  var path = util.format('/workspaces/%d/tasks', workspaceId);
  return this.dispatcher.post(path, data, dispatchOptions);
};

/**
 * Returns the task
 * @param  {Number} taskId   The task id
 * @param  {Object} [params] Extra params for the dispatcher
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}         The result of the API call
 */
Tasks.prototype.findById = function(taskId, params, dispatchOptions) {
  var path = util.format('/tasks/%d', taskId);
  return this.dispatcher.get(path, params, dispatchOptions);
};

/**
 * Returns all tasks that the dispatcher has access to
 * @param  {Object} [params] Extra params for the dispatcher
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}         The result of the API call
 */
Tasks.prototype.findAll = function(params, dispatchOptions) {
  return this.dispatcher.get('/tasks', params, dispatchOptions);
};

/**
 * Finds a task by project
 * @param  {Number} projectId The project id
 * @param  {Object} [params]  Extra params for the dispatcher
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}          The result of the API call
 */
Tasks.prototype.findByProject = function(projectId, params, dispatchOptions) {
  var path = util.format('/projects/%d/tasks', projectId);
  return this.dispatcher.get(path, params, dispatchOptions);
};

/**
 * Finds a task by tag
 * @param  {Number} tagId    The tag id
 * @param  {Object} [params] Extra params for the dispatcher
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}         The result of the API call
 */
Tasks.prototype.findByTag = function(tagId, params, dispatchOptions) {
  var path = util.format('/tags/%d/tasks', tagId);
  return this.dispatcher.get(path, params, dispatchOptions);
};

/**
 * Dispatches a POST request to /tasks/:taskId/removeFollowers with to remove
 * followers from the task.
 * @param {Number} taskId The task id
 * @param {Object} data   The data containing the list of followers
};

/**
 * Update a task
 * @param  {Number} taskId    The task id
 * @param  {Object} data      The data to be sent to the workspace
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}          The result of the API call
 */
Tasks.prototype.update = function(taskId, data, dispatchOptions) {
  var path = util.format('/tasks/%d', taskId);
  return this.dispatcher.put(path, data, dispatchOptions);
};

/**
 * Deletes a task
 * @param  {Number} taskId The task id
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}       The result of the API call
 */
Tasks.prototype.delete = function(taskId, dispatchOptions) {
  var path = util.format('/tasks/%d', taskId);
  return this.dispatcher.delete(path, dispatchOptions);
};

/**
 * Dispatches a POST request to /tasks/:taskId/addFollowers with to add
 * followers to the task.
 * @param {Number} taskId The task id
 * @param {Object} data   The data containing the list of followers
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 */
Tasks.prototype.addFollowers = function(taskId, data, dispatchOptions) {
  var path = util.format('/tasks/%d/addFollowers', taskId);
  return this.dispatcher.post(path, data, dispatchOptions);
};

/**
 * Dispatches a POST request to /tasks/:taskId/removeFollowers with to remove
 * followers from the task.
 * @param {Number} taskId The task id
 * @param {Object} data   The data containing the list of followers
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 */
Tasks.prototype.removeFollowers = function(taskId, data, dispatchOptions) {
  var path = util.format('/tasks/%d/removeFollowers', taskId);
  return this.dispatcher.post(path, data, dispatchOptions);
};

/**
 * Dispatches a GET request to /tasks/:taskId/projects
 * @param {Number} taskId The task id
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}      The result of the API call
 */
Tasks.prototype.projects = function(taskId, dispatchOptions) {
  var path = util.format('/tasks/%d/projects', taskId);
  return this.dispatcher.get(path, undefined, dispatchOptions);
};

/**
 * Dispatches a POST request to /tasks/:taskId/addProject with the project to
 * add to to the task.
 * @param {Number} taskId The task id
 * @param {Number} data   The data containing the projectId
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}      The result of the API call
 */
Tasks.prototype.addProject = function(taskId, data, dispatchOptions) {
  var path = util.format('/tasks/%d/addProject', taskId);
  return this.dispatcher.post(path, data, dispatchOptions);
};

/**
 * Dispatches a POST request to /tasks/:taskId/removeProject with the project to
 * remove from the task
 * @param {Number} taskId The task id
 * @param {Object} data   The data containing the projectId
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}      The result of the API call
 */
Tasks.prototype.removeProject = function(taskId, data, dispatchOptions) {
  var path = util.format('/tasks/%d/removeProject', taskId);
  return this.dispatcher.post(path, data, dispatchOptions);
};

/**
 * Get tags associated with a task
 * @param {Number} taskId The task id
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}      The result of the API call
 */
Tasks.prototype.tags = function(taskId, dispatchOptions) {
  var path = util.format('/tasks/%d/tags', taskId);
  return this.dispatcher.get(path, undefined, dispatchOptions);
};

/**
 * Add a tag to a task
 * @param {Number} taskId The task id
 * @param {Number} data   The data containing the tagId
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}      The result of the API call
 */
Tasks.prototype.addTag = function(taskId, data, dispatchOptions) {
  var path = util.format('/tasks/%d/addTag', taskId);
  return this.dispatcher.post(path, data, dispatchOptions);
};

/**
 * Dispatches a POST request to /tasks/:taskId/removeTag with the tag to
 * remove from the task
 * @param {Number} taskId The task id
 * @param {Object} data   The data containing the tagId
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}      The result of the API call
 */
Tasks.prototype.removeTag = function(taskId, data, dispatchOptions) {
  var path = util.format('/tasks/%d/removeTag', taskId);
  return this.dispatcher.post(path, data, dispatchOptions);
};

/**
 * Gets all subtasks for a task
 * @param {Number} taskId The task id
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}      The result of the API call
 */
Tasks.prototype.subtasks = function(taskId, dispatchOptions) {
  var path = util.format('/tasks/%d/subtasks', taskId);
  return this.dispatcher.get(path, undefined, dispatchOptions);
};

/**
 * Creates a new subtask
 * @param {Number} taskId The task id
 * @param {Object} data   The data for the subtask
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}      The result of the API call
 */
Tasks.prototype.addSubtask = function(taskId, data, dispatchOptions) {
  var path = util.format('/tasks/%d/subtasks', taskId);
  return this.dispatcher.post(path, data, dispatchOptions);
};

/**
 * Sets the parent for a task
 * @param {Number} taskId   The task id
 * @param {Number} parentId The id of the parent task
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}        The result of the API call
 */
Tasks.prototype.setParent = function(taskId, parentId, dispatchOptions) {
  var path = util.format('/tasks/%d/setParent', taskId);
  return this.dispatcher.post(path, {
    parent: Number(parentId)
  }, dispatchOptions);
};

module.exports = Tasks;
