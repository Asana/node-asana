var ProjectStatuses = require('./gen/project_statuses');

/**
 * This is for compatibility reasons. Please use createInProject.
 */
ProjectStatuses.prototype.create = ProjectStatuses.prototype.createInProject;

module.exports = ProjectStatuses;
