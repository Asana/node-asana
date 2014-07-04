var util = require('util');

function NoAuthorization(value) {
  Error.call(this);
  this.message = 'No Authorization';
  this.status = 401;
  this.value = value;
}

util.inherits(NoAuthorization, Error);

module.exports = NoAuthorization;