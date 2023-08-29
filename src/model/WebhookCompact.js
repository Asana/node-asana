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
import {WebhookCompactResource} from './WebhookCompactResource';

/**
 * The WebhookCompact model module.
 * @module model/WebhookCompact
 * @version 2.0.5
 */
export class WebhookCompact {
  /**
   * Constructs a new <code>WebhookCompact</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. Webhook objects represent the state of an active subscription for a server to be updated with information from Asana. This schema represents the subscription itself, not the objects that are sent to the server. For information on those please refer to the [event](/reference/events) schema.
   * @alias module:model/WebhookCompact
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>WebhookCompact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebhookCompact} obj Optional instance to populate.
   * @return {module:model/WebhookCompact} The populated <code>WebhookCompact</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WebhookCompact();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('resource'))
        obj.resource = WebhookCompactResource.constructFromObject(data['resource']);
      if (data.hasOwnProperty('target'))
        obj.target = ApiClient.convertToType(data['target'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
WebhookCompact.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
WebhookCompact.prototype.resource_type = undefined;

/**
 * If true, the webhook will send events - if false it is considered inactive and will not generate events.
 * @member {Boolean} active
 */
WebhookCompact.prototype.active = undefined;

/**
 * @member {module:model/WebhookCompactResource} resource
 */
WebhookCompact.prototype.resource = undefined;

/**
 * The URL to receive the HTTP POST.
 * @member {String} target
 */
WebhookCompact.prototype.target = undefined;

