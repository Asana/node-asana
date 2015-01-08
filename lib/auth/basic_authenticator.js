var util = require('util');
var Promise = require('bluebird');
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

BasicAuthenticator.prototype.ensureCredentials = function() {
  return Promise.resolve();
};

module.exports = BasicAuthenticator;
