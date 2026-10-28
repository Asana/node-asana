var http = require('http');
var expect = require('expect.js');
var Asana = require('../src/index');

describe('ApiClient response deserialization', function() {
  it('preserves an empty JSON object returned by the server', function(done) {
    this.timeout(5000);

    var server = http.createServer(function(request, response) {
      if (request.method !== 'GET' || request.url !== '/fixture') {
        response.writeHead(404);
        response.end();
        return;
      }
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end('{}');
    });

    server.once('error', done);
    server.listen(0, '127.0.0.1', function() {
      var client = new Asana.ApiClient();
      client.basePath = 'http://127.0.0.1:' + server.address().port;

      client.callApi(
        '/fixture', 'GET', {}, {}, {}, {}, null, [], [], ['application/json'], Object
      ).then(function(result) {
        expect(result.response.body).to.eql({});
        expect(result.data).to.be.an('object');
        expect(result.data).to.eql({});
      }).then(function() {
        server.close(done);
      }, function(error) {
        server.close(function() {
          done(error);
        });
      });
    });
  });
});
