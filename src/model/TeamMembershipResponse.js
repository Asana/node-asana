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
import {ProjectTemplateBaseTeam} from './ProjectTemplateBaseTeam';

/**
 * The TeamMembershipResponse model module.
 * @module model/TeamMembershipResponse
 * @version 2.0.0
 */
export class TeamMembershipResponse {
  /**
   * Constructs a new <code>TeamMembershipResponse</code>.
   * A generic Asana Resource, containing a globally unique identifier.A generic Asana Resource, containing a globally unique identifier. This object represents a user&#x27;s connection to a team.
   * @alias module:model/TeamMembershipResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamMembershipResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamMembershipResponse} obj Optional instance to populate.
   * @return {module:model/TeamMembershipResponse} The populated <code>TeamMembershipResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamMembershipResponse();
      if (data.hasOwnProperty('gid'))
        obj.gid = ApiClient.convertToType(data['gid'], 'String');
      if (data.hasOwnProperty('resource_type'))
        obj.resource_type = ApiClient.convertToType(data['resource_type'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = CustomFieldResponsePeopleValue.constructFromObject(data['user']);
      if (data.hasOwnProperty('team'))
        obj.team = ProjectTemplateBaseTeam.constructFromObject(data['team']);
      if (data.hasOwnProperty('is_guest'))
        obj.is_guest = ApiClient.convertToType(data['is_guest'], 'Boolean');
      if (data.hasOwnProperty('is_limited_access'))
        obj.is_limited_access = ApiClient.convertToType(data['is_limited_access'], 'Boolean');
      if (data.hasOwnProperty('is_admin'))
        obj.is_admin = ApiClient.convertToType(data['is_admin'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
TeamMembershipResponse.prototype.gid = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TeamMembershipResponse.prototype.resource_type = undefined;

/**
 * @member {module:model/CustomFieldResponsePeopleValue} user
 */
TeamMembershipResponse.prototype.user = undefined;

/**
 * @member {module:model/ProjectTemplateBaseTeam} team
 */
TeamMembershipResponse.prototype.team = undefined;

/**
 * Describes if the user is a guest in the team.
 * @member {Boolean} is_guest
 */
TeamMembershipResponse.prototype.is_guest = undefined;

/**
 * Describes if the user has limited access to the team.
 * @member {Boolean} is_limited_access
 */
TeamMembershipResponse.prototype.is_limited_access = undefined;

/**
 * Describes if the user is a team admin.
 * @member {Boolean} is_admin
 */
TeamMembershipResponse.prototype.is_admin = undefined;

