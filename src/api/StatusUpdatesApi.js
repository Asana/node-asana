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
* StatusUpdates service.
* @module api/StatusUpdatesApi
* @version 3.0.5
*/
export class StatusUpdatesApi {

    /**
    * Constructs a new StatusUpdatesApi. 
    * @alias module:api/StatusUpdatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a status update
     * Creates a new status update on an object. Returns the full record of the newly created status update.
     * @param {module:model/Object} body The status update to create.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createStatusForObjectWithHttpInfo(body, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling createStatusForObject");
        }

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
        let contentTypes = ['application/json; charset=UTF-8'];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = 'Blob';

        return this.apiClient.callApi(
            '/status_updates', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Create a status update
     * Creates a new status update on an object. Returns the full record of the newly created status update.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The status update to create.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StatusUpdateResponseData}
     */
    createStatusForObject(body, opts) {

        return this.createStatusForObjectWithHttpInfo(body, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Delete a status update
     * Deletes a specific, existing status update.  Returns an empty data record.
     * @param {String} status_update_gid The status update to get.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteStatusWithHttpInfo(status_update_gid) {
        
        let postBody = null;
        // verify the required parameter 'status_update_gid' is set
        if (status_update_gid === undefined || status_update_gid === null) {
            throw new Error("Missing the required parameter 'status_update_gid' when calling deleteStatus");
        }

        let pathParams = {
            'status_update_gid': status_update_gid
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

        return this.apiClient.callApi(
            '/status_updates/{status_update_gid}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Delete a status update
     * Deletes a specific, existing status update.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} status_update_gid The status update to get.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteStatus(status_update_gid) {

        return this.deleteStatusWithHttpInfo(status_update_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a status update
     * Returns the complete record for a single status update.
     * @param {String} status_update_gid The status update to get.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getStatusWithHttpInfo(status_update_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'status_update_gid' is set
        if (status_update_gid === undefined || status_update_gid === null) {
            throw new Error("Missing the required parameter 'status_update_gid' when calling getStatus");
        }

        let pathParams = {
            'status_update_gid': status_update_gid
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
            '/status_updates/{status_update_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a status update
     * Returns the complete record for a single status update.
     * @param {<&vendorExtensions.x-jsdoc-type>} status_update_gid The status update to get.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StatusUpdateResponseData}
     */
    getStatus(status_update_gid, opts) {

        return this.getStatusWithHttpInfo(status_update_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get status updates from an object
     * Returns the compact status update records for all updates on the object.
     * @param {String} parent Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Date} opts.created_since Only return statuses that have been created since the given time.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getStatusesForObjectWithHttpInfo(parent, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'parent' is set
        if (parent === undefined || parent === null) {
            throw new Error("Missing the required parameter 'parent' when calling getStatusesForObject");
        }

        let pathParams = {
            
        };
        let queryParams = {};
        opts = opts || {};
        queryParams = opts;
        queryParams['parent'] = parent;

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
                    '/status_updates', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/status_updates',
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
            '/status_updates', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get status updates from an object
     * Returns the compact status update records for all updates on the object.
     * @param {<&vendorExtensions.x-jsdoc-type>} parent Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Date} opts.created_since Only return statuses that have been created since the given time.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StatusUpdateResponseArray}
     */
    getStatusesForObject(parent, opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getStatusesForObjectWithHttpInfo(parent, opts)
        }

        return this.getStatusesForObjectWithHttpInfo(parent, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
