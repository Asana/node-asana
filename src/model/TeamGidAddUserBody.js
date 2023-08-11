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
import {TeamAddUserRequest} from './TeamAddUserRequest';

/**
 * The TeamGidAddUserBody model module.
 * @module model/TeamGidAddUserBody
 * @version 2.0.3
 */
export class TeamGidAddUserBody {
  /**
   * Constructs a new <code>TeamGidAddUserBody</code>.
   * @alias module:model/TeamGidAddUserBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamGidAddUserBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamGidAddUserBody} obj Optional instance to populate.
   * @return {module:model/TeamGidAddUserBody} The populated <code>TeamGidAddUserBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamGidAddUserBody();
      if (data.hasOwnProperty('data'))
        obj.data = TeamAddUserRequest.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TeamAddUserRequest} data
 */
TeamGidAddUserBody.prototype.data = undefined;

