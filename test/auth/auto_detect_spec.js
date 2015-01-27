/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var rewire = require('rewire');
var autoDetect = rewire('../../lib/auth/auto_detect');
var NativeFlow = require('../../lib/auth/native_flow');
var RedirectFlow = require('../../lib/auth/redirect_flow');
var ChromeExtensionFlow = require('../../lib/auth/chrome_extension_flow');
var Environment = require('../../lib/environment');

describe('autoDetect', function() {
  var sandbox;

  beforeEach(function(){
    sandbox = sinon.sandbox.create();
  });

  afterEach(function(){
    sandbox.restore();
  });

  it('should detect the Native Flow', function() {
    sandbox.stub(Environment, 'isProcess').returns(true);
    sandbox.stub(Environment, 'getProcessEnv').returns(true);
    var flow = autoDetect();
    assert.equal(flow, NativeFlow);
  });

  it('should detect the Redirect Flow', function() {
    sandbox.stub(Environment, 'isWindow').returns(true);
    sandbox.stub(Environment, 'getWindowNavigator').returns(true);
    var flow = autoDetect();
    assert.equal(flow, RedirectFlow);
  });

  it('should detect the Chrome Extension Flow', function() {
    sandbox.stub(Environment, 'isChrome').returns(true);
    sandbox.stub(Environment, 'getChromeRuntime').returns({id: true});
    sandbox.stub(Environment, 'getChromeTabs').returns({create: true});

    var flow = autoDetect();
    assert.equal(flow, ChromeExtensionFlow);
  });

});