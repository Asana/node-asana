const config = {};

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
config.setConfig = function(error_name, error_config) {
  this[error_name] = error_config;
};

// add single configuration for error
config.addConfig = function(error_name, single_config_name, single_config) {
  if (!this[error_name]) {
    this[error_name] = {};
  }

  this[error_name][single_config_name] = single_config;
};

module.exports = config;
