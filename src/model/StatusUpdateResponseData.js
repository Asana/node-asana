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
import {StatusUpdateResponse} from './StatusUpdateResponse';

/**
 * The StatusUpdateResponseData model module.
 * @module model/StatusUpdateResponseData
 * @version 2.0.3
 */
export class StatusUpdateResponseData {
  /**
   * Constructs a new <code>StatusUpdateResponseData</code>.
   * @alias module:model/StatusUpdateResponseData
   * @class
   * @param data {module:model/StatusUpdateResponse} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>StatusUpdateResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusUpdateResponseData} obj Optional instance to populate.
   * @return {module:model/StatusUpdateResponseData} The populated <code>StatusUpdateResponseData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StatusUpdateResponseData();
      if (data.hasOwnProperty('data'))
        obj.data = StatusUpdateResponse.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/StatusUpdateResponse} data
 */
StatusUpdateResponseData.prototype.data = undefined;

