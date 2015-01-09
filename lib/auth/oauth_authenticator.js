var util = require('util');
var Bluebird = require('bluebird');
var Authenticator = require('./authenticator');

/**
 * Creates an authenticator that uses Oauth for authentication.
 *
 * @param {Object} options Configure the authenticator; must specify one
 *     of `flow` or `credentials`.
 * @option {OauthFlow}     [flow]        The flow to use to get credentials
 *     when needed.
 * @option {String|Object} [credentials] Initial credentials to use. This can
 *     be either the object returned from an access token request (which
 *     contains the token and some other metadata) or just the `access_token`
 *     field.
 * @constructor
 */
function OauthAuthenticator(options) {
  Authenticator.call(this);
  if (typeof(options.credentials) === 'string') {
    this.credentials = {
      'access_token': options.credentials
    };
  } else {
    this.credentials = options.credentials || null;
  }
  this.flow = options.flow || null;
}

util.inherits(OauthAuthenticator, Authenticator);

/**
 * @param {Object} request The request to modify, for the `request` library.
 * @return {Object} The `request` parameter, modified to include authentication
 *     information using the stored credentials.
 */
OauthAuthenticator.prototype.authenticateRequest = function(request) {
  /* jshint camelcase: false */
  if (this.credentials === null) {
    throw new Error(
      'Cannot authenticate a request without first obtaining credentials');
  }
  // When browserify-d, the `auth` component of the `request` library
  // doesn't work so well, so we just manually set the bearer token instead.
  request.headers = request.headers || {};
  request.headers.Authorization = 'Bearer ' + this.credentials.access_token;
  return request;
};

/**
 * Requests new credentials, discarding any that it may already have.
 * @return {Promise} Resolves when credentials have been successfully
 *     established and `authenticateRequests` can expect to succeed.
 */
OauthAuthenticator.prototype.ensureCredentials = function() {
  var me = this;
  if (me.flow) {
    // Request new credentials
    me.credentials = null;
    return me.flow.run().then(function(credentials) {
      me.credentials = credentials;
    });
  } else {
    // We were given a fixed set of credentials and don't know how to get
    // new ones, so assume what we have is ok.
    return Bluebird.resolve();
  }
};

module.exports = OauthAuthenticator;