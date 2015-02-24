var util = require('util');
var Bluebird = require('bluebird');
var Authenticator = require('./authenticator');

/**
 * @param {String} apiKey The key to use to access the API.
 * @constructor
 */
function BasicAuthenticator(apiKey) {
  this.apiKey = apiKey;
}

util.inherits(BasicAuthenticator, Authenticator);

BasicAuthenticator.prototype.authenticateRequest = function(request) {
  request.auth = {
    username: this.apiKey,
    password: ''
  };
  return request;
};

BasicAuthenticator.prototype.establishCredentials = function() {
  // Credentials are already built-in.
  return Bluebird.resolve();
};

BasicAuthenticator.prototype.refreshCredentials = function() {
  // We have no way of refreshing credentials.
  return Bluebird.resolve(false);
};

module.exports = BasicAuthenticator;