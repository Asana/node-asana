var Dispatcher = require('./dispatcher');
var resources = require('./resources');
var BasicAuthenticator = require('./auth/basic_authenticator');
var OauthAuthenticator = require('./auth/oauth_authenticator');
var App = require('./auth/app');
var autoDetect = require('./auth/auto_detect');
var paging = require('./util/paging.js');
var ResourceStream = require('./util/resource_stream.js');

/**
 * Constructs a Client with instances of all the resources using the dispatcher.
 * It also keeps a reference to the dispatcher so that way the end user can have
 * access to it.
 * @class
 * @classdesc A wrapper for the Asana API which is authenticated for one user
 * @param {Dispatcher} dispatcher The request dispatcher to use
 * @param {Object} options        Options to configure the client
 * @param {String} [clientId]     ID of the client, required for Oauth
 * @param {String} [clientSecret] Secret key, for some Oauth flows
 * @param {String} [redirectUri]  Default redirect URI for this client
 * @param {String} [asanaBaseUrl] Base URL for Asana, for debugging
 */
function Client(dispatcher, options) {
  options = options || {};
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

  // Store off Oauth info.
  this.app = new App(options);
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
  });
};

/**
 * Configure the Client to use a user's API Key and then authenticate
 * through HTTP Basic Authentication. This should only be done for testing,
 * as requests using Oauth can provide more security, higher rate limits, and
 * more features.
 * @param  {String} apiKey The Asana Api Key of the user
 * @return {Client}        this
 */
Client.prototype.useBasicAuth = function(apiKey) {
  this.dispatcher.setAuthenticator(new BasicAuthenticator(apiKey));
  return this;
};

/**
 * Configure the client to authenticate via Oauth. Credentials can be
 * supplied, or they can be obtained by running an Oauth flow.
 * @param  {Object} options Options for Oauth. Includes any options for
 *     the selected flow.
 * @option {Function} [flowType]  Type of OauthFlow to use to obtain user
 *     authorization. Defaults to autodetect based on environment.
 * @option {Object} [credentials] Credentials to use; no flow required to
 *     obtain authorization. This object should at a minimum contain an
 *     `access_token` string field.
 * @return {Client}               this
 */
Client.prototype.useOauth = function(options) {
  options = options || {};
  options.app = this.app;

  var FlowType = options.flowType || autoDetect();
  // If there are no credentials, then we can't proceed without a flow.
  if (!options.credentials && FlowType === null) {
    throw new Error('Could not autodetect Oauth flow type');
  }
  var flow = new FlowType(options);
  var authenticator = new OauthAuthenticator({
    app: this.app,
    credentials: options.credentials,
    flow: flow
  });

  this.dispatcher.setAuthenticator(authenticator);
  return this;
};

/**
 * Get the next page of results in a collection.
 *
 * @param {Object} response Full payload from a response to a
 *     collection request.
 * @param {Object} [dispatchOptions]
 */
Client.prototype.nextPage = function(response, dispatchOptions) {
  return paging.nextPage(response, this.dispatcher, dispatchOptions);
};

/**
 * Given a promise for a collection request, return a stream for all the
 * remaining elements in the collection. It will automatically fetch
 * more pages as needed.
 *
 * @param {Promise} promise        A promise previously returned by a client
 *     request for a collection of objects.
 * @param {Object} dispatchOptions Options for the dispatcher on subsequent
 *     requests.
 */
Client.prototype.stream = function(promise, dispatchOptions) {
  return new ResourceStream(this.dispatcher, promise, dispatchOptions);
};

/**
 * Creates a new client.
 * @param {Object} options Options for specifying the client, see constructor.
 */
Client.create = function(options) {
  options = options || {};
  return new Client(
      new Dispatcher({
        asanaBaseUrl: options.asanaBaseUrl
      }),
      options);
};

module.exports = Client;