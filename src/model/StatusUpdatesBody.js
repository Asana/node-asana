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
import {StatusUpdateRequest} from './StatusUpdateRequest';

/**
 * The StatusUpdatesBody model module.
 * @module model/StatusUpdatesBody
 * @version 2.0.3
 */
export class StatusUpdatesBody {
  /**
   * Constructs a new <code>StatusUpdatesBody</code>.
   * @alias module:model/StatusUpdatesBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StatusUpdatesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusUpdatesBody} obj Optional instance to populate.
   * @return {module:model/StatusUpdatesBody} The populated <code>StatusUpdatesBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StatusUpdatesBody();
      if (data.hasOwnProperty('data'))
        obj.data = StatusUpdateRequest.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/StatusUpdateRequest} data
 */
StatusUpdatesBody.prototype.data = undefined;

