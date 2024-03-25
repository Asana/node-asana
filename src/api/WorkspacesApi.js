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
* Workspaces service.
* @module api/WorkspacesApi
* @version 3.0.4
*/
export class WorkspacesApi {

    /**
    * Constructs a new WorkspacesApi. 
    * @alias module:api/WorkspacesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a user to a workspace or organization
     * Add a user to a workspace or organization. The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.
     * @param {module:model/Object} body The user to add to the workspace.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addUserForWorkspaceWithHttpInfo(body, workspace_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling addUserForWorkspace");
        }
        // verify the required parameter 'workspace_gid' is set
        if (workspace_gid === undefined || workspace_gid === null) {
            throw new Error("Missing the required parameter 'workspace_gid' when calling addUserForWorkspace");
        }

        let pathParams = {
            'workspace_gid': workspace_gid
        };
        let queryParams = {};
        opts = opts || {};
        queryParams = opts;

        let headerParams = {
            
        };
        let formParams = {
            
        };

        let authNames = ['personalAccessToken'];
        let contentTypes = ['application/json; charset=UTF-8'];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = 'Blob';

        return this.apiClient.callApi(
            '/workspaces/{workspace_gid}/addUser', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Add a user to a workspace or organization
     * Add a user to a workspace or organization. The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The user to add to the workspace.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserBaseResponseData}
     */
    addUserForWorkspace(body, workspace_gid, opts) {

        return this.addUserForWorkspaceWithHttpInfo(body, workspace_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a workspace
     * Returns the full workspace record for a single workspace.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getWorkspaceWithHttpInfo(workspace_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'workspace_gid' is set
        if (workspace_gid === undefined || workspace_gid === null) {
            throw new Error("Missing the required parameter 'workspace_gid' when calling getWorkspace");
        }

        let pathParams = {
            'workspace_gid': workspace_gid
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
            '/workspaces/{workspace_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a workspace
     * Returns the full workspace record for a single workspace.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkspaceResponseData}
     */
    getWorkspace(workspace_gid, opts) {

        return this.getWorkspaceWithHttpInfo(workspace_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get multiple workspaces
     * Returns the compact records for all workspaces visible to the authorized user.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getWorkspacesWithHttpInfo(opts) {
        opts = opts || {};
        let postBody = null;

        let pathParams = {
            
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
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return Collection.fromApiClient(
                this.apiClient.callApi(
                    '/workspaces', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/workspaces',
                    'httpMethod': 'GET',
                    'pathParams': pathParams,
                    'queryParams': queryParams,
                    'headerParams': headerParams,
                    'formParams': formParams,
                    'bodyParam': postBody,
                    'authNames': authNames,
                    'contentTypes': contentTypes,
                    'accepts': accepts,
                    'returnType': returnType
                }
            )
        }

        return this.apiClient.callApi(
            '/workspaces', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get multiple workspaces
     * Returns the compact records for all workspaces visible to the authorized user.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkspaceResponseArray}
     */
    getWorkspaces(opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getWorkspacesWithHttpInfo(opts)
        }

        return this.getWorkspacesWithHttpInfo(opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Remove a user from a workspace or organization
     * Remove a user from a workspace or organization. The user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address. Returns an empty data record.
     * @param {module:model/Object} body The user to remove from the workspace.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeUserForWorkspaceWithHttpInfo(body, workspace_gid) {
        
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling removeUserForWorkspace");
        }
        // verify the required parameter 'workspace_gid' is set
        if (workspace_gid === undefined || workspace_gid === null) {
            throw new Error("Missing the required parameter 'workspace_gid' when calling removeUserForWorkspace");
        }

        let pathParams = {
            'workspace_gid': workspace_gid
        };
        let queryParams = {};

        let headerParams = {
            
        };
        let formParams = {
            
        };

        let authNames = ['personalAccessToken'];
        let contentTypes = ['application/json; charset=UTF-8'];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = 'Blob';

        return this.apiClient.callApi(
            '/workspaces/{workspace_gid}/removeUser', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Remove a user from a workspace or organization
     * Remove a user from a workspace or organization. The user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address. Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The user to remove from the workspace.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace_gid Globally unique identifier for the workspace or organization.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    removeUserForWorkspace(body, workspace_gid) {

        return this.removeUserForWorkspaceWithHttpInfo(body, workspace_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Update a workspace
     * A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged. Currently the only field that can be modified for a workspace is its name. Returns the complete, updated workspace record.
     * @param {module:model/Object} body The workspace object with all updated properties.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateWorkspaceWithHttpInfo(body, workspace_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling updateWorkspace");
        }
        // verify the required parameter 'workspace_gid' is set
        if (workspace_gid === undefined || workspace_gid === null) {
            throw new Error("Missing the required parameter 'workspace_gid' when calling updateWorkspace");
        }

        let pathParams = {
            'workspace_gid': workspace_gid
        };
        let queryParams = {};
        opts = opts || {};
        queryParams = opts;

        let headerParams = {
            
        };
        let formParams = {
            
        };

        let authNames = ['personalAccessToken'];
        let contentTypes = ['application/json; charset=UTF-8'];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = 'Blob';

        return this.apiClient.callApi(
            '/workspaces/{workspace_gid}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Update a workspace
     * A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged. Currently the only field that can be modified for a workspace is its name. Returns the complete, updated workspace record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The workspace object with all updated properties.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkspaceResponseData}
     */
    updateWorkspace(body, workspace_gid, opts) {

        return this.updateWorkspaceWithHttpInfo(body, workspace_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
