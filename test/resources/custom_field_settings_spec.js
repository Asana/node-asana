/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var CustomFieldSettings = require('../../lib/resources/custom_field_settings');

describe('CustomFieldSettings', function() {

  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var customFieldSettings = new CustomFieldSettings(dispatcher);
      assert.equal(customFieldSettings.dispatcher, dispatcher);
    });
  });

  describe('#getCustomFieldSettingsForProject', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var customFieldSettings = new CustomFieldSettings(dispatcher);
      customFieldSettings.dispatchGetCollection = sinon.stub();
      var id = 1331;
      customFieldSettings.getCustomFieldSettingsForProject(id);
      assert(customFieldSettings.dispatchGetCollection.calledWith(
        '/projects/1331/custom_field_settings', undefined, undefined));
    });

  });

});
