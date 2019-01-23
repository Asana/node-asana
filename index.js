exports.config = require('./lib/config');
exports.Client = require('./lib/client');
exports.Dispatcher = require('./lib/dispatcher');
exports.auth = require('./lib/auth');
exports.errors = require('./lib/errors');
exports.resources = require('./lib/resources');

exports.VERSION = require('./package.json').version;