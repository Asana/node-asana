/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Projects = require('../../lib/resources/project_memberships');

describe('Project Memberships', function() {
  describe('#getMany', function() {
    it('should call findByProject for backwards compatability', function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGetCollection = sinon.stub();

      var id = 134679;
      projects.getMany(id);

      assert(projects.dispatchGetCollection.calledWith(
          '/projects/134679/project_memberships'));
    });
  });

  describe('#findByProject', function() {
    it('should hit the projects/{project-gid}/project_memberships endpoint',
        function() {
      var dispatcher = {};
      var projects = new Projects(dispatcher);
      projects.dispatchGetCollection = sinon.stub();

      var id = 134679;
      projects.findByProject(id);

      assert(projects.dispatchGetCollection.calledWith(
          '/projects/134679/project_memberships'));
    });
  });
});
