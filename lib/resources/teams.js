var Teams = require('./gen/teams');
/* jshint ignore:start */
var util = require('util');

/**
 * Returns the full record for a single team.
 * @param {String} team Globally unique identifier for the team.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Teams.prototype.findById = function(
    team,
    params,
    dispatchOptions
) {
    var path = util.format('/teams/%s', team);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Returns the compact records for all teams in the organization visible to
 * the authorized user.
 * @param {String} organization Globally unique identifier for the workspace or organization.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Teams.prototype.findByOrganization = function(
    organization,
    params,
    dispatchOptions
) {
    var path = util.format('/organizations/%s/teams', organization);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the compact records for all teams to which user is assigned.
 * @param {String} user An identifier for the user. Can be one of an email address,
 * the globally unique identifier for the user, or the keyword `me`
 * to indicate the current user making the request.
 * @param {Object} [params] Parameters for the request
 * @param {String} [params.organization] The workspace or organization to filter teams on.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Teams.prototype.findByUser = function(
    user,
    params,
    dispatchOptions
) {
    var path = util.format('/users/%s/teams', user);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the compact records for all users that are members of the team.
 * @param {String} team Globally unique identifier for the team.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Teams.prototype.users = function(
    team,
    params,
    dispatchOptions
) {
    var path = util.format('/teams/%s/users', team);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * The user making this call must be a member of the team in order to add others.
 * The user to add must exist in the same organization as the team in order to be added.
 * The user to add can be referenced by their globally unique user ID or their email address.
 * Returns the full user record for the added user.
 * @param {String} team Globally unique identifier for the team.
 * @param {Object} data Data for the request
 * @param {String} data.user An identifier for the user. Can be one of an email address,
 * the globally unique identifier for the user, or the keyword `me`
 * to indicate the current user making the request.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Teams.prototype.addUser = function(
    team,
    data,
    dispatchOptions
) {
    var path = util.format('/teams/%s/addUser', team);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * The user to remove can be referenced by their globally unique user ID or their email address.
 * Removes the user from the specified team. Returns an empty data record.
 * @param {String} team Globally unique identifier for the team.
 * @param {Object} data Data for the request
 * @param {String} data.user An identifier for the user. Can be one of an email address,
 * the globally unique identifier for the user, or the keyword `me`
 * to indicate the current user making the request.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Teams.prototype.removeUser = function(
    team,
    data,
    dispatchOptions
) {
    var path = util.format('/teams/%s/removeUser', team);

    return this.dispatchPost(path, data, dispatchOptions);
};

/* jshint ignore:end */
module.exports = Teams;
