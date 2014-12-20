var util = require('util');
var Promise = require('bluebird');
var Authenticator = require('./authenticator');

/**
 * Creates an authenticator that uses Oauth for authentication.
 *
 * @param {Object} options Configure the authenticator; must specify one
 *     of `flow` or `credentials`.
 * @option {OauthFlow} [flow] The flow to use to get credentials when needed.
 * @option {Object}    [credentials] Initial credentials to use.
 * @constructor
 */
function OauthAuthenticator(options) {
  Authenticator.call(this);
  this._credentials = options.credentials || null;
  this._flow = options.flow || null;
}

util.inherits(OauthAuthenticator, Authenticator);

/**
 * @param {Object} request The request to modify, for the `request` library.
 * @return {Object} The `request` parameter, modified to include authentication
 *     information using the stored credentials.
 */
OauthAuthenticator.prototype.authenticateRequest = function(request) {
  if (this._credentials === null) {
    throw new Error(
        "Cannot authenticate a request without first obtaining credentials");
  }
  // When browserify-d, the `auth` component of the `request` library
  // doesn't work so well, so we just manually set the bearer token instead.
  request.headers = request.headers || {};
  request.headers.Authorization = "Bearer " + this._credentials.access_token;
  return request;
};

/**
 * Requests new credentials, discarding any that it may already have.
 * @return {Promise} Resolves when credentials have been successfully
 *     established and `authenticateRequests` can expect to succeed.
 */
OauthAuthenticator.prototype.ensureCredentials = function() {
  var me = this;
  if (me._flow) {
    // Request new credentials
    me._credentials = null;
    return me._flow.run().then(function(credentials) {
      me._credentials = credentials;
    });
  } else {
    // We were given a fixed set of credentials and don't know how to get
    // new ones, so assume what we have is ok.
    return Promise.resolve();
  }
};

module.exports = OauthAuthenticator;
