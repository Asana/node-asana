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
import {AttachmentResponseParentCreatedBy} from './AttachmentResponseParentCreatedBy';

/**
 * The StoryResponseTask model module.
 * @module model/StoryResponseTask
 * @version 2.0.3
 */
export class StoryResponseTask {
  /**
   * Constructs a new <code>StoryResponseTask</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. The *task* is the basic object around which many operations in Asana are centered.
   * @alias module:model/StoryResponseTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StoryResponseTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoryResponseTask} obj Optional instance to populate.
   * @return {module:model/StoryResponseTask} The populated <code>StoryResponseTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StoryResponseTask();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('resource_subtype'))
        obj.resource_subtype = ApiClient.convertToType(data['resource_subtype'], 'String');
      if (data.hasOwnProperty('created_by'))
        obj.created_by = AttachmentResponseParentCreatedBy.constructFromObject(data['created_by']);
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
StoryResponseTask.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
StoryResponseTask.prototype.resource_type = undefined;

/**
 * The name of the task.
 * @member {String} name
 */
StoryResponseTask.prototype.name = undefined;

/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
StoryResponseTask.ResourceSubtypeEnum = {
  /**
   * value: "default_task"
   * @const
   */
  default_task: "default_task",

  /**
   * value: "milestone"
   * @const
   */
  milestone: "milestone",

  /**
   * value: "section"
   * @const
   */
  section: "section",

  /**
   * value: "approval"
   * @const
   */
  approval: "approval"
};
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
 * @member {module:model/StoryResponseTask.ResourceSubtypeEnum} resource_subtype
 */
StoryResponseTask.prototype.resource_subtype = undefined;

/**
 * @member {module:model/AttachmentResponseParentCreatedBy} created_by
 */
StoryResponseTask.prototype.created_by = undefined;

