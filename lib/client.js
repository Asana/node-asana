var Dispatcher = require('./dispatcher');
var resources = require('./resources');
var BasicAuthenticator = require('./auth/basic_authenticator');
var OauthAuthenticator = require('./auth/oauth_authenticator');
var autoDetect = require('./auth/auto_detect');

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
 * Ensures the client is authorized to make requests. Kicks off the
 * configured Oauth flow, if any.
 *
 * @returns {Promise<Client>} A promise that resolves to this client when
 *     authorization is complete.
 */
Client.prototype.authorize = function() {
  var me = this;
  return me.dispatcher.authorize().then(function() {
    return me;
  })
};

/**
 * Creates a Client for a user using that user's API Key and then authenticates
 * through HTTP Basic Authentication. This should only be done for testing,
 * as requests using Oauth provide more security, higher rate limits, and
 * more features.
 * @param  {String} apiKey The Asana Api Key of the user
 * @return {Client}        The instantiated client
 */
Client.basicAuth = function(apiKey) {
  return new Client(new Dispatcher(new BasicAuthenticator(apiKey)));
};

/**
 * Creates a Client for the user that authenticates via Oauth. Authorization
 * will be obtained by running an Oauth flow.
 * @param  {Object} options Options for the client. Includes any options for
 *     the selected flow.
 * @option {Function} [flowType] Type of OauthFlow to use to obtain user
 *     authorization. Defaults to autodetect based on environment.
 * @option {
 * @return {Client} The instantiated client
 */
Client.oauth = function(options) {
  var flowType = options.flowType || autoDetect();
  if (flowType === null) {
    throw new Error("Could not autodetect Oauth flow type");
  }
  var flow = new flowType(options);
  return new Client(
      new Dispatcher(
          new OauthAuthenticator({ flow: flow }),
          options));
};


module.exports = Client;