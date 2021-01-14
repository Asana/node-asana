var Tags = require('./gen/tags');
/* jshint ignore:start */
var util = require('util');

/**
 * Creates a new tag in a workspace or organization.
 *
 * Every tag is required to be created in a specific workspace or
 * organization, and this cannot be changed once set. Note that you can use
 * the `workspace` parameter regardless of whether or not it is an
 * organization.
 *
 * Returns the full record of the newly created tag.
 * @param {Object} data Data for the request
 * @param {String} data.workspace The workspace or organization to create the tag in.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tags.prototype.create = function(
    data,
    dispatchOptions
) {
    var path = util.format('/tags');

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Creates a new tag in a workspace or organization.
 *
 * Every tag is required to be created in a specific workspace or
 * organization, and this cannot be changed once set. Note that you can use
 * the `workspace` parameter regardless of whether or not it is an
 * organization.
 *
 * Returns the full record of the newly created tag.
 * @param {String} workspace The workspace or organization to create the tag in.
 * @param {Object} data Data for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tags.prototype.createInWorkspace = function(
    workspace,
    data,
    dispatchOptions
) {
    var path = util.format('/workspaces/%s/tags', workspace);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Returns the complete tag record for a single tag.
 * @param {String} tag The tag to get.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Tags.prototype.findById = function(
    tag,
    params,
    dispatchOptions
) {
    var path = util.format('/tags/%s', tag);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Updates the properties of a tag. Only the fields provided in the `data`
 * block will be updated; any unspecified fields will remain unchanged.
 *
 * When using this method, it is best to specify only those fields you wish
 * to change, or else you may overwrite changes made by another user since
 * you last retrieved the task.
 *
 * Returns the complete updated tag record.
 * @param {String} tag The tag to update.
 * @param {Object} data Data for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tags.prototype.update = function(
    tag,
    data,
    dispatchOptions
) {
    var path = util.format('/tags/%s', tag);

    return this.dispatchPut(path, data, dispatchOptions);
};

/**
 * A specific, existing tag can be deleted by making a DELETE request
 * on the URL for that tag.
 *
 * Returns an empty data record.
 * @param {String} tag The tag to delete.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tags.prototype.delete = function(
    tag,
    dispatchOptions
) {
    var path = util.format('/tags/%s', tag);

    return this.dispatchDelete(path, dispatchOptions);
};

/**
 * Returns the compact tag records for some filtered set of tags.
 * Use one or more of the parameters provided to filter the tags returned.
 * @param {Object} [params] Parameters for the request
 * @param {String} [params.workspace] The workspace or organization to filter tags on.
 * @param {String} [params.team] The team to filter tags on.
 * @param {Boolean} [params.archived] Only return tags whose `archived` field takes on the value of
 * this parameter.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tags.prototype.findAll = function(
    params,
    dispatchOptions
) {
    var path = util.format('/tags');

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the compact tag records for all tags in the workspace.
 * @param {String} workspace The workspace or organization to find tags in.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tags.prototype.findByWorkspace = function(
    workspace,
    params,
    dispatchOptions
) {
    var path = util.format('/workspaces/%s/tags', workspace);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the compact task records for all tasks with the given tag.
 * Tasks can have more than one tag at a time.
 * @param {String} tag The tag to fetch tasks from.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tags.prototype.getTasksWithTag = function(
    tag,
    params,
    dispatchOptions
) {
    var path = util.format('/tags/%s/tasks', tag);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/* jshint ignore:end */
module.exports = Tags;
