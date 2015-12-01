/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Webhooks = require('../../lib/resources/webhooks');

describe('Webhooks', function() {
  describe('#create', function() {
    it('should create a webhook', function() {
      var webhooks = new Webhooks({});
      webhooks.dispatchPost = sinon.stub();
      var data = {
        'resource': 111,
        'target': 'https://foo/123'
      };
      webhooks.create(111, 'https://foo/123');
      assert(webhooks.dispatchPost.calledWith('/webhooks', data));
    });
  });

  describe('#get_by_id', function() {
    it('should get all webhooks', function() {
      var webhooks = new Webhooks({});
      webhooks.dispatchGetCollection = sinon.stub();
      webhooks.getAll(1337);
      assert(webhooks.dispatchGetCollection.calledWith('/webhooks',
          { 'workspace': 1337 }));
    });
  });

  describe('#get_by_id', function() {
    it('should get a webhook by id', function() {
      var webhooks = new Webhooks({});
      webhooks.dispatchGet = sinon.stub();
      webhooks.getById(222);
      assert(webhooks.dispatchGet.calledWith('/webhooks/222'));
    });
  });

  describe('#delete_by_id', function() {
    it('should get a webhook by id', function() {
      var webhooks = new Webhooks({});
      webhooks.dispatchDelete = sinon.stub();
      webhooks.deleteById(222);
      assert(webhooks.dispatchDelete.calledWith('/webhooks/222'));
    });
  });
});
