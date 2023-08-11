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
import {ProjectBriefResponse} from './ProjectBriefResponse';

/**
 * The ProjectBriefResponseData model module.
 * @module model/ProjectBriefResponseData
 * @version 2.0.3
 */
export class ProjectBriefResponseData {
  /**
   * Constructs a new <code>ProjectBriefResponseData</code>.
   * @alias module:model/ProjectBriefResponseData
   * @class
   * @param data {module:model/ProjectBriefResponse} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>ProjectBriefResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectBriefResponseData} obj Optional instance to populate.
   * @return {module:model/ProjectBriefResponseData} The populated <code>ProjectBriefResponseData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectBriefResponseData();
      if (data.hasOwnProperty('data'))
        obj.data = ProjectBriefResponse.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ProjectBriefResponse} data
 */
ProjectBriefResponseData.prototype.data = undefined;

