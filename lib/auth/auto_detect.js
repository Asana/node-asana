/* jshint browser: true */
/* globa chrome */
var NativeFlow = require('./native_flow');
var RedirectFlow = require('./redirect_flow');
var ChromeExtensionFlow = require('./chrome_extension_flow');
var Environment = require('../environment');

/**
 * Auto-detects the type of Oauth flow to use that's appropriate to the
 * environment.
 *
 * @returns {Function|null} The type of Oauth flow to use, or null if no
 *     appropriate type could be determined.
 */
function autoDetect() {
  if (Environment.isChrome() && Environment.getChromeRuntime() && 
        Environment.getChromeRuntime().id) {

    if (Environment.getChromeTabs() && Environment.getChromeTabs().create) {
      return ChromeExtensionFlow;
    } else {
      // Chrome packaged app, not supported yet.
      return null;
    }
  }

  if (Environment.isWindow() && Environment.getWindowNavigator()) {
    // Browser
    return RedirectFlow;
  }
  if (Environment.isProcess() && Environment.getProcessEnv()) {
    // NodeJS script
    return NativeFlow;
  }
  return null;
}

module.exports = autoDetect;
