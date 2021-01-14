var Workspaces = require('./gen/workspaces');
/* jshint ignore:start */
var util = require('util');

/**
 * Returns the full workspace record for a single workspace.
 * @param {String} workspace Globally unique identifier for the workspace or organization.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Workspaces.prototype.findById = function(
    workspace,
    params,
    dispatchOptions
) {
    var path = util.format('/workspaces/%s', workspace);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Returns the compact records for all workspaces visible to the authorized user.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Workspaces.prototype.findAll = function(
    params,
    dispatchOptions
) {
    var path = util.format('/workspaces');

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * A specific, existing workspace can be updated by making a PUT request on
 * the URL for that workspace. Only the fields provided in the data block
 * will be updated; any unspecified fields will remain unchanged.
 *
 * Currently the only field that can be modified for a workspace is its `name`.
 *
 * Returns the complete, updated workspace record.
 * @param {String} workspace The workspace to update.
 * @param {Object} data Data for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Workspaces.prototype.update = function(
    workspace,
    data,
    dispatchOptions
) {
    var path = util.format('/workspaces/%s', workspace);

    return this.dispatchPut(path, data, dispatchOptions);
};

/**
 * Retrieves objects in the workspace based on an auto-completion/typeahead
 * search algorithm. This feature is meant to provide results quickly, so do
 * not rely on this API to provide extremely accurate search results. The
 * result set is limited to a single page of results with a maximum size,
 * so you won't be able to fetch large numbers of results.
 * @param {String} workspace The workspace to fetch objects from.
 * @param {Object} [params] Parameters for the request
 * @param {String} params.resource_type The type of values the typeahead should return. You can choose from
 * one of the following: custom_field, project, tag, task, and user.
 * Note that unlike in the names of endpoints, the types listed here are
 * in singular form (e.g. `task`). Using multiple types is not yet supported.
 * @param {String} [params.type] **Deprecated: new integrations should prefer the resource_type field.**
 * @param {String} [params.query] The string that will be used to search for relevant objects. If an
 * empty string is passed in, the API will currently return an empty
 * result set.
 * @param {Number} [params.count] The number of results to return. The default is `20` if this
 * parameter is omitted, with a minimum of `1` and a maximum of `100`.
 * If there are fewer results found than requested, all will be returned.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Workspaces.prototype.typeahead = function(
    workspace,
    params,
    dispatchOptions
) {
    var path = util.format('/workspaces/%s/typeahead', workspace);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * The user can be referenced by their globally unique user ID or their email address.
 * Returns the full user record for the invited user.
 * @param {String} workspace The workspace or organization to invite the user to.
 * @param {Object} data Data for the request
 * @param {String} data.user An identifier for the user. Can be one of an email address,
 * the globally unique identifier for the user, or the keyword `me`
 * to indicate the current user making the request.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Workspaces.prototype.addUser = function(
    workspace,
    data,
    dispatchOptions
) {
    var path = util.format('/workspaces/%s/addUser', workspace);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * The user making this call must be an admin in the workspace.
 * Returns an empty data record.
 * @param {String} workspace The workspace or organization to invite the user to.
 * @param {Object} data Data for the request
 * @param {String} data.user An identifier for the user. Can be one of an email address,
 * the globally unique identifier for the user, or the keyword `me`
 * to indicate the current user making the request.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Workspaces.prototype.removeUser = function(
    workspace,
    data,
    dispatchOptions
) {
    var path = util.format('/workspaces/%s/removeUser', workspace);

    return this.dispatchPost(path, data, dispatchOptions);
};

/* jshint ignore:end */
module.exports = Workspaces;
