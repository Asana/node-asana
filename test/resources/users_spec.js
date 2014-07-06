/* global describe */
/* global it */
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
      var dispatcher = {
        get: sinon.stub()
      };
      var users = new Users(dispatcher);
      users.findAll();
      assert(dispatcher.get.calledWithExactly('/users', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var users = new Users(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      users.findAll(params);
      assert(dispatcher.get.calledWithExactly('/users', params));
    });
  });

  describe('#me', function() {
    it('should handle without params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var users = new Users(dispatcher);
      users.me();
      assert(dispatcher.get.calledWithExactly('/users/me', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var users = new Users(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      users.me(params);
      assert(dispatcher.get.calledWithExactly('/users/me', params));
    });
  });

  describe('#findById', function() {
    it('should handle without params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var users = new Users(dispatcher);
      var id = 1;
      users.findById(id);
      assert(dispatcher.get.calledWithExactly('/users/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var users = new Users(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      users.findById(id, params);
      assert(dispatcher.get.calledWithExactly('/users/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var users = new Users(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      users.findById(id, params);
      assert(dispatcher.get.calledWithExactly('/users/1', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var users = new Users(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      users.findById(id, params);
      assert(dispatcher.get.calledWithExactly('/users/NaN', params));
    });
  });

  describe('#findByWorkspace', function() {
    it('should handle without params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var users = new Users(dispatcher);
      var id = 1;
      users.findByWorkspace(id);
      assert(
        dispatcher.get.calledWithExactly('/workspaces/1/users', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var users = new Users(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      users.findByWorkspace(id, params);
      assert(dispatcher.get.calledWithExactly('/workspaces/1/users', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var users = new Users(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      users.findByWorkspace(id, params);
      assert(dispatcher.get.calledWithExactly('/workspaces/1/users', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var users = new Users(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      users.findByWorkspace(id, params);
      assert(dispatcher.get.calledWithExactly('/workspaces/NaN/users', params));
    });
  });
});