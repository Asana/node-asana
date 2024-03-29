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
    instance = new Asana.ProjectTemplatesApi();
  });

  describe('(package)', function() {
    describe('ProjectTemplatesApi', function() {
      describe('deleteProjectTemplate', function() {
        it('should call deleteProjectTemplate successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteProjectTemplate call and complete the assertions
          /*

          instance.deleteProjectTemplate(project_template_gid).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Asana.EmptyResponseData);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProjectTemplate', function() {
        it('should call getProjectTemplate successfully', function(done) {
          // TODO: uncomment, update parameter values for getProjectTemplate call and complete the assertions
          /*
          var opts = {};

          instance.getProjectTemplate(project_template_gid, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Asana.ProjectTemplateResponseData);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProjectTemplates', function() {
        it('should call getProjectTemplates successfully', function(done) {
          // TODO: uncomment, update parameter values for getProjectTemplates call and complete the assertions
          /*
          var opts = {};

          instance.getProjectTemplates(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Asana.ProjectTemplateResponseArray);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProjectTemplatesForTeam', function() {
        it('should call getProjectTemplatesForTeam successfully', function(done) {
          // TODO: uncomment, update parameter values for getProjectTemplatesForTeam call and complete the assertions
          /*
          var opts = {};

          instance.getProjectTemplatesForTeam(team_gid, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Asana.ProjectTemplateResponseArray);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('instantiateProject', function() {
        it('should call instantiateProject successfully', function(done) {
          // TODO: uncomment, update parameter values for instantiateProject call and complete the assertions
          /*
          var opts = {};

          instance.instantiateProject(project_template_gid, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Asana.JobResponseData);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
