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

  describe('#getStory', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      stories.dispatchGet = sinon.stub();
      var id = 1;
      stories.getStory(id);
      assert(stories.dispatchGet.calledWith('/stories/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      stories.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      stories.getStory(id, params);
      assert(stories.dispatchGet.calledWith('/stories/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      stories.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      stories.getStory(id, params);
      assert(stories.dispatchGet.calledWith('/stories/1', params));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      stories.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      stories.getStory(id, params);
      assert(stories.dispatchGet.calledWith('/stories/foobar', params));
    });
  });

  describe('#getStoriesForTask', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      stories.dispatchGetCollection = sinon.stub();
      var id = 1;
      stories.getStoriesForTask(id);
      assert(
        stories.dispatchGetCollection.calledWith(
            '/tasks/1/stories', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      stories.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      stories.getStoriesForTask(id, params);
      assert(
          stories.dispatchGetCollection.calledWith(
              '/tasks/1/stories', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      stories.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      stories.getStoriesForTask(id, params);
      assert(
          stories.dispatchGetCollection.calledWith(
              '/tasks/1/stories', params));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      stories.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      stories.getStoriesForTask(id, params);
      assert(
          stories.dispatchGetCollection.calledWith(
              '/tasks/foobar/stories', params));
    });
  });

  describe('#createStoryForTask', function() {
    it('should handle the creation', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      stories.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        text: 'Test'
      };
      stories.createStoryForTask(id, data);
      assert(stories.dispatchPost.calledWith('/tasks/1/stories', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      stories.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        text: 'Test'
      };
      stories.createStoryForTask(id, data);
      assert(stories.dispatchPost.calledWith('/tasks/1/stories', data));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var stories = new Stories(dispatcher);
      stories.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        text: 'Test'
      };
      stories.createStoryForTask(id, data);
      assert(
          stories.dispatchPost.calledWith('/tasks/foobar/stories', data));
    });
  });
});