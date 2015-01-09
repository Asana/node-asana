/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var util = require('util');
var BufferedReadable = require('../../lib/util/buffered_readable.js');

describe('BufferedReadable', function() {

  function FakeStream() {
    BufferedReadable.call(this);
  }
  util.inherits(FakeStream, BufferedReadable);

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

  describe('#read', function() {
    it('should call readUnbuffered when buffer empty', function() {
      var stream = new FakeStream();
      stream._readUnbuffered = sinon.stub();
      stream.push = sinon.stub();
      stream.read();
      assert(stream._readUnbuffered.calledOnce);
      assert(!stream.push.called);
      assert.deepEqual(stream._buffer, []);
    });

    it('should drain buffer until paused', function() {
      var stream = new FakeStream();
      stream._readUnbuffered = sinon.stub();
      stream._buffer = ['abc', 'def'];
      stream.push = sinon.stub();
      stream.push.onFirstCall().returns(true);
      stream.push.onSecondCall().returns(false);
      stream.read();
      assert(!stream._readUnbuffered.called);
      assert(stream.push.calledTwice);
      assert.equal(stream.push.firstCall.args[0], 'abc');
      assert.equal(stream.push.secondCall.args[0], 'def');
      assert.deepEqual(stream._buffer, ['def']);
    });

    it('should drain buffer then call readUnbuffered', function() {
      var stream = new FakeStream();
      stream._readUnbuffered = sinon.stub();
      stream._buffer = ['abc', 'def'];
      stream.push = sinon.stub();
      stream.push.onFirstCall().returns(true);
      stream.push.onSecondCall().returns(true);
      stream.read();
      assert(stream._readUnbuffered.calledOnce);
      assert(stream.push.calledTwice);
      assert.equal(stream.push.firstCall.args[0], 'abc');
      assert.equal(stream.push.secondCall.args[0], 'def');
      assert.deepEqual(stream._buffer, []);
    });
  });

  describe('#pushBuffered', function() {
    it('should push if not buffering', function() {
      var stream = new FakeStream();
      stream.push = sinon.stub();
      stream.push.onFirstCall().returns(true);
      var result = stream.pushBuffered('abc');
      assert(result);
      assert(stream.push.calledOnce);
      assert.equal(stream.push.firstCall.args[0], 'abc');
      assert.deepEqual(stream._buffer, []);
    });

    it('should not push and add to buffer if already buffering', function() {
      var stream = new FakeStream();
      stream._buffer = ['abc'];
      stream.push = sinon.stub();
      var result = stream.pushBuffered('def');
      assert(!result);
      assert(!stream.push.called);
      assert.deepEqual(stream._buffer, ['abc', 'def']);
    });

    it('should add to buffer if paused', function() {
      var stream = new FakeStream();
      stream.push = sinon.stub();
      stream.push.onFirstCall().returns(false);
      var result = stream.pushBuffered('abc');
      assert(!result);
      assert(stream.push.calledOnce);
      assert.deepEqual(stream._buffer, ['abc']);
    });
  });
});