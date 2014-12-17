/* global describe */
/* global it */
var assert = require('assert');
var sinon = require('sinon');
var Events = require('../../lib/resources/events');

describe('Events', function() {
  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var events = new Events(dispatcher);
      assert.equal(events.dispatcher, dispatcher);
    });
  });

  describe('#get', function() {
    it('should handle without sync token', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var events = new Events(dispatcher);
      var id = 1;
      events.get(id);
      assert(
          dispatcher.get.calledWithExactly(
              '/events', { resource: 1 }, { fullPayload: true }));
    });

    it('should handle with sync token', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var events = new Events(dispatcher);
      var id = 1;
      var token = "fake_token";
      events.get(id, token);
      assert(
          dispatcher.get.calledWithExactly(
              '/events', { resource: 1, sync: token }, { fullPayload: true }));
    });
  });
});