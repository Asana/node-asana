/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Users = require('../../lib/resources/users');

describe('Users', function() {
  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var users = new Users(dispatcher);
      assert.equal(users.dispatcher, dispatcher);
    });
  });

  describe('#findAll', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGetCollection = sinon.stub();
      users.findAll();
      assert(
          users.dispatchGetCollection.calledWithExactly('/users', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      users.dispatchGetCollection = sinon.stub();
      users.findAll(params);
      assert(users.dispatchGetCollection.calledWithExactly('/users', params));
    });
  });

  describe('#me', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGet = sinon.stub();
      users.me();
      assert(users.dispatchGet.calledWithExactly('/users/me', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      users.me(params);
      assert(users.dispatchGet.calledWithExactly('/users/me', params));
    });
  });

  describe('#findById', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGet = sinon.stub();
      var id = 1;
      users.findById(id);
      assert(users.dispatchGet.calledWithExactly('/users/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      users.findById(id, params);
      assert(users.dispatchGet.calledWithExactly('/users/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      users.findById(id, params);
      assert(users.dispatchGet.calledWithExactly('/users/1', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      users.findById(id, params);
      assert(users.dispatchGet.calledWithExactly('/users/NaN', params));
    });
  });

  describe('#findByWorkspace', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGetCollection = sinon.stub();
      var id = 1;
      users.findByWorkspace(id);
      assert(
        users.dispatchGetCollection.calledWithExactly(
            '/workspaces/1/users', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      users.findByWorkspace(id, params);
      assert(users.dispatchGetCollection.calledWithExactly(
          '/workspaces/1/users', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      users.findByWorkspace(id, params);
      assert(users.dispatchGetCollection.calledWithExactly(
          '/workspaces/1/users', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      users.findByWorkspace(id, params);
      assert(users.dispatchGetCollection.calledWithExactly(
          '/workspaces/NaN/users', params));
    });
  });
});