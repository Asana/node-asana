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
    describe('WebhookRequestFilters', function() {
      beforeEach(function() {
        instance = new Asana.WebhookRequestFilters();
      });

      it('should create an instance of WebhookRequestFilters', function() {
        // TODO: update the code to test WebhookRequestFilters
        expect(instance).to.be.a(Asana.WebhookRequestFilters);
      });

      it('should have the property resource_type (base name: "resource_type")', function() {
        // TODO: update the code to test the property resource_type
        expect(instance).to.have.property('resource_type');
        // expect(instance.resource_type).to.be(expectedValueLiteral);
      });

      it('should have the property resource_subtype (base name: "resource_subtype")', function() {
        // TODO: update the code to test the property resource_subtype
        expect(instance).to.have.property('resource_subtype');
        // expect(instance.resource_subtype).to.be(expectedValueLiteral);
      });

      it('should have the property action (base name: "action")', function() {
        // TODO: update the code to test the property action
        expect(instance).to.have.property('action');
        // expect(instance.action).to.be(expectedValueLiteral);
      });

      it('should have the property fields (base name: "fields")', function() {
        // TODO: update the code to test the property fields
        expect(instance).to.have.property('fields');
        // expect(instance.fields).to.be(expectedValueLiteral);
      });

    });
  });

}));
