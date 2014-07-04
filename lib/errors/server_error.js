var util = require('util');

function ServerError(value) {
  Error.call(this);
  this.message = 'Server Error';
  this.status = 500;
  this.value = value;
}

util.inherits(ServerError, Error);

module.exports = ServerError;