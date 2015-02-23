var url = require('url');
var request = require('request');
var Bluebird = require('bluebird');
var OauthError = require('./oauth_error');

/**
 * @params {Object} params Parameters for the `request` call.
 * @return {Promise} Promise representing the request, will resolve to the
 *     `Object` returned or an `OauthError`.
 */
var doRequest = function(params) {
  return new Bluebird(function(resolve, reject) {
    request(params, function(err, res, payload) {
      if (err) {
        return reject(err);
      }
      if (res.statusCode !== 200) {
        return reject(payload);
      }
      var result = JSON.parse(payload);
      if (result.error) {
        return reject(new OauthError(result));
      } else {
        return resolve(result);
      }
    });
  });
};

/**
 * An abstraction around an App used with Asana.
 *
 * @options {Object} Options to construct the app
 * @option {String} clientId       The ID of the app
 * @option {String} [clientSecret] The secret key, if available here
 * @option {String} [redirectUri]  The default redirect URI
 * @option {String} [scope]        Scope to use, supports `default` and `scim`
 * @option {String} [asanaBaseUrl] Base URL to use for Asana, for debugging
 * @constructor
 */
function App(options) {
  this.clientId = options.clientId;
  this.clientSecret = options.clientSecret || null;
  this.redirectUri = options.redirectUri || null;
  this.scope = options.scope || 'default';
  this.asanaBaseUrl = options.asanaBaseUrl || 'https://app.asana.com/';
}


/**
 * @param {Object} options  Overrides to the app's defaults
 * @option {String} asanaBaseUrl
 * @option {String} redirectUri
 * @returns {String} The URL used to authorize a user for the app.
 */
App.prototype.asanaAuthorizeUrl = function(options) {
  options = options || {};
  return url.resolve(
    options.asanaBaseUrl || this.asanaBaseUrl,
    url.format({
      pathname: '/-/oauth_authorize',
      query: {
        'client_id': this.clientId,
        'response_type': 'code',
        'redirect_uri': options.redirectUri || this.redirectUri,
        'scope': this.scope
      }
    }));
};


/**
 * @param {Object} options  Overrides to the app's defaults
 * @option {String} asanaBaseUrl
 * @option {String} redirectUri
 * @returns {String} The URL used to acquire an access token.
 */
App.prototype.asanaTokenUrl = function(options) {
  options = options || {};
  return url.resolve(
    options.asanaBaseUrl || this.asanaBaseUrl,
    '/-/oauth_token');
};

/**
 * @param {String} code An authorization code obtained via `asanaAuthorizeUrl`.
 * @param {Object} options  Overrides to the app's defaults
 * @option {String} asanaBaseUrl
 * @option {String} redirectUri
 * @return {Promise<Object>} The token, which will include the `access_token`
 *     used for API access, as well as a `refresh_token` which can be stored
 *     to get a new access token without going through the flow again.
 */
App.prototype.accessTokenFromCode = function(code, options) {
  options = options || {};
  var params = {
    method: 'POST',
    url: this.asanaTokenUrl(options),
    formData: {
      'grant_type': 'authorization_code',
      'client_id': this.clientId,
      'client_secret': this.clientSecret,
      'redirect_uri': options.redirectUri || this.redirectUri,
      'code': code
    }
  };
  return doRequest(params);
};

/**
 * @param {String} refreshToken A refresh token obtained via Oauth.
 * @param {Object} options Overrides to the app's defaults
 * @option {String} asanaBaseUrl
 * @option {String} redirectUri
 * @return {Promise<Object>} The token, which will include the `access_token`
 *     used for API access.
 */
App.prototype.accessTokenFromRefreshToken = function(refreshToken, options) {
  options = options || {};
  var params = {
    method: 'POST',
    url: this.asanaTokenUrl(options),
    formData: {
      'grant_type': 'refresh_token',
      'client_id': this.clientId,
      'client_secret': this.clientSecret,
      'redirect_uri': options.redirectUri || this.redirectUri,
      'refresh_token': refreshToken
    }
  };
  return doRequest(params);
};


module.exports = App;