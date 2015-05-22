/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var paging = require('../../lib/util/paging.js');

describe('Paging', function() {

  describe('#nextPage', function() {

    it('should return null if no results', function() {
      var response = {
        'data': [],
        'next_page': null
      };
      var dispatcher = {
        dispatch: sinon.stub()
      };
      assert.equal(paging.nextPage(response, dispatcher), null);
    });

    it('should return dispatcher result for next url', function() {
      var response = {
        'data': [],
        'next_page': {
          'uri': 'fake_url'
        }
      };
      var dispatcher = {
        dispatch: sinon.stub()
      };
      var fakeResult = {};
      dispatcher.dispatch.returns(fakeResult);
      assert.equal(paging.nextPage(response, dispatcher), fakeResult);
      assert.deepEqual(dispatcher.dispatch.firstCall.args[0], {
        method: 'GET',
        url: 'fake_url',
        json: true
      });
    });

    it('should pass dispatch options', function() {
      var response = {
        'data': [],
        'next_page': {
          'uri': 'fake_url'
        }
      };
      var dispatcher = {
        dispatch: sinon.stub()
      };
      var fakeOptions = {
        fake: 'value'
      };
      paging.nextPage(response, dispatcher, fakeOptions);
      assert.deepEqual(dispatcher.dispatch.firstCall.args[1], fakeOptions);
    });

    it('should fail on unrecognized response', function() {
      var response = {
        'data': {}
      };
      var dispatcher = {
        dispatch: sinon.stub()
      };
      assert.throws(function() {
        paging.nextPage(response, dispatcher);
      }, /response/i);
      assert(!dispatcher.dispatch.called);
    });

  });

  describe('#all', function() {

    function dispatcherThatReturns(response) {
      var dispatcher = { dispatch: sinon.stub() };
      var fakePromise = { then: sinon.stub() };
      dispatcher.dispatch.returns(fakePromise);
      fakePromise.then.onFirstCall().callsArgWith(0, response);
      return dispatcher;
    }

    it('should return empty if no results', function(done) {
      var response = {
        'data': [],
        'next_page': null
      };
      var dispatcher = {
        dispatch: sinon.stub()
      };
      paging.all(response, dispatcher).then(function(results) {
        assert.deepEqual(results, []);
        done();
      });
    });

    it('should return dispatcher result for next url', function(done) {
      var response1 = {
        'data': ['a', 'b'],
        'next_page': {
          'uri': 'fake_url'
        }
      };
      var response2 = {
        'data': ['c', 'd'],
        'next_page': null
      };
      var dispatcher = dispatcherThatReturns(response2);
      paging.all(response1, dispatcher).then(function(results) {
        assert.deepEqual(['a','b','c','d'], results);
        done();
      });
    });

    it('should pass dispatch options', function(done) {
      var response = {
        'data': [],
        'next_page': {
          'uri': 'fake_url'
        }
      };
      var dispatcher = dispatcherThatReturns({
        'data': [],
        'next_page': null
      });
      var fakeOptions = {
        fake: 'value'
      };
      paging.all(response, dispatcher, fakeOptions).then(function() {
        assert.deepEqual(dispatcher.dispatch.firstCall.args[1], fakeOptions);
        done();
      });
    });

    it('should fail on unrecognized response', function(done) {
      var response = {
        //'data': {}
      };
      var dispatcher = {
        dispatch: sinon.stub()
      };
      paging.all(response, dispatcher)
          .then(function() {
            assert.fail('Failed to throw error on bad response');
          })
          .catch(function() {
            assert(!dispatcher.dispatch.called);
          })
          .finally(function() {
            done();
          });
    });

  });
});
