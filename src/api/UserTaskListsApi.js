/*
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.54
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
var Collection = require('../utils/collection');

/**
* UserTaskLists service.
* @module api/UserTaskListsApi
* @version 3.0.7
*/
export class UserTaskListsApi {

    /**
    * Constructs a new UserTaskListsApi. 
    * @alias module:api/UserTaskListsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a user task list
     * Returns the full record for a user task list.
     * @param {String} user_task_list_gid Globally unique identifier for the user task list.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getUserTaskListWithHttpInfo(user_task_list_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'user_task_list_gid' is set
        if (user_task_list_gid === undefined || user_task_list_gid === null) {
            throw new Error("Missing the required parameter 'user_task_list_gid' when calling getUserTaskList");
        }

        let pathParams = {
            'user_task_list_gid': user_task_list_gid
        };
        let queryParams = {};
        opts = opts || {};
        queryParams = opts;

        let headerParams = {
            
        };
        let formParams = {
            
        };

        let authNames = ['personalAccessToken'];
        let contentTypes = [];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = 'Blob';

        return this.apiClient.callApi(
            '/user_task_lists/{user_task_list_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a user task list
     * Returns the full record for a user task list.
     * @param {<&vendorExtensions.x-jsdoc-type>} user_task_list_gid Globally unique identifier for the user task list.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserTaskListResponseData}
     */
    getUserTaskList(user_task_list_gid, opts) {

        return this.getUserTaskListWithHttpInfo(user_task_list_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a user&#x27;s task list
     * Returns the full record for a user&#x27;s task list.
     * @param {String} user_gid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {String} workspace The workspace in which to get the user task list.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getUserTaskListForUserWithHttpInfo(user_gid, workspace, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'user_gid' is set
        if (user_gid === undefined || user_gid === null) {
            throw new Error("Missing the required parameter 'user_gid' when calling getUserTaskListForUser");
        }
        // verify the required parameter 'workspace' is set
        if (workspace === undefined || workspace === null) {
            throw new Error("Missing the required parameter 'workspace' when calling getUserTaskListForUser");
        }

        let pathParams = {
            'user_gid': user_gid
        };
        let queryParams = {};
        opts = opts || {};
        queryParams = opts;
        queryParams['workspace'] = workspace;

        let headerParams = {
            
        };
        let formParams = {
            
        };

        let authNames = ['personalAccessToken'];
        let contentTypes = [];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = 'Blob';

        return this.apiClient.callApi(
            '/users/{user_gid}/user_task_list', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a user&#x27;s task list
     * Returns the full record for a user&#x27;s task list.
     * @param {<&vendorExtensions.x-jsdoc-type>} user_gid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace The workspace in which to get the user task list.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserTaskListResponseData}
     */
    getUserTaskListForUser(user_gid, workspace, opts) {

        return this.getUserTaskListForUserWithHttpInfo(user_gid, workspace, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
