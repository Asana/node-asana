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
    describe('RemoveFollowersRequest', function() {
      beforeEach(function() {
        instance = new Asana.RemoveFollowersRequest();
      });

      it('should create an instance of RemoveFollowersRequest', function() {
        // TODO: update the code to test RemoveFollowersRequest
        expect(instance).to.be.a(Asana.RemoveFollowersRequest);
      });

      it('should have the property followers (base name: "followers")', function() {
        // TODO: update the code to test the property followers
        expect(instance).to.have.property('followers');
        // expect(instance.followers).to.be(expectedValueLiteral);
      });

    });
  });

}));