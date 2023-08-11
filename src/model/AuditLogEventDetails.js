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
 * The AuditLogEventDetails model module.
 * @module model/AuditLogEventDetails
 * @version 2.0.3
 */
export class AuditLogEventDetails {
  /**
   * Constructs a new <code>AuditLogEventDetails</code>.
   * Event specific details. The schema will vary depending on the &#x60;event_type&#x60;.
   * @alias module:model/AuditLogEventDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AuditLogEventDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuditLogEventDetails} obj Optional instance to populate.
   * @return {module:model/AuditLogEventDetails} The populated <code>AuditLogEventDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AuditLogEventDetails();
    }
    return obj;
  }
}
