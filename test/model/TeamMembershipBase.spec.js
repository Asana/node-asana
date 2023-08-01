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

  describe('(package)', function() {
    describe('TeamMembershipBase', function() {
      beforeEach(function() {
        instance = new Asana.TeamMembershipBase();
      });

      it('should create an instance of TeamMembershipBase', function() {
        // TODO: update the code to test TeamMembershipBase
        expect(instance).to.be.a(Asana.TeamMembershipBase);
      });

      it('should have the property gid (base name: "gid")', function() {
        // TODO: update the code to test the property gid
        expect(instance).to.have.property('gid');
        // expect(instance.gid).to.be(expectedValueLiteral);
      });

      it('should have the property resource_type (base name: "resource_type")', function() {
        // TODO: update the code to test the property resource_type
        expect(instance).to.have.property('resource_type');
        // expect(instance.resource_type).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property is_guest (base name: "is_guest")', function() {
        // TODO: update the code to test the property is_guest
        expect(instance).to.have.property('is_guest');
        // expect(instance.is_guest).to.be(expectedValueLiteral);
      });

      it('should have the property is_limited_access (base name: "is_limited_access")', function() {
        // TODO: update the code to test the property is_limited_access
        expect(instance).to.have.property('is_limited_access');
        // expect(instance.is_limited_access).to.be(expectedValueLiteral);
      });

      it('should have the property is_admin (base name: "is_admin")', function() {
        // TODO: update the code to test the property is_admin
        expect(instance).to.have.property('is_admin');
        // expect(instance.is_admin).to.be(expectedValueLiteral);
      });

    });
  });

}));
