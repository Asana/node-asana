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
 * The StoryResponseOldDates model module.
 * @module model/StoryResponseOldDates
 * @version 2.0.3
 */
export class StoryResponseOldDates {
  /**
   * Constructs a new <code>StoryResponseOldDates</code>.
   * *Conditional*
   * @alias module:model/StoryResponseOldDates
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StoryResponseOldDates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoryResponseOldDates} obj Optional instance to populate.
   * @return {module:model/StoryResponseOldDates} The populated <code>StoryResponseOldDates</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StoryResponseOldDates();
      if (data.hasOwnProperty('start_on'))
        obj.start_on = ApiClient.convertToType(data['start_on'], 'Date');
      if (data.hasOwnProperty('due_at'))
        obj.due_at = ApiClient.convertToType(data['due_at'], 'Date');
      if (data.hasOwnProperty('due_on'))
        obj.due_on = ApiClient.convertToType(data['due_on'], 'Date');
    }
    return obj;
  }
}

/**
 * The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
 * @member {Date} start_on
 */
StoryResponseOldDates.prototype.start_on = undefined;

/**
 * The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
 * @member {Date} due_at
 */
StoryResponseOldDates.prototype.due_at = undefined;

/**
 * The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.
 * @member {Date} due_on
 */
StoryResponseOldDates.prototype.due_on = undefined;

