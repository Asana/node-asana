var Jobs = require('./gen/jobs');
/* jshint ignore:start */
var util = require('util');

/**
 * Returns the complete job record for a single job.
 * @param {String} job The job to get.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Jobs.prototype.findById = function(
    job,
    params,
    dispatchOptions
) {
    var path = util.format('/jobs/%s', job);

    return this.dispatchGet(path, params, dispatchOptions);
};

/* jshint ignore:end */
module.exports = Jobs;
