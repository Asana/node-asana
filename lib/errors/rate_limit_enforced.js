var util = require('util');
var AsanaError = require('./error');

function RateLimitEnforced(value) {
  /* jshint camelcase:false */
  AsanaError.call(this, 'Rate Limit Enforced');
  this.status = 429;
  this.value = value;
  this.retryAfterSeconds = value && parseInt(value.retry_after, 10);
}

util.inherits(RateLimitEnforced, Error);

module.exports = RateLimitEnforced;