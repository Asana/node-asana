/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Bluebird = require('bluebird');
var ResourceStream = require('../../lib/util/resource_stream.js');

describe('ResourceStream', function() {

  describe('#read', function() {

  });

  describe('#emit', function() {

    it('should end if no data', function(done) {
      var stream = new ResourceStream({
        data: [],
        nextPage: function() {
          return Bluebird.resolve(null);
        }
      });
      var onData = sinon.stub();
      stream.on('data', onData);
      stream.on('end', function() {
        assert(!onData.called);
        done();
      });
    });

    it('should emit data then end if no more pages', function(done) {
      var stream = new ResourceStream({
        data: ['a'],
        nextPage: function() {
          return Bluebird.resolve(null);
        }
      });
      var onData = sinon.stub();
      stream.on('data', onData);
      stream.on('end', function() {
        assert(onData.calledOnce);
        assert.equal(onData.firstCall.args[0], 'a');
        done();
      });
    });

    it('should emit data over multiple pages', function(done) {
      var stream = new ResourceStream({
        data: ['a'],
        nextPage: function() {
          return Bluebird.resolve({
            data: ['b'],
            nextPage: function() {
              return Bluebird.resolve(null);
            }
          });
        }
      });
      var onData = sinon.stub();
      stream.on('data', onData);
      stream.on('end', function() {
        assert(onData.calledTwice);
        assert.equal(onData.firstCall.args[0], 'a');
        assert.equal(onData.secondCall.args[0], 'b');
        done();
      });
    });

    it('should emit data and fetch next page only when needed', function(done) {
      var nextPage = sinon.stub();
      nextPage.returns(Bluebird.resolve(null));
      var stream = new ResourceStream({
        data: ['a'],
        nextPage: nextPage
      });

      assert(!nextPage.called);

      stream.on('data', function(data) {
        assert.equal(data, 'a');
      });
      stream.on('end', function() {
        assert(nextPage.calledOnce);
        done();
      });
    });

    it('should emit error on failed request', function(done) {
      var stream = new ResourceStream({
        data: [],
        nextPage: function() {
          return Bluebird.reject('fake_error');
        }
      });
      stream.pushBuffered = sinon.stub();
      stream.on('error', function(error) {
        assert.equal(error, 'fake_error');
        assert(!stream.pushBuffered.called);
        done();
      });
      stream.read();
    });
  });
});
