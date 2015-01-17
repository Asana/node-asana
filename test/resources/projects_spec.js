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
      projects.post = sinon.stub();
      var data = {
        name: 'Test'
      };
      projects.create(data);
      assert(projects.post.calledWithExactly('/projects', data));
    });
  });

  describe('#createInWorkspace', function() {
    it('should handle the creation', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.post = sinon.stub();
      var id = 1;
      var data = {
        name: 'Test'
      };
      projects.createInWorkspace(id, data);
      assert(projects.post.calledWithExactly('/workspaces/1/projects', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.post = sinon.stub();
      var id = '1';
      var data = {
        name: 'Test'
      };
      projects.createInWorkspace(id, data);
      assert(projects.post.calledWithExactly('/workspaces/1/projects', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.post = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      projects.createInWorkspace(id, data);
      assert(
          projects.post.calledWithExactly('/workspaces/NaN/projects', data));
    });
  });

  describe('#findAll', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.getCollection = sinon.stub();
      projects.findAll();
      assert(projects.getCollection.calledWithExactly('/projects', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.getCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      projects.findAll(params);
      assert(projects.getCollection.calledWithExactly('/projects', params));
    });
  });

  describe('#findById', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.get = sinon.stub();
      var id = 1;
      projects.findById(id);
      assert(projects.get.calledWithExactly('/projects/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.get = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      projects.findById(id, params);
      assert(projects.get.calledWithExactly('/projects/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.get = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      projects.findById(id, params);
      assert(projects.get.calledWithExactly('/projects/1', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.get = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      projects.findById(id, params);
      assert(projects.get.calledWithExactly('/projects/NaN', params));
    });
  });

  describe('#findByWorkspace', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.getCollection = sinon.stub();
      var id = 1;
      projects.findByWorkspace(id);
      assert(
          projects.getCollection.calledWithExactly(
              '/workspaces/1/projects', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.getCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      projects.findByWorkspace(id, params);
      assert(
          projects.getCollection.calledWithExactly(
              '/workspaces/1/projects', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.getCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      projects.findByWorkspace(id, params);
      assert(
          projects.getCollection.calledWithExactly(
              '/workspaces/1/projects', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.getCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      projects.findByWorkspace(id, params);
      assert(
          projects.getCollection.calledWithExactly(
              '/workspaces/NaN/projects', params));
    });
  });

  describe('#update', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.put = sinon.stub();
      var id = 1;
      var data = {
        name: 'Test'
      };
      projects.update(id, data);
      assert(projects.put.calledWithExactly('/projects/1', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.put = sinon.stub();
      var id = '1';
      var data = {
        name: 'Test'
      };
      projects.update(id, data);
      assert(projects.put.calledWithExactly('/projects/1', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.put = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      projects.update(id, data);
      assert(projects.put.calledWithExactly('/projects/NaN', data));
    });
  });

  describe('#delete', function() {
    it('should handle the deletion', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.delete = sinon.stub();
      var id = 1;
      projects.destroy(id);
      assert(projects.delete.calledWithExactly('/projects/1'));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.delete = sinon.stub();
      var id = '1';
      projects.destroy(id);
      assert(projects.delete.calledWithExactly('/projects/1'));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.delete = sinon.stub();
      var id = 'foobar';
      projects.destroy(id);
      assert(projects.delete.calledWithExactly('/projects/NaN'));
    });
  });
});