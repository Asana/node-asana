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
import {ProjectMembershipCompactResponse} from './ProjectMembershipCompactResponse';

/**
 * The ProjectMembershipCompactResponseData model module.
 * @module model/ProjectMembershipCompactResponseData
 * @version 2.0.5
 */
export class ProjectMembershipCompactResponseData {
  /**
   * Constructs a new <code>ProjectMembershipCompactResponseData</code>.
   * @alias module:model/ProjectMembershipCompactResponseData
   * @class
   * @param data {module:model/ProjectMembershipCompactResponse} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>ProjectMembershipCompactResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectMembershipCompactResponseData} obj Optional instance to populate.
   * @return {module:model/ProjectMembershipCompactResponseData} The populated <code>ProjectMembershipCompactResponseData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectMembershipCompactResponseData();
      if (data.hasOwnProperty('data'))
        obj.data = ProjectMembershipCompactResponse.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ProjectMembershipCompactResponse} data
 */
ProjectMembershipCompactResponseData.prototype.data = undefined;

