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
import {AsanaNamedResourceArray} from '../model/AsanaNamedResourceArray';
import {ErrorResponse} from '../model/ErrorResponse';
import {UserResponseArray} from '../model/UserResponseArray';
import {UserResponseData} from '../model/UserResponseData';

/**
* Users service.
* @module api/UsersApi
* @version 2.0.5
*/
export class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getFavoritesForUser operation.
     * @callback moduleapi/UsersApi~getFavoritesForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AsanaNamedResourceArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user&#x27;s favorites
     * Returns all of a user&#x27;s favorites in the given workspace, of the given type. Results are given in order (The same order as Asana&#x27;s sidebar).
     * @param {String} user_gid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {module:model/String} resource_type The resource type of favorites to be returned.
     * @param {String} workspace The workspace in which to get favorites.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/UsersApi~getFavoritesForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getFavoritesForUser(user_gid, resource_type, workspace, opts, callback) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'user_gid' is set
        if (user_gid === undefined || user_gid === null) {
            throw new Error("Missing the required parameter 'user_gid' when calling getFavoritesForUser");
        }
        // verify the required parameter 'resource_type' is set
        if (resource_type === undefined || resource_type === null) {
            throw new Error("Missing the required parameter 'resource_type' when calling getFavoritesForUser");
        }
        // verify the required parameter 'workspace' is set
        if (workspace === undefined || workspace === null) {
            throw new Error("Missing the required parameter 'workspace' when calling getFavoritesForUser");
        }

        let pathParams = {
            'user_gid': user_gid
        };
        let queryParams = {
            'limit': opts['limit'],'offset': opts['offset'],'resource_type': resource_type,'workspace': workspace,'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
        };
        let headerParams = {
            
        };
        let formParams = {
            
        };

        let authNames = ['oauth2'];
        let contentTypes = [];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = AsanaNamedResourceArray;

        return this.apiClient.callApi(
            '/users/{user_gid}/favorites', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the getUser operation.
     * @callback moduleapi/UsersApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user
     * Returns the full user record for the single user with the provided ID.
     * @param {String} user_gid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/UsersApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getUser(user_gid, opts, callback) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'user_gid' is set
        if (user_gid === undefined || user_gid === null) {
            throw new Error("Missing the required parameter 'user_gid' when calling getUser");
        }

        let pathParams = {
            'user_gid': user_gid
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
        let returnType = UserResponseData;

        return this.apiClient.callApi(
            '/users/{user_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the getUsers operation.
     * @callback moduleapi/UsersApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get multiple users
     * Returns the user records for all users in all workspaces and organizations accessible to the authenticated user. Accepts an optional workspace ID parameter. Results are sorted by user ID.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workspace The workspace or organization ID to filter users on.
     * @param {String} opts.team The team ID to filter users on.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/UsersApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getUsers(opts, callback) {
        opts = opts || {};
        let postBody = null;

        let pathParams = {
            
        };
        let queryParams = {
            'workspace': opts['workspace'],'team': opts['team'],'limit': opts['limit'],'offset': opts['offset'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
        };
        let headerParams = {
            
        };
        let formParams = {
            
        };

        let authNames = ['oauth2'];
        let contentTypes = [];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = UserResponseArray;

        return this.apiClient.callApi(
            '/users', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the getUsersForTeam operation.
     * @callback moduleapi/UsersApi~getUsersForTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get users in a team
     * Returns the compact records for all users that are members of the team. Results are sorted alphabetically and limited to 2000. For more results use the &#x60;/users&#x60; endpoint.
     * @param {String} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/UsersApi~getUsersForTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getUsersForTeam(team_gid, opts, callback) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'team_gid' is set
        if (team_gid === undefined || team_gid === null) {
            throw new Error("Missing the required parameter 'team_gid' when calling getUsersForTeam");
        }

        let pathParams = {
            'team_gid': team_gid
        };
        let queryParams = {
            'offset': opts['offset'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
        };
        let headerParams = {
            
        };
        let formParams = {
            
        };

        let authNames = ['oauth2'];
        let contentTypes = [];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = UserResponseArray;

        return this.apiClient.callApi(
            '/teams/{team_gid}/users', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the getUsersForWorkspace operation.
     * @callback moduleapi/UsersApi~getUsersForWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get users in a workspace or organization
     * Returns the compact records for all users in the specified workspace or organization. Results are sorted alphabetically and limited to 2000. For more results use the &#x60;/users&#x60; endpoint.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/UsersApi~getUsersForWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getUsersForWorkspace(workspace_gid, opts, callback) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'workspace_gid' is set
        if (workspace_gid === undefined || workspace_gid === null) {
            throw new Error("Missing the required parameter 'workspace_gid' when calling getUsersForWorkspace");
        }

        let pathParams = {
            'workspace_gid': workspace_gid
        };
        let queryParams = {
            'offset': opts['offset'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
        };
        let headerParams = {
            
        };
        let formParams = {
            
        };

        let authNames = ['oauth2'];
        let contentTypes = [];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = UserResponseArray;

        return this.apiClient.callApi(
            '/workspaces/{workspace_gid}/users', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }

}
