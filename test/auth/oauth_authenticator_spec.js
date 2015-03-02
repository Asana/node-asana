/* jshint mocha:true */
var assert = require('assert');
var rewire = require('rewire');
var sinon = require('sinon');
var OauthAuthenticator = rewire('../../lib/auth/oauth_authenticator');
var BaseBrowserFlow = rewire('../../lib/auth/base_browser_flow');
var Bluebird = require('bluebird');

describe('OauthAuthenticator', function() {

  describe('#new', function() {

    it('should have default values for options', function() {
      var oauthAuthenticator = new OauthAuthenticator({});
      assert.equal(oauthAuthenticator.credentials, null);
      assert.equal(oauthAuthenticator.flow, null);
    });

    it('should store access token string as credentials', function() {
      var oauthAuthenticator = new OauthAuthenticator({
        credentials: 'token'
      });
      assert.deepEqual(oauthAuthenticator.credentials,
        {'access_token': 'token'});
      assert.equal(oauthAuthenticator.flow, null);
    });

    it('should store access token object as credentials', function() {
      var oauthAuthenticator = new OauthAuthenticator({
        credentials: {'token_id': 'token_value'}
      });
      assert.deepEqual(oauthAuthenticator.credentials,
        {'token_id': 'token_value'});
      assert.equal(oauthAuthenticator.flow, null);
    });

    it('should store a flow', function() {
      var baseFlow = new BaseBrowserFlow({});
      var oauthAuthenticator = new OauthAuthenticator({
        flow: baseFlow
      });
      assert.equal(oauthAuthenticator.flow, baseFlow);
    });

  });

  describe('#authenticateRequest', function() {

    it('should throw an error if credentials are null', function() {
      var oauthAuthenticator = new OauthAuthenticator({});
      assert.throws(oauthAuthenticator.authenticateRequest, Error);
    });

    it('should add auth to request', function() {
      var oauthAuthenticator = new OauthAuthenticator({
        credentials: 'token'
      });
      var request = oauthAuthenticator.authenticateRequest({});
      assert.equal(request.headers.Authorization, 'Bearer token');
    });
  });

  describe('#ensureCredentials', function() {

    it('should return a resolved Promise when using access token', function(){
      var oauthAuthenticator = new OauthAuthenticator({
        credentials: 'token'
      });
      var p = oauthAuthenticator.establishCredentials();
      assert.equal(true, p.isResolved());
      // Check if we've stored the credentials correctly.
      assert.deepEqual(
        {'access_token': 'token'},
        oauthAuthenticator.credentials
      );
    });

    it('should run the flow to update credentials', function(){
      var flowStub = sinon.createStubInstance(BaseBrowserFlow);
      flowStub.run.returns(Bluebird.resolve('updated_credentials'));
      var oauthAuthenticator = new OauthAuthenticator({flow: flowStub});
      return oauthAuthenticator.establishCredentials().then(function() {
        assert.equal('updated_credentials', oauthAuthenticator.credentials);
      });
    });

  });

});