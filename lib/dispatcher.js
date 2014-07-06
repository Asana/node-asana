var errors = require('./errors');
var Promise = require('bluebird');
var request = require('request');

var STATUS_MAP = Object.keys(errors).reduce(function(map, key) {
  var error = new errors[key](null);
  map[error.status] = errors[key];
  return map;
}, {});

/**
 * An HTTP wrapper for the Asana API
 * @constructor
 * @param {String}          authKey   The key for request authentication
 * @param {(String|Object)} authValue The value for request authentication
 */
function Dispatcher(authKey, authValue) {
  this.authKey = authKey;
  this.authValue = authValue;
}

Dispatcher.ROOT_URL = 'https://app.asana.com/api/1.0';

/**
 * Creates an Asana Url
 * @param  {String} path The path
 * @return {String}      The url
 */
Dispatcher.url = function(path) {
  return Dispatcher.ROOT_URL + path;
};

/**
 * Dispatches a request to the Asana API
 * @param  {Object}  params The params for request
 * @return {Promise}        The response for the request
 */
Dispatcher.prototype.dispatch = function(params) {
  params[this.authKey] = this.authValue;
  return new Promise(function(resolve, reject) {
    request(params, function(err, res, payload) {
      if (err) {
        return reject(err);
      }
      if (STATUS_MAP[res.statusCode]) {
        return reject(new STATUS_MAP[res.statusCode](payload));
      }
      return resolve(payload.data);
    });
  });
};

/**
 * Dispatches a GET request
 * @param  {String}  path    The path of the API
 * @param  {Object}  [query] The query params
 * @return {Promise}         The response for the request
 */
Dispatcher.prototype.get = function(path, query) {
  var params = {
    method: 'GET',
    url: Dispatcher.url(path),
    json: true
  };
  if (query) {
    params.qs = query;
  }
  return this.dispatch(params);
};

/**
 * Dispatches a POST request
 * @param  {String} path The path of the API
 * @param  {Object} data The data to be sent
 * @return {Promise}     The response for the request
 */
Dispatcher.prototype.post = function(path, data) {
  var params = {
    method: 'POST',
    url: Dispatcher.url(path),
    json: {
      data: data
    }
  };
  return this.dispatch(params);
};

/**
 * Dispatches a PUT request
 * @param  {String} path The path of the API
 * @param  {Object} data The data to be sent
 * @return {Promise}     The response for the request
 */
Dispatcher.prototype.put = function(path, data) {
  var params = {
    method: 'PUT',
    url: Dispatcher.url(path),
    json: {
      data: data
    }
  };
  return this.dispatch(params);
};

/**
 * Dispatches a DELETE request
 * @param  {String} path The path of the API
 * @return {Promise}     The response for the request
 */
Dispatcher.prototype.delete = function(path) {
  var params = {
    method: 'DELETE',
    url: Dispatcher.url(path)
  };
  return this.dispatch(params);
};

module.exports = Dispatcher;