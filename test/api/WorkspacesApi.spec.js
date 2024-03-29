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
    instance = new Asana.WorkspacesApi();
  });

  describe('(package)', function() {
    describe('WorkspacesApi', function() {
      describe('addUserForWorkspace', function() {
        it('should call addUserForWorkspace successfully', function(done) {
          // TODO: uncomment, update parameter values for addUserForWorkspace call and complete the assertions
          /*
          var opts = {};

          instance.addUserForWorkspace(body, workspace_gid, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Asana.UserBaseResponseData);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getWorkspace', function() {
        it('should call getWorkspace successfully', function(done) {
          // TODO: uncomment, update parameter values for getWorkspace call and complete the assertions
          /*
          var opts = {};

          instance.getWorkspace(workspace_gid, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Asana.WorkspaceResponseData);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getWorkspaces', function() {
        it('should call getWorkspaces successfully', function(done) {
          // TODO: uncomment, update parameter values for getWorkspaces call and complete the assertions
          /*
          var opts = {};

          instance.getWorkspaces(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Asana.WorkspaceResponseArray);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('removeUserForWorkspace', function() {
        it('should call removeUserForWorkspace successfully', function(done) {
          // TODO: uncomment, update parameter values for removeUserForWorkspace call and complete the assertions
          /*

          instance.removeUserForWorkspace(body, workspace_gid).then(function(data) {
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
      describe('updateWorkspace', function() {
        it('should call updateWorkspace successfully', function(done) {
          // TODO: uncomment, update parameter values for updateWorkspace call and complete the assertions
          /*
          var opts = {};

          instance.updateWorkspace(body, workspace_gid, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Asana.WorkspaceResponseData);

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
