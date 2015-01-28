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
        env: sandbox.stub().returns(true)
      }
    };
    var flow = autoDetect(env);
    assert.equal(flow, NativeFlow);
  });

  it('should detect the Redirect Flow', function() {
    var env = {
      window: {
        navigator: sandbox.stub().returns({id: true})
      }
    };
    var flow = autoDetect(env);
    assert.equal(flow, RedirectFlow);
  });

  it('should detect the Chrome Extension Flow', function() {
    var env = {
      chrome: {
        runtime: sandbox.stub().returns({id: true}),
        tabs: sandbox.stub().returns({create: true})
      }
    };

    var flow = autoDetect(env);
    assert.equal(flow, ChromeExtensionFlow);
  });

});