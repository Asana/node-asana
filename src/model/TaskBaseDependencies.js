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
 * The TaskBaseDependencies model module.
 * @module model/TaskBaseDependencies
 * @version 2.0.4
 */
export class TaskBaseDependencies {
  /**
   * Constructs a new <code>TaskBaseDependencies</code>.
   * A generic Asana Resource, containing a globally unique identifier.
   * @alias module:model/TaskBaseDependencies
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaskBaseDependencies</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskBaseDependencies} obj Optional instance to populate.
   * @return {module:model/TaskBaseDependencies} The populated <code>TaskBaseDependencies</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaskBaseDependencies();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
TaskBaseDependencies.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TaskBaseDependencies.prototype.resource_type = undefined;

