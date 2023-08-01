/*
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Asana);
  }
}(this, function(expect, Asana) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Asana.ProjectBriefsApi();
  });

  describe('(package)', function() {
    describe('ProjectBriefsApi', function() {
      describe('createProjectBrief', function() {
        it('should call createProjectBrief successfully', function(done) {
          // TODO: uncomment, update parameter values for createProjectBrief call and complete the assertions
          /*
          var opts = {};

          instance.createProjectBrief(body, project_gid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Asana.ProjectBriefResponseData);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteProjectBrief', function() {
        it('should call deleteProjectBrief successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteProjectBrief call and complete the assertions
          /*

          instance.deleteProjectBrief(project_brief_gid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Asana.EmptyResponseData);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProjectBrief', function() {
        it('should call getProjectBrief successfully', function(done) {
          // TODO: uncomment, update parameter values for getProjectBrief call and complete the assertions
          /*
          var opts = {};

          instance.getProjectBrief(project_brief_gid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Asana.ProjectBriefResponseData);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateProjectBrief', function() {
        it('should call updateProjectBrief successfully', function(done) {
          // TODO: uncomment, update parameter values for updateProjectBrief call and complete the assertions
          /*
          var opts = {};

          instance.updateProjectBrief(body, project_brief_gid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Asana.ProjectBriefResponseData);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
