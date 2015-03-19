/* jshint browser: true */
/* global chrome */

function defaultEnvironment() {
  if (typeof(window) !== 'undefined') {
    // Browser
    return { window: window };
  } else if (typeof(chrome) !== 'undefined') {
    // Chrome Extension
    return { chrome: chrome };
  } else if (typeof(process) !== 'undefined') {
    // NodeJS script
    return { process: process };
  } else {
    throw Error('Unknown environment.');
  }

}

module.exports = defaultEnvironment;