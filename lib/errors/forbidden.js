var util = require('util');

function Forbidden(value) {
  Error.call(this);
  this.message = 'Forbidden';
  this.status = 403;
  this.value = value;
}

util.inherits(Forbidden, Error);

module.exports = Forbidden;