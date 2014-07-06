/* global describe */
/* global it */
var assert = require('assert');
var sinon = require('sinon');
var Stories = require('../../lib/resources/stories');

describe('Stories', function() {
  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var stories = new Stories(dispatcher);
      assert.equal(stories.dispatcher, dispatcher);
    });
  });

  describe('#findById', function() {
    it('should handle without params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var stories = new Stories(dispatcher);
      var id = 1;
      stories.findById(id);
      assert(dispatcher.get.calledWithExactly('/stories/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var stories = new Stories(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      stories.findById(id, params);
      assert(dispatcher.get.calledWithExactly('/stories/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var stories = new Stories(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      stories.findById(id, params);
      assert(dispatcher.get.calledWithExactly('/stories/1', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var stories = new Stories(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      stories.findById(id, params);
      assert(dispatcher.get.calledWithExactly('/stories/NaN', params));
    });
  });

  describe('#findByTask', function() {
    it('should handle without params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var stories = new Stories(dispatcher);
      var id = 1;
      stories.findByTask(id);
      assert(
        dispatcher.get.calledWithExactly('/tasks/1/stories', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var stories = new Stories(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      stories.findByTask(id, params);
      assert(dispatcher.get.calledWithExactly('/tasks/1/stories', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var stories = new Stories(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      stories.findByTask(id, params);
      assert(dispatcher.get.calledWithExactly('/tasks/1/stories', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var stories = new Stories(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      stories.findByTask(id, params);
      assert(
        dispatcher.get.calledWithExactly('/tasks/NaN/stories', params));
    });
  });
});