var errors = require('./errors');
var BPromise = require('bluebird');
var request = require('request');

var STATUS_MAP = Object.keys(errors).reduce(function(map, key) {
  var error = new errors[key](null);
  map[error.status] = errors[key];
  return map;
}, {});

/**
 * Creates a dispatcher which will augment the parameters passed to request with
 * the authKey: authValue mutation.
 * @class
 * @classdesc A HTTP wrapper for the Asana API
 * @param {String}          authKey   The key for request authentication
 * @param {(String|Object)} authValue The value for request authentication
 */
function Dispatcher(authKey, authValue) {
  /**
   * The key for the request options hash
   * @type {String}
   */
  this.authKey = authKey;
  /**
   * The value for the request options hash
   * @type {(String|Object)}
   */
  this.authValue = authValue;
  this._plugins = [];
}

/**
 * The root Url for the current version of the Asana API.
 * @type {String}
 */
Dispatcher.ROOT_URL = 'https://app.asana.com/api/1.0';

/**
 * Creates an Asana API Url by concatenating the ROOT_URL with path provided.
 * @param  {String} path The path
 * @return {String}      The url
 */
Dispatcher.url = function(path) {
  return Dispatcher.ROOT_URL + path;
};

/**
 * Adds a plugin to the dispatcher. This can add context for the request.
 * @param {Plugin} plugin The plugin to be added
 */
Dispatcher.prototype.addPlugin = function(plugin) {
  this._plugins.push(plugin);
};

/**
 * Dispatches a request to the Asana API. The request parameters are passed to
 * the request module.
 * @param  {Object}  params The params for request
 * @return {BPromise}        The response for the request
 */
Dispatcher.prototype.dispatch = function(params) {
  params[this.authKey] = this.authValue;
  return new BPromise(function(resolve, reject) {
    request(params, function(err, res, payload) {
      if (err) {
        return reject(err);
      }
      if (STATUS_MAP[res.statusCode]) {
        return reject(new STATUS_MAP[res.statusCode](payload));
      }
      var response = payload.data;
      this._plugins.forEach(function(plugin) {
        this._plugins.transform(this, payload, response);
      });
      return resolve(payload.data);
    });
  });
};

/**
 * Dispatches a GET request to the Asana API.
 * @param  {String}  path    The path of the API
 * @param  {Object}  [query] The query params
 * @return {BPromise}         The response for the request
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
 * Dispatches a POST request to the Asana API.
 * @param  {String} path The path of the API
 * @param  {Object} data The data to be sent
 * @return {BPromise}     The response for the request
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
 * Dispatches a PUT request to the Asana API.
 * @param  {String} path The path of the API
 * @param  {Object} data The data to be sent
 * @return {BPromise}     The response for the request
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
 * Dispatches a DELETE request to the Asana API.
 * @param  {String} path The path of the API
 * @return {BPromise}     The response for the request
 */
Dispatcher.prototype.delete = function(path) {
  var params = {
    method: 'DELETE',
    url: Dispatcher.url(path)
  };
  return this.dispatch(params);
};

module.exports = Dispatcher;