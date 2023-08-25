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
 * The TaskResponseTags model module.
 * @module model/TaskResponseTags
 * @version 2.0.4
 */
export class TaskResponseTags {
  /**
   * Constructs a new <code>TaskResponseTags</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
   * @alias module:model/TaskResponseTags
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaskResponseTags</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskResponseTags} obj Optional instance to populate.
   * @return {module:model/TaskResponseTags} The populated <code>TaskResponseTags</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaskResponseTags();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
TaskResponseTags.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TaskResponseTags.prototype.resource_type = undefined;

/**
 * Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
 * @member {String} name
 */
TaskResponseTags.prototype.name = undefined;

