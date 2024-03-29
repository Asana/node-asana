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
    instance = new Asana.MembershipsApi();
  });

  describe('(package)', function() {
    describe('MembershipsApi', function() {
      describe('createMembership', function() {
        it('should call createMembership successfully', function(done) {
          // TODO: uncomment, update parameter values for createMembership call and complete the assertions
          /*
          var opts = {};

          instance.createMembership(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Asana.MembershipResponseData);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteMembership', function() {
        it('should call deleteMembership successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteMembership call and complete the assertions
          /*

          instance.deleteMembership(membership_gid).then(function(data) {
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
      describe('getMembership', function() {
        it('should call getMembership successfully', function(done) {
          // TODO: uncomment, update parameter values for getMembership call and complete the assertions
          /*
          var opts = {};

          instance.getMembership(membership_gid, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Asana.ProjectMembershipCompactResponseData);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getMemberships', function() {
        it('should call getMemberships successfully', function(done) {
          // TODO: uncomment, update parameter values for getMemberships call and complete the assertions
          /*
          var opts = {};

          instance.getMemberships(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(Asana.MembershipResponseArray);

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
