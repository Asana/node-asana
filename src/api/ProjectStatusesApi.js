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
var Collection = require('../utils/collection');

/**
* ProjectStatuses service.
* @module api/ProjectStatusesApi
* @version 3.0.0
*/
export class ProjectStatusesApi {

    /**
    * Constructs a new ProjectStatusesApi. 
    * @alias module:api/ProjectStatusesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a project status
     * *Deprecated: new integrations should prefer the &#x60;/status_updates&#x60; route.*  Creates a new status update on the project.  Returns the full record of the newly created project status update.
     * @param {module:model/Object} body The project status to create.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createProjectStatusForProjectWithHttpInfo(body, project_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling createProjectStatusForProject");
        }
        // verify the required parameter 'project_gid' is set
        if (project_gid === undefined || project_gid === null) {
            throw new Error("Missing the required parameter 'project_gid' when calling createProjectStatusForProject");
        }

        let pathParams = {
            'project_gid': project_gid
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

        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION && false) {
            return Collection.fromApiClient(
                this.apiClient.callApi(
                    '/projects/{project_gid}/project_statuses', 'POST',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/projects/{project_gid}/project_statuses',
                    'httpMethod': 'POST',
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
        } else {
            return this.apiClient.callApi(
                '/projects/{project_gid}/project_statuses', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }
    }

    /**
     * Create a project status
     * *Deprecated: new integrations should prefer the &#x60;/status_updates&#x60; route.*  Creates a new status update on the project.  Returns the full record of the newly created project status update.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The project status to create.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectStatusResponseData}
     */
    createProjectStatusForProject(body, project_gid, opts) {

        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION && false) {
            return this.createProjectStatusForProjectWithHttpInfo(body, project_gid, opts)
        } else {
            return this.createProjectStatusForProjectWithHttpInfo(body, project_gid, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        }
    }


    /**
     * Delete a project status
     * *Deprecated: new integrations should prefer the &#x60;/status_updates/{status_gid}&#x60; route.*  Deletes a specific, existing project status update.  Returns an empty data record.
     * @param {String} project_status_gid The project status update to get.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteProjectStatusWithHttpInfo(project_status_gid) {
        
        let postBody = null;
        // verify the required parameter 'project_status_gid' is set
        if (project_status_gid === undefined || project_status_gid === null) {
            throw new Error("Missing the required parameter 'project_status_gid' when calling deleteProjectStatus");
        }

        let pathParams = {
            'project_status_gid': project_status_gid
        };
        let queryParams = {};

        let headerParams = {
            
        };
        let formParams = {
            
        };

        let authNames = ['personalAccessToken'];
        let contentTypes = [];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = 'Blob';

        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION && false) {
            return Collection.fromApiClient(
                this.apiClient.callApi(
                    '/project_statuses/{project_status_gid}', 'DELETE',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/project_statuses/{project_status_gid}',
                    'httpMethod': 'DELETE',
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
        } else {
            return this.apiClient.callApi(
                '/project_statuses/{project_status_gid}', 'DELETE',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }
    }

    /**
     * Delete a project status
     * *Deprecated: new integrations should prefer the &#x60;/status_updates/{status_gid}&#x60; route.*  Deletes a specific, existing project status update.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_status_gid The project status update to get.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteProjectStatus(project_status_gid) {

        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION && false) {
            return this.deleteProjectStatusWithHttpInfo(project_status_gid)
        } else {
            return this.deleteProjectStatusWithHttpInfo(project_status_gid)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        }
    }


    /**
     * Get a project status
     * *Deprecated: new integrations should prefer the &#x60;/status_updates/{status_gid}&#x60; route.*  Returns the complete record for a single status update.
     * @param {String} project_status_gid The project status update to get.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectStatusWithHttpInfo(project_status_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'project_status_gid' is set
        if (project_status_gid === undefined || project_status_gid === null) {
            throw new Error("Missing the required parameter 'project_status_gid' when calling getProjectStatus");
        }

        let pathParams = {
            'project_status_gid': project_status_gid
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
        if (this.apiClient.RETURN_COLLECTION && false) {
            return Collection.fromApiClient(
                this.apiClient.callApi(
                    '/project_statuses/{project_status_gid}', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/project_statuses/{project_status_gid}',
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
        } else {
            return this.apiClient.callApi(
                '/project_statuses/{project_status_gid}', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }
    }

    /**
     * Get a project status
     * *Deprecated: new integrations should prefer the &#x60;/status_updates/{status_gid}&#x60; route.*  Returns the complete record for a single status update.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_status_gid The project status update to get.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectStatusResponseData}
     */
    getProjectStatus(project_status_gid, opts) {

        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION && false) {
            return this.getProjectStatusWithHttpInfo(project_status_gid, opts)
        } else {
            return this.getProjectStatusWithHttpInfo(project_status_gid, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        }
    }


    /**
     * Get statuses from a project
     * *Deprecated: new integrations should prefer the &#x60;/status_updates&#x60; route.*  Returns the compact project status update records for all updates on the project.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectStatusesForProjectWithHttpInfo(project_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'project_gid' is set
        if (project_gid === undefined || project_gid === null) {
            throw new Error("Missing the required parameter 'project_gid' when calling getProjectStatusesForProject");
        }

        let pathParams = {
            'project_gid': project_gid
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
        if (this.apiClient.RETURN_COLLECTION && true) {
            return Collection.fromApiClient(
                this.apiClient.callApi(
                    '/projects/{project_gid}/project_statuses', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/projects/{project_gid}/project_statuses',
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
        } else {
            return this.apiClient.callApi(
                '/projects/{project_gid}/project_statuses', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }
    }

    /**
     * Get statuses from a project
     * *Deprecated: new integrations should prefer the &#x60;/status_updates&#x60; route.*  Returns the compact project status update records for all updates on the project.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectStatusResponseArray}
     */
    getProjectStatusesForProject(project_gid, opts) {

        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION && true) {
            return this.getProjectStatusesForProjectWithHttpInfo(project_gid, opts)
        } else {
            return this.getProjectStatusesForProjectWithHttpInfo(project_gid, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        }
    }

}
