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
 * The SectionBase model module.
 * @module model/SectionBase
 * @version 2.0.5
 */
export class SectionBase {
  /**
   * Constructs a new <code>SectionBase</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *section* is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
   * @alias module:model/SectionBase
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SectionBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SectionBase} obj Optional instance to populate.
   * @return {module:model/SectionBase} The populated <code>SectionBase</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SectionBase();
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
SectionBase.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
SectionBase.prototype.resource_type = undefined;

/**
 * The name of the section (i.e. the text displayed as the section header).
 * @member {String} name
 */
SectionBase.prototype.name = undefined;

