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
import {WorkspaceMembershipResponse} from './WorkspaceMembershipResponse';

/**
 * The WorkspaceMembershipResponseData model module.
 * @module model/WorkspaceMembershipResponseData
 * @version 2.0.3
 */
export class WorkspaceMembershipResponseData {
  /**
   * Constructs a new <code>WorkspaceMembershipResponseData</code>.
   * @alias module:model/WorkspaceMembershipResponseData
   * @class
   * @param data {module:model/WorkspaceMembershipResponse} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>WorkspaceMembershipResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkspaceMembershipResponseData} obj Optional instance to populate.
   * @return {module:model/WorkspaceMembershipResponseData} The populated <code>WorkspaceMembershipResponseData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WorkspaceMembershipResponseData();
      if (data.hasOwnProperty('data'))
        obj.data = WorkspaceMembershipResponse.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/WorkspaceMembershipResponse} data
 */
WorkspaceMembershipResponseData.prototype.data = undefined;

