/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Bluebird = require('bluebird');
var Resource = require('../../lib/resources/resource');

describe('Resource', function() {

  var sandbox;
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function () {
    sandbox.restore();
  });

  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var users = new Resource(dispatcher);
      assert.equal(users.dispatcher, dispatcher);
    });
  });

  describe('#dispatchGet', function() {
    it('should call dispatcher get and unwrap', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var promise = Bluebird.resolve();
      dispatcher.get.onFirstCall().returns(promise);
      sandbox.stub(Resource, 'unwrap');
      var resource = new Resource(dispatcher);

      var path = '/path';
      var query = {};
      var options = {};
      resource.dispatchGet(path, query, options);

      assert(dispatcher.get.calledWithExactly(path, query, options));
      assert(Resource.unwrap.calledWithExactly(promise));
    });
  });

  describe('#dispatchGetCollection', function() {
    it('should call dispatcher get with limit', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var promise = Bluebird.resolve();
      dispatcher.get.onFirstCall().returns(promise);
      sandbox.stub(Resource, 'unwrap');
      var resource = new Resource(dispatcher);

      var path = '/path';
      var query = {};
      var options = {};
      resource.dispatchGetCollection(path, query, options);

      assert(dispatcher.get.called);
      assert.equal(dispatcher.get.firstCall.args[0], path);
      assert.deepEqual(dispatcher.get.firstCall.args[1], { limit: 50 });
      assert.equal(dispatcher.get.firstCall.args[2], options);
      assert(!Resource.unwrap.called);
    });
  });

  describe('#dispatchPost', function() {
    it('should call dispatcher post and unwrap', function() {
      var dispatcher = {
        post: sinon.stub()
      };
      var promise = Bluebird.resolve();
      dispatcher.post.onFirstCall().returns(promise);
      sandbox.stub(Resource, 'unwrap');
      var resource = new Resource(dispatcher);

      var path = '/path';
      var query = {};
      var options = {};
      resource.dispatchPost(path, query, options);

      assert(dispatcher.post.calledWithExactly(path, query, options));
      assert(Resource.unwrap.calledWithExactly(promise));
    });
  });

  describe('#dispatchPut', function() {
    it('should call dispatcher put and unwrap', function() {
      var dispatcher = {
        put: sinon.stub()
      };
      var promise = Bluebird.resolve();
      dispatcher.put.onFirstCall().returns(promise);
      sandbox.stub(Resource, 'unwrap');
      var resource = new Resource(dispatcher);

      var path = '/path';
      var query = {};
      var options = {};
      resource.dispatchPut(path, query, options);

      assert(dispatcher.put.calledWithExactly(path, query, options));
      assert(Resource.unwrap.calledWithExactly(promise));
    });
  });

  describe('#dispatchDelete', function() {
    it('should call dispatcher delete and unwrap', function() {
      var dispatcher = {
        delete: sinon.stub()
      };
      var promise = Bluebird.resolve();
      dispatcher.delete.onFirstCall().returns(promise);
      sandbox.stub(Resource, 'unwrap');
      var resource = new Resource(dispatcher);

      var path = '/path';
      var options = {};
      resource.dispatchDelete(path, options);

      assert(dispatcher.delete.calledWithExactly(path, options));
      assert(Resource.unwrap.calledWithExactly(promise));
    });
  });

});