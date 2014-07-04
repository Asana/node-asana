var Promise = require('bluebird');
var request = require('request');

/**
 * An HTTP wrapper for the Asana API
 * 
 * @param {string}          authKey   The key for request authentication
 * @param {(string|object)} authValue The value for request authentication
 */
function Client(authKey, authValue) {
  this.authKey = authKey;
  this.authValue = authValue;
}

module.exports = Client;
