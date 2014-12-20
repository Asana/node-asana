var readline = require('readline');
var url = require('url');
var util = require('util');
var request = require('request');
var Promise = require('bluebird');
var OauthError = require('./oauth_error');

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
 * @option {String} clientId
 * @option {String} clientSecret
 * @option {String function(String)} [instructions]
 * @option {String function()} [prompt]
 * @constructor
 */
function OauthFlowNoBrowser(options) {
  options = options || {};
  this.redirectUri = 'urn:ietf:wg:oauth:2.0:oob';
  this.scope = 'default';  // only supported scope right now
  this.baseUrl = 'https://app.asana.com/';
  this.clientId = options.clientId;
  this.clientSecret = options.clientSecret;
  this.instructions = options.instructions || defaultInstructions;
  this.prompt = options.prompt || defaultPrompt;
}

/**
 * Run the Oauth flow, prompting the user to go to the authorization URL
 * and enter the code it displays when finished.
 *
 * @return {Promise<Object>} The access token object, which will include
 *     `access_token` and `refresh_token`.
 */
OauthFlowNoBrowser.prototype.run = function() {
  var me = this;
  return me.promptForCode(me.authorizeUrl()).then(function(code) {
    return me.accessToken(code);
  });
};

/**
 * @returns {String} The URL used to authorize the user for the app.
 */
OauthFlowNoBrowser.prototype.authorizeUrl = function() {
  return url.resolve(this.baseUrl, url.format({
    pathname: '/-/oauth_authorize',
    query: {
      client_id: this.clientId,
      response_type: 'code',
      redirect_uri: this.redirectUri,
      scope: this.scope
    }
  }));
};

/**
 * @returns {String} The URL used to convert the authorization code
 *     into a token.
 */
OauthFlowNoBrowser.prototype.tokenUrl = function() {
  return url.resolve(this.baseUrl, '/-/oauth_token');
};

/**
 * @param {String} code An authorization code obtained via the `authorizeUrl`.
 * @return {Promise<Object>} The token, which will include the `access_token`
 *     used for API access, as well as a `refresh_token` which can be stored
 *     to get a new access token without going through the flow again.
 */
OauthFlowNoBrowser.prototype.accessToken = function(code) {
  // TODO: A webserver flow will want to make similar HTTP requests,
  // maybe move this and some other endpoint calls to an OauthClient.
  var params = {
    method: 'POST',
    url: this.tokenUrl(),
    formData: {
      grant_type: 'authorization_code',
      client_id: this.clientId,
      client_secret: this.clientSecret,
      redirect_uri: this.redirectUri,
      code: code
    }
  };
  return new Promise(function(resolve, reject) {
    request(params, function(err, res, payload) {
      if (err) {
        return reject(err);
      }
      if (res.statusCode !== 200) {
        return reject(payload);
      }
      var result = JSON.parse(payload);
      if (result.error) {
        return reject(new OauthError(result));
      } else {
        return resolve(result);
      }
    });
  });
};

/**
 * @return {Promise} The access token, which will include a refresh token
 *     that can be stored in the future to create a client without going
 *     through the Oauth flow.
 */
OauthFlowNoBrowser.prototype.promptForCode = function(url) {
  var me = this;
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(function(resolve, reject) {
    console.log(me.instructions(url));
    rl.question(me.prompt(), function(code) {
      rl.close();
      return resolve(code);
    });
  });
};

module.exports = OauthFlowNoBrowser;
