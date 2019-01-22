var config = {};

config.Forbidden = null;

config.InvalidRequest = null;

config.NoAuthorization = null;

config.NotFound = null;

config.PremiumOnly = null;

config.RateLimitEnforced = {
  // retryAfterSeconds
  retry_after: 2,
};

config.ServerError = null;

// set full configuration for error
config.setConfig = function(errorName, errorConfig) {
  this[errorName] = errorConfig;
};

// add single configuration for error
config.addConfig = function(errorName, singleConfigName, singleConfig) {
  if (!this[errorName]) {
    this[errorName] = {};
  }

  this[errorName][singleConfigName] = singleConfig;
};

module.exports = config;
