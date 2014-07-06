var util = require('util');

/**
 * Access to the Stories resource
 * @constructor
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Stories(dispatcher) {
  this.dispatcher = dispatcher;
}

/**
 * Returns the story
 * @param  {Number} storyId  The story id
 * @param  {Object} [params] Extra params for the dispatcher
 * @return {Promise}         The result of the API call
 */
Stories.prototype.findById = function(storyId, params) {
  var path = util.format('/stories/%d', storyId);
  return this.dispatcher.get(path, params);
};

/**
 * Returns the stories on a task
 * @param  {Number} taskId   The task id
 * @param  {Object} [params] Extra params for the dispatcher
 * @return {Promise}         The result of the API call
 */
Stories.prototype.findByTask = function(taskId, params) {
  var path = util.format('/tasks/%d/stories', taskId);
  return this.dispatcher.get(path, params);
};

/**
 * Creates a story on the task
 * @param  {Number} taskId The task id
 * @param  {Object} data   The data for the story
 * @return {Promise}       The result of the API call
 */
Stories.prototype.createOnTask = function(taskId, data) {
  var path = util.format('/tasks/%d/stories', taskId);
  return this.dispatcher.post(path, data);
};

module.exports = Stories;