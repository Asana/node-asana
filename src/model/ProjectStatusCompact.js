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
 * The ProjectStatusCompact model module.
 * @module model/ProjectStatusCompact
 * @version 2.0.0
 */
export class ProjectStatusCompact {
  /**
   * Constructs a new <code>ProjectStatusCompact</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. *Deprecated: new integrations should prefer the &#x60;status_update&#x60; resource.* A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: \&quot;green\&quot; for projects that are on track, \&quot;yellow\&quot; for projects at risk, and \&quot;red\&quot; for projects that are behind.
   * @alias module:model/ProjectStatusCompact
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProjectStatusCompact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectStatusCompact} obj Optional instance to populate.
   * @return {module:model/ProjectStatusCompact} The populated <code>ProjectStatusCompact</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectStatusCompact();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectStatusCompact.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectStatusCompact.prototype.resource_type = undefined;

/**
 * The title of the project status update.
 * @member {String} title
 */
ProjectStatusCompact.prototype.title = undefined;

