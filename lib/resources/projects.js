var Projects = require('./gen/projects');
/* jshint ignore:start */
var util = require('util');

/**
 * Creates a new project in a workspace or team.
 *
 * Every project is required to be created in a specific workspace or
 * organization, and this cannot be changed once set. Note that you can use
 * the `workspace` parameter regardless of whether or not it is an
 * organization.
 *
 * If the workspace for your project _is_ an organization, you must also
 * supply a `team` to share the project with.
 *
 * Returns the full record of the newly created project.
 * @param {Object} data Data for the request
 * @param {String} data.workspace The workspace or organization to create the project in.
 * @param {String} [data.team] If creating in an organization, the specific team to create the
 * project in.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.create = function(
    data,
    dispatchOptions
) {
    var path = util.format('/projects');

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * If the workspace for your project _is_ an organization, you must also
 * supply a `team` to share the project with.
 *
 * Returns the full record of the newly created project.
 * @param {String} workspace The workspace or organization to create the project in.
 * @param {Object} data Data for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.createInWorkspace = function(
    workspace,
    data,
    dispatchOptions
) {
    var path = util.format('/workspaces/%s/projects', workspace);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Creates a project shared with the given team.
 *
 * Returns the full record of the newly created project.
 * @param {String} team The team to create the project in.
 * @param {Object} data Data for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.createInTeam = function(
    team,
    data,
    dispatchOptions
) {
    var path = util.format('/teams/%s/projects', team);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Returns the complete project record for a single project.
 * @param {String} project The project to get.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Projects.prototype.findById = function(
    project,
    params,
    dispatchOptions
) {
    var path = util.format('/projects/%s', project);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * A specific, existing project can be updated by making a PUT request on the
 * URL for that project. Only the fields provided in the `data` block will be
 * updated; any unspecified fields will remain unchanged.
 *
 * When using this method, it is best to specify only those fields you wish
 * to change, or else you may overwrite changes made by another user since
 * you last retrieved the task.
 *
 * Returns the complete updated project record.
 * @param {String} project The project to update.
 * @param {Object} data Data for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.update = function(
    project,
    data,
    dispatchOptions
) {
    var path = util.format('/projects/%s', project);

    return this.dispatchPut(path, data, dispatchOptions);
};

/**
 * A specific, existing project can be deleted by making a DELETE request
 * on the URL for that project.
 *
 * Returns an empty data record.
 * @param {String} project The project to delete.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.delete = function(
    project,
    dispatchOptions
) {
    var path = util.format('/projects/%s', project);

    return this.dispatchDelete(path, dispatchOptions);
};

/**
 * Creates and returns a job that will asynchronously handle the duplication.
 * @param {String} project The project to duplicate.
 * @param {Object} data Data for the request
 * @param {String} data.name The name of the new project.
 * @param {String} [data.team] Sets the team of the new project. If team is not defined, the new project
 * will be in the same team as the the original project.
 * @param {Array} [data.include] The elements that will be duplicated to the new project.
 * Tasks are always included.
 * @param {String} [data.schedule_dates] A dictionary of options to auto-shift dates.
 * `task_dates` must be included to use this option.
 * Requires either `start_on` or `due_on`, but not both.
 * `start_on` will set the first start date of the new
 * project to the given date, while `due_on` will set the last due date
 * to the given date. Both will offset the remaining dates by the same amount
 * of the original project.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.duplicateProject = function(
    project,
    data,
    dispatchOptions
) {
    var path = util.format('/projects/%s/duplicate', project);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Returns the compact project records for some filtered set of projects.
 * Use one or more of the parameters provided to filter the projects returned.
 * @param {Object} [params] Parameters for the request
 * @param {String} [params.workspace] The workspace or organization to filter projects on.
 * @param {String} [params.team] The team to filter projects on.
 * @param {Boolean} [params.is_template] **Note: This parameter can only be included if a team is also defined, or the workspace is not an organization**
 * Filters results to include only template projects.
 * @param {Boolean} [params.archived] Only return projects whose `archived` field takes on the value of
 * this parameter.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.findAll = function(
    params,
    dispatchOptions
) {
    var path = util.format('/projects');

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the compact project records for all projects in the workspace.
 * @param {String} workspace The workspace or organization to find projects in.
 * @param {Object} [params] Parameters for the request
 * @param {Boolean} [params.is_template] **Note: This parameter can only be included if a team is also defined, or the workspace is not an organization**
 * Filters results to include only template projects.
 * @param {Boolean} [params.archived] Only return projects whose `archived` field takes on the value of
 * this parameter.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.findByWorkspace = function(
    workspace,
    params,
    dispatchOptions
) {
    var path = util.format('/workspaces/%s/projects', workspace);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the compact project records for all projects in the team.
 * @param {String} team The team to find projects in.
 * @param {Object} [params] Parameters for the request
 * @param {Boolean} [params.is_template] Filters results to include only template projects.
 * @param {Boolean} [params.archived] Only return projects whose `archived` field takes on the value of
 * this parameter.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.findByTeam = function(
    team,
    params,
    dispatchOptions
) {
    var path = util.format('/teams/%s/projects', team);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the compact task records for all tasks within the given project,
 * ordered by their priority within the project. Tasks can exist in more than one project at a time.
 * @param {String} project The project in which to search for tasks.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.tasks = function(
    project,
    params,
    dispatchOptions
) {
    var path = util.format('/projects/%s/tasks', project);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Adds the specified list of users as followers to the project. Followers are a subset of members, therefore if
 * the users are not already members of the project they will also become members as a result of this operation.
 * Returns the updated project record.
 * @param {String} project The project to add followers to.
 * @param {Object} data Data for the request
 * @param {Array} data.followers An array of followers to add to the project.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.addFollowers = function(
    project,
    data,
    dispatchOptions
) {
    var path = util.format('/projects/%s/addFollowers', project);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Removes the specified list of users from following the project, this will not affect project membership status.
 * Returns the updated project record.
 * @param {String} project The project to remove followers from.
 * @param {Object} data Data for the request
 * @param {Array} data.followers An array of followers to remove from the project.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.removeFollowers = function(
    project,
    data,
    dispatchOptions
) {
    var path = util.format('/projects/%s/removeFollowers', project);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Adds the specified list of users as members of the project. Returns the updated project record.
 * @param {String} project The project to add members to.
 * @param {Object} data Data for the request
 * @param {Array} data.members An array of user ids.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.addMembers = function(
    project,
    data,
    dispatchOptions
) {
    var path = util.format('/projects/%s/addMembers', project);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Removes the specified list of members from the project. Returns the updated project record.
 * @param {String} project The project to remove members from.
 * @param {Object} data Data for the request
 * @param {Array} data.members An array of user ids.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.removeMembers = function(
    project,
    data,
    dispatchOptions
) {
    var path = util.format('/projects/%s/removeMembers', project);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Create a new custom field setting on the project.
 * @param {String} project The project to associate the custom field with
 * @param {Object} data Data for the request
 * @param {String} data.custom_field The id of the custom field to associate with this project.
 * @param {Boolean} [data.is_important] Whether this field should be considered important to this project.
 * @param {String} [data.insert_before] An id of a Custom Field Settings on this project, before which the new Custom Field Settings will be added.
 * `insert_before` and `insert_after` parameters cannot both be specified.
 * @param {String} [data.insert_after] An id of a Custom Field Settings on this project, after which the new Custom Field Settings will be added.
 * `insert_before` and `insert_after` parameters cannot both be specified.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.addCustomFieldSetting = function(
    project,
    data,
    dispatchOptions
) {
    var path = util.format('/projects/%s/addCustomFieldSetting', project);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Remove a custom field setting on the project.
 * @param {String} project The project to associate the custom field with
 * @param {Object} data Data for the request
 * @param {String} [data.custom_field] The id of the custom field to remove from this project.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Projects.prototype.removeCustomFieldSetting = function(
    project,
    data,
    dispatchOptions
) {
    var path = util.format('/projects/%s/removeCustomFieldSetting', project);

    return this.dispatchPost(path, data, dispatchOptions);
};

/* jshint ignore:end */
module.exports = Projects;
