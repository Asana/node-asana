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
  /**
   * The internal dispatcher. This is mostly used by the resources but provided
   * for custom requests to the API or API features that have not yet been added
   * to the client.
   * @type {Dispatcher}
   */
  this.dispatcher = dispatcher;
  /**
   * An instance of the Attachments resource.
   * @type {Attachments}
   */
  this.attachments = new resources.Attachments(this.dispatcher);
  /**
   * An instance of the Events resource.
   * @type {Events}
   */
  this.events = new resources.Events(this.dispatcher);
  /**
   * An instance of the Projects resource.
   * @type {Projects}
   */
  this.projects = new resources.Projects(this.dispatcher);
  /**
   * An instance of the Stories resource.
   * @type {Stories}
   */
  this.stories = new resources.Stories(this.dispatcher);
  /**
   * An instance of the Tags resource.
   * @type {Tags}
   */
  this.tags = new resources.Tags(this.dispatcher);
  /**
   * An instance of the Tasks resource.
   * @type {Tasks}
   */
  this.tasks = new resources.Tasks(this.dispatcher);
  /**
   * An instance of the Teams resource.
   * @type {Teams}
   */
  this.teams = new resources.Teams(this.dispatcher);
  /**
   * An instance of the Users resource.
   * @type {Users}
   */
  this.users = new resources.Users(this.dispatcher);
  /**
   * An instance of the Workspaces resource.
   * @type {Workspaces}
   */
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
  return new Client(new Dispatcher('auth', {
    bearer: token
  }));
};

module.exports = Client;