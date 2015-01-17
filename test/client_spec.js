/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Dispatcher = require('../lib/dispatcher');
var resources = require('../lib/resources');
var BasicAuthenticator = require('../lib/auth/basic_authenticator');
var OauthAuthenticator = require('../lib/auth/oauth_authenticator');

var rewire = require('rewire');
var Client = rewire('../lib/client');

describe('Client', function() {
  describe('create', function() {
    it('should create a client without authenticator', function() {
      var client = Client.create();
      assert.equal(client.authenticator, null);
    });
    it('should pass through base URL to dispatcher', function() {
      var client = Client.create({
        asanaBaseUrl: 'fake_url'
      });
      assert.equal(client.dispatcher.asanaBaseUrl, 'fake_url');
    });
  });

  describe('#new', function() {
    it('should have the dispatcher', function() {
      var dispatcher = new Dispatcher();
      var client = new Client(dispatcher);
      assert.equal(client.dispatcher, dispatcher);
    });
  });

  describe('#useBasicAuth', function() {
    it('should add basic auth to client', function() {
      var client = Client.create().useBasicAuth('apiKey');
      var authenticator = client.dispatcher.authenticator;
      assert(authenticator instanceof BasicAuthenticator);
      assert.equal(authenticator.apiKey, 'apiKey');
    });
  });

  describe('#useOauth', function() {

    it('should return an oauth client with autodetected flow by default',
      function() {
        var autoDetectStub = sinon.stub();
        var FakeFlowType = function(options) {
          this.options = options;
        };
        autoDetectStub.returns(FakeFlowType);
        Client.__set__('autoDetect', autoDetectStub);

        var flowOptions = {
          fakeOption: 'fakeValue'
        };
        var client = Client.create().useOauth(flowOptions);

        assert(autoDetectStub.called);
        var authenticator = client.dispatcher.authenticator;
        assert(authenticator instanceof OauthAuthenticator);
        assert(authenticator.flow instanceof FakeFlowType);
      });

    it('should return an oauth client with specified flow type', function() {
      var autoDetectStub = sinon.stub();
      var FakeFlowType = function(options) {
        this.options = options;
      };
      autoDetectStub.returns(FakeFlowType);
      Client.__set__('autoDetect', autoDetectStub);

      var flowOptions = {
        flowType: FakeFlowType,
        fakeOption: 'fakeValue'
      };
      var client = Client.create().useOauth(flowOptions);

      assert(!autoDetectStub.called);
      var authenticator = client.dispatcher.authenticator;
      assert(authenticator instanceof OauthAuthenticator);
      assert(authenticator.flow instanceof FakeFlowType);
      assert.deepEqual(authenticator.flow.options, flowOptions);
    });
  });

  describe('#resources', function() {
    Object.keys(resources).forEach(function(key) {
      if (key === 'Resource') {
        return;
      }
      it('should have ' + key, function() {
        var dispatcher = new Dispatcher({});
        var client = new Client(dispatcher);
        assert(client[key.toLowerCase()]);
      });
    });
  });
});