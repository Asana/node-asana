var ProjectStatuses = require('./gen/project_statuses');
/* jshint ignore:start */
var util = require('util');

/**
 * Creates a new status update on the project.
 *
 * Returns the full record of the newly created project status update.
 * @param {String} project The project on which to create a status update.
 * @param {Object} data Data for the request
 * @param {String} data.text The text of the project status update.
 * @param {String} data.color The color to associate with the status update. Must be one of `"red"`, `"yellow"`, or `"green"`.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
ProjectStatuses.prototype.createInProject = function(
    project,
    data,
    dispatchOptions
) {
    var path = util.format('/projects/%s/project_statuses', project);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Returns the compact project status update records for all updates on the project.
 * @param {String} project The project to find status updates for.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
ProjectStatuses.prototype.findByProject = function(
    project,
    params,
    dispatchOptions
) {
    var path = util.format('/projects/%s/project_statuses', project);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the complete record for a single status update.
 * @param {String} project-status The project status update to get.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
ProjectStatuses.prototype.findById = function(
    projectStatus,
    params,
    dispatchOptions
) {
    var path = util.format('/project_statuses/%s', projectStatus);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Deletes a specific, existing project status update.
 *
 * Returns an empty data record.
 * @param {String} project-status The project status update to delete.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
ProjectStatuses.prototype.delete = function(
    projectStatus,
    dispatchOptions
) {
    var path = util.format('/project_statuses/%s', projectStatus);

    return this.dispatchDelete(path, dispatchOptions);
};

/**
 * This is for compatibility reasons. Please use createInProject.
 */
ProjectStatuses.prototype.create = ProjectStatuses.prototype.createInProject;

/* jshint ignore:end */
module.exports = ProjectStatuses;
