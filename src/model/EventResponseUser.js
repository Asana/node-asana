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
 * The EventResponseUser model module.
 * @module model/EventResponseUser
 * @version 2.0.3
 */
export class EventResponseUser {
  /**
   * Constructs a new <code>EventResponseUser</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks. The user who triggered the event.
   * @alias module:model/EventResponseUser
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EventResponseUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventResponseUser} obj Optional instance to populate.
   * @return {module:model/EventResponseUser} The populated <code>EventResponseUser</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EventResponseUser();
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
EventResponseUser.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
EventResponseUser.prototype.resource_type = undefined;

/**
 * *Read-only except when same user as requester*. The user’s name.
 * @member {String} name
 */
EventResponseUser.prototype.name = undefined;

