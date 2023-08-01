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
import {TeamResponseOrganization} from './TeamResponseOrganization';

/**
 * The TeamResponse model module.
 * @module model/TeamResponse
 * @version 2.0.0
 */
export class TeamResponse {
  /**
   * Constructs a new <code>TeamResponse</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
   * @alias module:model/TeamResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamResponse} obj Optional instance to populate.
   * @return {module:model/TeamResponse} The populated <code>TeamResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamResponse();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('html_description'))
        obj.html_description = ApiClient.convertToType(data['html_description'], 'String');
      if (data.hasOwnProperty('organization'))
        obj.organization = TeamResponseOrganization.constructFromObject(data['organization']);
      if (data.hasOwnProperty('permalink_url'))
        obj.permalink_url = ApiClient.convertToType(data['permalink_url'], 'String');
      if (data.hasOwnProperty('visibility'))
        obj.visibility = ApiClient.convertToType(data['visibility'], 'String');
      if (data.hasOwnProperty('edit_team_name_or_description_access_level'))
        obj.edit_team_name_or_description_access_level = ApiClient.convertToType(data['edit_team_name_or_description_access_level'], 'String');
      if (data.hasOwnProperty('edit_team_visibility_or_trash_team_access_level'))
        obj.edit_team_visibility_or_trash_team_access_level = ApiClient.convertToType(data['edit_team_visibility_or_trash_team_access_level'], 'String');
      if (data.hasOwnProperty('member_invite_management_access_level'))
        obj.member_invite_management_access_level = ApiClient.convertToType(data['member_invite_management_access_level'], 'String');
      if (data.hasOwnProperty('guest_invite_management_access_level'))
        obj.guest_invite_management_access_level = ApiClient.convertToType(data['guest_invite_management_access_level'], 'String');
      if (data.hasOwnProperty('join_request_management_access_level'))
        obj.join_request_management_access_level = ApiClient.convertToType(data['join_request_management_access_level'], 'String');
      if (data.hasOwnProperty('team_member_removal_access_level'))
        obj.team_member_removal_access_level = ApiClient.convertToType(data['team_member_removal_access_level'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
TeamResponse.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TeamResponse.prototype.resource_type = undefined;

/**
 * The name of the team.
 * @member {String} name
 */
TeamResponse.prototype.name = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The description of the team. 
 * @member {String} description
 */
TeamResponse.prototype.description = undefined;

/**
 * [Opt In](/docs/inputoutput-options). The description of the team with formatting as HTML. 
 * @member {String} html_description
 */
TeamResponse.prototype.html_description = undefined;

/**
 * @member {module:model/TeamResponseOrganization} organization
 */
TeamResponse.prototype.organization = undefined;

/**
 * A url that points directly to the object within Asana.
 * @member {String} permalink_url
 */
TeamResponse.prototype.permalink_url = undefined;

/**
 * Allowed values for the <code>visibility</code> property.
 * @enum {String}
 * @readonly
 */
TeamResponse.VisibilityEnum = {
  /**
   * value: "secret"
   * @const
   */
  secret: "secret",

  /**
   * value: "request_to_join"
   * @const
   */
  request_to_join: "request_to_join",

  /**
   * value: "public"
   * @const
   */
  _public: "public"
};
/**
 * The visibility of the team to users in the same organization 
 * @member {module:model/TeamResponse.VisibilityEnum} visibility
 */
TeamResponse.prototype.visibility = undefined;

/**
 * Allowed values for the <code>edit_team_name_or_description_access_level</code> property.
 * @enum {String}
 * @readonly
 */
TeamResponse.EditTeamNameOrDescriptionAccessLevelEnum = {
  /**
   * value: "all_team_members"
   * @const
   */
  all_team_members: "all_team_members",

  /**
   * value: "only_team_admins"
   * @const
   */
  only_team_admins: "only_team_admins"
};
/**
 * Controls who can edit team name and description 
 * @member {module:model/TeamResponse.EditTeamNameOrDescriptionAccessLevelEnum} edit_team_name_or_description_access_level
 */
TeamResponse.prototype.edit_team_name_or_description_access_level = undefined;

/**
 * Allowed values for the <code>edit_team_visibility_or_trash_team_access_level</code> property.
 * @enum {String}
 * @readonly
 */
TeamResponse.EditTeamVisibilityOrTrashTeamAccessLevelEnum = {
  /**
   * value: "all_team_members"
   * @const
   */
  all_team_members: "all_team_members",

  /**
   * value: "only_team_admins"
   * @const
   */
  only_team_admins: "only_team_admins"
};
/**
 * Controls who can edit team visibility and trash teams 
 * @member {module:model/TeamResponse.EditTeamVisibilityOrTrashTeamAccessLevelEnum} edit_team_visibility_or_trash_team_access_level
 */
TeamResponse.prototype.edit_team_visibility_or_trash_team_access_level = undefined;

/**
 * Allowed values for the <code>member_invite_management_access_level</code> property.
 * @enum {String}
 * @readonly
 */
TeamResponse.MemberInviteManagementAccessLevelEnum = {
  /**
   * value: "all_team_members"
   * @const
   */
  all_team_members: "all_team_members",

  /**
   * value: "only_team_admins"
   * @const
   */
  only_team_admins: "only_team_admins"
};
/**
 * Controls who can accept or deny member invites for a given team 
 * @member {module:model/TeamResponse.MemberInviteManagementAccessLevelEnum} member_invite_management_access_level
 */
TeamResponse.prototype.member_invite_management_access_level = undefined;

/**
 * Allowed values for the <code>guest_invite_management_access_level</code> property.
 * @enum {String}
 * @readonly
 */
TeamResponse.GuestInviteManagementAccessLevelEnum = {
  /**
   * value: "all_team_members"
   * @const
   */
  all_team_members: "all_team_members",

  /**
   * value: "only_team_admins"
   * @const
   */
  only_team_admins: "only_team_admins"
};
/**
 * Controls who can accept or deny guest invites for a given team 
 * @member {module:model/TeamResponse.GuestInviteManagementAccessLevelEnum} guest_invite_management_access_level
 */
TeamResponse.prototype.guest_invite_management_access_level = undefined;

/**
 * Allowed values for the <code>join_request_management_access_level</code> property.
 * @enum {String}
 * @readonly
 */
TeamResponse.JoinRequestManagementAccessLevelEnum = {
  /**
   * value: "all_team_members"
   * @const
   */
  all_team_members: "all_team_members",

  /**
   * value: "only_team_admins"
   * @const
   */
  only_team_admins: "only_team_admins"
};
/**
 * Controls who can accept or deny join team requests for a Membership by Request team 
 * @member {module:model/TeamResponse.JoinRequestManagementAccessLevelEnum} join_request_management_access_level
 */
TeamResponse.prototype.join_request_management_access_level = undefined;

/**
 * Allowed values for the <code>team_member_removal_access_level</code> property.
 * @enum {String}
 * @readonly
 */
TeamResponse.TeamMemberRemovalAccessLevelEnum = {
  /**
   * value: "all_team_members"
   * @const
   */
  all_team_members: "all_team_members",

  /**
   * value: "only_team_admins"
   * @const
   */
  only_team_admins: "only_team_admins"
};
/**
 * Controls who can remove team members 
 * @member {module:model/TeamResponse.TeamMemberRemovalAccessLevelEnum} team_member_removal_access_level
 */
TeamResponse.prototype.team_member_removal_access_level = undefined;

