/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Bluebird = require('bluebird');
var Resource = require('../../lib/resources/resource');

describe('Resource', function() {
  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var users = new Resource(dispatcher);
      assert.equal(users.dispatcher, dispatcher);
    });
  });

  describe('#get', function() {
    it('should call dispatcher get and unwrap', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var promise = Bluebird.resolved();
      dispatcher.get.onFirstCall().returns(promise);
      Resource.unwrap = sinon.stub();  //xcxc revert?
      var resource = new Resource(dispatcher);

      var path = '/path';
      var query = {};
      var options = {};
      resource.get(path, query, options);

      assert(dispatcher.get.calledWithExactly(path, query, options));
      assert(Resource.unwrap.calledWithExactly(promise));
    });
  });

  //xcxc put, post, etc.

  //xcxc static methods

});