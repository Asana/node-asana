/* jshint mocha:true */
var assert = require('assert');
var Bluebird = require('bluebird');
var readline = require('readline');
var sinon = require('sinon');
var App = require('../../lib/auth/app');
var NativeFlow = require('../../lib/auth/native_flow');

describe('NativeFlow', function() {

  function createFlow() {
    return new NativeFlow({
      app: new App({
        clientId: 'id',
        clientSecret: 'secret'
      })
    });
  }

  describe('#new', function() {
    it('should store options and have default values', function() {
      var flow = createFlow();
      assert(flow.app instanceof App);
      assert.equal(flow.redirectUri, 'urn:ietf:wg:oauth:2.0:oob');
      assert.equal('function', typeof(flow.instructions));
      assert.equal('function', typeof(flow.prompt));
    });
  });

  describe('#run', function() {
    it('should prompt for code and fetch access token', function() {
      var flow = createFlow();
      flow.authorizeUrl = sinon.stub().returns('fake_url');
      flow.promptForCode = sinon.mock().once().returns(
        Bluebird.resolve('fake_code'));
      flow.accessToken = sinon.mock().once().returns(
        Bluebird.resolve('fake_token'));
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
    it('should display instructions with url and prompt and resolve to code',
      function() {
        var flow = createFlow();

        var mockInterface = {
          question: sinon.mock(),
          close: sinon.mock()
        };
        mockInterface.question.once().onFirstCall().callsArgWithAsync(
          1, 'code');
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

});