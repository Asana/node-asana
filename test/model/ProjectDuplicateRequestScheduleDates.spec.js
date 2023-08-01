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
    describe('ProjectDuplicateRequestScheduleDates', function() {
      beforeEach(function() {
        instance = new Asana.ProjectDuplicateRequestScheduleDates();
      });

      it('should create an instance of ProjectDuplicateRequestScheduleDates', function() {
        // TODO: update the code to test ProjectDuplicateRequestScheduleDates
        expect(instance).to.be.a(Asana.ProjectDuplicateRequestScheduleDates);
      });

      it('should have the property should_skip_weekends (base name: "should_skip_weekends")', function() {
        // TODO: update the code to test the property should_skip_weekends
        expect(instance).to.have.property('should_skip_weekends');
        // expect(instance.should_skip_weekends).to.be(expectedValueLiteral);
      });

      it('should have the property due_on (base name: "due_on")', function() {
        // TODO: update the code to test the property due_on
        expect(instance).to.have.property('due_on');
        // expect(instance.due_on).to.be(expectedValueLiteral);
      });

      it('should have the property start_on (base name: "start_on")', function() {
        // TODO: update the code to test the property start_on
        expect(instance).to.have.property('start_on');
        // expect(instance.start_on).to.be(expectedValueLiteral);
      });

    });
  });

}));
