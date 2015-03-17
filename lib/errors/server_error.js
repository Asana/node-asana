var util = require('util');
var AsanaError = require('./error');

function ServerError(value) {
  AsanaError.call(this, 'Server Error');
  this.status = 500;
  this.value = value;
}

util.inherits(ServerError, Error);

module.exports = ServerError;