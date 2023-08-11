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
 * The RuleTriggerRequest model module.
 * @module model/RuleTriggerRequest
 * @version 2.0.3
 */
export class RuleTriggerRequest {
  /**
   * Constructs a new <code>RuleTriggerRequest</code>.
   * @alias module:model/RuleTriggerRequest
   * @class
   * @param resource {String} The ID of the resource. For the duration of the beta, this resource is always a task, and this task must exist in the project in which the rule is created.
   * @param action_data {Object.<String, Object>} The dynamic keys and values of the request. These fields are intended to be used in the action for the rule associated with this trigger.
   */
  constructor(resource, action_data) {
    this.resource = resource;
    this.action_data = action_data;
  }

  /**
   * Constructs a <code>RuleTriggerRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RuleTriggerRequest} obj Optional instance to populate.
   * @return {module:model/RuleTriggerRequest} The populated <code>RuleTriggerRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RuleTriggerRequest();
      if (data.hasOwnProperty('resource'))
        obj.resource = ApiClient.convertToType(data['resource'], 'String');
      if (data.hasOwnProperty('action_data'))
        obj.action_data = ApiClient.convertToType(data['action_data'], {'String': Object});
    }
    return obj;
  }
}

/**
 * The ID of the resource. For the duration of the beta, this resource is always a task, and this task must exist in the project in which the rule is created.
 * @member {String} resource
 */
RuleTriggerRequest.prototype.resource = undefined;

/**
 * The dynamic keys and values of the request. These fields are intended to be used in the action for the rule associated with this trigger.
 * @member {Object.<String, Object>} action_data
 */
RuleTriggerRequest.prototype.action_data = undefined;

