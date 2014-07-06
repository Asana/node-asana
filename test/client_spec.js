/* global describe */
/* global it */
var assert = require('assert');
var Client = require('../lib/client');
var Dispatcher = require('../lib/dispatcher');
var resources = require('../lib/resources');

describe('Client', function() {
  describe('basicAuth', function() {
    it('should return a basic auth client', function() {
      var apiKey = 'apiKey';
      var authValue = {
        user: apiKey,
        pass: ''
      };
      var client = Client.basicAuth(apiKey);
      var dispatcher = new Dispatcher('auth', authValue);
      assert.deepEqual(client.dispatcher, dispatcher);
    });
  });

  describe('oauth', function() {
    it('should return an oauth client', function() {
      var token = 'token';
      var client = Client.oauth(token);
      var dispatcher = new Dispatcher('bearer', token);
      assert.deepEqual(client.dispatcher, dispatcher);
    });
  });

  describe('#new', function() {
    it('should have the auth key and auth value', function() {
      var authKey = 'auth';
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher(authKey, authValue);
      var client = new Client(dispatcher);
      assert.equal(client.dispatcher, dispatcher);
    });
  });

  describe('#resources', function() {
    Object.keys(resources).forEach(function(key) {
      it('should have ' + key, function() {
        var authKey = 'auth';
        var authValue = {
          user: 'apiKey',
          pass: ''
        };
        var dispatcher = new Dispatcher(authKey, authValue);
        var client = new Client(dispatcher);
        assert(client[key.toLowerCase()]);
      });
    });
  });
});