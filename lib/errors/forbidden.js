var util = require('util');
var AsanaError = require('./error');

function Forbidden(value) {
  AsanaError.call(this, 'Forbidden');
  this.status = 403;
  this.value = value;
}

util.inherits(Forbidden, Error);

module.exports = Forbidden;