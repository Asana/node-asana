var ProjectMemberships = require('./gen/project_memberships');

/**
 * This is for compatibility reasons. Please use findByProject.
 */
ProjectMemberships.prototype.getMany =
    ProjectMemberships.prototype.findByProject;
/**
 * This is for compatibility reasons. Please use findById.
 */
ProjectMemberships.prototype.getSingle = ProjectMemberships.prototype.findById;

module.exports = ProjectMemberships;
