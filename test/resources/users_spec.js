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

  describe('#getUsers', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGetCollection = sinon.stub();
      users.getUsers();
      assert(
          users.dispatchGetCollection.calledWith('/users', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      users.dispatchGetCollection = sinon.stub();
      users.getUsers(params);
      assert(users.dispatchGetCollection.calledWith('/users', params));
    });
  });

  describe('#me', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGet = sinon.stub();
      users.me();
      assert(users.dispatchGet.calledWith('/users/me', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      users.getUser('me', params);
      assert(users.dispatchGet.calledWith('/users/me', params));
    });
  });

  describe('#getUser', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGet = sinon.stub();
      var id = 1;
      users.getUser(id);
      assert(users.dispatchGet.calledWith('/users/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      users.getUser(id, params);
      assert(users.dispatchGet.calledWith('/users/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      users.getUser(id, params);
      assert(users.dispatchGet.calledWith('/users/1', params));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      users.getUser(id, params);
      assert(users.dispatchGet.calledWith('/users/foobar', params));
    });
  });

  describe('#getUsersForWorkspace', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGetCollection = sinon.stub();
      var id = 1;
      users.getUsersForWorkspace(id);
      assert(
        users.dispatchGetCollection.calledWith(
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
      users.getUsersForWorkspace(id, params);
      assert(users.dispatchGetCollection.calledWith(
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
      users.getUsersForWorkspace(id, params);
      assert(users.dispatchGetCollection.calledWith(
          '/workspaces/1/users', params));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      users.getUsersForWorkspace(id, params);
      assert(users.dispatchGetCollection.calledWith(
          '/workspaces/foobar/users', params));
    });
  });


  describe('#getFavoritesForUser', function() {
    it('should hit the right endpoint', function() {
      var dispatcher = {};
      var users = new Users(dispatcher);
      users.dispatchGetCollection = sinon.stub();

      var id = 134679;
      users.getFavoritesForUser(id, {'workspace': '123456',
        'resource_type': 'project'});

      assert(users.dispatchGetCollection.calledWith(
          '/users/134679/favorites'));
    });
  });
});
