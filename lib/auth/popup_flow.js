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

  var popup, popupTimer, listener;
  function cleanup() {
    if (popup && popupTimer) {
      clearInterval(popupTimer);
      popupTimer = null;
    }
    if (listener) {
      window.removeEventListener('message', listener, false);
      listener = null;
    }
  }

  me._authorizationPromise = new Bluebird(function(resolve, reject) {
    listener = function(event) {
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
          cleanup();
          if (params.error) {
            reject(new OauthError(params));
          } else {
            resolve(params);
          }
        }
      }
    };
    window.addEventListener('message', listener, false);
    popup = window.open(authUrl, 'asana_oauth', me._popupParams(800, 600));

    // Detect popup blocking and fail.
    if (!popup) {
      cleanup();
      reject(new OauthError({
        'error': 'access_denied',
        'error_description': 'The popup window containing the ' +
            'authorization UI was blocked by the browser.'
      }));
      return;
    }

    // Detect popup closure (which may not be handled by the content, because
    // it may never load) and fail. If the popup posts a message to us, we
    // SHOULD get that message before it closes and this interval fires,
    // but just in case we wait for two successive intervals.
    var seenClosed = false;
    popupTimer = setInterval(function() {
      if (popup.closed) {
        if (seenClosed) {
          cleanup();
          reject(new OauthError({
            'error': 'access_denied',
            'error_description': 'The popup window containing the ' +
                'authorization UI was closed by the user.'
          }));
        } else {
          seenClosed = true;
        }
      }
    }, 500);
  });
  return Bluebird.resolve();
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