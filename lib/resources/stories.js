var util = require('util');

/**
 * Access to the Stories resource
 * @param {[type]} dispatcher [description]
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
 * @param  {Number} taskId       The task id
 * @param  {Object} [params]     Extra params for the dispatcher
 * @return {Promise}             The result of the API call
 */
Stories.prototype.findByTask = function(taskId, params) {
  var path = util.format('/tasks/%d/stories', taskId);
  return this.dispatcher.get(path, params);
};

module.exports = Stories;