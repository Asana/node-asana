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
import {CustomFieldResponsePeopleValue} from './CustomFieldResponsePeopleValue';

/**
 * The ProjectStatusResponse model module.
 * @module model/ProjectStatusResponse
 * @version 2.0.5
 */
export class ProjectStatusResponse {
  /**
   * Constructs a new <code>ProjectStatusResponse</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. *Deprecated: new integrations should prefer the &#x60;status_update&#x60; resource.* A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: \&quot;green\&quot; for projects that are on track, \&quot;yellow\&quot; for projects at risk, and \&quot;red\&quot; for projects that are behind.
   * @alias module:model/ProjectStatusResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProjectStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectStatusResponse} obj Optional instance to populate.
   * @return {module:model/ProjectStatusResponse} The populated <code>ProjectStatusResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectStatusResponse();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('html_text'))
        obj.html_text = ApiClient.convertToType(data['html_text'], 'String');
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('author'))
        obj.author = CustomFieldResponsePeopleValue.constructFromObject(data['author']);
      if (data.hasOwnProperty('created_at'))
        obj.created_at = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('created_by'))
        obj.created_by = CustomFieldResponsePeopleValue.constructFromObject(data['created_by']);
      if (data.hasOwnProperty('modified_at'))
        obj.modified_at = ApiClient.convertToType(data['modified_at'], 'Date');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectStatusResponse.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectStatusResponse.prototype.resource_type = undefined;

/**
 * The title of the project status update.
 * @member {String} title
 */
ProjectStatusResponse.prototype.title = undefined;

/**
 * The text content of the status update.
 * @member {String} text
 */
ProjectStatusResponse.prototype.text = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The text content of the status update with formatting as HTML.
 * @member {String} html_text
 */
ProjectStatusResponse.prototype.html_text = undefined;

/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */
ProjectStatusResponse.ColorEnum = {
  /**
   * value: "green"
   * @const
   */
  green: "green",

  /**
   * value: "yellow"
   * @const
   */
  yellow: "yellow",

  /**
   * value: "red"
   * @const
   */
  red: "red",

  /**
   * value: "blue"
   * @const
   */
  blue: "blue"
};
/**
 * The color associated with the status update.
 * @member {module:model/ProjectStatusResponse.ColorEnum} color
 */
ProjectStatusResponse.prototype.color = undefined;

/**
 * @member {module:model/CustomFieldResponsePeopleValue} author
 */
ProjectStatusResponse.prototype.author = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
ProjectStatusResponse.prototype.created_at = undefined;

/**
 * @member {module:model/CustomFieldResponsePeopleValue} created_by
 */
ProjectStatusResponse.prototype.created_by = undefined;

/**
 * The time at which this project status was last modified. *Note: This does not currently reflect any changes in associations such as comments that may have been added or removed from the project status.*
 * @member {Date} modified_at
 */
ProjectStatusResponse.prototype.modified_at = undefined;

