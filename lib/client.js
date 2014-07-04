var Promise = require('bluebird');
var request = require('request');

/**
 * An HTTP wrapper for the Asana API
 *
 * @constructor
 * @param {String}          authKey   The key for request authentication
 * @param {(String|Object)} authValue The value for request authentication
 */
function Client(authKey, authValue) {
  this.authKey = authKey;
  this.authValue = authValue;
}

/**
 * Create a client for basic auth
 * 
 * @param  {String} apiKey The Asana Api Key for the user
 * @return {Client}        The instantiated client
 */
Client.basicAuth = function(apiKey) {
  return new Client('auth', {
    user: apiKey,
    pass: ''
  });
};

module.exports = Client;