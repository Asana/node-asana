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
import {ApiClient} from "../ApiClient";
import {ErrorResponse} from '../model/ErrorResponse';
import {TeamMembershipResponseArray} from '../model/TeamMembershipResponseArray';
import {TeamMembershipResponseData} from '../model/TeamMembershipResponseData';

/**
* TeamMemberships service.
* @module api/TeamMembershipsApi
* @version 2.0.3
*/
export class TeamMembershipsApi {

    /**
    * Constructs a new TeamMembershipsApi. 
    * @alias module:api/TeamMembershipsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getTeamMembership operation.
     * @callback moduleapi/TeamMembershipsApi~getTeamMembershipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamMembershipResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a team membership
     * Returns the complete team membership record for a single team membership.
     * @param {String} team_membership_gid 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TeamMembershipsApi~getTeamMembershipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTeamMembership(team_membership_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'team_membership_gid' is set
      if (team_membership_gid === undefined || team_membership_gid === null) {
        throw new Error("Missing the required parameter 'team_membership_gid' when calling getTeamMembership");
      }

      let pathParams = {
        'team_membership_gid': team_membership_gid
      };
      let queryParams = {
        'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = TeamMembershipResponseData;

      return this.apiClient.callApi(
        '/team_memberships/{team_membership_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTeamMemberships operation.
     * @callback moduleapi/TeamMembershipsApi~getTeamMembershipsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamMembershipResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get team memberships
     * Returns compact team membership records.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {String} opts.team Globally unique identifier for the team.
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user. This parameter must be used with the workspace parameter.
     * @param {String} opts.workspace Globally unique identifier for the workspace. This parameter must be used with the user parameter.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TeamMembershipsApi~getTeamMembershipsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTeamMemberships(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'limit': opts['limit'],'offset': opts['offset'],'team': opts['team'],'user': opts['user'],'workspace': opts['workspace'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = TeamMembershipResponseArray;

      return this.apiClient.callApi(
        '/team_memberships', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTeamMembershipsForTeam operation.
     * @callback moduleapi/TeamMembershipsApi~getTeamMembershipsForTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamMembershipResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get memberships from a team
     * Returns the compact team memberships for the team.
     * @param {String} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TeamMembershipsApi~getTeamMembershipsForTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTeamMembershipsForTeam(team_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'team_gid' is set
      if (team_gid === undefined || team_gid === null) {
        throw new Error("Missing the required parameter 'team_gid' when calling getTeamMembershipsForTeam");
      }

      let pathParams = {
        'team_gid': team_gid
      };
      let queryParams = {
        'limit': opts['limit'],'offset': opts['offset'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = TeamMembershipResponseArray;

      return this.apiClient.callApi(
        '/teams/{team_gid}/team_memberships', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTeamMembershipsForUser operation.
     * @callback moduleapi/TeamMembershipsApi~getTeamMembershipsForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamMembershipResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get memberships from a user
     * Returns the compact team membership records for the user.
     * @param {String} user_gid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {String} workspace Globally unique identifier for the workspace.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TeamMembershipsApi~getTeamMembershipsForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTeamMembershipsForUser(user_gid, workspace, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'user_gid' is set
      if (user_gid === undefined || user_gid === null) {
        throw new Error("Missing the required parameter 'user_gid' when calling getTeamMembershipsForUser");
      }
      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling getTeamMembershipsForUser");
      }

      let pathParams = {
        'user_gid': user_gid
      };
      let queryParams = {
        'limit': opts['limit'],'offset': opts['offset'],'workspace': workspace,'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = TeamMembershipResponseArray;

      return this.apiClient.callApi(
        '/users/{user_gid}/team_memberships', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}