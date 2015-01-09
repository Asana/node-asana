var util = require('util');

function RateLimitEnforced(value) {
  /* jshint camelcase:false */
  Error.call(this);
  this.message = 'Rate Limit Enforced';
  this.status = 429;
  this.value = value;
  this.retryAfterSeconds = value && parseInt(value.retry_after, 10);
}

util.inherits(RateLimitEnforced, Error);

module.exports = RateLimitEnforced;