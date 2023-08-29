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
 * The EventResponseResource model module.
 * @module model/EventResponseResource
 * @version 2.0.5
 */
export class EventResponseResource {
  /**
   * Constructs a new <code>EventResponseResource</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. The resource which has triggered the event by being modified in some way.
   * @alias module:model/EventResponseResource
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EventResponseResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventResponseResource} obj Optional instance to populate.
   * @return {module:model/EventResponseResource} The populated <code>EventResponseResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EventResponseResource();
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
EventResponseResource.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
EventResponseResource.prototype.resource_type = undefined;

/**
 * The name of the object.
 * @member {String} name
 */
EventResponseResource.prototype.name = undefined;

