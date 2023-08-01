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
    describe('TaskCountResponse', function() {
      beforeEach(function() {
        instance = new Asana.TaskCountResponse();
      });

      it('should create an instance of TaskCountResponse', function() {
        // TODO: update the code to test TaskCountResponse
        expect(instance).to.be.a(Asana.TaskCountResponse);
      });

      it('should have the property num_tasks (base name: "num_tasks")', function() {
        // TODO: update the code to test the property num_tasks
        expect(instance).to.have.property('num_tasks');
        // expect(instance.num_tasks).to.be(expectedValueLiteral);
      });

      it('should have the property num_incomplete_tasks (base name: "num_incomplete_tasks")', function() {
        // TODO: update the code to test the property num_incomplete_tasks
        expect(instance).to.have.property('num_incomplete_tasks');
        // expect(instance.num_incomplete_tasks).to.be(expectedValueLiteral);
      });

      it('should have the property num_completed_tasks (base name: "num_completed_tasks")', function() {
        // TODO: update the code to test the property num_completed_tasks
        expect(instance).to.have.property('num_completed_tasks');
        // expect(instance.num_completed_tasks).to.be(expectedValueLiteral);
      });

      it('should have the property num_milestones (base name: "num_milestones")', function() {
        // TODO: update the code to test the property num_milestones
        expect(instance).to.have.property('num_milestones');
        // expect(instance.num_milestones).to.be(expectedValueLiteral);
      });

      it('should have the property num_incomplete_milestones (base name: "num_incomplete_milestones")', function() {
        // TODO: update the code to test the property num_incomplete_milestones
        expect(instance).to.have.property('num_incomplete_milestones');
        // expect(instance.num_incomplete_milestones).to.be(expectedValueLiteral);
      });

      it('should have the property num_completed_milestones (base name: "num_completed_milestones")', function() {
        // TODO: update the code to test the property num_completed_milestones
        expect(instance).to.have.property('num_completed_milestones');
        // expect(instance.num_completed_milestones).to.be(expectedValueLiteral);
      });

    });
  });

}));
