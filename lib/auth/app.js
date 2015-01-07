/**
 * An abstraction around an App used with Asana.
 *
 * @options {Object} Options to construct the app
 * @option {String} clientId       The ID of the app
 * @option {String} [clientSecret] The secret key, if available here
 * @option {String} [redirectUri]  The default redirect URI
 * @option {String} [asanaBaseUrl] Base URL to use for Asana, for debugging
 * @constructor
 */
function App(options) {
  this.clientId = options.clientId;
  this.clientSecret = options.clientSecret || null;
  this.redirectUri = options.redirectUri || null;
  this.scope = 'default';  // The only supported scope right now
  this.asanaBaseUrl = options.asanaBaseUrl || 'https://app.asana.com/';
}

module.exports = App;
