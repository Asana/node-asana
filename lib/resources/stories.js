var util = require('util');

/**
 * Access to the Stories resource
 * @class
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Stories(dispatcher) {
  this.dispatcher = dispatcher;
}

/**
 * Returns the story
 * @param  {Number} storyId           The story id
 * @param  {Object} [params]          Extra params for the dispatcher
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}                  The result of the API call
 */
Stories.prototype.findById = function(storyId, params, dispatchOptions) {
  var path = util.format('/stories/%d', storyId);
  return this.dispatcher.get(path, params, dispatchOptions);
};

/**
 * Returns the stories on a task
 * @param  {Number} taskId              The task id
 * @param  {Object} [params]            Extra params for the dispatcher
 * @param  {Object} [dispatchOptions]   The options to run the dispatcher with
 * @return {Promise}                    The result of the API call
 */
Stories.prototype.findByTask = function(taskId, params, dispatchOptions) {
  var path = util.format('/tasks/%d/stories', taskId);
  return this.dispatcher.get(path, params, dispatchOptions);
};

/**
 * Creates a story on the task
 * @param  {Number} taskId            The task id
 * @param  {Object} data              The data for the story
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}                  The result of the API call
 */
Stories.prototype.createOnTask = function(taskId, data, dispatchOptions) {
  var path = util.format('/tasks/%d/stories', taskId);
  return this.dispatcher.post(path, data, dispatchOptions);
};

module.exports = Stories;