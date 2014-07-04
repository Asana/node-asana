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