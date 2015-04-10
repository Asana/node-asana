/* jshint browser: true */
/* global chrome */

function defaultEnvironment() {
  var env = {};
  if (typeof(window) !== 'undefined') {
    // Browser
    env.window = window;
  }
  if (typeof(chrome) !== 'undefined') {
    // Chrome Extension
    env.chrome = chrome;
  }
  if (typeof(process) !== 'undefined') {
    // NodeJS script
    env.process = process;
  }
  return env;
}

module.exports = defaultEnvironment;
