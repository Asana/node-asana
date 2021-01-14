var Users = require('./gen/users');
/* jshint ignore:start */
var util = require('util');

/**
 * Returns the full user record for the currently authenticated user.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Users.prototype.me = function(
    params,
    dispatchOptions
) {
    var path = util.format('/users/me');

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Returns the full user record for the single user with the provided ID.
 * @param {String} user An identifier for the user. Can be one of an email address,
 * the globally unique identifier for the user, or the keyword `me`
 * to indicate the current user making the request.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Users.prototype.findById = function(
    user,
    params,
    dispatchOptions
) {
    var path = util.format('/users/%s', user);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Returns all of a user's favorites in the given workspace, of the given type.
 * Results are given in order (The same order as Asana's sidebar).
 * @param {String} user An identifier for the user. Can be one of an email address,
 * the globally unique identifier for the user, or the keyword `me`
 * to indicate the current user making the request.
 * @param {Object} [params] Parameters for the request
 * @param {String} params.workspace The workspace in which to get favorites.
 * @param {String} params.resource_type The resource type of favorites to be returned.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Users.prototype.getUserFavorites = function(
    user,
    params,
    dispatchOptions
) {
    var path = util.format('/users/%s/favorites', user);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the user records for all users in the specified workspace or
 * organization.
 * @param {String} workspace The workspace in which to get users.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Users.prototype.findByWorkspace = function(
    workspace,
    params,
    dispatchOptions
) {
    var path = util.format('/workspaces/%s/users', workspace);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the user records for all users in all workspaces and organizations
 * accessible to the authenticated user. Accepts an optional workspace ID
 * parameter.
 * @param {Object} [params] Parameters for the request
 * @param {String} [params.workspace] The workspace or organization to filter users on.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Users.prototype.findAll = function(
    params,
    dispatchOptions
) {
    var path = util.format('/users');

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/* jshint ignore:end */
module.exports = Users;
