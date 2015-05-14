/* jshint browser: true */
var NativeFlow = require('./native_flow');
var RedirectFlow = require('./redirect_flow');
var ChromeExtensionFlow = require('./chrome_extension_flow');
var defaultEnvironment = require('../default_environment');

/**
 * Auto-detects the type of Oauth flow to use that's appropriate to the
 * environment.
 *
 * @returns {Function|null} The type of Oauth flow to use, or null if no
 *     appropriate type could be determined.
 */
function autoDetect(env) {
  env = env || defaultEnvironment();
  if (typeof(env.chrome) !== 'undefined' &&
    env.chrome.runtime && env.chrome.runtime.id) {
    if (env.chrome.tabs && env.chrome.tabs.create) {
      return ChromeExtensionFlow;
    } else {
      // Chrome packaged app, not supported yet.
      return null;
    }
  }
  if (typeof(env.window) !== 'undefined' && env.window.navigator) {
    // Browser
    return RedirectFlow;
  }
  if (typeof(env.process) !== 'undefined' && env.process.env) {
    // NodeJS script
    return NativeFlow;
  }
  return null;
}

module.exports = autoDetect;
