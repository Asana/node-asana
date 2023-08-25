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
import {PortfolioResponseCustomFieldSettings} from './PortfolioResponseCustomFieldSettings';
import {ProjectBaseCurrentStatus} from './ProjectBaseCurrentStatus';
import {ProjectBaseCurrentStatusUpdate} from './ProjectBaseCurrentStatusUpdate';

/**
 * The ProjectRequest model module.
 * @module model/ProjectRequest
 * @version 2.0.4
 */
export class ProjectRequest {
  /**
   * Constructs a new <code>ProjectRequest</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
   * @alias module:model/ProjectRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectRequest} obj Optional instance to populate.
   * @return {module:model/ProjectRequest} The populated <code>ProjectRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectRequest();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('archived'))
        obj.archived = ApiClient.convertToType(data['archived'], 'Boolean');
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.created_at = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('current_status'))
        obj.current_status = ProjectBaseCurrentStatus.constructFromObject(data['current_status']);
      if (data.hasOwnProperty('current_status_update'))
        obj.current_status_update = ProjectBaseCurrentStatusUpdate.constructFromObject(data['current_status_update']);
      if (data.hasOwnProperty('custom_field_settings'))
        obj.custom_field_settings = ApiClient.convertToType(data['custom_field_settings'], [PortfolioResponseCustomFieldSettings]);
      if (data.hasOwnProperty('default_view'))
        obj.default_view = ApiClient.convertToType(data['default_view'], 'String');
      if (data.hasOwnProperty('due_date'))
        obj.due_date = ApiClient.convertToType(data['due_date'], 'Date');
      if (data.hasOwnProperty('due_on'))
        obj.due_on = ApiClient.convertToType(data['due_on'], 'Date');
      if (data.hasOwnProperty('html_notes'))
        obj.html_notes = ApiClient.convertToType(data['html_notes'], 'String');
      if (data.hasOwnProperty('members'))
        obj.members = ApiClient.convertToType(data['members'], [CustomFieldResponsePeopleValue]);
      if (data.hasOwnProperty('modified_at'))
        obj.modified_at = ApiClient.convertToType(data['modified_at'], 'Date');
      if (data.hasOwnProperty('notes'))
        obj.notes = ApiClient.convertToType(data['notes'], 'String');
      if (data.hasOwnProperty('public'))
        obj._public = ApiClient.convertToType(data['public'], 'Boolean');
      if (data.hasOwnProperty('start_on'))
        obj.start_on = ApiClient.convertToType(data['start_on'], 'Date');
      if (data.hasOwnProperty('default_access_level'))
        obj.default_access_level = ApiClient.convertToType(data['default_access_level'], 'String');
      if (data.hasOwnProperty('minimum_access_level_for_customization'))
        obj.minimum_access_level_for_customization = ApiClient.convertToType(data['minimum_access_level_for_customization'], 'String');
      if (data.hasOwnProperty('minimum_access_level_for_sharing'))
        obj.minimum_access_level_for_sharing = ApiClient.convertToType(data['minimum_access_level_for_sharing'], 'String');
      if (data.hasOwnProperty('custom_fields'))
        obj.custom_fields = ApiClient.convertToType(data['custom_fields'], {'String': 'String'});
      if (data.hasOwnProperty('followers'))
        obj.followers = ApiClient.convertToType(data['followers'], 'String');
      if (data.hasOwnProperty('owner'))
        obj.owner = ApiClient.convertToType(data['owner'], 'String');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
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
ProjectRequest.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectRequest.prototype.resource_type = undefined;

/**
 * Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
 * @member {String} name
 */
ProjectRequest.prototype.name = undefined;

/**
 * True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
 * @member {Boolean} archived
 */
ProjectRequest.prototype.archived = undefined;

/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */
ProjectRequest.ColorEnum = {
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
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "null"
   * @const
   */
  _null: "null"
};
/**
 * Color of the project.
 * @member {module:model/ProjectRequest.ColorEnum} color
 */
ProjectRequest.prototype.color = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
ProjectRequest.prototype.created_at = undefined;

/**
 * @member {module:model/ProjectBaseCurrentStatus} current_status
 */
ProjectRequest.prototype.current_status = undefined;

/**
 * @member {module:model/ProjectBaseCurrentStatusUpdate} current_status_update
 */
ProjectRequest.prototype.current_status_update = undefined;

/**
 * Array of Custom Field Settings (in compact form).
 * @member {Array.<module:model/PortfolioResponseCustomFieldSettings>} custom_field_settings
 */
ProjectRequest.prototype.custom_field_settings = undefined;

/**
 * Allowed values for the <code>default_view</code> property.
 * @enum {String}
 * @readonly
 */
ProjectRequest.DefaultViewEnum = {
  /**
   * value: "list"
   * @const
   */
  list: "list",

  /**
   * value: "board"
   * @const
   */
  board: "board",

  /**
   * value: "calendar"
   * @const
   */
  calendar: "calendar",

  /**
   * value: "timeline"
   * @const
   */
  timeline: "timeline"
};
/**
 * The default view (list, board, calendar, or timeline) of a project.
 * @member {module:model/ProjectRequest.DefaultViewEnum} default_view
 */
ProjectRequest.prototype.default_view = undefined;

/**
 * *Deprecated: new integrations should prefer the `due_on` field.*
 * @member {Date} due_date
 */
ProjectRequest.prototype.due_date = undefined;

/**
 * The day on which this project is due. This takes a date with format YYYY-MM-DD.
 * @member {Date} due_on
 */
ProjectRequest.prototype.due_on = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The notes of the project with formatting as HTML.
 * @member {String} html_notes
 */
ProjectRequest.prototype.html_notes = undefined;

/**
 * Array of users who are members of this project.
 * @member {Array.<module:model/CustomFieldResponsePeopleValue>} members
 */
ProjectRequest.prototype.members = undefined;

/**
 * The time at which this project was last modified. *Note: This does not currently reflect any changes in associations such as tasks or comments that may have been added or removed from the project.*
 * @member {Date} modified_at
 */
ProjectRequest.prototype.modified_at = undefined;

/**
 * Free-form textual information associated with the project (ie., its description).
 * @member {String} notes
 */
ProjectRequest.prototype.notes = undefined;

/**
 * True if the project is public to its team.
 * @member {Boolean} _public
 */
ProjectRequest.prototype._public = undefined;

/**
 * The day on which work for this project begins, or null if the project has no start date. This takes a date with `YYYY-MM-DD` format. *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter. Additionally, `start_on` and `due_on` cannot be the same date.*
 * @member {Date} start_on
 */
ProjectRequest.prototype.start_on = undefined;

/**
 * Allowed values for the <code>default_access_level</code> property.
 * @enum {String}
 * @readonly
 */
ProjectRequest.DefaultAccessLevelEnum = {
  /**
   * value: "admin"
   * @const
   */
  admin: "admin",

  /**
   * value: "editor"
   * @const
   */
  editor: "editor",

  /**
   * value: "commenter"
   * @const
   */
  commenter: "commenter",

  /**
   * value: "viewer"
   * @const
   */
  viewer: "viewer"
};
/**
 * The default access for users or teams who join or are added as members to the project.
 * @member {module:model/ProjectRequest.DefaultAccessLevelEnum} default_access_level
 */
ProjectRequest.prototype.default_access_level = undefined;

/**
 * Allowed values for the <code>minimum_access_level_for_customization</code> property.
 * @enum {String}
 * @readonly
 */
ProjectRequest.MinimumAccessLevelForCustomizationEnum = {
  /**
   * value: "admin"
   * @const
   */
  admin: "admin",

  /**
   * value: "editor"
   * @const
   */
  editor: "editor"
};
/**
 * The minimum access level needed for project members to modify this project's workflow and appearance.
 * @member {module:model/ProjectRequest.MinimumAccessLevelForCustomizationEnum} minimum_access_level_for_customization
 */
ProjectRequest.prototype.minimum_access_level_for_customization = undefined;

/**
 * Allowed values for the <code>minimum_access_level_for_sharing</code> property.
 * @enum {String}
 * @readonly
 */
ProjectRequest.MinimumAccessLevelForSharingEnum = {
  /**
   * value: "admin"
   * @const
   */
  admin: "admin",

  /**
   * value: "editor"
   * @const
   */
  editor: "editor"
};
/**
 * The minimum access level needed for project members to share the project and manage project memberships.
 * @member {module:model/ProjectRequest.MinimumAccessLevelForSharingEnum} minimum_access_level_for_sharing
 */
ProjectRequest.prototype.minimum_access_level_for_sharing = undefined;

/**
 * An object where each key is a Custom Field GID and each value is an enum GID, string, number, or object.
 * @member {Object.<String, String>} custom_fields
 */
ProjectRequest.prototype.custom_fields = undefined;

/**
 * *Create-only*. Comma separated string of users. Followers are a subset of members who have opted in to receive \"tasks added\" notifications for a project.
 * @member {String} followers
 */
ProjectRequest.prototype.followers = undefined;

/**
 * The current owner of the project, may be null.
 * @member {String} owner
 */
ProjectRequest.prototype.owner = undefined;

/**
 * The team that this project is shared with.
 * @member {String} team
 */
ProjectRequest.prototype.team = undefined;

/**
 * The `gid` of a workspace.
 * @member {String} workspace
 */
ProjectRequest.prototype.workspace = undefined;

