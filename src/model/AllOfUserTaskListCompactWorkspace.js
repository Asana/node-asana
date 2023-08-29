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

/**
 * The AllOfUserTaskListCompactWorkspace model module.
 * @module model/AllOfUserTaskListCompactWorkspace
 * @version 2.0.5
 */
export class AllOfUserTaskListCompactWorkspace {
  /**
   * Constructs a new <code>AllOfUserTaskListCompactWorkspace</code>.
   * The workspace in which the user task list is located.
   * @alias module:model/AllOfUserTaskListCompactWorkspace
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AllOfUserTaskListCompactWorkspace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfUserTaskListCompactWorkspace} obj Optional instance to populate.
   * @return {module:model/AllOfUserTaskListCompactWorkspace} The populated <code>AllOfUserTaskListCompactWorkspace</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfUserTaskListCompactWorkspace();
    }
    return obj;
  }
}
