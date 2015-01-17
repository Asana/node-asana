/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Workspaces = require('../../lib/resources/workspaces');

describe('Workspaces', function() {
  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var workspaces = new Workspaces(dispatcher);
      assert.equal(workspaces.dispatcher, dispatcher);
    });
  });

  describe('#findAll', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var workspaces = new Workspaces(dispatcher);
      workspaces.getCollection = sinon.stub();
      workspaces.findAll();
      assert(workspaces.getCollection.calledWithExactly(
          '/workspaces', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var workspaces = new Workspaces(dispatcher);
      workspaces.getCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      workspaces.findAll(params);
      assert(workspaces.getCollection.calledWithExactly('/workspaces', params));
    });
  });

  describe('#update', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var workspaces = new Workspaces(dispatcher);
      workspaces.put = sinon.stub();
      var id = 1;
      var data = {
        name: 'Test'
      };
      workspaces.update(id, data);
      assert(workspaces.put.calledWithExactly('/workspaces/1', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var workspaces = new Workspaces(dispatcher);
      workspaces.put = sinon.stub();
      var id = '1';
      var data = {
        name: 'Test'
      };
      workspaces.update(id, data);
      assert(workspaces.put.calledWithExactly('/workspaces/1', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var workspaces = new Workspaces(dispatcher);
      workspaces.put = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      workspaces.update(id, data);
      assert(workspaces.put.calledWithExactly('/workspaces/NaN', data));
    });
  });

  describe('#typeahead', function() {
    it('should handle task typeahead', function() {
      var dispatcher = {};
      var workspaces = new Workspaces(dispatcher);
      workspaces.getCollection = sinon.stub();
      var id = 1;
      var data = {
        type: 'task',
        query: 'foobar'
      };
      workspaces.typeahead(id, data);
      assert(workspaces.getCollection.calledWithExactly(
        '/workspaces/1/typeahead', data));
    });
    it('should handle string numbers in typeahead', function() {
      var dispatcher = {};
      var workspaces = new Workspaces(dispatcher);
      workspaces.getCollection = sinon.stub();
      var id = '1';
      var data = {
        type: 'task',
        query: 'foobar'
      };
      workspaces.typeahead(id, data);
      assert(workspaces.getCollection.calledWithExactly(
        '/workspaces/1/typeahead', data));
    });
    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var workspaces = new Workspaces(dispatcher);
      workspaces.getCollection = sinon.stub();
      var id = 'baz';
      var data = {
        type: 'task',
        query: 'foobar'
      };
      workspaces.typeahead(id, data);
      assert(workspaces.getCollection.calledWithExactly(
        '/workspaces/NaN/typeahead', data));
    });
  });
});