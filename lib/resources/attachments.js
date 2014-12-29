var util = require('util');

/**
 * Constructs a resource accessor for Attachments that will use the dispatcher
 * for all requests to the API
 * @class
 * @classdesc A wrapper for the Attachments resource
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Attachments(dispatcher) {
  /**
   * An instance of the dispatcher. This is usually passed from the client.
   * @type {Dispatcher}
   */
  this.dispatcher = dispatcher;
}

/**
 * Dispatches a GET request to /attachments/:attachmentId of the API to get
 * information about the attachment.
 * @param  {Number} attachmentId      The attachment id
 * @param  {Object} [params]          Extra params for the dispatcher
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}                  The result of the API call
 */
Attachments.prototype.findById = function(attachmentId, params, dispatchOptions) {
  var path = util.format('/attachments/%d', attachmentId);
  return this.dispatcher.get(path, params, dispatchOptions);
};

/**
 * Dispatches a GET request to /tasks/:taskId/attachments of the API to get all
 * attachments associated with the task.
 * @param  {Number} taskId       The task id
 * @param  {Object} [params]     Extra params for the dispatcher
 * @return {Promise}             The result of the API call
 */
Attachments.prototype.findByTask = function(taskId, params, dispatchOptions) {
  var path = util.format('/tasks/%d/attachments', taskId);
  return this.dispatcher.get(path, params, dispatchOptions);
};

module.exports = Attachments;