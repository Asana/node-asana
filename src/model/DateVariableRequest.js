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
 * The DateVariableRequest model module.
 * @module model/DateVariableRequest
 * @version 2.0.4
 */
export class DateVariableRequest {
  /**
   * Constructs a new <code>DateVariableRequest</code>.
   * @alias module:model/DateVariableRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DateVariableRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DateVariableRequest} obj Optional instance to populate.
   * @return {module:model/DateVariableRequest} The populated <code>DateVariableRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DateVariableRequest();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Date');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the date field in the project template. A value of `1` refers to the project start date, while `2` refers to the project due date.
 * @member {String} gid
 */
DateVariableRequest.prototype.gid = undefined;

/**
 * The date with which the date variable should be replaced when instantiating a project. This takes a date with `YYYY-MM-DD` format.
 * @member {Date} value
 */
DateVariableRequest.prototype.value = undefined;

