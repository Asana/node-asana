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
 * The TaskCountResponse model module.
 * @module model/TaskCountResponse
 * @version 2.0.3
 */
export class TaskCountResponse {
  /**
   * Constructs a new <code>TaskCountResponse</code>.
   * A response object returned from the task count endpoint.
   * @alias module:model/TaskCountResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaskCountResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskCountResponse} obj Optional instance to populate.
   * @return {module:model/TaskCountResponse} The populated <code>TaskCountResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaskCountResponse();
      if (data.hasOwnProperty('num_tasks'))
        obj.num_tasks = ApiClient.convertToType(data['num_tasks'], 'Number');
      if (data.hasOwnProperty('num_incomplete_tasks'))
        obj.num_incomplete_tasks = ApiClient.convertToType(data['num_incomplete_tasks'], 'Number');
      if (data.hasOwnProperty('num_completed_tasks'))
        obj.num_completed_tasks = ApiClient.convertToType(data['num_completed_tasks'], 'Number');
      if (data.hasOwnProperty('num_milestones'))
        obj.num_milestones = ApiClient.convertToType(data['num_milestones'], 'Number');
      if (data.hasOwnProperty('num_incomplete_milestones'))
        obj.num_incomplete_milestones = ApiClient.convertToType(data['num_incomplete_milestones'], 'Number');
      if (data.hasOwnProperty('num_completed_milestones'))
        obj.num_completed_milestones = ApiClient.convertToType(data['num_completed_milestones'], 'Number');
    }
    return obj;
  }
}

/**
 * The number of tasks in a project.
 * @member {Number} num_tasks
 */
TaskCountResponse.prototype.num_tasks = undefined;

/**
 * The number of incomplete tasks in a project.
 * @member {Number} num_incomplete_tasks
 */
TaskCountResponse.prototype.num_incomplete_tasks = undefined;

/**
 * The number of completed tasks in a project.
 * @member {Number} num_completed_tasks
 */
TaskCountResponse.prototype.num_completed_tasks = undefined;

/**
 * The number of milestones in a project.
 * @member {Number} num_milestones
 */
TaskCountResponse.prototype.num_milestones = undefined;

/**
 * The number of incomplete milestones in a project.
 * @member {Number} num_incomplete_milestones
 */
TaskCountResponse.prototype.num_incomplete_milestones = undefined;

/**
 * The number of completed milestones in a project.
 * @member {Number} num_completed_milestones
 */
TaskCountResponse.prototype.num_completed_milestones = undefined;

