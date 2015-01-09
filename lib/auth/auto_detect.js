/* jshint browser: true */
/* global chrome */
var NativeFlow = require('./native_flow');
var RedirectFlow = require('./redirect_flow');
var ChromeExtensionFlow = require('./chrome_extension_flow');

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
      return ChromeExtensionFlow;
    } else {
      // Chrome packaged app, not supported yet.
      return null;
    }
  }
  if (typeof(window) !== 'undefined' && window.navigator) {
    // Browser
    return RedirectFlow;
  }
  if (typeof(process) !== 'undefined' && process.env) {
    // NodeJS script
    return NativeFlow;
  }
  return null;
}

module.exports = autoDetect;
