/* jshint browser: true */
/* global chrome */
var util = require('util');
var oauthUtil = require('./oauth_util');
var BaseBrowserFlow = require('./base_browser_flow');
var OauthError = require('./oauth_error');
var Bluebird = require('bluebird');

/**
 * An Oauth flow that runs in a Chrome browser extension and requests user
 * authorization by opening a temporary tab to prompt the user.
 * @param {Object} options See `BaseBrowserFlow` for options, plus the below:
 * @options {String} [receiverPath] Full path and filename from the base
 *     directory of the extension to the receiver page. This is an HTML file
 *     that has been made web-accessible, and that calls the receiver method
 *     `Asana.auth.ChromeExtensionFlow.runReceiver();`.
 * @constructor
 */
function ChromeExtensionFlow(options) {
  BaseBrowserFlow.call(this, options);
  this._authorizationPromise = null;
  this._receiverUrl = chrome.runtime.getURL(
      options.receiverPath || 'asana_oauth_receiver.html');
}

util.inherits(ChromeExtensionFlow, BaseBrowserFlow);

ChromeExtensionFlow.prototype.receiverUrl = function() {
  return this._receiverUrl;
};

ChromeExtensionFlow.prototype.startAuthorization = function(authUrl, state) {
  var me = this;
  var receiverTabId = null;
  me._authorizationPromise = new Bluebird(function(resolve, reject) {
    var listener = function(message, sender) {
      // The message must come from our receiver window, which would have a URL
      // that is our receiver URL, plus a hash with some oauth results in it.
      if (!sender || !sender.tab || sender.tab.id !== receiverTabId ||
          sender.tab.url.substring(0, me._receiverUrl.length) !==
              me._receiverUrl) {
        return;
      }
      var receivedUrl = message.receivedUrl;
      if (receivedUrl) {
        // Every request should have a unique `state` parameter.
        // We can key off of that to determine whether this request was
        // intended for this window.
        var params = oauthUtil.parseOauthResultFromUrl(receivedUrl);
        if (params.state === state) {
          state = null;  // don't ever respond to again
          var dummyError;
          chrome.tabs.remove(receiverTabId, function() {
            // Calling the `lastError` getter will silence a warning we get
            // in case the tab has already closed.
            dummyError = chrome.runtime.lastError;
          });
          chrome.runtime.onMessage.removeListener(listener);
          if (params.error) {
            reject(new OauthError(params));
          } else {
            resolve(params);
          }
        }
      }
    };
    chrome.runtime.onMessage.addListener(listener);
    chrome.tabs.create({
      url: authUrl,
      active: true
    }, function(tab) {
      receiverTabId = tab.id;
    });
  });
  return Bluebird.resolve();
};

ChromeExtensionFlow.prototype.finishAuthorization = function() {
  return this._authorizationPromise;
};

/**
 * Runs the receiver code to send the Oauth result to the requesting tab.
 */
ChromeExtensionFlow.runReceiver = function() {
  window.addEventListener('load', function() {
    var currentUrl = window.location.href;
    oauthUtil.removeOauthResultFromCurrentUrl();
    chrome.runtime.sendMessage({ receivedUrl: currentUrl });
    window.close();
  }, false);
};

module.exports = ChromeExtensionFlow;
