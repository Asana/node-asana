/* jshint mocha:true */
var assert = require('assert');
var rewire = require('rewire');
var BasicAuthenticator = rewire('../../lib/auth/basic_authenticator');

describe('BasicAuthenticator', function() {

  describe('#authenticateRequest', function() {

    it('should store api key', function() {
      var basicAuthenticator = new BasicAuthenticator('apikey');
      assert.equal(basicAuthenticator.apiKey, 'apikey');
    });

    it('should add auth to request', function() {
      var basicAuthenticator = new BasicAuthenticator('apikey');
      var request = basicAuthenticator.authenticateRequest({});
      assert.equal(request.auth.username, 'apikey');
      assert.equal(request.auth.password, '');
    });

  });

  describe('#ensureCredentials', function() {

    it('should return a resolved Promise', function(){
      var basicAuthenticator = new BasicAuthenticator('apikey');

      var p = basicAuthenticator.establishCredentials();
      assert.equal(true, p.isResolved());
    });

  });

});