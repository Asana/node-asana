/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Attachments = require('../../lib/resources/attachments');

describe('Attachments', function() {
  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var attachments = new Attachments(dispatcher);
      assert.equal(attachments.dispatcher, dispatcher);
    });
  });

  describe('#getAttachment', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      attachments.dispatchGet = sinon.stub();
      var id = 1;
      attachments.getAttachment(id);
      assert(
          attachments.dispatchGet.calledWith(
              '/attachments/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      attachments.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      attachments.getAttachment(id, params);
      assert(
          attachments.dispatchGet.calledWith('/attachments/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      attachments.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      attachments.getAttachment(id, params);
      assert(
          attachments.dispatchGet.calledWith('/attachments/1', params));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      attachments.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      attachments.getAttachment(id, params);
      assert(
          attachments.dispatchGet.calledWith(
              '/attachments/foobar', params));
    });
  });

  describe('#findByTask', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      attachments.dispatchGetCollection = sinon.stub();
      var id = 1;
      attachments.findByTask(id);
      assert(
          attachments.dispatchGetCollection.calledWith(
              '/tasks/1/attachments', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      attachments.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      attachments.findByTask(id, params);
      assert(
          attachments.dispatchGetCollection.calledWith(
              '/tasks/1/attachments', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      attachments.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      attachments.findByTask(id, params);
      assert(
          attachments.dispatchGetCollection.calledWith(
              '/tasks/1/attachments', params));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var attachments = new Attachments(dispatcher);
      attachments.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      attachments.findByTask(id, params);
      assert(
        attachments.dispatchGetCollection.calledWith(
            '/tasks/foobar/attachments', params));
    });
  });
});