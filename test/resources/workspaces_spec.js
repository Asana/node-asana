/* global describe */
/* global it */
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
      var dispatcher = {
        get: sinon.stub()
      };
      var workspaces = new Workspaces(dispatcher);
      workspaces.findAll();
      assert(dispatcher.get.calledWithExactly('/workspaces', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var workspaces = new Workspaces(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      workspaces.findAll(params);
      assert(dispatcher.get.calledWithExactly('/workspaces', params));
    });
  });

  describe('#update', function() {
    it('should handle the update', function() {
      var dispatcher = {
        put: sinon.stub()
      };
      var workspaces = new Workspaces(dispatcher);
      var id = 1;
      var data = {
        name: 'Test'
      };
      workspaces.update(id, data);
      assert(dispatcher.put.calledWithExactly('/workspaces/1', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        put: sinon.stub()
      };
      var workspaces = new Workspaces(dispatcher);
      var id = '1';
      var data = {
        name: 'Test'
      };
      workspaces.update(id, data);
      assert(dispatcher.put.calledWithExactly('/workspaces/1', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        put: sinon.stub()
      };
      var workspaces = new Workspaces(dispatcher);
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      workspaces.update(id, data);
      assert(dispatcher.put.calledWithExactly('/workspaces/NaN', data));
    });
  });

  describe('#typeahead', function() {
    it('should handle task typeahead', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var workspaces = new Workspaces(dispatcher);
      var id = 1;
      var data = {
        type: 'task',
        query: 'foobar'
      };
      workspaces.typeahead(id, data);
      assert(dispatcher.get.calledWithExactly(
        '/workspaces/1/typeahead', data));
    });
    it('should handle string numbers in typeahead', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var workspaces = new Workspaces(dispatcher);
      var id = '1';
      var data = {
        type: 'task',
        query: 'foobar'
      };
      workspaces.typeahead(id, data);
      assert(dispatcher.get.calledWithExactly(
        '/workspaces/1/typeahead', data));
    });
    it('should do weird things with real strings', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var workspaces = new Workspaces(dispatcher);
      var id = 'baz';
      var data = {
        type: 'task',
        query: 'foobar'
      };
      workspaces.typeahead(id, data);
      assert(dispatcher.get.calledWithExactly(
        '/workspaces/NaN/typeahead', data));
    });
  });
});