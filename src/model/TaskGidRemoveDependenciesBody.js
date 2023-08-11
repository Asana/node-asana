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
import {ModifyDependenciesRequest} from './ModifyDependenciesRequest';

/**
 * The TaskGidRemoveDependenciesBody model module.
 * @module model/TaskGidRemoveDependenciesBody
 * @version 2.0.3
 */
export class TaskGidRemoveDependenciesBody {
  /**
   * Constructs a new <code>TaskGidRemoveDependenciesBody</code>.
   * @alias module:model/TaskGidRemoveDependenciesBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaskGidRemoveDependenciesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskGidRemoveDependenciesBody} obj Optional instance to populate.
   * @return {module:model/TaskGidRemoveDependenciesBody} The populated <code>TaskGidRemoveDependenciesBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaskGidRemoveDependenciesBody();
      if (data.hasOwnProperty('data'))
        obj.data = ModifyDependenciesRequest.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ModifyDependenciesRequest} data
 */
TaskGidRemoveDependenciesBody.prototype.data = undefined;

