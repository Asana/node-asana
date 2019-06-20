var ProjectStatuses = require('./gen/project_statuses');

// Adding this for compatibility reasons. Please use createInProject
ProjectStatuses.prototype.create = ProjectStatuses.prototype.createInProject;

module.exports = ProjectStatuses;
