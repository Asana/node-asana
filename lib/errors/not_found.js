var util = require('util');
var AsanaError = require('./error');

function NotFound(value) {
  AsanaError.call(this, 'Not Found');
  this.status = 404;
  this.value = value;
}

util.inherits(NotFound, Error);

module.exports = NotFound;