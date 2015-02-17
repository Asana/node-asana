/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var rewire = require('rewire');
var ResourceStream = rewire('../../lib/util/resource_stream.js');

describe('ResourceStream', function() {

  var dispatcher;
  beforeEach(function() {
    dispatcher = {};
  });

  function createPromise() {
    return {
      then: sinon.stub().returnsThis(),
      catch: sinon.stub().returnsThis()
    };
  }

  describe('#read', function() {

    it('should end if no pages', function() {
      var stream = new ResourceStream(dispatcher, null);
      stream.push = sinon.stub();
      stream.read();
      assert(stream.push.calledOnce);
      assert.equal(stream.push.firstCall.args[0], null);
    });

    it('should fail if response not a collection', function() {
      var promise = createPromise();
      var stream = new ResourceStream(dispatcher, promise);
      promise.then.onFirstCall().callsArgWith(0, {
        data: {
          id: 123
        }
      });
      stream.pushBuffered = sinon.stub();

      assert.throws(function() {
        stream.read();
      }, /response/i);

      assert(!stream.pushBuffered.called);
    });

    it('should push resources and store promise for next page', function() {
      /* jshint camelcase:false */
      var promise = createPromise();
      var nextPromise = createPromise();
      var nextPage = sinon.stub().returns(nextPromise);
      ResourceStream.__set__('paging', {
        nextPage: nextPage
      });
      var stream = new ResourceStream(dispatcher, promise);
      var response = {
        data: ['first', 'second'],
        next_page: nextPage
      };
      promise.then.onFirstCall().callsArgWith(0, response).returns(promise);
      stream.pushBuffered = sinon.stub();

      stream.read();

      assert(stream.pushBuffered.calledTwice);
      assert.deepEqual(stream.pushBuffered.firstCall.args, ['first']);
      assert.deepEqual(stream.pushBuffered.secondCall.args, ['second']);
      assert(nextPage.calledOnce);
      assert.deepEqual(
          nextPage.firstCall.args, [response, dispatcher, undefined]);
      assert.equal(stream.promise, nextPromise);
    });

    it('should emit error on failed request', function() {
      /* jshint camelcase:false */
      var promise = createPromise();
      var stream = new ResourceStream(dispatcher, promise);
      var onError = sinon.mock().once().withExactArgs('fake_error');
      stream.on('error', onError);
      promise.catch.onFirstCall().callsArgWith(0, 'fake_error')
          .returns(promise);

      stream.read();

      assert(!stream.pushBuffered.called);
      onError.verify();
    });
  });
});
