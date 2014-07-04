var util = require('util');

function NotFound(value) {
  Error.call(this);
  this.message = 'Not Found';
  this.status = 404;
  this.value = value;
}

util.inherits(NotFound, Error);

module.exports = NotFound;