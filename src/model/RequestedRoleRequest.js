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
import {ApiClient} from '../ApiClient';

/**
 * The RequestedRoleRequest model module.
 * @module model/RequestedRoleRequest
 * @version 2.0.0
 */
export class RequestedRoleRequest {
  /**
   * Constructs a new <code>RequestedRoleRequest</code>.
   * @alias module:model/RequestedRoleRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RequestedRoleRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestedRoleRequest} obj Optional instance to populate.
   * @return {module:model/RequestedRoleRequest} The populated <code>RequestedRoleRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RequestedRoleRequest();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the template role in the project template.
 * @member {String} gid
 */
RequestedRoleRequest.prototype.gid = undefined;

/**
 * The user id that should be assigned to the template role.
 * @member {String} value
 */
RequestedRoleRequest.prototype.value = undefined;

