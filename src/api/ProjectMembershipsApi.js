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
import {ProjectMembershipCompactArray} from '../model/ProjectMembershipCompactArray';
import {ProjectMembershipNormalResponseData} from '../model/ProjectMembershipNormalResponseData';

/**
* ProjectMemberships service.
* @module api/ProjectMembershipsApi
* @version 2.0.5
*/
export class ProjectMembershipsApi {

    /**
    * Constructs a new ProjectMembershipsApi. 
    * @alias module:api/ProjectMembershipsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getProjectMembership operation.
     * @callback moduleapi/ProjectMembershipsApi~getProjectMembershipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectMembershipNormalResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a project membership
     * Returns the complete project record for a single project membership.
     * @param {String} project_membership_gid 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/ProjectMembershipsApi~getProjectMembershipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProjectMembership(project_membership_gid, opts, callback) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'project_membership_gid' is set
        if (project_membership_gid === undefined || project_membership_gid === null) {
            throw new Error("Missing the required parameter 'project_membership_gid' when calling getProjectMembership");
        }

        let pathParams = {
            'project_membership_gid': project_membership_gid
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
        let returnType = ProjectMembershipNormalResponseData;

        return this.apiClient.callApi(
            '/project_memberships/{project_membership_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the getProjectMembershipsForProject operation.
     * @callback moduleapi/ProjectMembershipsApi~getProjectMembershipsForProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectMembershipCompactArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get memberships from a project
     * Returns the compact project membership records for the project.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/ProjectMembershipsApi~getProjectMembershipsForProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProjectMembershipsForProject(project_gid, opts, callback) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'project_gid' is set
        if (project_gid === undefined || project_gid === null) {
            throw new Error("Missing the required parameter 'project_gid' when calling getProjectMembershipsForProject");
        }

        let pathParams = {
            'project_gid': project_gid
        };
        let queryParams = {
            'user': opts['user'],'limit': opts['limit'],'offset': opts['offset'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
        };
        let headerParams = {
            
        };
        let formParams = {
            
        };

        let authNames = ['oauth2'];
        let contentTypes = [];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = ProjectMembershipCompactArray;

        return this.apiClient.callApi(
            '/projects/{project_gid}/project_memberships', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }

}
