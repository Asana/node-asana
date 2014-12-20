var querystring = require('querystring');
var url = require('url');
var util = require('util');
var request = require('request');
var Promise = require('bluebird');

var oauthUtil = require('./oauth_util');

// TODO: options.storage, for an interface to load/save/delete credentials
//     e.g. in cookies or in localStorage maybe
// TODO: options.remember, to store in storage (true by default?)
// TODO: testing across browsers
// TODO: standardize logging with option (add logger? 3rd party something?)
// TODO: tests

/**
 * A base class for any flow that runs in the browser. All subclasses use the
 * "implicit grant" flow to authenticate via the browser.
 * @param {Object} options
 * @option {String} clientId The ID of the client app.
 * @option {String} [receiverUrl] The URL that Asana should redirect to once
 *     user authorization is complete. Defaults to the current page URL.
 * @option {String} [baseUrl] The base URL for Asana oauth endpoints.
 * @option {String} [scope] The scope to request; only `default` is currently
 *     supported.
 * @constructor
 */
function OauthFlowBrowser(options) {
  this.options = options;
}

/**
 * @param {String} authUrl The URL the user should be navigated to in order
 *     to authorize the app.
 * @param {String} state   The unique state generated for this auth request.
 * @return {Promise} Resolved when authorization has successfully started,
 *     i.e. the user has been navigated to a page requesting authorization.
 */
OauthFlowBrowser.prototype.startAuthorization = function(authUrl, state) {
  throw new Error("Not implemented");
};

/**
 * @return {Promise<Object>} Credentials returned from Oauth.
 */
OauthFlowBrowser.prototype.finishAuthorization = function(state) {
  throw new Error("Not implemented");
};

/**
 * @return {String} The URL to redirect to that will receive the
 */
OauthFlowBrowser.prototype.receiverUrl = function() {
  return url.resolve(window.location.href, this.options.receiverUrl || "");
};

/**
 * @return {String} The URL to redirect to that will receive the
 */
OauthFlowBrowser.prototype.baseUrl = function() {
  return this.options.baseUrl || 'https://app.asana.com/';
};

/**
 * @returns {String} Generate a new unique state parameter for a request.
 */
OauthFlowBrowser.prototype.getStateParam = function() {
  return oauthUtil.randomState();
};

/**
 * @returns {String} The URL used to authorize the user for the app.
 */
OauthFlowBrowser.prototype.authorizeUrl = function(state) {
  // All browser flows should use the implicit grant (`token`) flow.
  return url.resolve(this.baseUrl(), url.format({
    pathname: '/-/oauth_authorize',
    query: {
      client_id: this.options.clientId,
      response_type: 'token',
      redirect_uri: this.receiverUrl(),
      scope: this.options.scope,
      state: this.state
    }
  }));
};

/**
 * Run the appropriate parts of the Oauth flow, attempting to establish user
 * authorization.
 * @returns {Promise<Object>} A promise that resolves to the Oauth credentials.
 */
OauthFlowBrowser.prototype.run = function() {
  var me = this;
  me.state = me.getStateParam(me.options);
  return me.startAuthorization(me.authorizeUrl(), me.state).then(function() {
    return me.finishAuthorization(me.state);
  });
};

module.exports = OauthFlowBrowser;
