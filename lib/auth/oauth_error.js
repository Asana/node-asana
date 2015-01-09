var util = require('util');

/**
 * @param options {Object} A data blob parsed from a query string or JSON 
 * response from the Asana API
 * @option {String} error The string code identifying the error.
 * @option {String} [error_uri] A link to help and information about the error.
 * @option {String} [error_description] A description of the error.
 * @constructor
 */
function OauthError(options) {
  /* jshint camelcase:false */
  Error.call(this);
  if (typeof(options) !== 'object' || !options.error) {
    throw new Error('Invalid Oauth error: ' + options);
  }
  this.code = options.error;
  this.description = options.error_description || null;
  this.uri = options.error_uri || null;
}

util.inherits(OauthError, Error);

module.exports = OauthError;