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
 * The StatusUpdateBase model module.
 * @module model/StatusUpdateBase
 * @version 2.0.3
 */
export class StatusUpdateBase {
  /**
   * Constructs a new <code>StatusUpdateBase</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *status update* is an update on the progress of a particular project, portfolio, or goal, and is sent out to all of its parent&#x27;s followers when created. These updates include both text describing the update and a &#x60;status_type&#x60; intended to represent the overall state of the project.
   * @alias module:model/StatusUpdateBase
   * @class
   * @param text {String} The text content of the status update.
   * @param status_type {module:model/StatusUpdateBase.StatusTypeEnum} The type associated with the status update. This represents the current state of the object this object is on.
   */
  constructor(text, status_type) {
    this.text = text;
    this.status_type = status_type;
  }

  /**
   * Constructs a <code>StatusUpdateBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusUpdateBase} obj Optional instance to populate.
   * @return {module:model/StatusUpdateBase} The populated <code>StatusUpdateBase</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StatusUpdateBase();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('resource_subtype'))
        obj.resource_subtype = ApiClient.convertToType(data['resource_subtype'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('html_text'))
        obj.html_text = ApiClient.convertToType(data['html_text'], 'String');
      if (data.hasOwnProperty('status_type'))
        obj.status_type = ApiClient.convertToType(data['status_type'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
StatusUpdateBase.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
StatusUpdateBase.prototype.resource_type = undefined;

/**
 * The title of the status update.
 * @member {String} title
 */
StatusUpdateBase.prototype.title = undefined;

/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
StatusUpdateBase.ResourceSubtypeEnum = {
  /**
   * value: "project_status_update"
   * @const
   */
  project_status_update: "project_status_update",

  /**
   * value: "portfolio_status_update"
   * @const
   */
  portfolio_status_update: "portfolio_status_update",

  /**
   * value: "goal_status_update"
   * @const
   */
  goal_status_update: "goal_status_update"
};
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The `resource_subtype`s for `status` objects represent the type of their parent.
 * @member {module:model/StatusUpdateBase.ResourceSubtypeEnum} resource_subtype
 */
StatusUpdateBase.prototype.resource_subtype = undefined;

/**
 * The text content of the status update.
 * @member {String} text
 */
StatusUpdateBase.prototype.text = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The text content of the status update with formatting as HTML.
 * @member {String} html_text
 */
StatusUpdateBase.prototype.html_text = undefined;

/**
 * Allowed values for the <code>status_type</code> property.
 * @enum {String}
 * @readonly
 */
StatusUpdateBase.StatusTypeEnum = {
  /**
   * value: "on_track"
   * @const
   */
  on_track: "on_track",

  /**
   * value: "at_risk"
   * @const
   */
  at_risk: "at_risk",

  /**
   * value: "off_track"
   * @const
   */
  off_track: "off_track",

  /**
   * value: "on_hold"
   * @const
   */
  on_hold: "on_hold",

  /**
   * value: "complete"
   * @const
   */
  complete: "complete",

  /**
   * value: "achieved"
   * @const
   */
  achieved: "achieved",

  /**
   * value: "partial"
   * @const
   */
  partial: "partial",

  /**
   * value: "missed"
   * @const
   */
  missed: "missed",

  /**
   * value: "dropped"
   * @const
   */
  dropped: "dropped"
};
/**
 * The type associated with the status update. This represents the current state of the object this object is on.
 * @member {module:model/StatusUpdateBase.StatusTypeEnum} status_type
 */
StatusUpdateBase.prototype.status_type = undefined;

