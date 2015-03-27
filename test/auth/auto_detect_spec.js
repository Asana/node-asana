/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var rewire = require('rewire');
var autoDetect = rewire('../../lib/auth/auto_detect');
var NativeFlow = require('../../lib/auth/native_flow');
var RedirectFlow = require('../../lib/auth/redirect_flow');
var ChromeExtensionFlow = require('../../lib/auth/chrome_extension_flow');

describe('autoDetect', function() {
  var sandbox;

  beforeEach(function(){
    sandbox = sinon.sandbox.create();
  });

  afterEach(function(){
    sandbox.restore();
  });

  it('should detect the Native Flow', function() {
    var env = {
      process: {
        env: {}
      }
    };
    var flow = autoDetect(env);
    assert.equal(flow, NativeFlow);
  });

  it('should detect the Redirect Flow', function() {
    var env = {
      window: {
        navigator: {}
      }
    };
    var flow = autoDetect(env);
    assert.equal(flow, RedirectFlow);
  });

  it('should detect the Chrome Extension Flow', function() {
    var env = {
      chrome: {
        runtime: {id: true},
        tabs: {create: {}}
      }
    };

    var flow = autoDetect(env);
    assert.equal(flow, ChromeExtensionFlow);
  });

  it('should return null for unsupported Chrome packaged app', function(){
    var env = {
      chrome: {
        runtime: {id: true}
      }
    };

    var flow = autoDetect(env);
    assert.equal(flow, null);
  });

  it('should return null if no type could be determined', function() {
    var flow = autoDetect({});
    assert.equal(flow, null);
  });

});
