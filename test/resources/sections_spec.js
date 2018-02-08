/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Sections = require('../../lib/resources/sections');

describe('Sections', function() {

  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var sections = new Sections(dispatcher);
      assert.equal(sections.dispatcher, dispatcher);
    });
  });

  describe('#createInProject', function() {
    it('should handle the creation', function() {
      var dispatcher = {};
      var sections = new Sections(dispatcher);
      sections.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        name: 'Test'
      };
      sections.createInProject(id, data);
      assert(sections.dispatchPost.calledWith('/projects/1/sections', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var sections = new Sections(dispatcher);
      sections.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        name: 'Test'
      };
      sections.createInProject(id, data);
      assert(sections.dispatchPost.calledWith('/projects/1/sections', data));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var sections = new Sections(dispatcher);
      sections.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      sections.createInProject(id, data);
      assert(
        sections.dispatchPost.calledWith('/projects/foobar/sections', data));
    });
  });
});
