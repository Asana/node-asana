/* jshint browser:true */
var url = require('url');
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
 * @option {App} app The app this flow is for
 * @option {String} [redirectUri] The URL that Asana should redirect to once
 *     user authorization is complete. Defaults to the URL configured in
 *     the app, and if none then the current page URL.
 * @constructor
 */
function BaseBrowserFlow(options) {
  this.options = options;
}

/**
 * @param {String} authUrl The URL the user should be navigated to in order
 *     to authorize the app.
 * @param {String} state   The unique state generated for this auth request.
 * @return {Promise} Resolved when authorization has successfully started,
 *     i.e. the user has been navigated to a page requesting authorization.
 */
BaseBrowserFlow.prototype.startAuthorization = function(authUrl, state) {
  throw new Error('Not implemented', authUrl, state);
};

/**
 * @return {Promise<Object>} Credentials returned from Oauth.
 */
BaseBrowserFlow.prototype.finishAuthorization = function(state) {
  throw new Error('Not implemented', state);
};

/**
 * @return {String} The URL to redirect to that will receive the
 */
BaseBrowserFlow.prototype.receiverUrl = function() {
  var relativeUrl =
    this.options.redirectUri || this.options.app.redirectUri || '';
  return url.resolve(window.location.href, relativeUrl);
};

/**
 * @return {String} The URL to redirect to that will receive the
 */
BaseBrowserFlow.prototype.asanaBaseUrl = function() {
  return this.options.app.asanaBaseUrl;
};

/**
 * @returns {String} Generate a new unique state parameter for a request.
 */
BaseBrowserFlow.prototype.getStateParam = function() {
  return oauthUtil.randomState();
};

/**
 * @returns {String} The URL used to authorize the user for the app.
 */
BaseBrowserFlow.prototype.authorizeUrl = function() {
  // All browser flows should use the implicit grant (`token`) flow.
  return url.resolve(this.asanaBaseUrl(), url.format({
    pathname: '/-/oauth_authorize',
    query: {
      'client_id': this.options.app.clientId,
      'response_type': 'token',
      'redirect_uri': this.receiverUrl(),
      'scope': this.options.app.scope,
      'state': this.state
    }
  }));
};

/**
 * Run the appropriate parts of the Oauth flow, attempting to establish user
 * authorization.
 * @returns {Promise<Object>} A promise that resolves to the Oauth credentials.
 */
BaseBrowserFlow.prototype.run = function() {
  var me = this;
  me.state = me.getStateParam(me.options);
  return me.startAuthorization(me.authorizeUrl(), me.state).then(function() {
    return me.finishAuthorization(me.state);
  });
};

module.exports = BaseBrowserFlow;