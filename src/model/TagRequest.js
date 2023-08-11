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
 * The TagRequest model module.
 * @module model/TagRequest
 * @version 2.0.3
 */
export class TagRequest {
  /**
   * Constructs a new <code>TagRequest</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
   * @alias module:model/TagRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TagRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagRequest} obj Optional instance to populate.
   * @return {module:model/TagRequest} The populated <code>TagRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagRequest();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('notes'))
        obj.notes = ApiClient.convertToType(data['notes'], 'String');
      if (data.hasOwnProperty('followers'))
        obj.followers = ApiClient.convertToType(data['followers'], ['String']);
      if (data.hasOwnProperty('workspace'))
        obj.workspace = ApiClient.convertToType(data['workspace'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
TagRequest.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TagRequest.prototype.resource_type = undefined;

/**
 * Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
 * @member {String} name
 */
TagRequest.prototype.name = undefined;

/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */
TagRequest.ColorEnum = {
  /**
   * value: "dark-pink"
   * @const
   */
  dark_pink: "dark-pink",

  /**
   * value: "dark-green"
   * @const
   */
  dark_green: "dark-green",

  /**
   * value: "dark-blue"
   * @const
   */
  dark_blue: "dark-blue",

  /**
   * value: "dark-red"
   * @const
   */
  dark_red: "dark-red",

  /**
   * value: "dark-teal"
   * @const
   */
  dark_teal: "dark-teal",

  /**
   * value: "dark-brown"
   * @const
   */
  dark_brown: "dark-brown",

  /**
   * value: "dark-orange"
   * @const
   */
  dark_orange: "dark-orange",

  /**
   * value: "dark-purple"
   * @const
   */
  dark_purple: "dark-purple",

  /**
   * value: "dark-warm-gray"
   * @const
   */
  dark_warm_gray: "dark-warm-gray",

  /**
   * value: "light-pink"
   * @const
   */
  light_pink: "light-pink",

  /**
   * value: "light-green"
   * @const
   */
  light_green: "light-green",

  /**
   * value: "light-blue"
   * @const
   */
  light_blue: "light-blue",

  /**
   * value: "light-red"
   * @const
   */
  light_red: "light-red",

  /**
   * value: "light-teal"
   * @const
   */
  light_teal: "light-teal",

  /**
   * value: "light-brown"
   * @const
   */
  light_brown: "light-brown",

  /**
   * value: "light-orange"
   * @const
   */
  light_orange: "light-orange",

  /**
   * value: "light-purple"
   * @const
   */
  light_purple: "light-purple",

  /**
   * value: "light-warm-gray"
   * @const
   */
  light_warm_gray: "light-warm-gray",

  /**
   * value: "null"
   * @const
   */
  _null: "null"
};
/**
 * Color of the tag.
 * @member {module:model/TagRequest.ColorEnum} color
 */
TagRequest.prototype.color = undefined;

/**
 * Free-form textual information associated with the tag (i.e. its description).
 * @member {String} notes
 */
TagRequest.prototype.notes = undefined;

/**
 * An array of strings identifying users. These can either be the string \"me\", an email, or the gid of a user.
 * @member {Array.<String>} followers
 */
TagRequest.prototype.followers = undefined;

/**
 * Gid of an object.
 * @member {String} workspace
 */
TagRequest.prototype.workspace = undefined;

