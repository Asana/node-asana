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
import {CreateTimeTrackingEntryRequest} from './CreateTimeTrackingEntryRequest';

/**
 * The TaskGidTimeTrackingEntriesBody model module.
 * @module model/TaskGidTimeTrackingEntriesBody
 * @version 2.0.0
 */
export class TaskGidTimeTrackingEntriesBody {
  /**
   * Constructs a new <code>TaskGidTimeTrackingEntriesBody</code>.
   * @alias module:model/TaskGidTimeTrackingEntriesBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaskGidTimeTrackingEntriesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskGidTimeTrackingEntriesBody} obj Optional instance to populate.
   * @return {module:model/TaskGidTimeTrackingEntriesBody} The populated <code>TaskGidTimeTrackingEntriesBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaskGidTimeTrackingEntriesBody();
      if (data.hasOwnProperty('data'))
        obj.data = CreateTimeTrackingEntryRequest.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CreateTimeTrackingEntryRequest} data
 */
TaskGidTimeTrackingEntriesBody.prototype.data = undefined;

