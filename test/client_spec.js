/* global describe */
/* global it */
var assert = require('assert');
var Client = require('../lib/client');

describe('Client', function() {
  describe('#new', function() {
    it('should have the auth key and auth value', function() {
      var authKey = 'auth';
      var authValue = {
        user: 'apikey',
        pass: ''
      };
      var client = new Client(authKey, authValue);
      assert.equal(client.authKey, authKey);
      assert.equal(client.authValue, authValue);
    });
  });
});