/* jshint browser:true */
var util = require('util');
var oauthUtil = require('./oauth_util');
var Bluebird = require('bluebird');
var BaseBrowserFlow = require('./base_browser_flow');
var OauthError = require('./oauth_error');

/**
 * An Oauth flow that runs in the browser and requests user authorization by
 * popping up a window and prompting the user.
 * @param {Object} options See `BaseBrowserFlow` for options.
 * @constructor
 */
function PopupFlow(options) {
  BaseBrowserFlow.call(this, options);
  this._authorizationPromise = null;
}

util.inherits(PopupFlow, BaseBrowserFlow);

PopupFlow.prototype.startAuthorization = function(authUrl, state) {
  var me = this;
  me._authorizationPromise = new Bluebird(function(resolve, reject) {
    var listener = function(event) {
      var receivedUrl;
      try {
        receivedUrl = event.data.receivedUrl;
      } catch (e) {}
      if (receivedUrl) {
        // Every request should have a unique `state` parameter.
        // We can key off of that to determine whether this request was
        // intended for this window.
        var params = oauthUtil.parseOauthResultFromUrl(receivedUrl);
        if (params.state === state) {
          state = null; // don't ever respond to again
          window.removeEventListener('message', listener, false);
          if (params.error) {
            reject(new OauthError(params));
          } else {
            resolve(params);
          }
        }
      }
    };
    window.addEventListener('message', listener, false);
    var popup = window.open(authUrl, 'asana_oauth', me._popupParams(800, 600));

    // Detect popup blocking and fail.
    if (!popup || popup.outerHeight === 0) {
      window.removeEventListener('message', listener, false);
      reject(new Error('Popup blocked by browser'));
    }

    // Listen for when window is closed so we don't hang forever
    var timer = setInterval(function() {
      if (popup.closed) {
        clearInterval(timer);
      }
    });
  });
  return Promise.resolve();
};

PopupFlow.prototype.finishAuthorization = function() {
  return this._authorizationPromise;
};

PopupFlow.prototype._popupParams = function(popupWidth, popupHeight) {
  var left = window.screenX || window.screenLeft || 0;
  var top = window.screenY || window.screenTop || 0;
  var width = window.outerWidth || document.documentElement.clientWidth;
  var height = window.outerHeight || document.documentElement.clientHeight;

  var popupLeft = Math.max(left, Math.round(left + (width - popupWidth) / 2));
  var popupTop = Math.max(top, Math.round(top + (height - popupHeight) / 2.5));

  return util.format(
    'left=%d,top=%d,' +
    'width=%d,height=%d,' +
    'dialog=yes,dependent=yes,scrollbars=yes,location=yes',
    popupLeft, popupTop, popupWidth, popupHeight);
};

PopupFlow.runReceiver = function() {
  window.addEventListener('load', function() {
    var currentUrl = window.location.href;
    oauthUtil.removeOauthResultFromCurrentUrl();
    var opener = window.opener;
    if (window.parent !== window.top) {
      opener = opener || window.parent;
    }
    if (window.opener) {
      console.log('Posting message', currentUrl, window.location.origin);
      opener.postMessage({
        receivedUrl: currentUrl
      }, window.location.origin);
      window.close();
    } else {
      console.log('No opener found for this window, not sending message');
    }
  }, false);
};

module.exports = PopupFlow;