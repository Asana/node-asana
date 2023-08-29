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
 * The WorkspaceResponse model module.
 * @module model/WorkspaceResponse
 * @version 2.0.5
 */
export class WorkspaceResponse {
  /**
   * Constructs a new <code>WorkspaceResponse</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
   * @alias module:model/WorkspaceResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>WorkspaceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkspaceResponse} obj Optional instance to populate.
   * @return {module:model/WorkspaceResponse} The populated <code>WorkspaceResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WorkspaceResponse();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('email_domains'))
        obj.email_domains = ApiClient.convertToType(data['email_domains'], ['String']);
      if (data.hasOwnProperty('is_organization'))
        obj.is_organization = ApiClient.convertToType(data['is_organization'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
WorkspaceResponse.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
WorkspaceResponse.prototype.resource_type = undefined;

/**
 * The name of the workspace.
 * @member {String} name
 */
WorkspaceResponse.prototype.name = undefined;

/**
 * The email domains that are associated with this workspace.
 * @member {Array.<String>} email_domains
 */
WorkspaceResponse.prototype.email_domains = undefined;

/**
 * Whether the workspace is an *organization*.
 * @member {Boolean} is_organization
 */
WorkspaceResponse.prototype.is_organization = undefined;

