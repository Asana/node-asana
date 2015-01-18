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
      assert(tasks.dispatchPost.calledWithExactly('/tasks', data));
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
      assert(tasks.dispatchPost.calledWithExactly('/workspaces/1/tasks', data));
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
      assert(tasks.dispatchPost.calledWithExactly('/workspaces/1/tasks', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      tasks.createInWorkspace(id, data);
      assert(
        tasks.dispatchPost.calledWithExactly('/workspaces/NaN/tasks', data));
    });
  });

  describe('#findAll', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      tasks.findAll();
      assert(
          tasks.dispatchGetCollection.calledWithExactly('/tasks', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      tasks.findAll(params);
      assert(tasks.dispatchGetCollection.calledWithExactly('/tasks', params));
    });
  });

  describe('#findById', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGet = sinon.stub();
      var id = 1;
      tasks.findById(id);
      assert(tasks.dispatchGet.calledWithExactly('/tasks/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      tasks.findById(id, params);
      assert(tasks.dispatchGet.calledWithExactly('/tasks/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      tasks.findById(id, params);
      assert(tasks.dispatchGet.calledWithExactly('/tasks/1', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      tasks.findById(id, params);
      assert(tasks.dispatchGet.calledWithExactly('/tasks/NaN', params));
    });
  });

  describe('#findByProject', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = 1;
      tasks.findByProject(id);
      assert(
          tasks.dispatchGetCollection.calledWithExactly(
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
      tasks.findByProject(id, params);
      assert(
          tasks.dispatchGetCollection.calledWithExactly(
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
      tasks.findByProject(id, params);
      assert(
          tasks.dispatchGetCollection.calledWithExactly(
              '/projects/1/tasks', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      tasks.findByProject(id, params);
      assert(
          tasks.dispatchGetCollection.calledWithExactly(
              '/projects/NaN/tasks', params));
    });
  });

  describe('#findByTag', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = 1;
      tasks.findByTag(id);
      assert(
          tasks.dispatchGetCollection.calledWithExactly(
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
      tasks.findByTag(id, params);
      assert(
        tasks.dispatchGetCollection.calledWithExactly('/tags/1/tasks', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      tasks.findByTag(id, params);
      assert(
        tasks.dispatchGetCollection.calledWithExactly('/tags/1/tasks', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      tasks.findByTag(id, params);
      assert(
          tasks.dispatchGetCollection.calledWithExactly(
              '/tags/NaN/tasks', params));
    });
  });

  describe('#update', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPut = sinon.stub();
      var id = 1;
      var data = {
        name: 'Test'
      };
      tasks.update(id, data);
      assert(tasks.dispatchPut.calledWithExactly('/tasks/1', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPut = sinon.stub();
      var id = '1';
      var data = {
        name: 'Test'
      };
      tasks.update(id, data);
      assert(tasks.dispatchPut.calledWithExactly('/tasks/1', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPut = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      tasks.update(id, data);
      assert(tasks.dispatchPut.calledWithExactly('/tasks/NaN', data));
    });
  });

  describe('#delete', function() {
    it('should handle the deletion', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchDelete = sinon.stub();
      var id = 1;
      tasks.delete(id);
      assert(tasks.dispatchDelete.calledWithExactly('/tasks/1'));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchDelete = sinon.stub();
      var id = '1';
      tasks.delete(id);
      assert(tasks.dispatchDelete.calledWithExactly('/tasks/1'));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchDelete = sinon.stub();
      var id = 'foobar';
      tasks.delete(id);
      assert(tasks.dispatchDelete.calledWithExactly('/tasks/NaN'));
    });
  });

  describe('#addFollowers', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        followers: [1]
      };
      tasks.addFollowers(id, data);
      assert(
          tasks.dispatchPost.calledWithExactly('/tasks/1/addFollowers', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        followers: [1]
      };
      tasks.addFollowers(id, data);
      assert(
          tasks.dispatchPost.calledWithExactly('/tasks/1/addFollowers', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        followers: [1]
      };
      tasks.addFollowers(id, data);
      assert(
        tasks.dispatchPost.calledWithExactly('/tasks/NaN/addFollowers', data));
    });
  });

  describe('#removeFollowers', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        followers: [1]
      };
      tasks.removeFollowers(id, data);
      assert(
        tasks.dispatchPost.calledWithExactly('/tasks/1/removeFollowers', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        followers: [1]
      };
      tasks.removeFollowers(id, data);
      assert(
        tasks.dispatchPost.calledWithExactly('/tasks/1/removeFollowers', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        followers: [1]
      };
      tasks.removeFollowers(id, data);
      assert(
          tasks.dispatchPost.calledWithExactly(
              '/tasks/NaN/removeFollowers', data));
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
          tasks.dispatchGetCollection.calledWithExactly(
              '/tasks/1/projects', undefined));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = 'foobar';
      tasks.projects(id);
      assert(
        tasks.dispatchGetCollection.calledWithExactly(
            '/tasks/NaN/projects', undefined));
    });
  });

  describe('#addProject', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        project: [1]
      };
      tasks.addProject(id, data);
      assert(tasks.dispatchPost.calledWithExactly('/tasks/1/addProject', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        project: [1]
      };
      tasks.addProject(id, data);
      assert(tasks.dispatchPost.calledWithExactly('/tasks/1/addProject', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        project: [1]
      };
      tasks.addProject(id, data);
      assert(
        tasks.dispatchPost.calledWithExactly('/tasks/NaN/addProject', data));
    });
  });

  describe('#removeProject', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        project: [1]
      };
      tasks.removeProject(id, data);
      assert(
          tasks.dispatchPost.calledWithExactly('/tasks/1/removeProject', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        project: [1]
      };
      tasks.removeProject(id, data);
      assert(
          tasks.dispatchPost.calledWithExactly('/tasks/1/removeProject', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        project: [1]
      };
      tasks.removeProject(id, data);
      assert(
          tasks.dispatchPost.calledWithExactly(
              '/tasks/NaN/removeProject', data));
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
          tasks.dispatchGetCollection.calledWithExactly(
              '/tasks/1/tags', undefined));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = 'foobar';
      tasks.tags(id);
      assert(
          tasks.dispatchGetCollection.calledWithExactly(
              '/tasks/NaN/tags', undefined));
    });
  });

  describe('#addTag', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        tag: 1
      };
      tasks.addTag(id, data);
      assert(tasks.dispatchPost.calledWithExactly('/tasks/1/addTag', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        tag: 1
      };
      tasks.addTag(id, data);
      assert(tasks.dispatchPost.calledWithExactly('/tasks/1/addTag', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        tag: 1
      };
      tasks.addTag(id, data);
      assert(
        tasks.dispatchPost.calledWithExactly('/tasks/NaN/addTag', data));
    });
  });

  describe('#removeTag', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        tag: 1
      };
      tasks.removeTag(id, data);
      assert(tasks.dispatchPost.calledWithExactly('/tasks/1/removeTag', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        tag: 1
      };
      tasks.removeTag(id, data);
      assert(tasks.dispatchPost.calledWithExactly('/tasks/1/removeTag', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        tag: 1
      };
      tasks.removeTag(id, data);
      assert(
        tasks.dispatchPost.calledWithExactly('/tasks/NaN/removeTag', data));
    });
  });

  describe('#subtasks', function() {
    it('should handle the request', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = 1;
      tasks.subtasks(id);
      assert(
          tasks.dispatchGetCollection.calledWith(
              '/tasks/1/subtasks', undefined));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = '1';
      tasks.subtasks(id);
      assert(tasks.dispatchGetCollection.calledWithExactly(
          '/tasks/1/subtasks', undefined));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchGetCollection = sinon.stub();
      var id = 'foobar';
      tasks.subtasks(id);
      assert(
        tasks.dispatchGetCollection.calledWithExactly(
            '/tasks/NaN/subtasks', undefined));
    });
  });

  describe('#addSubtask', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        name: 'foo',
        assignee: 1234
      };
      tasks.addSubtask(id, data);
      assert(tasks.dispatchPost.calledWithExactly('/tasks/1/subtasks', data));
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
      tasks.addSubtask(id, data);
      assert(tasks.dispatchPost.calledWithExactly('/tasks/1/subtasks', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'foo',
        assignee: 1234
      };
      tasks.addSubtask(id, data);
      assert(
        tasks.dispatchPost.calledWithExactly('/tasks/NaN/subtasks', data));
    });
  });

  describe('#setParent', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 1;
      var parentId = 2;
      var data = {
        parent: parentId
      };
      tasks.setParent(id, parentId);
      assert(tasks.dispatchPost.calledWithExactly('/tasks/1/setParent', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = '1';
      var parentId = '2';
      var data = {
        parent: 2
      };
      tasks.setParent(id, parentId);
      assert(tasks.dispatchPost.calledWithExactly('/tasks/1/setParent', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var tasks = new Tasks(dispatcher);
      tasks.dispatchPost = sinon.stub();
      var id = 'foobar';
      var parentId = 'fizzbuzz';
      var data = {
        parent: NaN
      };
      tasks.setParent(id, parentId);
      assert(
        tasks.dispatchPost.calledWithExactly('/tasks/NaN/setParent', data));
    });
  });
});