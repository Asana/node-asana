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
});
