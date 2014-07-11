/** @module client */
var Dispatcher = require('./dispatcher');
var resources = require('./resources');

/**
 * Constructs a Client with instances of all the resources using the dispatcher.
 * It also keeps a reference to the dispatcher so that way the end user can have
 * access to it.
 * @class
 * @classdesc A wrapper for the Asana API which is authenticated for one user
 * @param {Dispatcher} dispatcher The request dispatcher to use
 */
function Client(dispatcher) {
  /** @member {Dispatcher} */
  this.dispatcher = dispatcher;
  /** @member {Attachments} */
  this.attachments = new resources.Attachments(this.dispatcher);
  /** @member {Projects} */
  this.projects = new resources.Projects(this.dispatcher);
  /** @member {Stories} */
  this.stories = new resources.Stories(this.dispatcher);
  /** @member {Tags} */
  this.tags = new resources.Tags(this.dispatcher);
    /** @member {Tasks} */
  this.tasks = new resources.Tasks(this.dispatcher);
  /** @member {Teams} */
  this.teams = new resources.Teams(this.dispatcher);
  /** @member {Users} */
  this.users = new resources.Users(this.dispatcher);
  /** @member {Workspaces} */
  this.workspaces = new resources.Workspaces(this.dispatcher);
}

/**
 * Creates a Client for a user using that user's API Key and then authenticates
 * through HTTP Basic Authentication. This is probably the easier method for
 * command line scripts or bot like integrations. Handling "real" users should
 * be preferably done with OAuth.
 * @param  {String} apiKey The Asana Api Key of the user
 * @return {Client}        The instantiated client
 */
Client.basicAuth = function(apiKey) {
  return new Client(new Dispatcher('auth', {
    user: apiKey,
    pass: ''
  }));
};

/**
 * Creates a Client for the user using that user's OAuth token that is granted
 * to the application. This library does not support handling the OAuth flow but
 * libraries like passport-asana or others than handle that flow are excellent
 * options.
 * @param  {String} token The Asana OAuth token of the user
 * @return {Client}       The instantiated client
 */
Client.oauth = function(token) {
  return new Client(new Dispatcher('bearer', token));
};

module.exports = Client;