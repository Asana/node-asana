/* global describe */
/* global it */
var assert = require('assert');
var Client = require('../lib/client');

describe('Client', function() {
  describe('basicAuth', function() {
    it('should return a basic auth client', function() {
      var apiKey = 'apiKey';
      var client = Client.basicAuth(apiKey);
      assert.equal(client.authKey, 'auth');
      assert.deepEqual(client.authValue, {
        user: apiKey,
        pass: ''
      });
    });
  });

  describe('oauth', function() {
    it('should return an oauth client', function() {
      var token = 'token';
      var client = Client.oauth(token);
      assert.equal(client.authKey, 'bearer');
      assert.equal(client.authValue, token);
    });
  });

  describe('ROOT_URL', function() {
    it('should be the root api url', function() {
      assert.equal(Client.ROOT_URL, 'https://app.asana.com/api/1.0');
    });
  });

  describe('#new', function() {
    it('should have the auth key and auth value', function() {
      var authKey = 'auth';
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var client = new Client(authKey, authValue);
      assert.equal(client.authKey, authKey);
      assert.equal(client.authValue, authValue);
    });
  });
});