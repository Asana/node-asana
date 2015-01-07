var OauthFlowNoBrowser = require('./oauth_flow_no_browser');
var OauthFlowBrowserRedirect = require('./oauth_flow_browser_redirect');
var OauthFlowChromeExtension = require('./oauth_flow_chrome_extension');

/**
 * Auto-detects the type of Oauth flow to use that's appropriate to the
 * environment.
 *
 * @returns {Function|null} The type of Oauth flow to use, or null if no
 *     appropriate type could be determined.
 */
function autoDetect() {
  if (typeof(chrome) !== 'undefined' && chrome.runtime && chrome.runtime.id) {
    if (chrome.tabs && chrome.tabs.create) {
      return OauthFlowChromeExtension;
    } else {
      // Chrome packaged app, not supported yet.
      return null;
    }
  }
  if (typeof(window) !== 'undefined' && window.navigator) {
    // Browser
    return OauthFlowBrowserRedirect;
  }
  if (typeof(process) !== 'undefined' && process.env) {
    // NodeJS script
    return OauthFlowNoBrowser;
  }
  return null;
}

module.exports = autoDetect;
