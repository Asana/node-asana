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
import {CustomFieldSettingResponse} from './CustomFieldSettingResponse';
import {NextPage} from './NextPage';

/**
 * The CustomFieldSettingResponseArray model module.
 * @module model/CustomFieldSettingResponseArray
 * @version 2.0.0
 */
export class CustomFieldSettingResponseArray {
  /**
   * Constructs a new <code>CustomFieldSettingResponseArray</code>.
   * @alias module:model/CustomFieldSettingResponseArray
   * @class
   * @param data {Array.<module:model/CustomFieldSettingResponse>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CustomFieldSettingResponseArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomFieldSettingResponseArray} obj Optional instance to populate.
   * @return {module:model/CustomFieldSettingResponseArray} The populated <code>CustomFieldSettingResponseArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CustomFieldSettingResponseArray();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [CustomFieldSettingResponse]);
      if (data.hasOwnProperty('next_page'))
        obj.next_page = NextPage.constructFromObject(data['next_page']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CustomFieldSettingResponse>} data
 */
CustomFieldSettingResponseArray.prototype.data = undefined;

/**
 * @member {module:model/NextPage} next_page
 */
CustomFieldSettingResponseArray.prototype.next_page = undefined;

