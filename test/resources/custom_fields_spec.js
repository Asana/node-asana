/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var CustomFields = require('../../lib/resources/custom_fields');

describe('CustomFields', function() {

  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var customFields = new CustomFields(dispatcher);
      assert.equal(customFields.dispatcher, dispatcher);
    });
  });

  describe('#findById', function() {
    it('should handle text-type custom fields', function() {
      // TODO: this doesn't really check the return value for correct type.
      var dispatcher = {};
      var customFields = new CustomFields(dispatcher);
      customFields.dispatchGet = sinon.stub();
      var id = 134679;
      customFields.findById(id);
      assert(customFields.dispatchGet.calledWith(
        '/custom_fields/134679', undefined));
    });
  });

  describe('#addEnumOption', function() {
    it('should call createEnumOption for backwards compatability', function() {
      var dispatcher = {};
      var customFields = new CustomFields(dispatcher);
      customFields.dispatchPost = sinon.stub();

      var id = 134679;
      customFields.addEnumOption(id, {name: 'Test'});

      assert(customFields.dispatchPost.calledWith(
          '/custom_fields/134679/enum_options'));
    });
  });

  describe('#createEnumOption', function() {
    it('should handle enum creation', function() {
      var dispatcher = {};
      var customFields = new CustomFields(dispatcher);
      customFields.dispatchPost = sinon.stub();

      var id = 134679;
      customFields.createEnumOption(id, {name: 'Test'});

      console.log(customFields.dispatchPost.calledWith());
      assert(customFields.dispatchPost.calledWith(
          '/custom_fields/134679/enum_options'));
    });
  });

  describe('#reorderEnumOption', function() {
    it('should call insertEnumOption for backwards compatability', function() {
      var dispatcher = {};
      var customFields = new CustomFields(dispatcher);
      customFields.dispatchPost = sinon.stub();

      var id = 134679;
      customFields.reorderEnumOption(id, {name: 'Test'});

      assert(customFields.dispatchPost.calledWith(
          '/custom_fields/134679/enum_options/insert'));
    });
  });

  describe('#insertEnumOption', function() {
    it('should handle enum insertion', function() {
      var dispatcher = {};
      var customFields = new CustomFields(dispatcher);
      customFields.dispatchPost = sinon.stub();

      var id = 134679;
      customFields.insertEnumOption(id, {name: 'Test'});

      assert(customFields.dispatchPost.calledWith(
          '/custom_fields/134679/enum_options/insert'));
    });
  });

});
