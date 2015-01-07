var util = require('util');
var oauthUtil = require('./oauth_util');
var BaseBrowserFlow = require('./base_browser_flow');
var OauthError = require('./oauth_error');

/**
 * An Oauth flow that runs in the browser and requests user authorization by
 * redirecting to an authorization page on Asana, and redirecting back with
 * the credentials.
 * @param {Object} options See `BaseBrowserFlow` for options.
 * @constructor
 */
function RedirectFlow(options) {
  BaseBrowserFlow.call(this, options);
}

util.inherits(RedirectFlow, BaseBrowserFlow);

RedirectFlow.prototype.getStateParam = function() {
  // If we're coming off the redirect, then we should use the state passed
  // back from the URL.
  var oauthResult = oauthUtil.parseOauthResultFromUrl(window.location.href);
  if (oauthResult !== null && oauthResult.state) {
    return oauthResult.state;
  }
  return BaseBrowserFlow.prototype.getStateParam.call(this);
};

RedirectFlow.prototype.startAuthorization = function(authUrl, state) {
  // If we're coming off the redirect, then move directly to finish auth
  var result = oauthUtil.parseOauthResultFromUrl(window.location.href);
  if (result !== null) {
    return Promise.resolve();
  }
  window.location.href = authUrl;
  return new Promise(function(resolve, reject) {
    // This promise will never resolve - we should leave the page first.
  });
};

RedirectFlow.prototype.finishAuthorization = function() {
  var currentUrl = window.location.href;
  oauthUtil.removeOauthResultFromCurrentUrl();
  var result = oauthUtil.parseOauthResultFromUrl(currentUrl);
  if (result.error) {
    return Promise.reject(new OauthError(result));
  } else {
    return Promise.resolve(result);
  }
};

module.exports = RedirectFlow;
