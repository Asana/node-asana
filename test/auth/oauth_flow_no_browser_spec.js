/* global describe */
/* global it */
var assert = require('assert');
var Promise = require('bluebird');
var readline = require('readline');
var rewire = require('rewire');
var sinon = require('sinon');
var OauthFlowNoBrowser = rewire('../../lib/auth/oauth_flow_no_browser');

describe('OauthFlowNoBrowser', function() {

  function createFlow() {
    return new OauthFlowNoBrowser({
      clientId: 'id',
      clientSecret: 'secret'
    });
  }

  describe('#new', function() {
    it('should store options and have default values', function() {
      var flow = new OauthFlowNoBrowser({
        clientId: 'id',
        clientSecret: 'secret'
      });
      assert.equal(flow.redirectUri, 'urn:ietf:wg:oauth:2.0:oob');
      assert.equal(flow.scope, 'default');
      assert.equal(flow.baseUrl, 'https://app.asana.com/');
      assert.equal(flow.clientId, 'id');
      assert.equal(flow.clientSecret, 'secret');
      assert.equal('function', typeof(flow.instructions));
      assert.equal('function', typeof(flow.prompt));
    });
  });

  describe('#run', function() {
    it('should prompt for code and fetch access token', function() {
      var flow = createFlow();
      flow.authorizeUrl = sinon.stub().returns('fake_url');
      flow.promptForCode = sinon.mock().once().returns(Promise.resolve('fake_code'));
      flow.accessToken = sinon.mock().once().returns(Promise.resolve('fake_token'));
      return flow.run().then(function(token) {
        assert.equal(token, 'fake_token');
        flow.promptForCode.verify();
        assert(flow.promptForCode.calledWith('fake_url'));
        flow.accessToken.verify();
        assert(flow.accessToken.calledWith('fake_code'));
      });
    });
  });

  describe('#promptForCode', function() {
    it('should display instructions with url and prompt and resolve to code', function() {
      var flow = createFlow();

      var mockInterface = {
        question: sinon.mock(),
        close: sinon.mock()
      };
      mockInterface.question.once().onFirstCall().callsArgWithAsync(1, 'code');
      mockInterface.close.once();
      var mockReadline = sinon.mock(readline);
      flow.instructions = sinon.stub().returns('instructions');
      flow.prompt = sinon.stub().returns('prompt');
      mockReadline.expects('createInterface').once().returns(mockInterface);

      return flow.promptForCode('url').then(function(code) {
        assert.equal(code, 'code');
        assert(flow.instructions.calledWith('url'));
        mockReadline.verify();
        mockReadline.restore();
      });
    });
  });

  describe('#accessToken', function() {
    it('should make post request for token', function() {
      var request = sinon.mock();
      request.once();
      OauthFlowNoBrowser.__set__('request', request);

      var flow = createFlow();
      flow.tokenUrl = sinon.stub().returns('token_url');
      flow.accessToken('code');

      var params = request.args[0][0];
      assert.equal(params.method, 'POST');
      assert.equal(params.url, 'token_url');
    });

    it('should resolve to token on success', function() {
      var request = sinon.stub();
      OauthFlowNoBrowser.__set__('request', request);
      var flow = createFlow();
      var payload = { access_token: 123 };
      var response = flow.accessToken('code');
      request.callArgWith(
          1, null, { statusCode: 200 }, JSON.stringify(payload));
      return response.then(function(value) {
        assert.deepEqual(value, payload);
      });
    });

    it('should reject with error on failure', function() {
      var request = sinon.stub();
      OauthFlowNoBrowser.__set__('request', request);
      var flow = createFlow();
      var response = flow.accessToken('code');
      request.callArgWith(
          1, 'error', null, 'payload');
      return response.then(function(value) {
        assert(false, 'request should not have succeeded');
      }).catch(function(e) {
        assert.equal(e, 'error');
      });
    });
  });

});