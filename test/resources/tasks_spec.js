/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Tasks = require('../../lib/resources/tasks');

describe('Tasks', function() {

  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var tasks = new Tasks(dispatcher);
      assert.equal(tasks.dispatcher, dispatcher);
    });
  });

  describe('#create', function() {
    it('should handle the creation', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var data = {
        name: 'Test'
      };
      tasks.create(data);
      assert(tasks.dispatchPost.calledWith('/tasks', data));
    });
  });

  describe('#createInWorkspace', function() {
    it('should handle the creation', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        name: 'Test'
      };
      tasks.createInWorkspace(id, data);
      assert(tasks.dispatchPost.calledWith('/workspaces/1/tasks', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        name: 'Test'
      };
      tasks.createInWorkspace(id, data);
      assert(tasks.dispatchPost.calledWith('/workspaces/1/tasks', data));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      tasks.createInWorkspace(id, data);
      assert(
        tasks.dispatchPost.calledWith('/workspaces/foobar/tasks', data));
    });
  });

  describe('#getTasks', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      tasks.getTasks();
      assert(
          tasks.dispatchGetCollection.calledWith('/tasks', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      tasks.getTasks(params);
      assert(tasks.dispatchGetCollection.calledWith('/tasks', params));
    });
  });

  describe('#getTask', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGet = sinon.stub();
      var id = 1;
      tasks.getTask(id);
      assert(tasks.dispatchGet.calledWith('/tasks/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      tasks.getTask(id, params);
      assert(tasks.dispatchGet.calledWith('/tasks/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      tasks.getTask(id, params);
      assert(tasks.dispatchGet.calledWith('/tasks/1', params));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      tasks.getTask(id, params);
      assert(tasks.dispatchGet.calledWith('/tasks/foobar', params));
    });
  });

  describe('#findByExternalId', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGet = sinon.stub();
      tasks.findByExternalId(1);
      assert(tasks.dispatchGet.calledWith(
          '/tasks/external%3A1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      tasks.findByExternalId(1, params);
      assert(tasks.dispatchGet.calledWith(
          '/tasks/external%3A1', params));
    });

    it('should encode external ids', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGet = sinon.stub();
      tasks.findByExternalId('http://u@p:foo.com/?query#frag');
      assert(tasks.dispatchGet.calledWith(
          '/tasks/external%3Ahttp%3A%2F%2Fu%40p%3Afoo.com%2F%3Fquery%23frag',
          undefined));
    });
  });

  describe('#getTasksForProject', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = 1;
      tasks.getTasksForProject(id);
      assert(
          tasks.dispatchGetCollection.calledWith(
              '/projects/1/tasks', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      tasks.getTasksForProject(id, params);
      assert(
          tasks.dispatchGetCollection.calledWith(
              '/projects/1/tasks', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      tasks.getTasksForProject(id, params);
      assert(
          tasks.dispatchGetCollection.calledWith(
              '/projects/1/tasks', params));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      tasks.getTasksForProject(id, params);
      assert(
          tasks.dispatchGetCollection.calledWith(
              '/projects/foobar/tasks', params));
    });
  });

  describe('#getTasksForTag', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = 1;
      tasks.getTasksForTag(id);
      assert(
          tasks.dispatchGetCollection.calledWith(
              '/tags/1/tasks', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      tasks.getTasksForTag(id, params);
      assert(
        tasks.dispatchGetCollection.calledWith('/tags/1/tasks', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      tasks.getTasksForTag(id, params);
      assert(
        tasks.dispatchGetCollection.calledWith('/tags/1/tasks', params));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      tasks.getTasksForTag(id, params);
      assert(
          tasks.dispatchGetCollection.calledWith(
              '/tags/foobar/tasks', params));
    });
  });

  describe('#updateTask', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPut = sinon.stub();
      var id = 1;
      var data = {
        name: 'Test'
      };
      tasks.updateTask(id, data);
      assert(tasks.dispatchPut.calledWith('/tasks/1', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPut = sinon.stub();
      var id = '1';
      var data = {
        name: 'Test'
      };
      tasks.updateTask(id, data);
      assert(tasks.dispatchPut.calledWith('/tasks/1', data));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPut = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      tasks.updateTask(id, data);
      assert(tasks.dispatchPut.calledWith('/tasks/foobar', data));
    });
  });

  describe('#deleteTask', function() {
    it('should handle the deletion', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchDelete = sinon.stub();
      var id = 1;
      tasks.deleteTask(id);
      assert(tasks.dispatchDelete.calledWith('/tasks/1'));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchDelete = sinon.stub();
      var id = '1';
      tasks.deleteTask(id);
      assert(tasks.dispatchDelete.calledWith('/tasks/1'));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchDelete = sinon.stub();
      var id = 'foobar';
      tasks.deleteTask(id);
      assert(tasks.dispatchDelete.calledWith('/tasks/foobar'));
    });
  });

  describe('#addFollowersForTask', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        followers: [1]
      };
      tasks.addFollowersForTask(id, data);
      assert(
          tasks.dispatchPost.calledWith('/tasks/1/addFollowers', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        followers: [1]
      };
      tasks.addFollowersForTask(id, data);
      assert(
          tasks.dispatchPost.calledWith('/tasks/1/addFollowers', data));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        followers: [1]
      };
      tasks.addFollowersForTask(id, data);
      assert(
        tasks.dispatchPost.calledWith('/tasks/foobar/addFollowers', data));
    });
  });

  describe('#removeFollowerForTask', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        followers: [1]
      };
      tasks.removeFollowerForTask(id, data);
      assert(
        tasks.dispatchPost.calledWith('/tasks/1/removeFollowers', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        followers: [1]
      };
      tasks.removeFollowerForTask(id, data);
      assert(
        tasks.dispatchPost.calledWith('/tasks/1/removeFollowers', data));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        followers: [1]
      };
      tasks.removeFollowerForTask(id, data);
      assert(
          tasks.dispatchPost.calledWith(
              '/tasks/foobar/removeFollowers', data));
    });
  });

  describe('#projects', function() {
    it('should handle the request', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = 1;
      tasks.projects(id);
      assert(
          tasks.dispatchGetCollection.calledWith(
              '/tasks/1/projects', undefined));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = '1';
      tasks.projects(id);
      assert(
          tasks.dispatchGetCollection.calledWith(
              '/tasks/1/projects', undefined));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = 'foobar';
      tasks.projects(id);
      assert(
        tasks.dispatchGetCollection.calledWith(
            '/tasks/foobar/projects', undefined));
    });
  });

  describe('#addProjectForTask', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        project: [1]
      };
      tasks.addProjectForTask(id, data);
      assert(tasks.dispatchPost.calledWith('/tasks/1/addProject', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        project: [1]
      };
      tasks.addProjectForTask(id, data);
      assert(tasks.dispatchPost.calledWith('/tasks/1/addProject', data));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        project: [1]
      };
      tasks.addProjectForTask(id, data);
      assert(
        tasks.dispatchPost.calledWith('/tasks/foobar/addProject', data));
    });
  });

  describe('#removeProjectForTask', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        project: [1]
      };
      tasks.removeProjectForTask(id, data);
      assert(
          tasks.dispatchPost.calledWith('/tasks/1/removeProject', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        project: [1]
      };
      tasks.removeProjectForTask(id, data);
      assert(
          tasks.dispatchPost.calledWith('/tasks/1/removeProject', data));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        project: [1]
      };
      tasks.removeProjectForTask(id, data);
      assert(
          tasks.dispatchPost.calledWith(
              '/tasks/foobar/removeProject', data));
    });
  });

  describe('#tags', function() {
    it('should handle the request', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = 1;
      tasks.tags(id);
      assert(
          tasks.dispatchGetCollection.calledWith('/tasks/1/tags', undefined));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = '1';
      tasks.tags(id);
      assert(
          tasks.dispatchGetCollection.calledWith(
              '/tasks/1/tags', undefined));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = 'foobar';
      tasks.tags(id);
      assert(
          tasks.dispatchGetCollection.calledWith(
              '/tasks/foobar/tags', undefined));
    });
  });

  describe('#addTagForTask', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        tag: 1
      };
      tasks.addTagForTask(id, data);
      assert(tasks.dispatchPost.calledWith('/tasks/1/addTag', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        tag: 1
      };
      tasks.addTagForTask(id, data);
      assert(tasks.dispatchPost.calledWith('/tasks/1/addTag', data));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        tag: 1
      };
      tasks.addTagForTask(id, data);
      assert(
        tasks.dispatchPost.calledWith('/tasks/foobar/addTag', data));
    });
  });

  describe('#removeTagForTask', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        tag: 1
      };
      tasks.removeTagForTask(id, data);
      assert(tasks.dispatchPost.calledWith('/tasks/1/removeTag', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        tag: 1
      };
      tasks.removeTagForTask(id, data);
      assert(tasks.dispatchPost.calledWith('/tasks/1/removeTag', data));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        tag: 1
      };
      tasks.removeTagForTask(id, data);
      assert(
        tasks.dispatchPost.calledWith('/tasks/foobar/removeTag', data));
    });
  });

  describe('#getSubtasksForTask', function() {
    it('should handle the request', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = 1;
      tasks.getSubtasksForTask(id);
      assert(
          tasks.dispatchGetCollection.calledWith(
              '/tasks/1/subtasks', undefined));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = '1';
      tasks.getSubtasksForTask(id);
      assert(tasks.dispatchGetCollection.calledWith(
          '/tasks/1/subtasks', undefined));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = 'foobar';
      tasks.getSubtasksForTask(id);
      assert(
        tasks.dispatchGetCollection.calledWith(
            '/tasks/foobar/subtasks', undefined));
    });
  });

  describe('#createSubtaskForTask', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        name: 'foo',
        assignee: 1234
      };
      tasks.createSubtaskForTask(id, data);
      assert(tasks.dispatchPost.calledWith('/tasks/1/subtasks', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        name: 'foo',
        assignee: 1234
      };
      tasks.createSubtaskForTask(id, data);
      assert(tasks.dispatchPost.calledWith('/tasks/1/subtasks', data));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'foo',
        assignee: 1234
      };
      tasks.createSubtaskForTask(id, data);
      assert(
        tasks.dispatchPost.calledWith('/tasks/foobar/subtasks', data));
    });
  });

  describe('#setParentForTask', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var parentId = 2;
      var data = {
        parent: parentId
      };
      var expectedData = {
        parent: parentId
      };
      tasks.setParentForTask(id, data);
      assert(tasks.dispatchPost.calledWith('/tasks/1/setParent', expectedData));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var parentId = '2';
      var data = {
        parent: parentId
      };
      var expectedData = {
        parent: parentId
      };
      tasks.setParentForTask(id, data);
      assert(tasks.dispatchPost.calledWith('/tasks/1/setParent', expectedData));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var parentId = 'fizzbuzz';
      var data = {
        parent: parentId
      };
      tasks.setParentForTask(id, data);
      assert(
        tasks.dispatchPost.calledWith('/tasks/foobar/setParent', data));
    });
  });

  describe('#searchTasksForWorkspace', function() {
    it('should call searchInWorkspace for backwards compatability',
        function() {
          var dispatcher = {};
          var tasks = new Tasks(dispatcher);
          tasks.dispatchGetCollection = sinon.stub();

          var id = 134679;
          tasks.searchTasksForWorkspace(id);

          assert(tasks.dispatchGetCollection.calledWith(
              '/workspaces/134679/tasks/search'));
        });
  });

  describe('#searchInWorkspace', function() {
    it('should hit the workspace/{project-gid}/project_memberships endpoint',
        function() {
          var dispatcher = {};
          var tasks = new Tasks(dispatcher);
          tasks.dispatchGetCollection = sinon.stub();

          var id = 134679;
          tasks.searchInWorkspace(id);

          assert(tasks.dispatchGetCollection.calledWith(
              '/workspaces/134679/tasks/search'));
        });
  });
});
