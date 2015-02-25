var util = require('util');
var Bluebird = require('bluebird');
var Authenticator = require('./authenticator');

/**
 * Creates an authenticator that uses Oauth for authentication.
 *
 * @param {Object} options Configure the authenticator; must specify one
 *     of `flow` or `credentials`.
 * @option {App}           app           The app being authenticated for.
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
  this.app = options.app;
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
OauthAuthenticator.prototype.establishCredentials = function() {
  /* jshint camelcase: false */
  var me = this;
  if (me.flow) {
    // Request new credentials
    me.credentials = null;
    return me.flow.run().then(function(credentials) {
      me.credentials = credentials;
    });
  } else {
    if (me.credentials.access_token) {
      // Assume what we have is ok.
      return Bluebird.resolve();
    } else if (me.credentials.refresh_token) {
      // We were given a refresh token but NOT an access token. Get access.
      return me.refreshCredentials();
    } else {
      // What kind of credentials did we get anyway?
      return Bluebird.reject(new Error('Invalid credentials'));
    }
  }
};

/**
 * Attempts to refresh credentials, if possible, given the current credentials.
 * @return {Promise} Resolves to `true` if credentials have been successfully
 *     established and `authenticateRequests` can expect to succeed, else
 *     resolves to `false`.
 */
OauthAuthenticator.prototype.refreshCredentials = function() {
  /* jshint camelcase: false */
  var me = this;
  if (me.credentials && me.credentials.refresh_token) {
    // We have a refresh token. Use it to get a new access token.
    // Only have one outstanding request, any simultaneous requests waiting on
    // refresh should gate on this promise.
    if (!me.refreshPromise) {
      var refreshToken = me.credentials.refresh_token;
      me.refreshPromise = me.app.accessTokenFromRefreshToken(refreshToken).then(
          function(credentials) {
            // Update credentials, but hang on to refresh token.
            if (!credentials.refresh_token) {
              credentials.refresh_token = refreshToken;
            }
            me.credentials = credentials;
            me.refreshPromise = null;
            return true;
          });
    }
    return me.refreshPromise;
  } else if (me.flow) {
    // Try running the flow again to get credentials.
    return this.establishCredentials().then(function(credentials) {
      return credentials !== null;
    });
  } else {
    // We are unable to refresh credentials automatically.
    return Bluebird.resolve(false);
  }
};

module.exports = OauthAuthenticator;