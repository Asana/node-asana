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
* TaskTemplates service.
* @module api/TaskTemplatesApi
* @version 3.0.9
*/
export class TaskTemplatesApi {

    /**
    * Constructs a new TaskTemplatesApi. 
    * @alias module:api/TaskTemplatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete a task template
     * A specific, existing task template can be deleted by making a DELETE request on the URL for that task template. Returns an empty data record.
     * @param {String} task_template_gid Globally unique identifier for the task template.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteTaskTemplateWithHttpInfo(task_template_gid) {
        
        let postBody = null;
        // verify the required parameter 'task_template_gid' is set
        if (task_template_gid === undefined || task_template_gid === null) {
            throw new Error("Missing the required parameter 'task_template_gid' when calling deleteTaskTemplate");
        }

        let pathParams = {
            'task_template_gid': task_template_gid
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
            '/task_templates/{task_template_gid}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Delete a task template
     * A specific, existing task template can be deleted by making a DELETE request on the URL for that task template. Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_template_gid Globally unique identifier for the task template.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteTaskTemplate(task_template_gid) {

        return this.deleteTaskTemplateWithHttpInfo(task_template_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a task template
     * Returns the complete task template record for a single task template.
     * @param {String} task_template_gid Globally unique identifier for the task template.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTaskTemplateWithHttpInfo(task_template_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'task_template_gid' is set
        if (task_template_gid === undefined || task_template_gid === null) {
            throw new Error("Missing the required parameter 'task_template_gid' when calling getTaskTemplate");
        }

        let pathParams = {
            'task_template_gid': task_template_gid
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
            '/task_templates/{task_template_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a task template
     * Returns the complete task template record for a single task template.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_template_gid Globally unique identifier for the task template.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskTemplateResponseData}
     */
    getTaskTemplate(task_template_gid, opts) {

        return this.getTaskTemplateWithHttpInfo(task_template_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get multiple task templates
     * Returns the compact task template records for some filtered set of task templates. You must specify a &#x60;project&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {String} opts.project The project to filter task templates on.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTaskTemplatesWithHttpInfo(opts) {
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
                    '/task_templates', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/task_templates',
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
            '/task_templates', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get multiple task templates
     * Returns the compact task template records for some filtered set of task templates. You must specify a &#x60;project&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {String} opts.project The project to filter task templates on.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskTemplateResponseArray}
     */
    getTaskTemplates(opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getTaskTemplatesWithHttpInfo(opts)
        }

        return this.getTaskTemplatesWithHttpInfo(opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Instantiate a task from a task template
     * Creates and returns a job that will asynchronously handle the task instantiation.
     * @param {String} task_template_gid Globally unique identifier for the task template.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body Describes the inputs used for instantiating a task - the task&#x27;s name.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    instantiateTaskWithHttpInfo(task_template_gid, opts) {
        opts = opts || {};
        let postBody = opts['body'];
        // verify the required parameter 'task_template_gid' is set
        if (task_template_gid === undefined || task_template_gid === null) {
            throw new Error("Missing the required parameter 'task_template_gid' when calling instantiateTask");
        }

        let pathParams = {
            'task_template_gid': task_template_gid
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
            '/task_templates/{task_template_gid}/instantiateTask', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Instantiate a task from a task template
     * Creates and returns a job that will asynchronously handle the task instantiation.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_template_gid Globally unique identifier for the task template.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body Describes the inputs used for instantiating a task - the task&#x27;s name.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobResponseData}
     */
    instantiateTask(task_template_gid, opts) {

        return this.instantiateTaskWithHttpInfo(task_template_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
