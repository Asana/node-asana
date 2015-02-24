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
  throw new Error('not implemented', request);
};

/**
 * Establishes credentials.
 *
 * @return {Promise} Resolves when initial credentials have been
 *     completed and `authenticateRequest` calls can expect to succeed.
 */
Authenticator.prototype.establishCredentials = function() {
  throw new Error('not implemented');
};

/**
 * Attempts to refresh credentials, if possible, given the current credentials.
 *
 * @return {Promise} Resolves to `true` if credentials have been successfully
 *     established and `authenticateRequests` can expect to succeed, else
 *     resolves to `false`.
 */
Authenticator.prototype.refreshCredentials = function() {
  throw new Error('not implemented');
};


module.exports = Authenticator;
