/* global describe */
/* global it */
var assert = require('assert');
var sinon = require('sinon');
var rewire = require('rewire');
var errors = require('../lib/errors');
var Dispatcher = rewire('../lib/dispatcher');

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
    it('should have the auth key and auth value', function() {
      var authKey = 'auth';
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var client = new Dispatcher(authKey, authValue);
      assert.equal(client.authKey, authKey);
      assert.equal(client.authValue, authValue);
    });
  });

  describe('#dispatch', function() {
    it('should set the authKey and authValue', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher('auth', authValue);
      dispatcher.dispatch({});
      assert(request.calledWithMatch({
        auth: authValue
      }));
    });

    it('should pass an error from request', function() {
      var request = sinon.stub();
      var err = new Error();
      Dispatcher.__set__('request', request);
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher('auth', authValue);
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
        var authValue = {
          user: 'apiKey',
          pass: ''
        };
        var dispatcher = new Dispatcher('auth', authValue);
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
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher('auth', authValue);
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
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher('auth', authValue);
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
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher('auth', authValue);
      dispatcher.get('/users/me', {});
      assert(request.calledWithMatch({
        method: 'GET'
      }));
    });

    it('should pass the right url', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher('auth', authValue);
      dispatcher.get('/users/me', {});
      assert(request.calledWithMatch({
        url: Dispatcher.url('/users/me')
      }));
    });

    it('should pass the query on', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var query = {
        'opt_fields': ['id', 'name'].join(',')
      };
      var dispatcher = new Dispatcher('auth', authValue);
      dispatcher.get('/users/me', query);
      assert(request.calledWithMatch({
        qs: query
      }));
    });

    it('should not pass the query if it was not defined', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher('auth', authValue);
      dispatcher.get('/users/me');
      assert(request.calledWith({
        auth: authValue,
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
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher('auth', authValue);
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
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher('auth', authValue);
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
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher('auth', authValue);
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
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher('auth', authValue);
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
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher('auth', authValue);
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
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher('auth', authValue);
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
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher('auth', authValue);
      dispatcher.delete('/projects/1');
      assert(request.calledWithMatch({
        method: 'DELETE'
      }));
    });

    it('should pass the right url', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var authValue = {
        user: 'apiKey',
        pass: ''
      };
      var dispatcher = new Dispatcher('auth', authValue);
      dispatcher.delete('/projects/1');
      assert(request.calledWithMatch({
        url: Dispatcher.url('/projects/1')
      }));
    });
  });
});