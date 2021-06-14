/* jshint mocha:true */
var assert = require('assert');
var rewire = require('rewire');
var sinon = require('sinon');
var App = rewire('../../lib/auth/app');

describe('App', function() {

  describe('#new', function() {
    it('should have default values for options', function() {
      var app = new App({
        clientId: 123
      });
      assert.equal(app.clientSecret, null);
      assert.equal(app.redirectUri, null);
      assert.equal(app.scope, 'default');
      assert.equal(app.asanaBaseUrl, 'https://app.asana.com/');
    });
    it('should store options', function() {
      var app = new App({
        clientId: 'fake_id',
        clientSecret: 'fake_secret',
        redirectUri: 'fake_uri',
        scope: 'fake_scope',
        asanaBaseUrl: 'fake_asana_url'
      });
      assert.equal(app.clientId, 'fake_id');
      assert.equal(app.clientSecret, 'fake_secret');
      assert.equal(app.redirectUri, 'fake_uri');
      assert.equal(app.scope, 'fake_scope');
      assert.equal(app.asanaBaseUrl, 'fake_asana_url');
    });
  });

  describe('#accessTokenFromCode', function() {

    function createApp() {
      return new App({
        clientId: 'fake_id',
        clientSecret: 'fake_secret',
        redirectUri: 'fake_uri',
        scope: 'fake_scope'
      });
    }

    it('should make post request for token', function() {
      var request = sinon.mock();
      request.once();
      App.__set__('request', request);

      var app = createApp();
      app.asanaTokenUrl = sinon.stub().returns('token_url');
      app.accessTokenFromCode('fake_code');

      var params = request.args[0][0];
      assert.equal(params.method, 'POST');
      assert.equal(params.url, 'token_url');
      assert.deepEqual(params.form, {
        'grant_type': 'authorization_code',
        'client_id': 'fake_id',
        'client_secret': 'fake_secret',
        'redirect_uri': 'fake_uri',
        'code': 'fake_code'
      });
    });

    it('should resolve to token on success', function() {
      var request = sinon.stub();
      App.__set__('request', request);

      var app = createApp();
      var payload = {
        'access_token': 123
      };
      var response = app.accessTokenFromCode('code');
      request.callArgWith(
        1, null, {
          statusCode: 200
        }, JSON.stringify(payload));
      return response.then(function(value) {
        assert.deepEqual(value, payload);
      });
    });

    it('should reject with error on failure', function() {
      var request = sinon.stub();
      App.__set__('request', request);
      var app = createApp();
      var response = app.accessTokenFromCode('code');
      request.callArgWith(
        1, 'error', null, 'payload');
      return response.then(function() {
        assert(false, 'request should not have succeeded');
      }).catch(function(e) {
        assert.equal(e, 'error');
      });
    });
  });

  describe('#accessTokenFromRefreshToken', function() {

    function createApp() {
      return new App({
        clientId: 'fake_id',
        clientSecret: 'fake_secret',
        redirectUri: 'fake_uri',
        scope: 'fake_scope'
      });
    }

    it('should make post request for token', function() {
      var request = sinon.mock();
      request.once();
      App.__set__('request', request);

      var app = createApp();
      app.asanaTokenUrl = sinon.stub().returns('token_url');
      app.accessTokenFromRefreshToken('fake_token');

      var params = request.args[0][0];
      assert.equal(params.method, 'POST');
      assert.equal(params.url, 'token_url');
      assert.deepEqual(params.form, {
        'grant_type': 'refresh_token',
        'client_id': 'fake_id',
        'client_secret': 'fake_secret',
        'redirect_uri': 'fake_uri',
        'refresh_token': 'fake_token'
      });
    });

    it('should resolve to token on success', function() {
      var request = sinon.stub();
      App.__set__('request', request);

      var app = createApp();
      var payload = {
        'access_token': 123
      };
      var response = app.accessTokenFromRefreshToken('refresh_token');
      request.callArgWith(
        1, null, {
          statusCode: 200
        }, JSON.stringify(payload));
      return response.then(function(value) {
        assert.deepEqual(value, payload);
      });
    });

    it('should reject with error on failure', function() {
      var request = sinon.stub();
      App.__set__('request', request);
      var app = createApp();
      var response = app.accessTokenFromRefreshToken('code');
      request.callArgWith(
        1, 'error', null, 'payload');
      return response.then(function() {
        assert(false, 'request should not have succeeded');
      }).catch(function(e) {
        assert.equal(e, 'error');
      });
    });
  });

});