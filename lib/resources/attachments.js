var util = require('util');

/**
 * Access to the Attachments resource
 * @class
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Attachments(dispatcher) {
  this.dispatcher = dispatcher;
}

/**
 * Returns the attachment
 * @param  {Number} attachmentId The attachment id
 * @param  {Object} [params]     Extra params for the dispatcher
 * @return {Promise}             The result of the API call
 */
Attachments.prototype.findById = function(attachmentId, params) {
  var path = util.format('/attachments/%d', attachmentId);
  return this.dispatcher.get(path, params);
};

/**
 * Returns the attachments on a task
 * @param  {Number} taskId       The task id
 * @param  {Object} [params]     Extra params for the dispatcher
 * @return {Promise}             The result of the API call
 */
Attachments.prototype.findByTask = function(taskId, params) {
  var path = util.format('/tasks/%d/attachments', taskId);
  return this.dispatcher.get(path, params);
};

module.exports = Attachments;