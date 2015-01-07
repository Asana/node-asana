/* global describe */
/* global it */
var assert = require('assert');
var sinon = require('sinon');
var rewire = require('rewire');
var errors = require('../lib/errors');
var Dispatcher = rewire('../lib/dispatcher');
var Authenticator = require('../lib/auth/authenticator');

describe('Dispatcher', function() {
  describe('ROOT_URL', function() {
    it('should be the root api url', function() {
      assert.equal(Dispatcher.ROOT_URL, 'https://app.asana.com/api/1.0');
    });
  });

  describe('url', function() {
    it('should return an Asana url', function() {
      var path = '/users/me';
      assert.equal(Dispatcher.url(path), Dispatcher.ROOT_URL + path);
    });
  });

  describe('#new', function() {
    it('should keep the authenticator', function() {
      var authenticator = {};
      var client = new Dispatcher(authenticator);
      assert.equal(client.authenticator, authenticator);
    });
  });

  describe('#authorize', function() {
    it('should delegate to the authenticator', function() {
      var fakePromise = {};
      var authStub = sinon.createStubInstance(Authenticator);
      authStub.ensureCredentials.onFirstCall().returns(fakePromise);
      var client = new Dispatcher(authStub);
      assert.equal(client.authorize(), fakePromise);
    });
  });

  describe('#dispatch', function() {
    it('should use authenticator to add auth to request', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var authFake = {
        authenticateRequest: function(params) {
          params.auth = 'fake_auth';
        }
      };
      var authSpy = sinon.spy(authFake, 'authenticateRequest');
      var dispatcher = new Dispatcher(authFake);
      dispatcher.dispatch({});
      assert(authSpy.calledOnce);
      assert(request.calledWithMatch({
        auth: 'fake_auth'
      }));
    });

    it('should pass an error from request', function() {
      var request = sinon.stub();
      var err = new Error();
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher(auth);
      var res = dispatcher.dispatch({});
      request.callArgWith(1, err);
      return res.then(function() {
        throw new Error('Should not have reached here');
      }, function(passedErr) {
        return assert.equal(passedErr, err);
      });
    });

    Object.keys(errors).forEach(function(key) {
      it('should create an error for ' + key, function() {
        var request = sinon.stub();
        var err = new errors[key]();
        Dispatcher.__set__('request', request);
        var auth = { authenticateRequest: sinon.stub() };
        var dispatcher = new Dispatcher(auth);
        var res = dispatcher.dispatch({});
        request.callArgWith(1, null, {
          statusCode: err.status
        });
        return res.then(function() {
          throw new Error('Should not have reached here');
        }, function(passedErr) {
          return assert.deepEqual(passedErr, err);
        });
      });
    });

    it('should pass the data as the value', function() {
      var request = sinon.stub();
      var payload = {
        id: 1,
        name: 'Task'
      };
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher(auth);
      var res = dispatcher.dispatch({});
      request.callArgWith(1, null, {
        statusCode: 200
      }, {
        data: payload
      });
      return res.then(function(value) {
        assert.equal(value, payload);
      });
    });

    it('should pass whole payload as the value when option set', function() {
      var request = sinon.stub();
      var payload = {
        meta: 42,
        data: {
          id: 1,
          name: 'Task'
        }
      };
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher(auth);
      var res = dispatcher.dispatch({}, { fullPayload: true });
      request.callArgWith(1, null, {
        statusCode: 200
      }, payload);
      return res.then(function(value) {
        assert.equal(value, payload);
      });
    });
  });

  describe('#get', function() {
    it('should pass the right method', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher(auth);
      dispatcher.get('/users/me', {});
      assert(request.calledWithMatch({
        method: 'GET'
      }));
    });

    it('should pass the right url', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher(auth);
      dispatcher.get('/users/me', {});
      assert(request.calledWithMatch({
        url: Dispatcher.url('/users/me')
      }));
    });

    it('should pass the query on', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var query = {
        'opt_fields': ['id', 'name'].join(',')
      };
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher(auth);
      dispatcher.get('/users/me', query);
      assert(request.calledWithMatch({
        qs: query
      }));
    });

    it('should not pass the query if it was not defined', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher(auth);
      dispatcher.get('/users/me');
      assert(request.calledWith({
        method: 'GET',
        url: Dispatcher.url('/users/me'),
        json: true
      }), function() {});
    });
  });

  describe('#post', function() {
    it('should pass the right method', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher(auth);
      dispatcher.post('/workspaces/1', {
        name: 'Test'
      });
      assert(request.calledWithMatch({
        method: 'POST'
      }));
    });

    it('should pass the right url', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher(auth);
      dispatcher.post('/workspaces/1', {
        name: 'Test'
      });
      assert(request.calledWithMatch({
        url: Dispatcher.url('/workspaces/1')
      }));
    });

    it('should pass the data in the json field', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher(auth);
      var data = {
        name: 'Test'
      };
      dispatcher.post('/workspaces/1', data);
      assert(request.calledWithMatch({
        json: {
          data: data
        }
      }));
    });
  });

  describe('#put', function() {
    it('should pass the right method', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher(auth);
      dispatcher.put('/workspaces/1', {
        name: 'Test'
      });
      assert(request.calledWithMatch({
        method: 'PUT'
      }));
    });

    it('should pass the right url', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher(auth);
      dispatcher.put('/workspaces/1', {
        name: 'Test'
      });
      assert(request.calledWithMatch({
        url: Dispatcher.url('/workspaces/1')
      }));
    });

    it('should pass the data in the json field', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher(auth);
      var data = {
        name: 'Test'
      };
      dispatcher.put('/workspaces/1', data);
      assert(request.calledWithMatch({
        json: {
          data: data
        }
      }));
    });
  });

  describe('#delete', function() {
    it('should pass the right method', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher(auth);
      dispatcher.delete('/projects/1');
      assert(request.calledWithMatch({
        method: 'DELETE'
      }));
    });

    it('should pass the right url', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher(auth);
      dispatcher.delete('/projects/1');
      assert(request.calledWithMatch({
        url: Dispatcher.url('/projects/1')
      }));
    });
  });
});