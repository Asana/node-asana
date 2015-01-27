/* jshint browser: true */
/* global chrome */
/**
 * Abstracts the Environment away into a common object shared between all 
 * environment types. This allows testing mocks to ignore any 
 * environment-specific actions.
 *
 * @class
 * @classdesc A wrapper for the environment the client library is running in.
 */
function Environment() {
}

/**
 * XCXC
 * Unclear if this is necessary. 
 */
Environment.hasEnvironmentProperty = 
function(environment, attribute) {
  if (environment === 'window') {
    return (this.isWindow() && window[attribute]);
  } else if (environment === 'chrome') {
    return (this.isChrome() && chrome[attribute]);
  } else if (environment === 'process') {
    return (this.isProcess() && process[attribute]);
  }
};

/**********************
 * BROWSER Environment
 **********************/

/**
 * Checks if environment type is a Browser.
 *
 * @returns {Boolean} 
 */
Environment.isWindow = function() {
  return (typeof(window) !== 'undefined');
};

Environment.getWindowNavigator = function() {
  return this.isWindow() ? window.navigator : null;  
};

Environment.getWindowHistory = function() {
  return this.isWindow() ? window.history : null;
};

Environment.getWindowLocation = function() {
  return this.isWindow() ? window.location : null;
};

// Environment.prototype.getWindowParent = function() {
//   return this.isWindow() ? window.parent : null;
// }

// Environment.prototype.getWindowTop = function() {
//   return this.isWindow() ? window.top : null;
// }

// Environment.prototype.getWindowOpener = function() {
//   return this.isWindow() ? window.opener : null;
// }
// 
// Environment.prototype.windowAddEventListener = function(type, 
  // listener, optUseCapture) {
//   optUseCapture = optUseCapture || false;
//   window.addEventListener(type, listener, useCapture);
// }
// 
// Environment.prototype.windowOpen = function() {
// 
// }

/*********************
 * CHROME Environment
 *********************/

/**
 * Checks if the environment type is a Chrome Extension.
 *
 * @return {Boolean}
 */
Environment.isChrome = function() {
  return (typeof(chrome) !== 'undefined');
};

Environment.getChromeRuntime = function() {
  return this.isChrome() ? chrome.runtime : null;
};

Environment.getChromeTabs = function() {
  return this.isChrome() ? chrome.tabs : null;
};

/**********************
 * PROCESS Environment
 **********************/

Environment.isProcess = function() {
  return (typeof(process) !== 'undefined');
};

Environment.getProcessEnv = function() {
  return this.isProcess() ? process.env : null;
};

module.exports = Environment;