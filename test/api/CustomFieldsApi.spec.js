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
    instance = new Asana.CustomFieldsApi();
  });

  describe('(package)', function() {
    describe('CustomFieldsApi', function() {
      describe('createCustomField', function() {
        it('should call createCustomField successfully', function(done) {
          // TODO: uncomment, update parameter values for createCustomField call and complete the assertions
          /*
          var opts = {};

          instance.createCustomField(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Asana.CustomFieldResponseData);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createEnumOptionForCustomField', function() {
        it('should call createEnumOptionForCustomField successfully', function(done) {
          // TODO: uncomment, update parameter values for createEnumOptionForCustomField call and complete the assertions
          /*
          var opts = {};

          instance.createEnumOptionForCustomField(custom_field_gid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Asana.EnumOptionData);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteCustomField', function() {
        it('should call deleteCustomField successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteCustomField call and complete the assertions
          /*

          instance.deleteCustomField(custom_field_gid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Asana.EmptyResponseData);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCustomField', function() {
        it('should call getCustomField successfully', function(done) {
          // TODO: uncomment, update parameter values for getCustomField call and complete the assertions
          /*
          var opts = {};

          instance.getCustomField(custom_field_gid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Asana.CustomFieldResponseData);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCustomFieldsForWorkspace', function() {
        it('should call getCustomFieldsForWorkspace successfully', function(done) {
          // TODO: uncomment, update parameter values for getCustomFieldsForWorkspace call and complete the assertions
          /*
          var opts = {};

          instance.getCustomFieldsForWorkspace(workspace_gid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Asana.CustomFieldResponseArray);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('insertEnumOptionForCustomField', function() {
        it('should call insertEnumOptionForCustomField successfully', function(done) {
          // TODO: uncomment, update parameter values for insertEnumOptionForCustomField call and complete the assertions
          /*
          var opts = {};

          instance.insertEnumOptionForCustomField(custom_field_gid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Asana.EnumOptionData);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateCustomField', function() {
        it('should call updateCustomField successfully', function(done) {
          // TODO: uncomment, update parameter values for updateCustomField call and complete the assertions
          /*
          var opts = {};

          instance.updateCustomField(custom_field_gid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Asana.CustomFieldResponseData);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateEnumOption', function() {
        it('should call updateEnumOption successfully', function(done) {
          // TODO: uncomment, update parameter values for updateEnumOption call and complete the assertions
          /*
          var opts = {};

          instance.updateEnumOption(enum_option_gid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Asana.EnumOptionData);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));