/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var EventStream = require('../../lib/util/event_stream.js');

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
    stream.pushBuffered = sinon.mock().twice().returns(true);
    callback({
      sync: 'fake_sync',
      data: ['event1', 'event2']
    });
    stream.pushBuffered.verify();
    assert.equal('event1', stream.pushBuffered.firstCall.args[0]);
    assert.equal('event2', stream.pushBuffered.secondCall.args[0]);
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

});