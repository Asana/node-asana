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
import {TaskCountResponse} from './TaskCountResponse';

/**
 * The TaskCountResponseData model module.
 * @module model/TaskCountResponseData
 * @version 2.0.0
 */
export class TaskCountResponseData {
  /**
   * Constructs a new <code>TaskCountResponseData</code>.
   * @alias module:model/TaskCountResponseData
   * @class
   * @param data {module:model/TaskCountResponse} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>TaskCountResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskCountResponseData} obj Optional instance to populate.
   * @return {module:model/TaskCountResponseData} The populated <code>TaskCountResponseData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaskCountResponseData();
      if (data.hasOwnProperty('data'))
        obj.data = TaskCountResponse.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TaskCountResponse} data
 */
TaskCountResponseData.prototype.data = undefined;
