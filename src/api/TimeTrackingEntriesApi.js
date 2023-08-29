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
import {EmptyResponseData} from '../model/EmptyResponseData';
import {ErrorResponse} from '../model/ErrorResponse';
import {TaskGidTimeTrackingEntriesBody} from '../model/TaskGidTimeTrackingEntriesBody';
import {TimeTrackingEntriesTimeTrackingEntryGidBody} from '../model/TimeTrackingEntriesTimeTrackingEntryGidBody';
import {TimeTrackingEntryBaseData} from '../model/TimeTrackingEntryBaseData';
import {TimeTrackingEntryCompactArray} from '../model/TimeTrackingEntryCompactArray';

/**
* TimeTrackingEntries service.
* @module api/TimeTrackingEntriesApi
* @version 2.0.5
*/
export class TimeTrackingEntriesApi {

    /**
    * Constructs a new TimeTrackingEntriesApi. 
    * @alias module:api/TimeTrackingEntriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createTimeTrackingEntry operation.
     * @callback moduleapi/TimeTrackingEntriesApi~createTimeTrackingEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeTrackingEntryBaseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a time tracking entry
     * Creates a time tracking entry on a given task.  Returns the record of the newly created time tracking entry.
     * @param {module:model/TaskGidTimeTrackingEntriesBody} body Information about the time tracking entry.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TimeTrackingEntriesApi~createTimeTrackingEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createTimeTrackingEntry(body, task_gid, opts, callback) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling createTimeTrackingEntry");
        }
        // verify the required parameter 'task_gid' is set
        if (task_gid === undefined || task_gid === null) {
            throw new Error("Missing the required parameter 'task_gid' when calling createTimeTrackingEntry");
        }

        let pathParams = {
            'task_gid': task_gid
        };
        let queryParams = {
            'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
        };
        let headerParams = {
            
        };
        let formParams = {
            
        };

        let authNames = ['oauth2'];
        let contentTypes = ['application/json; charset=UTF-8'];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = TimeTrackingEntryBaseData;

        return this.apiClient.callApi(
            '/tasks/{task_gid}/time_tracking_entries', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the deleteTimeTrackingEntry operation.
     * @callback moduleapi/TimeTrackingEntriesApi~deleteTimeTrackingEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a time tracking entry
     * A specific, existing time tracking entry can be deleted by making a &#x60;DELETE&#x60; request on the URL for that time tracking entry.  Returns an empty data record.
     * @param {String} time_tracking_entry_gid Globally unique identifier for the time tracking entry.
     * @param {module:api/TimeTrackingEntriesApi~deleteTimeTrackingEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deleteTimeTrackingEntry(time_tracking_entry_gid, callback) {
        
        let postBody = null;
        // verify the required parameter 'time_tracking_entry_gid' is set
        if (time_tracking_entry_gid === undefined || time_tracking_entry_gid === null) {
            throw new Error("Missing the required parameter 'time_tracking_entry_gid' when calling deleteTimeTrackingEntry");
        }

        let pathParams = {
            'time_tracking_entry_gid': time_tracking_entry_gid
        };
        let queryParams = {
            
        };
        let headerParams = {
            
        };
        let formParams = {
            
        };

        let authNames = ['oauth2'];
        let contentTypes = [];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = EmptyResponseData;

        return this.apiClient.callApi(
            '/time_tracking_entries/{time_tracking_entry_gid}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the getTimeTrackingEntriesForTask operation.
     * @callback moduleapi/TimeTrackingEntriesApi~getTimeTrackingEntriesForTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeTrackingEntryCompactArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get time tracking entries for a task
     * Returns time tracking entries for a given task.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TimeTrackingEntriesApi~getTimeTrackingEntriesForTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTimeTrackingEntriesForTask(task_gid, opts, callback) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'task_gid' is set
        if (task_gid === undefined || task_gid === null) {
            throw new Error("Missing the required parameter 'task_gid' when calling getTimeTrackingEntriesForTask");
        }

        let pathParams = {
            'task_gid': task_gid
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
        let returnType = TimeTrackingEntryCompactArray;

        return this.apiClient.callApi(
            '/tasks/{task_gid}/time_tracking_entries', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the getTimeTrackingEntry operation.
     * @callback moduleapi/TimeTrackingEntriesApi~getTimeTrackingEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeTrackingEntryBaseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a time tracking entry
     * Returns the complete time tracking entry record for a single time tracking entry.
     * @param {String} time_tracking_entry_gid Globally unique identifier for the time tracking entry.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TimeTrackingEntriesApi~getTimeTrackingEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTimeTrackingEntry(time_tracking_entry_gid, opts, callback) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'time_tracking_entry_gid' is set
        if (time_tracking_entry_gid === undefined || time_tracking_entry_gid === null) {
            throw new Error("Missing the required parameter 'time_tracking_entry_gid' when calling getTimeTrackingEntry");
        }

        let pathParams = {
            'time_tracking_entry_gid': time_tracking_entry_gid
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
        let returnType = TimeTrackingEntryBaseData;

        return this.apiClient.callApi(
            '/time_tracking_entries/{time_tracking_entry_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the updateTimeTrackingEntry operation.
     * @callback moduleapi/TimeTrackingEntriesApi~updateTimeTrackingEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeTrackingEntryBaseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a time tracking entry
     * A specific, existing time tracking entry can be updated by making a &#x60;PUT&#x60; request on the URL for that time tracking entry. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated time tracking entry record.
     * @param {module:model/TimeTrackingEntriesTimeTrackingEntryGidBody} body The updated fields for the time tracking entry.
     * @param {String} time_tracking_entry_gid Globally unique identifier for the time tracking entry.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/TimeTrackingEntriesApi~updateTimeTrackingEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateTimeTrackingEntry(body, time_tracking_entry_gid, opts, callback) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling updateTimeTrackingEntry");
        }
        // verify the required parameter 'time_tracking_entry_gid' is set
        if (time_tracking_entry_gid === undefined || time_tracking_entry_gid === null) {
            throw new Error("Missing the required parameter 'time_tracking_entry_gid' when calling updateTimeTrackingEntry");
        }

        let pathParams = {
            'time_tracking_entry_gid': time_tracking_entry_gid
        };
        let queryParams = {
            'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
        };
        let headerParams = {
            
        };
        let formParams = {
            
        };

        let authNames = ['oauth2'];
        let contentTypes = ['application/json; charset=UTF-8'];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = TimeTrackingEntryBaseData;

        return this.apiClient.callApi(
            '/time_tracking_entries/{time_tracking_entry_gid}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }

}
