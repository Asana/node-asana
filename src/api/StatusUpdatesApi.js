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
import {StatusUpdateResponseArray} from '../model/StatusUpdateResponseArray';
import {StatusUpdateResponseData} from '../model/StatusUpdateResponseData';
import {StatusUpdatesBody} from '../model/StatusUpdatesBody';

/**
* StatusUpdates service.
* @module api/StatusUpdatesApi
* @version 2.0.0
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
     * Callback function to receive the result of the createStatusForObject operation.
     * @callback moduleapi/StatusUpdatesApi~createStatusForObjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusUpdateResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a status update
     * Creates a new status update on an object. Returns the full record of the newly created status update.
     * @param {module:model/StatusUpdatesBody} body The status update to create.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/StatusUpdatesApi~createStatusForObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createStatusForObject(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createStatusForObject");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'limit': opts['limit'],'offset': opts['offset'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = StatusUpdateResponseData;

      return this.apiClient.callApi(
        '/status_updates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteStatus operation.
     * @callback moduleapi/StatusUpdatesApi~deleteStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a status update
     * Deletes a specific, existing status update.  Returns an empty data record.
     * @param {String} status_update_gid The status update to get.
     * @param {module:api/StatusUpdatesApi~deleteStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deleteStatus(status_update_gid, callback) {
      
      let postBody = null;
      // verify the required parameter 'status_update_gid' is set
      if (status_update_gid === undefined || status_update_gid === null) {
        throw new Error("Missing the required parameter 'status_update_gid' when calling deleteStatus");
      }

      let pathParams = {
        'status_update_gid': status_update_gid
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
        '/status_updates/{status_update_gid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getStatus operation.
     * @callback moduleapi/StatusUpdatesApi~getStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusUpdateResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a status update
     * Returns the complete record for a single status update.
     * @param {String} status_update_gid The status update to get.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/StatusUpdatesApi~getStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getStatus(status_update_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'status_update_gid' is set
      if (status_update_gid === undefined || status_update_gid === null) {
        throw new Error("Missing the required parameter 'status_update_gid' when calling getStatus");
      }

      let pathParams = {
        'status_update_gid': status_update_gid
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
      let returnType = StatusUpdateResponseData;

      return this.apiClient.callApi(
        '/status_updates/{status_update_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getStatusesForObject operation.
     * @callback moduleapi/StatusUpdatesApi~getStatusesForObjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusUpdateResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get status updates from an object
     * Returns the compact status update records for all updates on the object.
     * @param {String} parent Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Date} opts.created_since Only return statuses that have been created since the given time.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/StatusUpdatesApi~getStatusesForObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getStatusesForObject(parent, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'parent' is set
      if (parent === undefined || parent === null) {
        throw new Error("Missing the required parameter 'parent' when calling getStatusesForObject");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'limit': opts['limit'],'offset': opts['offset'],'parent': parent,'created_since': opts['created_since'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = StatusUpdateResponseArray;

      return this.apiClient.callApi(
        '/status_updates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}