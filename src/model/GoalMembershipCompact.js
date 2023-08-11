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
import {MembershipCompactGoal} from './MembershipCompactGoal';
import {MembershipCompactMember} from './MembershipCompactMember';
import {MembershipCompactParent} from './MembershipCompactParent';

/**
 * The GoalMembershipCompact model module.
 * @module model/GoalMembershipCompact
 * @version 2.0.3
 */
export class GoalMembershipCompact {
  /**
   * Constructs a new <code>GoalMembershipCompact</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. This object represents a user&#x27;s connection to a goal.
   * @alias module:model/GoalMembershipCompact
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GoalMembershipCompact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalMembershipCompact} obj Optional instance to populate.
   * @return {module:model/GoalMembershipCompact} The populated <code>GoalMembershipCompact</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GoalMembershipCompact();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('resource_subtype'))
        obj.resource_subtype = ApiClient.convertToType(data['resource_subtype'], 'String');
      if (data.hasOwnProperty('member'))
        obj.member = MembershipCompactMember.constructFromObject(data['member']);
      if (data.hasOwnProperty('parent'))
        obj.parent = MembershipCompactParent.constructFromObject(data['parent']);
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
      if (data.hasOwnProperty('goal'))
        obj.goal = MembershipCompactGoal.constructFromObject(data['goal']);
      if (data.hasOwnProperty('is_commenter'))
        obj.is_commenter = ApiClient.convertToType(data['is_commenter'], 'Boolean');
      if (data.hasOwnProperty('is_editor'))
        obj.is_editor = ApiClient.convertToType(data['is_editor'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
GoalMembershipCompact.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
GoalMembershipCompact.prototype.resource_type = undefined;

/**
 * The type of membership.
 * @member {String} resource_subtype
 */
GoalMembershipCompact.prototype.resource_subtype = undefined;

/**
 * @member {module:model/MembershipCompactMember} member
 */
GoalMembershipCompact.prototype.member = undefined;

/**
 * @member {module:model/MembershipCompactParent} parent
 */
GoalMembershipCompact.prototype.parent = undefined;

/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
GoalMembershipCompact.RoleEnum = {
  /**
   * value: "commenter"
   * @const
   */
  commenter: "commenter",

  /**
   * value: "editor"
   * @const
   */
  editor: "editor"
};
/**
 * Describes if the member is a commenter or editor in goal.
 * @member {module:model/GoalMembershipCompact.RoleEnum} role
 */
GoalMembershipCompact.prototype.role = undefined;

/**
 * @member {module:model/MembershipCompactGoal} goal
 */
GoalMembershipCompact.prototype.goal = undefined;

/**
 * *Deprecated: new integrations should prefer the `role` field.* Describes if the member is comment only in goal.
 * @member {Boolean} is_commenter
 */
GoalMembershipCompact.prototype.is_commenter = undefined;

/**
 * *Deprecated: new integrations should prefer the `role` field.* Describes if the member is editor in goal.
 * @member {Boolean} is_editor
 */
GoalMembershipCompact.prototype.is_editor = undefined;

