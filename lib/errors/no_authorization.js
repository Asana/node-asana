var util = require('util');
var AsanaError = require('./error');

function NoAuthorization(value) {
  AsanaError.call(this, 'No Authorization');
  this.status = 401;
  this.value = value;
}

util.inherits(NoAuthorization, Error);

module.exports = NoAuthorization;