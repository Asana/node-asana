var ProjectMemberships = require('./gen/project_memberships');

// Adding this for compatibility reasons. Please use findByProject
ProjectMemberships.prototype.getMany = ProjectMemberships.prototype.findByProject;
// Adding this for compatibility reasons. Please use findById
ProjectMemberships.prototype.getSingle = ProjectMemberships.prototype.findById;

module.exports = ProjectMemberships;
