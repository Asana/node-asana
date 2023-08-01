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
    describe('TaskBase', function() {
      beforeEach(function() {
        instance = new Asana.TaskBase();
      });

      it('should create an instance of TaskBase', function() {
        // TODO: update the code to test TaskBase
        expect(instance).to.be.a(Asana.TaskBase);
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

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property resource_subtype (base name: "resource_subtype")', function() {
        // TODO: update the code to test the property resource_subtype
        expect(instance).to.have.property('resource_subtype');
        // expect(instance.resource_subtype).to.be(expectedValueLiteral);
      });

      it('should have the property approval_status (base name: "approval_status")', function() {
        // TODO: update the code to test the property approval_status
        expect(instance).to.have.property('approval_status');
        // expect(instance.approval_status).to.be(expectedValueLiteral);
      });

      it('should have the property assignee_status (base name: "assignee_status")', function() {
        // TODO: update the code to test the property assignee_status
        expect(instance).to.have.property('assignee_status');
        // expect(instance.assignee_status).to.be(expectedValueLiteral);
      });

      it('should have the property completed (base name: "completed")', function() {
        // TODO: update the code to test the property completed
        expect(instance).to.have.property('completed');
        // expect(instance.completed).to.be(expectedValueLiteral);
      });

      it('should have the property completed_at (base name: "completed_at")', function() {
        // TODO: update the code to test the property completed_at
        expect(instance).to.have.property('completed_at');
        // expect(instance.completed_at).to.be(expectedValueLiteral);
      });

      it('should have the property completed_by (base name: "completed_by")', function() {
        // TODO: update the code to test the property completed_by
        expect(instance).to.have.property('completed_by');
        // expect(instance.completed_by).to.be(expectedValueLiteral);
      });

      it('should have the property created_at (base name: "created_at")', function() {
        // TODO: update the code to test the property created_at
        expect(instance).to.have.property('created_at');
        // expect(instance.created_at).to.be(expectedValueLiteral);
      });

      it('should have the property dependencies (base name: "dependencies")', function() {
        // TODO: update the code to test the property dependencies
        expect(instance).to.have.property('dependencies');
        // expect(instance.dependencies).to.be(expectedValueLiteral);
      });

      it('should have the property dependents (base name: "dependents")', function() {
        // TODO: update the code to test the property dependents
        expect(instance).to.have.property('dependents');
        // expect(instance.dependents).to.be(expectedValueLiteral);
      });

      it('should have the property due_at (base name: "due_at")', function() {
        // TODO: update the code to test the property due_at
        expect(instance).to.have.property('due_at');
        // expect(instance.due_at).to.be(expectedValueLiteral);
      });

      it('should have the property due_on (base name: "due_on")', function() {
        // TODO: update the code to test the property due_on
        expect(instance).to.have.property('due_on');
        // expect(instance.due_on).to.be(expectedValueLiteral);
      });

      it('should have the property external (base name: "external")', function() {
        // TODO: update the code to test the property external
        expect(instance).to.have.property('external');
        // expect(instance.external).to.be(expectedValueLiteral);
      });

      it('should have the property html_notes (base name: "html_notes")', function() {
        // TODO: update the code to test the property html_notes
        expect(instance).to.have.property('html_notes');
        // expect(instance.html_notes).to.be(expectedValueLiteral);
      });

      it('should have the property hearted (base name: "hearted")', function() {
        // TODO: update the code to test the property hearted
        expect(instance).to.have.property('hearted');
        // expect(instance.hearted).to.be(expectedValueLiteral);
      });

      it('should have the property hearts (base name: "hearts")', function() {
        // TODO: update the code to test the property hearts
        expect(instance).to.have.property('hearts');
        // expect(instance.hearts).to.be(expectedValueLiteral);
      });

      it('should have the property is_rendered_as_separator (base name: "is_rendered_as_separator")', function() {
        // TODO: update the code to test the property is_rendered_as_separator
        expect(instance).to.have.property('is_rendered_as_separator');
        // expect(instance.is_rendered_as_separator).to.be(expectedValueLiteral);
      });

      it('should have the property liked (base name: "liked")', function() {
        // TODO: update the code to test the property liked
        expect(instance).to.have.property('liked');
        // expect(instance.liked).to.be(expectedValueLiteral);
      });

      it('should have the property likes (base name: "likes")', function() {
        // TODO: update the code to test the property likes
        expect(instance).to.have.property('likes');
        // expect(instance.likes).to.be(expectedValueLiteral);
      });

      it('should have the property memberships (base name: "memberships")', function() {
        // TODO: update the code to test the property memberships
        expect(instance).to.have.property('memberships');
        // expect(instance.memberships).to.be(expectedValueLiteral);
      });

      it('should have the property modified_at (base name: "modified_at")', function() {
        // TODO: update the code to test the property modified_at
        expect(instance).to.have.property('modified_at');
        // expect(instance.modified_at).to.be(expectedValueLiteral);
      });

      it('should have the property notes (base name: "notes")', function() {
        // TODO: update the code to test the property notes
        expect(instance).to.have.property('notes');
        // expect(instance.notes).to.be(expectedValueLiteral);
      });

      it('should have the property num_hearts (base name: "num_hearts")', function() {
        // TODO: update the code to test the property num_hearts
        expect(instance).to.have.property('num_hearts');
        // expect(instance.num_hearts).to.be(expectedValueLiteral);
      });

      it('should have the property num_likes (base name: "num_likes")', function() {
        // TODO: update the code to test the property num_likes
        expect(instance).to.have.property('num_likes');
        // expect(instance.num_likes).to.be(expectedValueLiteral);
      });

      it('should have the property num_subtasks (base name: "num_subtasks")', function() {
        // TODO: update the code to test the property num_subtasks
        expect(instance).to.have.property('num_subtasks');
        // expect(instance.num_subtasks).to.be(expectedValueLiteral);
      });

      it('should have the property start_at (base name: "start_at")', function() {
        // TODO: update the code to test the property start_at
        expect(instance).to.have.property('start_at');
        // expect(instance.start_at).to.be(expectedValueLiteral);
      });

      it('should have the property start_on (base name: "start_on")', function() {
        // TODO: update the code to test the property start_on
        expect(instance).to.have.property('start_on');
        // expect(instance.start_on).to.be(expectedValueLiteral);
      });

      it('should have the property actual_time_minutes (base name: "actual_time_minutes")', function() {
        // TODO: update the code to test the property actual_time_minutes
        expect(instance).to.have.property('actual_time_minutes');
        // expect(instance.actual_time_minutes).to.be(expectedValueLiteral);
      });

    });
  });

}));
