var util = require('util');
var Tasks = require('./gen/tasks');
var _ = require('lodash');

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
 * Changes the parent of a task. Each task may only be a subtask of a single
 * parent, or no parent task at all. Returns an empty data block.
 * @param {String} task The task to change the parent of.
 * @param {String} parent The new parent of the task, or `null` for no parent.
 * @param {Object} [data] Data for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.setParent = function(
    task,
    parent,
    data
    ) {
  var path = util.format('/tasks/%s/setParent', task);

  data = _.extend({}, data || {}, {
    parent: parent !== null ? String(parent) : null
  });
  return this.dispatchPost(path, data);
};

/**
 * This is for compatibility reasons. Please use searchInWorkspace.
 */
Tasks.prototype.search = Tasks.prototype.searchInWorkspace;

module.exports = Tasks;
