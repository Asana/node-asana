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

  describe('#createProject', function() {
    it('should handle the creation', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchPost = sinon.stub();
      var data = {
        name: 'Test'
      };
      projects.createProject(data);
      assert(projects.dispatchPost.calledWith('/projects', data));
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
          projects.dispatchPost.calledWith(
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
          projects.dispatchPost.calledWith(
              '/workspaces/1/projects', data));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      projects.createInWorkspace(id, data);
      assert(
          projects.dispatchPost.calledWith(
              '/workspaces/foobar/projects', data));
    });
  });

  describe('#getProjects', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGetCollection = sinon.stub();
      projects.getProjects();
      assert(
          projects.dispatchGetCollection.calledWith(
              '/projects', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      projects.getProjects(params);
      assert(
          projects.dispatchGetCollection.calledWith(
              '/projects', params));
    });
  });

  describe('#getProject', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGet = sinon.stub();
      var id = 1;
      projects.getProject(id);
      assert(projects.dispatchGet.calledWith('/projects/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      projects.getProject(id, params);
      assert(projects.dispatchGet.calledWith('/projects/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      projects.getProject(id, params);
      assert(projects.dispatchGet.calledWith('/projects/1', params));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      projects.getProject(id, params);
      assert(projects.dispatchGet.calledWith('/projects/foobar', params));
    });
  });

  describe('#getProjectsForWorkspace', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGetCollection = sinon.stub();
      var id = 1;
      projects.getProjectsForWorkspace(id);
      assert(
          projects.dispatchGetCollection.calledWith(
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
      projects.getProjectsForWorkspace(id, params);
      assert(
          projects.dispatchGetCollection.calledWith(
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
      projects.getProjectsForWorkspace(id, params);
      assert(
          projects.dispatchGetCollection.calledWith(
              '/workspaces/1/projects', params));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      projects.getProjectsForWorkspace(id, params);
      assert(
          projects.dispatchGetCollection.calledWith(
              '/workspaces/foobar/projects', params));
    });
  });

  describe('#updateProject', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchPut = sinon.stub();
      var id = 1;
      var data = {
        name: 'Test'
      };
      projects.updateProject(id, data);
      assert(projects.dispatchPut.calledWith('/projects/1', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchPut = sinon.stub();
      var id = '1';
      var data = {
        name: 'Test'
      };
      projects.updateProject(id, data);
      assert(projects.dispatchPut.calledWith('/projects/1', data));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchPut = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      projects.updateProject(id, data);
      assert(projects.dispatchPut.calledWith('/projects/foobar', data));
    });
  });

  describe('#delete', function() {
    it('should handle the deletion', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchDelete = sinon.stub();
      var id = 1;
      projects.deleteProject(id);
      assert(projects.dispatchDelete.calledWith('/projects/1'));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchDelete = sinon.stub();
      var id = '1';
      projects.deleteProject(id);
      assert(projects.dispatchDelete.calledWith('/projects/1'));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchDelete = sinon.stub();
      var id = 'foobar';
      projects.deleteProject(id);
      assert(projects.dispatchDelete.calledWith('/projects/foobar'));
    });
  });
  describe('#addCustomFieldSetting', function() {
    it('should call the correct endpoint', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchPost = sinon.stub();
      var id = 1331;
      var data = {
        customField: 124578,
        isImportant: true
      };
      projects.addCustomFieldSetting(id, data);
      assert(projects.dispatchPost.calledWith(
        '/projects/1331/addCustomFieldSetting', data));
    });
  });
  describe('#removeCustomFieldSetting', function() {
    it('should call the correct endpoint', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchPost = sinon.stub();
      var id = 1331;
      var data = {
        customField: 124578,
      };
      projects.removeCustomFieldSetting(id, data);
      assert(projects.dispatchPost.calledWith(
        '/projects/1331/removeCustomFieldSetting', data));
    });
  });
});
