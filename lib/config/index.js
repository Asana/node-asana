var errors = require('../errors');

var config = {};

config.setConfig = function(errorName, errorConfig) {
    errors[errorName].config = errorConfig;
};

module.exports = config;
