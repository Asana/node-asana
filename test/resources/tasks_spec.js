/* global describe */
/* global it */
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
      var dispatcher = {
        post: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var data = {
        name: 'Test'
      };
      tasks.create(data);
      assert(dispatcher.post.calledWithExactly('/tasks', data));
    });
  });

  describe('#createInWorkspace', function() {
    it('should handle the creation', function() {
      var dispatcher = {
        post: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var id = 1;
      var data = {
        name: 'Test'
      };
      tasks.createInWorkspace(id, data);
      assert(dispatcher.post.calledWithExactly('/workspaces/1/tasks', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        post: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var id = '1';
      var data = {
        name: 'Test'
      };
      tasks.createInWorkspace(id, data);
      assert(dispatcher.post.calledWithExactly('/workspaces/1/tasks', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        post: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      tasks.createInWorkspace(id, data);
      assert(
        dispatcher.post.calledWithExactly('/workspaces/NaN/tasks', data));
    });
  });

  describe('#findAll', function() {
    it('should handle without params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      tasks.findAll();
      assert(dispatcher.get.calledWithExactly('/tasks', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      tasks.findAll(params);
      assert(dispatcher.get.calledWithExactly('/tasks', params));
    });
  });

  describe('#findById', function() {
    it('should handle without params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var id = 1;
      tasks.findById(id);
      assert(dispatcher.get.calledWithExactly('/tasks/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      tasks.findById(id, params);
      assert(dispatcher.get.calledWithExactly('/tasks/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      tasks.findById(id, params);
      assert(dispatcher.get.calledWithExactly('/tasks/1', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      tasks.findById(id, params);
      assert(dispatcher.get.calledWithExactly('/tasks/NaN', params));
    });
  });

  describe('#findByWorkspace', function() {
    it('should handle without params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var id = 1;
      tasks.findByWorkspace(id);
      assert(
        dispatcher.get.calledWithExactly('/workspaces/1/tasks', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      tasks.findByWorkspace(id, params);
      assert(
        dispatcher.get.calledWithExactly('/workspaces/1/tasks', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      tasks.findByWorkspace(id, params);
      assert(
        dispatcher.get.calledWithExactly('/workspaces/1/tasks', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      tasks.findByWorkspace(id, params);
      assert(
        dispatcher.get.calledWithExactly('/workspaces/NaN/tasks', params));
    });
  });

  describe('#update', function() {
    it('should handle the update', function() {
      var dispatcher = {
        put: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var id = 1;
      var data = {
        name: 'Test'
      };
      tasks.update(id, data);
      assert(dispatcher.put.calledWithExactly('/tasks/1', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        put: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var id = '1';
      var data = {
        name: 'Test'
      };
      tasks.update(id, data);
      assert(dispatcher.put.calledWithExactly('/tasks/1', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        put: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      tasks.update(id, data);
      assert(dispatcher.put.calledWithExactly('/tasks/NaN', data));
    });
  });

  describe('#delete', function() {
    it('should handle the deletion', function() {
      var dispatcher = {
        delete: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var id = 1;
      tasks.delete(id);
      assert(dispatcher.delete.calledWithExactly('/tasks/1'));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        delete: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var id = '1';
      tasks.delete(id);
      assert(dispatcher.delete.calledWithExactly('/tasks/1'));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        delete: sinon.stub()
      };
      var tasks = new Tasks(dispatcher);
      var id = 'foobar';
      tasks.delete(id);
      assert(dispatcher.delete.calledWithExactly('/tasks/NaN'));
    });
  });
});