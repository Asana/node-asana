var Attachments = require('./gen/attachments');
/* jshint ignore:start */
var util = require('util');

/**
 * Returns the full record for a single attachment.
 * @param {String} attachment Globally unique identifier for the attachment.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher
 * for the request
 * @return {Promise} The requested resource
 */
Attachments.prototype.findById = function(
    attachment,
    params,
    dispatchOptions
) {
    var path = util.format('/attachments/%s', attachment);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Returns the compact records for all attachments on the task.
 * @param {String} task Globally unique identifier for the task.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher
 * for the request
 * @return {Promise} The response from the API
 */
Attachments.prototype.findByTask = function(
    task,
    params,
    dispatchOptions
) {
    var path = util.format('/tasks/%s/attachments', task);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};


/* jshint ignore:end */
module.exports = Attachments;
