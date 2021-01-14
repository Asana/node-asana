/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var rewire = require('rewire');
var Bluebird = require('bluebird');
var errors = require('../lib/errors');
var Dispatcher = rewire('../lib/dispatcher');
var Authenticator = require('../lib/auth/authenticator');

describe('Dispatcher', function() {
  describe('#new', function() {
    it('should have defaults', function() {
      var client = new Dispatcher();
      assert.equal(client.authenticator, null);
      assert.equal(client.asanaBaseUrl, 'https://app.asana.com/');
    });
    it('should keep the authenticator', function() {
      var authenticator = {};
      var client = new Dispatcher({ authenticator: authenticator });
      assert.equal(client.authenticator, authenticator);
    });
    it('should keep the asana base url', function() {
      var client = new Dispatcher({ asanaBaseUrl: 'fake_url' });
      assert.equal(client.asanaBaseUrl, 'fake_url');
    });
  });

  describe('#url', function() {
    it('should return an Asana url', function() {
      var path = '/users/me';
      var dispatcher = new Dispatcher();
      assert.equal(
          dispatcher.url(path), 'https://app.asana.com/api/1.0' + path);
    });
  });

  describe('#setAuthenticator', function() {
    it('should keep the authenticator', function() {
      var authenticator = {};
      var client = new Dispatcher();
      assert.equal(client.authenticator, null);
      client.setAuthenticator(authenticator);
      assert.equal(client.authenticator, authenticator);
    });
  });

  describe('#authorize', function() {
    it('should delegate to the authenticator', function() {
      var fakePromise = {};
      var authStub = sinon.createStubInstance(Authenticator);
      authStub.establishCredentials.onFirstCall().returns(fakePromise);
      var client = new Dispatcher({ authenticator: authStub });
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
      var dispatcher = new Dispatcher({ authenticator: authFake });
      dispatcher.dispatch({});
      assert(authSpy.calledOnce);
      assert(request.calledWithMatch({
        auth: 'fake_auth'
      }));
    });

    it('should add version header to request', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var auth = {
        authenticateRequest: function(params) {
          params.headers = params.headers || {};
          params.headers.Authorization = 'Bearer [token]';
          return params;
        }
      };
      var dispatcher = new Dispatcher({ authenticator: auth });
      dispatcher._generateVersionInfo = function() {
        return { fakeKey: 'fakeValue' };
      };
      dispatcher.dispatch({});
      var requestParams = request.firstCall.args[0];
      assert.equal(
          requestParams.headers['X-Asana-Client-Lib'], 'fakeKey=fakeValue');
      assert(requestParams.headers.Authorization);
    });

    it('should add extra headers to the request', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var auth = {
        authenticateRequest: function(params) {
          params.headers = params.headers || {};
          params.headers.Authorization = 'Bearer [token]';
          return params;
        }
      };
      var dispatcher = new Dispatcher({ authenticator: auth });
      dispatcher.dispatch({}, {headers: {'header-key': 'header-value'}});
      var requestParams = request.firstCall.args[0];
      assert.equal(
          requestParams.headers['header-key'], 'header-value');
      assert(requestParams.headers.Authorization);
    });

    it('should add default headers to the request', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var auth = {
        authenticateRequest: function(params) {
          params.headers = params.headers || {};
          params.headers.Authorization = 'Bearer [token]';
          return params;
        }
      };
      var dispatcher = new Dispatcher({
        authenticator: auth,
        defaultHeaders: {'header-key': 'header-value'}
      });
      dispatcher.dispatch({});
      var requestParams = request.firstCall.args[0];
      assert.equal(
          requestParams.headers['header-key'], 'header-value');
      assert(requestParams.headers.Authorization);
    });

    it('should overwrite default headers with per-request headers', function() {
      var request = sinon.stub();
      Dispatcher.__set__('request', request);
      var auth = {
        authenticateRequest: function(params) {
          params.headers = params.headers || {};
          params.headers.Authorization = 'Bearer [token]';
          return params;
        }
      };
      var dispatcher = new Dispatcher({
        authenticator: auth,
        defaultHeaders: {'header-key': 'header-value'}
      });
      dispatcher.dispatch({}, {headers: {'header-key': 'new-value'}});
      var requestParams = request.firstCall.args[0];
      assert.equal(
          requestParams.headers['header-key'], 'new-value');
      assert(requestParams.headers.Authorization);
    });

    it('should pass an error from request', function() {
      var request = sinon.stub();
      var err = new Error();
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher({ authenticator: auth });
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
        var dispatcher = new Dispatcher({
          authenticator: auth,
          handleUnauthorized: null
        });
        var res = dispatcher.dispatch({});
        request.callArgWith(1, null, {
          statusCode: err.status
        });
        return res.then(function() {
          throw new Error('Should not have reached here');
        }, function(passedErr) {
          // Compare everything but stack
          assert(passedErr.stack);
          delete passedErr.stack;
          delete err.stack;
          return assert.deepEqual(passedErr, err);
        });
      });
    });

    it('should retry on rate limit error if option set', function() {
      var request = sinon.stub();
      request.onFirstCall().callsArgWith(
          1, null, { statusCode: 429 }, { 'retry_after': 42 });
      request.onSecondCall().callsArgWith(
          1, null, { statusCode: 200 }, {});
      Dispatcher.__set__('request', request);

      var setTimeout = sinon.stub();
      setTimeout.onFirstCall().callsArg(0);
      Dispatcher.__set__('setTimeout', setTimeout);

      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher({
        authenticator: auth,
        retryOnRateLimit: true
      });

      var res = dispatcher.dispatch({});

      return res.then(function() {
        assert.equal(setTimeout.firstCall.args[1], 42500);
      });
    });

    describe('unauthorized', function() {
      it('should call handler and throw error if returns false', function() {
        var request = sinon.stub();
        request.onFirstCall().callsArgWith(
            1, null, { statusCode: 401 }, {});
        Dispatcher.__set__('request', request);

        var handleUnauthorized = sinon.stub();
        handleUnauthorized.onFirstCall().returns(false);

        var auth = { authenticateRequest: sinon.stub() };
        var dispatcher = new Dispatcher({
          authenticator: auth,
          handleUnauthorized: handleUnauthorized
        });

        var res = dispatcher.dispatch({});
        var error = null;
        return res.catch(function(err) {
          error = err;
        }).then(function() {
          assert(error instanceof (errors.NoAuthorization));
          assert(handleUnauthorized.called);
        });
      });

      it('should call handler and retry if returns true', function() {
        var request = sinon.stub();
        request.onFirstCall().callsArgWith(
            1, null, { statusCode: 401 }, {});
        request.onSecondCall().callsArgWith(
            1, null, { statusCode: 200 }, {});
        Dispatcher.__set__('request', request);

        var handleUnauthorized = sinon.stub();
        handleUnauthorized.onFirstCall().returns(Bluebird.resolve(true));

        var auth = { authenticateRequest: sinon.stub() };
        var dispatcher = new Dispatcher({
          authenticator: auth,
          handleUnauthorized: handleUnauthorized
        });

        var res = dispatcher.dispatch({});
        return res.then(function() {
          assert(handleUnauthorized.calledOnce);
          assert(auth.authenticateRequest.calledTwice);
        });
      });
    });

    it('should pass the whole payload as the value', function() {
      var request = sinon.stub();
      var payload = {
        data: {
          id: 1,
          name: 'Task'
        }
      };
      Dispatcher.__set__('request', request);
      var auth = { authenticateRequest: sinon.stub() };
      var dispatcher = new Dispatcher({ authenticator: auth });
      var res = dispatcher.dispatch({});
      request.callArgWith(1, null, {
        statusCode: 200
      }, payload);
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
      var dispatcher = new Dispatcher({ authenticator: auth });
      var res = dispatcher.dispatch({}, { fullPayload: true });
      request.callArgWith(1, null, {
        statusCode: 200
      }, payload);
      return res.then(function(value) {
        assert.equal(value, payload);
      });
    });
  });

  function setupRequest() {
    var request = sinon.stub();
    Dispatcher.__set__('request', request);
    return request;
  }

  function setupDispatcher() {
    var auth = { authenticateRequest: sinon.stub() };
    return new Dispatcher({ authenticator: auth });
  }

  describe('#get', function() {
    it('should pass the right method', function() {
      var request = setupRequest();
      var dispatcher = setupDispatcher();
      dispatcher.get('/users/me', {});
      assert(request.calledWithMatch({
        method: 'GET'
      }));
    });

    it('should pass the right url', function() {
      var request = setupRequest();
      var dispatcher = setupDispatcher();
      dispatcher.get('/users/me', {});
      assert(request.calledWithMatch({
        url: dispatcher.url('/users/me')
      }));
    });

    it('should pass the query on', function() {
      var request = setupRequest();
      var dispatcher = setupDispatcher();
      var query = {
        'opt_fields': ['id', 'name'].join(',')
      };
      dispatcher.get('/users/me', query);
      assert(request.calledWithMatch({
        qs: query
      }));
    });

    it('should not pass the query if it was not defined', function() {
      var request = setupRequest();
      var dispatcher = setupDispatcher();
      dispatcher.get('/users/me');
      assert(request.calledWith({
        method: 'GET',
        url: dispatcher.url('/users/me'),
        json: true,
        headers: sinon.match.object
      }), function() {});
    });
  });

  describe('#post', function() {
    it('should pass the right method', function() {
      var request = setupRequest();
      var dispatcher = setupDispatcher();
      dispatcher.post('/workspaces/1', {
        name: 'Test'
      });
      assert(request.calledWithMatch({
        method: 'POST'
      }));
    });

    it('should pass the right url', function() {
      var request = setupRequest();
      var dispatcher = setupDispatcher();
      dispatcher.post('/workspaces/1', {
        name: 'Test'
      });
      assert(request.calledWithMatch({
        url: dispatcher.url('/workspaces/1')
      }));
    });

    it('should pass the data in the json field', function() {
      var request = setupRequest();
      var dispatcher = setupDispatcher();
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
      var request = setupRequest();
      var dispatcher = setupDispatcher();
      dispatcher.put('/workspaces/1', {
        name: 'Test'
      });
      assert(request.calledWithMatch({
        method: 'PUT'
      }));
    });

    it('should pass the right url', function() {
      var request = setupRequest();
      var dispatcher = setupDispatcher();
      dispatcher.put('/workspaces/1', {
        name: 'Test'
      });
      assert(request.calledWithMatch({
        url: dispatcher.url('/workspaces/1')
      }));
    });

    it('should pass the data in the json field', function() {
      var request = setupRequest();
      var dispatcher = setupDispatcher();
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
      var request = setupRequest();
      var dispatcher = setupDispatcher();
      dispatcher.delete('/projects/1');
      assert(request.calledWithMatch({
        method: 'DELETE'
      }));
    });

    it('should pass the right url', function() {
      var request = setupRequest();
      var dispatcher = setupDispatcher();
      dispatcher.delete('/projects/1');
      assert(request.calledWithMatch({
        url: dispatcher.url('/projects/1')
      }));
    });
  });

  describe('#generateVersionInfo', function() {
    it('should include OS info on node', function() {
      Dispatcher.__set__('navigator', undefined);
      var dispatcher = new Dispatcher();
      var match = sinon.match({
        'version': sinon.match.string,
        'language': 'NodeJS',
        'language_version': sinon.match.string,
        'os': sinon.match.string
      });
      assert(match.test(dispatcher._generateVersionInfo()));
    });

    it('should include just lib info on browser', function() {
      Dispatcher.__set__('navigator', {});
      Dispatcher.__set__('window', {});
      var dispatcher = new Dispatcher();
      var match = sinon.match({
        'version': sinon.match.string,
        'language': 'BrowserJS'
      });
      assert(match.test(dispatcher._generateVersionInfo()));
    });
  });



  describe('Asana-Change header', function() {
    it('Should log a warning', function() {
      console.error = sinon.stub();

      var requestHeaders = {
        'asana-enable': 'string_ids'
      };
      var responseHeaders = {
        'asana-change': 'name=string_ids;info=something;affected=true,'+
            'name=new_sections;info=something;affected=true'
      };
      var dispatcher = new Dispatcher({});
      dispatcher
          .logAsanaChangeHeader(requestHeaders, responseHeaders);

      assert( console.error.called );
    });

    it('Should not care about header case', function() {
      console.error = sinon.stub();

      var requestHeaders = {
        'asANa-enaBle': 'string_ids'
      };
      var responseHeaders = {
        'asaNa-chaNge': 'name=string_ids;info=something;affected=true,'+
            'name=new_sections;info=something;affected=true'
      };
      var dispatcher = new Dispatcher({});
      dispatcher
          .logAsanaChangeHeader(requestHeaders, responseHeaders);

      assert( console.error.called );
    });
  });

  describe('param options should work', function() {
    it('get request', function() {
      var request = setupRequest();
      var dispatcher = setupDispatcher();

      dispatcher.get('/users/me', {fields: 'a_field'});

      assert(request.calledWithMatch({
        'qs': {'opt_fields': 'a_field'}
      }));
    });
    it('put request', function() {
      var request = setupRequest();
      var dispatcher = setupDispatcher();

      dispatcher.put('/users', {expand: ''});

      assert(request.calledWithMatch({
        'qs': {'opt_expand': ''}
      }));
    });
    it('post request', function() {
      var request = setupRequest();
      var dispatcher = setupDispatcher();

      dispatcher.post('/users', {pretty: ''});

      assert(request.calledWithMatch({
        'qs': {'opt_pretty': ''}
      }));
    });
  });
});
