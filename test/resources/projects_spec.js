/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Projects = require('../../lib/resources/projects');

describe('Projects', function() {
  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var projects = new Projects(dispatcher);
      assert.equal(projects.dispatcher, dispatcher);
    });
  });

  describe('#create', function() {
    it('should handle the creation', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchPost = sinon.stub();
      var data = {
        name: 'Test'
      };
      projects.create(data);
      assert(projects.dispatchPost.calledWithExactly('/projects', data));
    });
  });

  describe('#createInWorkspace', function() {
    it('should handle the creation', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        name: 'Test'
      };
      projects.createInWorkspace(id, data);
      assert(
          projects.dispatchPost.calledWithExactly(
              '/workspaces/1/projects', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        name: 'Test'
      };
      projects.createInWorkspace(id, data);
      assert(
          projects.dispatchPost.calledWithExactly(
              '/workspaces/1/projects', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      projects.createInWorkspace(id, data);
      assert(
          projects.dispatchPost.calledWithExactly(
              '/workspaces/NaN/projects', data));
    });
  });

  describe('#findAll', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGetCollection = sinon.stub();
      projects.findAll();
      assert(
          projects.dispatchGetCollection.calledWithExactly(
              '/projects', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      projects.findAll(params);
      assert(
          projects.dispatchGetCollection.calledWithExactly(
              '/projects', params));
    });
  });

  describe('#findById', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGet = sinon.stub();
      var id = 1;
      projects.findById(id);
      assert(projects.dispatchGet.calledWithExactly('/projects/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      projects.findById(id, params);
      assert(projects.dispatchGet.calledWithExactly('/projects/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      projects.findById(id, params);
      assert(projects.dispatchGet.calledWithExactly('/projects/1', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      projects.findById(id, params);
      assert(projects.dispatchGet.calledWithExactly('/projects/NaN', params));
    });
  });

  describe('#findByWorkspace', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGetCollection = sinon.stub();
      var id = 1;
      projects.findByWorkspace(id);
      assert(
          projects.dispatchGetCollection.calledWithExactly(
              '/workspaces/1/projects', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      projects.findByWorkspace(id, params);
      assert(
          projects.dispatchGetCollection.calledWithExactly(
              '/workspaces/1/projects', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      projects.findByWorkspace(id, params);
      assert(
          projects.dispatchGetCollection.calledWithExactly(
              '/workspaces/1/projects', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      projects.findByWorkspace(id, params);
      assert(
          projects.dispatchGetCollection.calledWithExactly(
              '/workspaces/NaN/projects', params));
    });
  });

  describe('#update', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchPut = sinon.stub();
      var id = 1;
      var data = {
        name: 'Test'
      };
      projects.update(id, data);
      assert(projects.dispatchPut.calledWithExactly('/projects/1', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchPut = sinon.stub();
      var id = '1';
      var data = {
        name: 'Test'
      };
      projects.update(id, data);
      assert(projects.dispatchPut.calledWithExactly('/projects/1', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchPut = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      projects.update(id, data);
      assert(projects.dispatchPut.calledWithExactly('/projects/NaN', data));
    });
  });

  describe('#delete', function() {
    it('should handle the deletion', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchDelete = sinon.stub();
      var id = 1;
      projects.delete(id);
      assert(projects.dispatchDelete.calledWithExactly('/projects/1'));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchDelete = sinon.stub();
      var id = '1';
      projects.delete(id);
      assert(projects.dispatchDelete.calledWithExactly('/projects/1'));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchDelete = sinon.stub();
      var id = 'foobar';
      projects.delete(id);
      assert(projects.dispatchDelete.calledWithExactly('/projects/NaN'));
    });
  });
});