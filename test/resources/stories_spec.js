/* jshint mocha:true */
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
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      var id = 1;
      stories.findById(id);
      assert(this.get.calledWithExactly('/stories/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      stories.findById(id, params);
      assert(this.get.calledWithExactly('/stories/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      stories.findById(id, params);
      assert(this.get.calledWithExactly('/stories/1', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      stories.findById(id, params);
      assert(this.get.calledWithExactly('/stories/NaN', params));
    });
  });

  describe('#findByTask', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      var id = 1;
      stories.findByTask(id);
      assert(
        dispatcher.get.calledWithExactly('/tasks/1/stories', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      stories.findByTask(id, params);
      assert(this.get.calledWithExactly('/tasks/1/stories', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      stories.findByTask(id, params);
      assert(this.get.calledWithExactly('/tasks/1/stories', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
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

  describe('#createOnTask', function() {
    it('should handle the creation', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      var id = 1;
      var data = {
        text: 'Test'
      };
      stories.createOnTask(id, data);
      assert(this.post.calledWithExactly('/tasks/1/stories', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      var id = '1';
      var data = {
        text: 'Test'
      };
      stories.createOnTask(id, data);
      assert(this.post.calledWithExactly('/tasks/1/stories', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      var id = 'foobar';
      var data = {
        text: 'Test'
      };
      stories.createOnTask(id, data);
      assert(this.post.calledWithExactly('/tasks/NaN/stories', data));
    });
  });
});