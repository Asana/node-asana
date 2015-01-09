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
          }, {
            fullPayload: true
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
          }, {
            fullPayload: true
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

describe('EventStream', function() {

  var events, eventsGetResult, clock;
  beforeEach(function() {
    eventsGetResult = {
      then: sinon.stub().returnsThis(),
      catch: sinon.stub().returnsThis()
    };
    events = {
      get: sinon.stub().returns(eventsGetResult)
    };
    clock = sinon.useFakeTimers(1000000000);
  });

  afterEach(function() {
    clock.restore();
  });

  function readForCallback(stream) {
    stream.read();
    assert(eventsGetResult.then.called);
    return eventsGetResult.then.firstCall.args[0];
  }

  function readForCatch(stream) {
    stream.read();
    assert(eventsGetResult.catch.called);
    return eventsGetResult.catch.firstCall.args[0];
  }

  it('should poll for events on read', function() {
    var stream = new EventStream(events, 123);
    stream.read();
    assert(events.get.calledWith(123));
  });

  it('should push events on poll response', function() {
    var stream = new EventStream(events, 123);
    var callback = readForCallback(stream);
    stream.push = sinon.mock().twice().returns(true);
    callback({
      sync: 'fake_sync',
      data: ['event1', 'event2']
    });
    stream.push.verify();
    assert.equal('event1', stream.push.firstCall.args[0]);
    assert.equal('event2', stream.push.secondCall.args[0]);
  });

  it('should buffer events if stream is paused', function() {
    var stream = new EventStream(events, 123);
    var callback = readForCallback(stream);
    stream.push = sinon.mock().twice();
    stream.push.onFirstCall().returns(true);
    stream.push.onSecondCall().returns(false);
    callback({
      sync: 'fake_sync',
      data: ['event1', 'event2']
    });
    stream.push.verify();
    assert.deepEqual(stream._bufferedEvents, ['event2']);
  });

  it('should emit error on poll error and continue if handled', function() {
    var stream = new EventStream(events, 123);
    var onError = sinon.mock().once().withExactArgs('fake_error');
    stream.on('error', onError);
    var callback = readForCatch(stream);
    stream._schedule = sinon.mock().once();
    callback('fake_error');
    onError.verify();
    stream._schedule.verify();
  });

  it('should end on error if not handled', function() {
    var stream = new EventStream(events, 123);
    var callback = readForCatch(stream);
    stream._schedule = sinon.mock().never();
    assert.throws(function() {
      callback('fake_error');
    }, 'fake_error');
    stream._schedule.verify();
  });

  it('should poll after period has passed since last poll started', function() {
    var stream = new EventStream(events, 123, {
      periodSeconds: 1
    });
    var callback = readForCallback(stream);
    clock.tick(500);
    callback({
      sync: 'fake_sync',
      data: []
    });
    stream._poll = sinon.mock().once();
    clock.tick(500);
    stream._poll.verify();
  });

  it('should poll immediately after callback if period has passed', function() {
    var stream = new EventStream(events, 123, {
      periodSeconds: 1
    });
    var callback = readForCallback(stream);
    clock.tick(1001);
    callback({
      sync: 'fake_sync',
      data: []
    });
    stream._poll = sinon.mock().once();
    clock.tick(0);
    stream._poll.verify();
  });

  it('should not poll if period has not passed since last poll started',
    function() {
      var stream = new EventStream(events, 123, {
        periodSeconds: 1
      });
      var callback = readForCallback(stream);
      clock.tick(500);
      callback({
        sync: 'fake_sync',
        data: []
      });
      stream._poll = sinon.mock().never();
      clock.tick(499);
      stream._poll.verify();
    });

  it('should flush buffered events when read', function() {
    var stream = new EventStream(events, 123);
    stream._bufferedEvents = ['event1', 'event2'];
    stream.push = sinon.mock().twice();
    stream.push.onFirstCall().returns(true);
    stream.push.onSecondCall().returns(true);
    stream._schedule = sinon.mock().once();

    stream.read();

    assert.deepEqual(stream._bufferedEvents, []);
    stream.push.verify();
    stream._schedule.verify();
  });

  it('should partially flush buffered events if more than can be read',
    function() {
      var stream = new EventStream(events, 123);
      stream._bufferedEvents = ['event1', 'event2'];
      stream.push = sinon.mock().twice();
      stream.push.onFirstCall().returns(true);
      stream.push.onSecondCall().returns(false);
      stream._schedule = sinon.mock().never();

      stream.read();

      assert.deepEqual(stream._bufferedEvents, ['event2']);
      stream.push.verify();
      stream._schedule.verify();
    });

});