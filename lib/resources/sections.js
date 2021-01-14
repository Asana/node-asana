var Sections = require('./gen/sections');
/* jshint ignore:start */
var util = require('util');

/**
 * Creates a new section in a project.
 *
 * Returns the full record of the newly created section.
 * @param {String} project The project to create the section in
 * @param {Object} data Data for the request
 * @param {String} data.name The text to be displayed as the section name. This cannot be an empty string.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Sections.prototype.createInProject = function(
    project,
    data,
    dispatchOptions
) {
    var path = util.format('/projects/%s/sections', project);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Returns the compact records for all sections in the specified project.
 * @param {String} project The project to get sections from.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Sections.prototype.findByProject = function(
    project,
    params,
    dispatchOptions
) {
    var path = util.format('/projects/%s/sections', project);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Returns the complete record for a single section.
 * @param {String} section The section to get.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Sections.prototype.findById = function(
    section,
    params,
    dispatchOptions
) {
    var path = util.format('/sections/%s', section);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * A specific, existing section can be updated by making a PUT request on
 * the URL for that project. Only the fields provided in the `data` block
 * will be updated; any unspecified fields will remain unchanged. (note that
 * at this time, the only field that can be updated is the `name` field.)
 *
 * When using this method, it is best to specify only those fields you wish
 * to change, or else you may overwrite changes made by another user since
 * you last retrieved the task.
 *
 * Returns the complete updated section record.
 * @param {String} section The section to update.
 * @param {Object} data Data for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Sections.prototype.update = function(
    section,
    data,
    dispatchOptions
) {
    var path = util.format('/sections/%s', section);

    return this.dispatchPut(path, data, dispatchOptions);
};

/**
 * A specific, existing section can be deleted by making a DELETE request
 * on the URL for that section.
 *
 * Note that sections must be empty to be deleted.
 *
 * The last remaining section in a board view cannot be deleted.
 *
 * Returns an empty data block.
 * @param {String} section The section to delete.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Sections.prototype.delete = function(
    section,
    dispatchOptions
) {
    var path = util.format('/sections/%s', section);

    return this.dispatchDelete(path, dispatchOptions);
};

/**
 * Add a task to a specific, existing section. This will remove the task from other sections of the project.
 *
 * The task will be inserted at the top of a section unless an `insert_before` or `insert_after` parameter is declared.
 *
 * This does not work for separators (tasks with the `resource_subtype` of section).
 * @param {String} task The task to add to this section
 * @param {Object} data Data for the request
 * @param {String} [data.insert_before] Insert the given task immediately before the task specified by this parameter. Cannot be provided together with `insert_after`.
 * @param {String} [data.insert_after] Insert the given task immediately after the task specified by this parameter. Cannot be provided together with `insert_before`.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Sections.prototype.addTask = function(
    task,
    data,
    dispatchOptions
) {
    var path = util.format('/sections/%s/addTask', task);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Move sections relative to each other in a board view. One of
 * `before_section` or `after_section` is required.
 *
 * Sections cannot be moved between projects.
 *
 * At this point in time, moving sections is not supported in list views, only board views.
 *
 * Returns an empty data block.
 * @param {String} project The project in which to reorder the given section
 * @param {Object} data Data for the request
 * @param {String} data.section The section to reorder
 * @param {String} [data.before_section] Insert the given section immediately before the section specified by this parameter.
 * @param {String} [data.after_section] Insert the given section immediately after the section specified by this parameter.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Sections.prototype.insertInProject = function(
    project,
    data,
    dispatchOptions
) {
    var path = util.format('/projects/%s/sections/insert', project);

    return this.dispatchPost(path, data, dispatchOptions);
};

/* jshint ignore:end */
module.exports = Sections;
