/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Events = require('../../lib/resources/events');
var EventStream = Events.EventStream;
var Readable = require('stream').Readable;

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
          '/events', {
            resource: 1
          }));
    });

    it('should handle with sync token', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var events = new Events(dispatcher);
      var id = 1;
      var token = 'fake_token';
      events.get(id, token);
      assert(
        dispatcher.get.calledWithExactly(
          '/events', {
            resource: 1,
            sync: token
          }));
    });
  });

  describe('#stream', function() {

    it('should create a new EventStream', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var events = new Events(dispatcher);
      var fakeOptions = {
        periodSeconds: 1
      };
      var stream = events.stream(123, fakeOptions);
      assert(stream instanceof EventStream);
      assert(stream instanceof Readable);
      assert.equal(stream.options, fakeOptions);
      assert.equal(stream.resourceId, 123);
    });

  });
});
