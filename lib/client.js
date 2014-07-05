var Dispatcher = require('./dispatcher');

/**
 * Creates an Asana API Client
 * 
 * @param {Dispatcher} dispatcher The request dispatcher to use
 */
function Client(dispatcher) {
  this.dispatcher = dispatcher;
}

/**
 * Create a client for basic auth
 * 
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
 * 
 * @param  {String} tokeb The Asana OAuth token for the user
 * @return {Client}       The instantiated client
 */
Client.oauth = function(token) {
  return new Client(new Dispatcher('bearer', token));
};

module.exports = Client;