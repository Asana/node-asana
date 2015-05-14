var util = require('util');
var AsanaError = require('./error');

function InvalidRequest(value) {
  AsanaError.call(this, 'Invalid Request');
  this.status = 400;
  this.value = value;
}

util.inherits(InvalidRequest, Error);

module.exports = InvalidRequest;