var ProjectMemberships = require('./gen/project_memberships');
/* jshint ignore:start */
var util = require('util');

/**
 * Returns the compact project membership records for the project.
 * @param {String} project The project for which to fetch memberships.
 * @param {Object} [params] Parameters for the request
 * @param {String} [params.user] If present, the user to filter the memberships to.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
ProjectMemberships.prototype.findByProject = function(
    project,
    params,
    dispatchOptions
) {
    var path = util.format('/projects/%s/project_memberships', project);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the project membership record.
 * @param {String} projectMembership Globally unique identifier for the project membership.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
ProjectMemberships.prototype.findById = function(
    projectMembership,
    params,
    dispatchOptions
) {
    var path = util.format('/project_memberships/%s', projectMembership);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * This is for compatibility reasons. Please use findByProject.
 */
ProjectMemberships.prototype.getMany =
    ProjectMemberships.prototype.findByProject;
/**
 * This is for compatibility reasons. Please use findById.
 */
ProjectMemberships.prototype.getSingle = ProjectMemberships.prototype.findById;

/* jshint ignore:end */
module.exports = ProjectMemberships;
