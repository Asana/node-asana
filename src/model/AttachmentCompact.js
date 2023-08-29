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
 * The AttachmentCompact model module.
 * @module model/AttachmentCompact
 * @version 2.0.5
 */
export class AttachmentCompact {
  /**
   * Constructs a new <code>AttachmentCompact</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.
   * @alias module:model/AttachmentCompact
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AttachmentCompact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttachmentCompact} obj Optional instance to populate.
   * @return {module:model/AttachmentCompact} The populated <code>AttachmentCompact</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AttachmentCompact();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('resource_subtype'))
        obj.resource_subtype = ApiClient.convertToType(data['resource_subtype'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
AttachmentCompact.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
AttachmentCompact.prototype.resource_type = undefined;

/**
 * The name of the file.
 * @member {String} name
 */
AttachmentCompact.prototype.name = undefined;

/**
 * The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `onedrive`, `box`, `vimeo`, and `external`.
 * @member {String} resource_subtype
 */
AttachmentCompact.prototype.resource_subtype = undefined;

