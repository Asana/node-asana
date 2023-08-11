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
import {JobBaseNewProject} from './JobBaseNewProject';
import {MembershipCompactMember} from './MembershipCompactMember';

/**
 * The ProjectMembershipCompact model module.
 * @module model/ProjectMembershipCompact
 * @version 2.0.3
 */
export class ProjectMembershipCompact {
  /**
   * Constructs a new <code>ProjectMembershipCompact</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.
   * @alias module:model/ProjectMembershipCompact
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProjectMembershipCompact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectMembershipCompact} obj Optional instance to populate.
   * @return {module:model/ProjectMembershipCompact} The populated <code>ProjectMembershipCompact</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectMembershipCompact();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = CustomFieldResponsePeopleValue.constructFromObject(data['user']);
      if (data.hasOwnProperty('parent'))
        obj.parent = JobBaseNewProject.constructFromObject(data['parent']);
      if (data.hasOwnProperty('member'))
        obj.member = MembershipCompactMember.constructFromObject(data['member']);
      if (data.hasOwnProperty('access_level'))
        obj.access_level = ApiClient.convertToType(data['access_level'], 'String');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectMembershipCompact.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectMembershipCompact.prototype.resource_type = undefined;

/**
 * @member {module:model/CustomFieldResponsePeopleValue} user
 */
ProjectMembershipCompact.prototype.user = undefined;

/**
 * @member {module:model/JobBaseNewProject} parent
 */
ProjectMembershipCompact.prototype.parent = undefined;

/**
 * @member {module:model/MembershipCompactMember} member
 */
ProjectMembershipCompact.prototype.member = undefined;

/**
 * Allowed values for the <code>access_level</code> property.
 * @enum {String}
 * @readonly
 */
ProjectMembershipCompact.AccessLevelEnum = {
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
 * Whether the member has admin, editor, commenter, or viewer access to the project.
 * @member {module:model/ProjectMembershipCompact.AccessLevelEnum} access_level
 */
ProjectMembershipCompact.prototype.access_level = undefined;

