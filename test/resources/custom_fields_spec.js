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
    // TODO: specs for other types (enum, number)

  });

});
