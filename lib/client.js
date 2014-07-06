var Dispatcher = require('./dispatcher');
var resources = require('./resources');

/**
 * Creates an Asana API Client
 * @constructor
 * @param {Dispatcher} dispatcher The request dispatcher to use
 */
function Client(dispatcher) {
  /** @member {Dispatcher} **/
  this.dispatcher = dispatcher;
  /** @member {Teams} **/
  this.teams = new resources.Teams(this.dispatcher);
  /** @member {Users} **/
  this.users = new resources.Users(this.dispatcher);
  /** @member {Workspaces} **/
  this.workspaces = new resources.Workspaces(this.dispatcher);
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