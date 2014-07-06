var Dispatcher = require('./dispatcher');
var resources = require('./resources');

/**
 * Creates an Asana API Client
 * @constructor
 * @param {Dispatcher} dispatcher The request dispatcher to use
 */
function Client(dispatcher) {
  var me = this;
  me.dispatcher = dispatcher;
  Object.keys(resources).forEach(function(key) {
    me[key.toLowerCase()] = new resources[key](me.dispatcher);
  });
}

/**
 * Create a client for basic auth
 * @param  {String} apiKey The Asana Api Key for the user
 * @return {Client}        The instantiated client
 */
Client.basicAuth = function(apiKey) {
  return new Client(new Dispatcher('auth', {
    user: apiKey,
    pass: ''
  }));
};

/**
 * Create a client for OAuth access
 * @param  {String} token The Asana OAuth token for the user
 * @return {Client}       The instantiated client
 */
Client.oauth = function(token) {
  return new Client(new Dispatcher('bearer', token));
};

module.exports = Client;