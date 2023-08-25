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
import {TeamRequest} from './TeamRequest';

/**
 * The TeamsBody model module.
 * @module model/TeamsBody
 * @version 2.0.4
 */
export class TeamsBody {
  /**
   * Constructs a new <code>TeamsBody</code>.
   * @alias module:model/TeamsBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamsBody} obj Optional instance to populate.
   * @return {module:model/TeamsBody} The populated <code>TeamsBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamsBody();
      if (data.hasOwnProperty('data'))
        obj.data = TeamRequest.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TeamRequest} data
 */
TeamsBody.prototype.data = undefined;

