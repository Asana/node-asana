var errors = require('./errors');
var Bluebird = require('bluebird');
var request = require('request');

var STATUS_MAP = Object.keys(errors).reduce(function(map, key) {
  var error = new errors[key](null);
  if (error.status) {
    map[error.status] = errors[key];
  }
  return map;
}, {});

// TODO: Provide same set of options for each request as for configuration,
// so the config at construction time is just the "defaults"
// TODO: remove `fullPayload` option, and let callers unwrap `data`

/**
 * Creates a dispatcher which will augment the parameters passed to request with
 * the authKey: authValue mutation.
 * @class
 * @classdesc A HTTP wrapper for the Asana API
 * @param {Object} options for default behavior of the Dispatcher
 * @option {Authenticator} [authenticator] Object to use for authentication.
 *     Can also be set later with `setAuthenticator`.
 * @option {String} [retryOnRateLimit] Automatically handle `RateLimitEnforced`
 *     errors by sleeping and retrying after the waiting period.
 * @option {String} [asanaBaseUrl] Base URL for Asana, for debugging
 */
function Dispatcher(options) {
  options = options || {};
  /**
   * The object to use to handle authentication.
   * @type {Authenticator}
   */
  this.authenticator = options.authenticator || null;
  /**
   * The base URL for Asana
   * @type {String}
   */
  this.asanaBaseUrl = options.asanaBaseUrl || 'https://app.asana.com/';
  /**
   * Whether requests should be automatically retried if rate limited.
   * @type {Boolean}
   */
  this.retryOnRateLimit = options.retryOnRateLimit || false;
}

/**
 * The relative API path for the current version of the Asana API.
 * @type {String}
 */
Dispatcher.API_PATH = 'api/1.0';

/**
 * Creates an Asana API Url by concatenating the ROOT_URL with path provided.
 * @param  {String} path The path
 * @return {String}      The url
 */
Dispatcher.prototype.url = function(path) {
  return this.asanaBaseUrl + Dispatcher.API_PATH + path;
};

/**
 * Configure the authentication mechanism to use.
 * @returns {Dispatcher} this
 */
Dispatcher.prototype.setAuthenticator = function(authenticator) {
  this.authenticator = authenticator;
  return this;
};

/**
 * Ensure the dispatcher is authorized to make requests. Call this before
 * making any API requests.
 *
 * @returns {Promise} Resolves when the dispatcher is authorized, rejected if
 *     there was a problem authorizing.
 */
Dispatcher.prototype.authorize = function() {
  if (this.authenticator === null) {
    throw new Error('No authenticator configured for dispatcher');
  }
  return this.authenticator.ensureCredentials();
};

/**
 * Dispatches a request to the Asana API. The request parameters are passed to
 * the request module.
 * @param  {Object}  params The params for request
 * @param  {Object}  [dispatchOptions] Options for handling request/response:
 *     [boolean] fullPayload Return the full JSON payload instead of just the
 *         inner `data` field.
 * @return {Promise}        The response for the request
 */
Dispatcher.prototype.dispatch = function(params, dispatchOptions) {
  var me = this;
  dispatchOptions = dispatchOptions || {};

  if (me.authenticator !== null) {
    me.authenticator.authenticateRequest(params);
  }

  return new Bluebird(function (resolve, reject) {
    function doRequest() {
      request(params, function(err, res, payload) {
        if (err) {
          return reject(err);
        }
        if (STATUS_MAP[res.statusCode]) {
          var error = new STATUS_MAP[res.statusCode](payload);
          if (me.retryOnRateLimit &&
              error instanceof (errors.RateLimitEnforced)) {
            // Delay a half-second more in case of rounding error.
            // TODO: verify Asana is always being conservative with duration
            setTimeout(doRequest, error.retryAfterSeconds * 1000 + 500);
          } else {
            return reject(error);
          }
        } else {
          return resolve(dispatchOptions.fullPayload ? payload : payload.data);
        }
      });
    }
    doRequest();
  });
};

/**
 * Dispatches a GET request to the Asana API.
 * @param  {String}  path    The path of the API
 * @param  {Object}  [query] The query params
 * @param  {Object}  [dispatchOptions] Options for handling the request and
 *     response. See `dispatch`.
 * @return {Promise}         The response for the request
 */
Dispatcher.prototype.get = function(path, query, dispatchOptions) {
  var params = {
    method: 'GET',
    url: this.url(path),
    json: true
  };
  if (query) {
    params.qs = query;
  }
  return this.dispatch(params, dispatchOptions);
};

/**
 * Dispatches a POST request to the Asana API.
 * @param  {String} path The path of the API
 * @param  {Object} data The data to be sent
 * @param  {Object}  [dispatchOptions] Options for handling the request and
 *     response. See `dispatch`.
 * @return {Promise}     The response for the request
 */
Dispatcher.prototype.post = function(path, data, dispatchOptions) {
  var params = {
    method: 'POST',
    url: this.url(path),
    json: {
      data: data
    }
  };
  return this.dispatch(params, dispatchOptions);
};

/**
 * Dispatches a PUT request to the Asana API.
 * @param  {String} path The path of the API
 * @param  {Object} data The data to be sent
 * @param  {Object}  [dispatchOptions] Options for handling the request and
 *     response. See `dispatch`.
 * @return {Promise}     The response for the request
 */
Dispatcher.prototype.put = function(path, data, dispatchOptions) {
  var params = {
    method: 'PUT',
    url: this.url(path),
    json: {
      data: data
    }
  };
  return this.dispatch(params, dispatchOptions);
};

/**
 * Dispatches a DELETE request to the Asana API.
 * @param  {String} path The path of the API
 * @param  {Object}  [dispatchOptions] Options for handling the request and
 *     response. See `dispatch`.
 * @return {Promise}     The response for the request
 */
Dispatcher.prototype.delete = function(path, dispatchOptions) {
  var params = {
    method: 'DELETE',
    url: this.url(path)
  };
  return this.dispatch(params, dispatchOptions);
};

module.exports = Dispatcher;
