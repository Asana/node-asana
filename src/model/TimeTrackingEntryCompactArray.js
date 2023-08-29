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
import {NextPage} from './NextPage';
import {TimeTrackingEntryCompact} from './TimeTrackingEntryCompact';

/**
 * The TimeTrackingEntryCompactArray model module.
 * @module model/TimeTrackingEntryCompactArray
 * @version 2.0.5
 */
export class TimeTrackingEntryCompactArray {
  /**
   * Constructs a new <code>TimeTrackingEntryCompactArray</code>.
   * @alias module:model/TimeTrackingEntryCompactArray
   * @class
   * @param data {Array.<module:model/TimeTrackingEntryCompact>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>TimeTrackingEntryCompactArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimeTrackingEntryCompactArray} obj Optional instance to populate.
   * @return {module:model/TimeTrackingEntryCompactArray} The populated <code>TimeTrackingEntryCompactArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TimeTrackingEntryCompactArray();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [TimeTrackingEntryCompact]);
      if (data.hasOwnProperty('next_page'))
        obj.next_page = NextPage.constructFromObject(data['next_page']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/TimeTrackingEntryCompact>} data
 */
TimeTrackingEntryCompactArray.prototype.data = undefined;

/**
 * @member {module:model/NextPage} next_page
 */
TimeTrackingEntryCompactArray.prototype.next_page = undefined;

