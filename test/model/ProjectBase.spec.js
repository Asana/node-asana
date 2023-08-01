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
    describe('ProjectBase', function() {
      beforeEach(function() {
        instance = new Asana.ProjectBase();
      });

      it('should create an instance of ProjectBase', function() {
        // TODO: update the code to test ProjectBase
        expect(instance).to.be.a(Asana.ProjectBase);
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

      it('should have the property archived (base name: "archived")', function() {
        // TODO: update the code to test the property archived
        expect(instance).to.have.property('archived');
        // expect(instance.archived).to.be(expectedValueLiteral);
      });

      it('should have the property color (base name: "color")', function() {
        // TODO: update the code to test the property color
        expect(instance).to.have.property('color');
        // expect(instance.color).to.be(expectedValueLiteral);
      });

      it('should have the property created_at (base name: "created_at")', function() {
        // TODO: update the code to test the property created_at
        expect(instance).to.have.property('created_at');
        // expect(instance.created_at).to.be(expectedValueLiteral);
      });

      it('should have the property current_status (base name: "current_status")', function() {
        // TODO: update the code to test the property current_status
        expect(instance).to.have.property('current_status');
        // expect(instance.current_status).to.be(expectedValueLiteral);
      });

      it('should have the property current_status_update (base name: "current_status_update")', function() {
        // TODO: update the code to test the property current_status_update
        expect(instance).to.have.property('current_status_update');
        // expect(instance.current_status_update).to.be(expectedValueLiteral);
      });

      it('should have the property custom_field_settings (base name: "custom_field_settings")', function() {
        // TODO: update the code to test the property custom_field_settings
        expect(instance).to.have.property('custom_field_settings');
        // expect(instance.custom_field_settings).to.be(expectedValueLiteral);
      });

      it('should have the property default_view (base name: "default_view")', function() {
        // TODO: update the code to test the property default_view
        expect(instance).to.have.property('default_view');
        // expect(instance.default_view).to.be(expectedValueLiteral);
      });

      it('should have the property due_date (base name: "due_date")', function() {
        // TODO: update the code to test the property due_date
        expect(instance).to.have.property('due_date');
        // expect(instance.due_date).to.be(expectedValueLiteral);
      });

      it('should have the property due_on (base name: "due_on")', function() {
        // TODO: update the code to test the property due_on
        expect(instance).to.have.property('due_on');
        // expect(instance.due_on).to.be(expectedValueLiteral);
      });

      it('should have the property html_notes (base name: "html_notes")', function() {
        // TODO: update the code to test the property html_notes
        expect(instance).to.have.property('html_notes');
        // expect(instance.html_notes).to.be(expectedValueLiteral);
      });

      it('should have the property members (base name: "members")', function() {
        // TODO: update the code to test the property members
        expect(instance).to.have.property('members');
        // expect(instance.members).to.be(expectedValueLiteral);
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

      it('should have the property _public (base name: "public")', function() {
        // TODO: update the code to test the property _public
        expect(instance).to.have.property('_public');
        // expect(instance._public).to.be(expectedValueLiteral);
      });

      it('should have the property start_on (base name: "start_on")', function() {
        // TODO: update the code to test the property start_on
        expect(instance).to.have.property('start_on');
        // expect(instance.start_on).to.be(expectedValueLiteral);
      });

      it('should have the property workspace (base name: "workspace")', function() {
        // TODO: update the code to test the property workspace
        expect(instance).to.have.property('workspace');
        // expect(instance.workspace).to.be(expectedValueLiteral);
      });

    });
  });

}));
