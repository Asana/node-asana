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
 * The OrganizationExportRequest model module.
 * @module model/OrganizationExportRequest
 * @version 2.0.0
 */
export class OrganizationExportRequest {
  /**
   * Constructs a new <code>OrganizationExportRequest</code>.
   * An *organization_export* request starts a job to export the complete data of the given Organization.
   * @alias module:model/OrganizationExportRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrganizationExportRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationExportRequest} obj Optional instance to populate.
   * @return {module:model/OrganizationExportRequest} The populated <code>OrganizationExportRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrganizationExportRequest();
      if (data.hasOwnProperty('organization'))
        obj.organization = ApiClient.convertToType(data['organization'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier for the workspace or organization.
 * @member {String} organization
 */
OrganizationExportRequest.prototype.organization = undefined;

