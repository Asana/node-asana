/**
 * A layer to abstract the differences between using different types of
 * authentication (Oauth vs. Basic). The Authenticator is responsible for
 * establishing credentials and applying them to outgoing requests.
 * @constructor
 */
function Authenticator() {
}

/**
 * @param {Object} request The request to modify, for the `request` library.
 * @return {Object} The `request` parameter, modified to include authentication
 *     information using the stored credentials.
 */
Authenticator.prototype.authenticateRequest = function(request) {
  throw new Error('not implemented');
};

/**
 * Establishes credentials. If credentials could be out of date and it is
 * possible to refresh them, does so.
 *
 * @return {Promise} Resolves when credentials have been successfully
 *     established and `authenticateRequest` calls can expect to succeed.
 */
Authenticator.prototype.ensureCredentials = function() {
  throw new Error('not implemented');
};

module.exports = Authenticator;
