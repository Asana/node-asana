/* global describe */
/* global it */
var assert = require('assert');
var sinon = require('sinon');
var Dispatcher = require('../lib/dispatcher');
var resources = require('../lib/resources');
var BasicAuthenticator = require('../lib/auth/basic_authenticator');
var OauthAuthenticator = require('../lib/auth/oauth_authenticator');

var rewire = require('rewire');
var Client = rewire('../lib/client');

describe('Client', function() {
  describe('basicAuth', function() {
    it('should return a basic auth client', function() {
      var client = Client.basicAuth('apiKey');
      var authenticator = client.dispatcher.authenticator;
      assert(authenticator instanceof BasicAuthenticator);
      assert.equal(authenticator.apiKey, 'apiKey');
    });
  });

  describe('oauth', function() {

    it('should return an oauth client with autodetected flow by default', function() {
      var autoDetectStub = sinon.stub();
      var FakeFlowType = function(options) { this.options = options; };
      autoDetectStub.returns(FakeFlowType);
      Client.__set__('autoDetect', autoDetectStub);

      var flowOptions = { fakeOption: 'fakeValue' };
      var client = Client.oauth(flowOptions);

      assert(autoDetectStub.called);
      var authenticator = client.dispatcher.authenticator;
      assert(authenticator instanceof OauthAuthenticator);
      assert(authenticator.flow instanceof FakeFlowType);
    });

    it('should return an oauth client with specified flow type', function() {
      var autoDetectStub = sinon.stub();
      var FakeFlowType = function(options) { this.options = options; };
      autoDetectStub.returns(FakeFlowType);
      Client.__set__('autoDetect', autoDetectStub);

      var flowOptions = {
        flowType: FakeFlowType,
        fakeOption: 'fakeValue'
      };
      var client = Client.oauth(flowOptions);

      assert(!autoDetectStub.called);
      var authenticator = client.dispatcher.authenticator;
      assert(authenticator instanceof OauthAuthenticator);
      assert(authenticator.flow instanceof FakeFlowType);
      assert.deepEqual(authenticator.flow.options, flowOptions);
    });
  });

  describe('#new', function() {
    it('should have the dispatcher', function() {
      var dispatcher = new Dispatcher({});
      var client = new Client(dispatcher);
      assert.equal(client.dispatcher, dispatcher);
    });
  });

  describe('#resources', function() {
    Object.keys(resources).forEach(function(key) {
      it('should have ' + key, function() {
        var dispatcher = new Dispatcher({});
        var client = new Client(dispatcher);
        assert(client[key.toLowerCase()]);
      });
    });
  });
});