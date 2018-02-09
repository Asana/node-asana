var util = require('util');
var AsanaError = require('./error');

function PremiumOnly(value) {
  AsanaError.call(this, 'Payment Required');
  this.status = 402;
  this.value = value;
}

util.inherits(PremiumOnly, Error);

module.exports = PremiumOnly;
