/* jshint browser:true */
var querystring = require('querystring');
var url = require('url');

var NATIVE_REDIRECT_URI = 'urn:ietf:wg:oauth:2.0:oob';
var NATIVE_AUTO_REDIRECT_URI = 'urn:ietf:wg:oauth:2.0:oob:auto';

/**
 * @returns {String} A unique parameter to use as a CSRF token to pass in
 *     the `state` parameter of an Oauth request.
 */
function randomState() {
  return 'asana_' +
    Math.random().toString(36) +
    Date.now().toString(36);
}

/**
 * Parses a URL and returns any Oauth result that may be encoded therein.
 * @param currentUrl {String} Complete URL of a page.
 * @returns {Object|null} Oauth fields found in the hash of the URL, or null
 *     if the URL does not contain a valid hash.
 */
function parseOauthResultFromUrl(currentUrl) {
  var oauthUrl = url.parse(currentUrl);
  return oauthUrl.hash ? querystring.parse(oauthUrl.hash.substr(1)) : null;
}

/**
 * Clean Oauth results out of the current browser URL, for security and
 * cleanliness purposes.
 * @returns {Object|null} Oauth fields found in the hash of the URL, or null
 *     if the URL does not contain a valid hash.
 */
function removeOauthResultFromCurrentUrl() {
  if (window.history && window.history.replaceState) {
    var url = window.location.href;
    var hashIndex = url.indexOf('#');
    window.history.replaceState({},
      document.title, url.substring(0, hashIndex));
  } else {
    window.location.hash = '';
  }
}

module.exports = {
  NATIVE_REDIRECT_URI: NATIVE_REDIRECT_URI,
  NATIVE_AUTO_REDIRECT_URI: NATIVE_AUTO_REDIRECT_URI,
  randomState: randomState,
  parseOauthResultFromUrl: parseOauthResultFromUrl,
  removeOauthResultFromCurrentUrl: removeOauthResultFromCurrentUrl
};