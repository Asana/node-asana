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
    describe('GoalAddSupportingRelationshipRequest', function() {
      beforeEach(function() {
        instance = new Asana.GoalAddSupportingRelationshipRequest();
      });

      it('should create an instance of GoalAddSupportingRelationshipRequest', function() {
        // TODO: update the code to test GoalAddSupportingRelationshipRequest
        expect(instance).to.be.a(Asana.GoalAddSupportingRelationshipRequest);
      });

      it('should have the property supporting_resource (base name: "supporting_resource")', function() {
        // TODO: update the code to test the property supporting_resource
        expect(instance).to.have.property('supporting_resource');
        // expect(instance.supporting_resource).to.be(expectedValueLiteral);
      });

      it('should have the property insert_before (base name: "insert_before")', function() {
        // TODO: update the code to test the property insert_before
        expect(instance).to.have.property('insert_before');
        // expect(instance.insert_before).to.be(expectedValueLiteral);
      });

      it('should have the property insert_after (base name: "insert_after")', function() {
        // TODO: update the code to test the property insert_after
        expect(instance).to.have.property('insert_after');
        // expect(instance.insert_after).to.be(expectedValueLiteral);
      });

      it('should have the property contribution_weight (base name: "contribution_weight")', function() {
        // TODO: update the code to test the property contribution_weight
        expect(instance).to.have.property('contribution_weight');
        // expect(instance.contribution_weight).to.be(expectedValueLiteral);
      });

    });
  });

}));