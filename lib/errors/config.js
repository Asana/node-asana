var config = {};

config.Forbidden = null;

config.InvalidRequest = null;

config.NoAuthorization = null;

config.NotFound = null;

config.PremiumOnly = null;

config.RateLimitEnforced = null;

config.ServerError = null;

config.setConfig = function(errorName, errorConfig) {
  if (!this[errorName]) {
    config[errorName] = {};
  }
  Object.keys(errorConfig, function(errorKey) {
    config[errorKey] = errorConfig[errorKey];
  });
};

module.exports = config;
