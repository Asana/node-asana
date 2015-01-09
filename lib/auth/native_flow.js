var readline = require('readline');
var Bluebird = require('bluebird');
var oauthUtil = require('./oauth_util');

/**
 * Default function to return instructions for the user to authorize the app.
 * Written to stdout during `run`.
 * @param {String} url The authorization URL
 * @returns {String} Instructions for the user
 */
function defaultInstructions(url) {
  return [
    '* * * * * * * * * * * * * * * * * * * * * * * * * * *',
    'Please open a browser to the url:',
    '',
    url,
    '',
    'and follow the prompts to authorize this application.',
    '* * * * * * * * * * * * * * * * * * * * * * * * * * *'
  ].join('\n');
}

/**
 * Default function to return the prompt for the user to enter the
 * authorization code. Written to stdout immediately preceding keyboard input
 * during `run`.
 * @returns {String} A message to prompt the user to enter the code.
 */
function defaultPrompt() {
  return 'Enter the code here: ';
}

/**
 * An Oauth flow that can be run from the console or an app that does
 * not have the ability to open and manage a browser on its own.
 * @param {Object} options
 * @option {App} app App to authenticate for
 * @option {String function(String)} [instructions] Function returning the
 *     instructions to output to the user. Passed the authorize url.
 * @option {String function()} [prompt] String to output immediately before
 *     waiting for a line from stdin.
 * @constructor
 */
function NativeFlow(options) {
  this.app = options.app;
  this.instructions = options.instructions || defaultInstructions;
  this.prompt = options.prompt || defaultPrompt;
  this.redirectUri = oauthUtil.NATIVE_REDIRECT_URI;
}

/**
 * Run the Oauth flow, prompting the user to go to the authorization URL
 * and enter the code it displays when finished.
 *
 * @return {Promise<Object>} The access token object, which will include
 *     `access_token` and `refresh_token`.
 */
NativeFlow.prototype.run = function() {
  var me = this;
  return me.promptForCode(me.authorizeUrl()).then(function(code) {
    return me.accessToken(code);
  });
};

/**
 * @returns {String} The URL used to authorize the user for the app.
 */
NativeFlow.prototype.authorizeUrl = function() {
  return this.app.asanaAuthorizeUrl({
    redirectUri: this.redirectUri
  });
};

/**
 * @param {String} code An authorization code obtained via `asanaAuthorizeUrl`.
 * @return {Promise<Object>} The token, which will include the `access_token`
 *     used for API access, as well as a `refresh_token` which can be stored
 *     to get a new access token without going through the flow again.
 */
NativeFlow.prototype.accessToken = function(code) {
  return this.app.accessTokenFromCode(code, {
    redirectUri: this.redirectUri
  });
};

/**
 * @return {Promise} The access token, which will include a refresh token
 *     that can be stored in the future to create a client without going
 *     through the Oauth flow.
 */
NativeFlow.prototype.promptForCode = function(url) {
  var me = this;
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Bluebird(function(resolve) {
    console.log(me.instructions(url));
    rl.question(me.prompt(), function(code) {
      rl.close();
      return resolve(code);
    });
  });
};

module.exports = NativeFlow;