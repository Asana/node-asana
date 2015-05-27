/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Bluebird = require('bluebird');
var Collection = require('../../lib/util/collection.js');

describe('Collection', function() {

  function dispatcherThatReturns(response) {
    var dispatcher = { dispatch: sinon.stub() };
    dispatcher.dispatch.returns(Bluebird.resolve(response));
    return dispatcher;
  }

  describe('#isCollectionResponse', function() {
    it('should return true if empty data array present', function() {
      assert.equal(true, Collection.isCollectionResponse({
        data: []
      }));
    });

    it('should return true if non-empty data array present', function() {
      assert.equal(true, Collection.isCollectionResponse({
        data: [{ id: 123 }]
      }));
    });

    it('should return false if data present but not array', function() {
      assert.equal(false, Collection.isCollectionResponse({
        data: { id: 123 }
      }));
    });

    it('should return false if data not present', function() {
      assert.equal(false, Collection.isCollectionResponse({
        errors: [{ message: 'oops' }]
      }));
    });
  });

  describe('#constructor', function() {
    it('should store data from request', function() {
      var response = {
        'data': ['abc', 'def'],
        'next_page': null
      };
      var collection = new Collection(response, {});
      assert.deepEqual(collection.data, ['abc', 'def']);
    });

    it('should fail on unrecognized response', function() {
      var response = {
        'data': {}
      };
      assert.throws(function() {
        /* jshint unused:false */
        var collection = new Collection(response, {});
      }, /response/i);
    });
  });

  describe('#nextPage', function() {

    it('should resolve to null if no results', function(done) {
      var response = {
        'data': [],
        'next_page': null
      };
      var dispatcher = {
        dispatch: sinon.stub()
      };
      var collection = new Collection(response, dispatcher);
      collection.nextPage().then(function(page) {
        assert.equal(page, null);
        done();
      });
    });

    it('should make request and return collection for page', function(done) {
      var response = {
        'data': ['abc'],
        'next_page': {
          'uri': 'fake_url'
        }
      };
      var dispatcher = dispatcherThatReturns({
        'data': ['def'],
        'next_page': null
      });

      var collection = new Collection(response, dispatcher);
      collection.nextPage().then(function(page) {
        assert(page instanceof Collection);
        assert.deepEqual(page.data, ['def']);
        assert.deepEqual(dispatcher.dispatch.firstCall.args[0], {
          method: 'GET',
          url: 'fake_url',
          json: true
        });
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
        'data': []
      });
      var fakeOptions = {
        fake: 'value'
      };

      var collection = new Collection(response, dispatcher, fakeOptions);
      collection.nextPage().then(function() {
        assert.deepEqual(dispatcher.dispatch.firstCall.args[1], fakeOptions);
        done();
      });
    });

  });

  describe('#fetch', function() {

    it('should return empty if no results', function(done) {
      var response = {
        'data': [],
        'next_page': null
      };
      var dispatcher = {
        dispatch: sinon.stub()
      };
      var collection = new Collection(response, dispatcher);
      collection.fetch().then(function(results) {
        assert.deepEqual(results, []);
        done();
      });
    });

    it('should return all pages of results', function(done) {
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

      var collection = new Collection(response1, dispatcher);
      collection.fetch().then(function(results) {
        assert.deepEqual(['a','b','c','d'], results);
        done();
      });
    });

    it('should return all results up to max items', function(done) {
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

      var collection = new Collection(response1, dispatcher);
      collection.fetch(3).then(function(results) {
        assert.deepEqual(['a','b','c'], results);
        done();
      });
    });

    it('should return all results if max items is too big', function(done) {
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

      var collection = new Collection(response1, dispatcher);
      collection.fetch(7).then(function(results) {
        assert.deepEqual(['a','b','c','d'], results);
        done();
      });
    });

  });
});
