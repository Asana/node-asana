var Resource = require('./resource');
var Tasks = require('asana-gen').Tasks(Resource);

/**
 * Returns the task named by the given external ID
 * @param  {String}  externalId   The task id
 * @param  {Object} [params] Extra params for the dispatcher
 * @return {Promise}         The result of the API call
 */
Tasks.prototype.findByExternalId = function(externalId, params) {
  var path = util.format(
      '/tasks/%s', encodeURIComponent('external:' + externalId));
  return this.dispatchGet(path, params);
};

/**
 * Sets the parent for a task
 * @param {Number} taskId   The task id
 * @param {Number} parentId The id of the parent task
 * @return {Promise}        The result of the API call
 */
Tasks.prototype.setParent = function(taskId, parentId) {
  var path = util.format('/tasks/%d/setParent', taskId);
  return this.dispatchPost(path, {
    parent: Number(parentId)
  });
};

module.exports = Tasks;
