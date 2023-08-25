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
import {JobBaseNewProject} from './JobBaseNewProject';
import {MembershipCompactMember} from './MembershipCompactMember';

/**
 * The ProjectMembershipBase model module.
 * @module model/ProjectMembershipBase
 * @version 2.0.4
 */
export class ProjectMembershipBase {
  /**
   * Constructs a new <code>ProjectMembershipBase</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. This object describes a team or a user&#x27;s membership to a project including their level of access (Admin, Editor, Commenter, or Viewer).
   * @alias module:model/ProjectMembershipBase
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProjectMembershipBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectMembershipBase} obj Optional instance to populate.
   * @return {module:model/ProjectMembershipBase} The populated <code>ProjectMembershipBase</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectMembershipBase();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
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
ProjectMembershipBase.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectMembershipBase.prototype.resource_type = undefined;

/**
 * @member {module:model/JobBaseNewProject} parent
 */
ProjectMembershipBase.prototype.parent = undefined;

/**
 * @member {module:model/MembershipCompactMember} member
 */
ProjectMembershipBase.prototype.member = undefined;

/**
 * Allowed values for the <code>access_level</code> property.
 * @enum {String}
 * @readonly
 */
ProjectMembershipBase.AccessLevelEnum = {
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
 * @member {module:model/ProjectMembershipBase.AccessLevelEnum} access_level
 */
ProjectMembershipBase.prototype.access_level = undefined;

