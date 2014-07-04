var util = require('util');

function InvalidRequest(value) {
  Error.call(this);
  this.message = 'Invalid Request';
  this.status = 400;
  this.value = value;
}

util.inherits(InvalidRequest, Error);

module.exports = InvalidRequest;