/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Jobs = require('../../lib/resources/jobs');

describe('Jobs', function() {
  describe('#findById', function() {
    it('should hit the /jobs/{jobs_gid} endpoint', function() {
      var dispatcher = {};
      var jobs = new Jobs(dispatcher);
      jobs.dispatchGet = sinon.stub();
      var id = 1;
      jobs.findById(id);
      assert(jobs.dispatchGet.calledWith('/jobs/' + id, undefined));
    });
  });
});
