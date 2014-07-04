var util = require('util');

function RateLimitEnforced(value) {
  Error.call(this);
  this.message = 'Rate Limit Enforced';
  this.status = 429;
  this.value = value;
}

util.inherits(RateLimitEnforced, Error);

module.exports = RateLimitEnforced;