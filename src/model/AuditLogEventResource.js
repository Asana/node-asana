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
 * The AuditLogEventResource model module.
 * @module model/AuditLogEventResource
 * @version 2.0.3
 */
export class AuditLogEventResource {
  /**
   * Constructs a new <code>AuditLogEventResource</code>.
   * The primary object that was affected by this event.
   * @alias module:model/AuditLogEventResource
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AuditLogEventResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuditLogEventResource} obj Optional instance to populate.
   * @return {module:model/AuditLogEventResource} The populated <code>AuditLogEventResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AuditLogEventResource();
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('resource_subtype'))
        obj.resource_subtype = ApiClient.convertToType(data['resource_subtype'], 'String');
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
    }
    return obj;
  }
}

/**
 * The type of resource.
 * @member {String} resource_type
 */
AuditLogEventResource.prototype.resource_type = undefined;

/**
 * The subtype of resource. Most resources will not have a subtype.
 * @member {String} resource_subtype
 */
AuditLogEventResource.prototype.resource_subtype = undefined;

/**
 * Globally unique identifier of the resource.
 * @member {String} gid
 */
AuditLogEventResource.prototype.gid = undefined;

/**
 * The name of the resource.
 * @member {String} name
 */
AuditLogEventResource.prototype.name = undefined;

/**
 * The email of the resource, if applicable.
 * @member {String} email
 */
AuditLogEventResource.prototype.email = undefined;

