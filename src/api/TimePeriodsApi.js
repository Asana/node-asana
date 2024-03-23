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
* TimePeriods service.
* @module api/TimePeriodsApi
* @version 3.0.3
*/
export class TimePeriodsApi {

    /**
    * Constructs a new TimePeriodsApi. 
    * @alias module:api/TimePeriodsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a time period
     * Returns the full record for a single time period.
     * @param {String} time_period_gid Globally unique identifier for the time period.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTimePeriodWithHttpInfo(time_period_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'time_period_gid' is set
        if (time_period_gid === undefined || time_period_gid === null) {
            throw new Error("Missing the required parameter 'time_period_gid' when calling getTimePeriod");
        }

        let pathParams = {
            'time_period_gid': time_period_gid
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
            '/time_periods/{time_period_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a time period
     * Returns the full record for a single time period.
     * @param {<&vendorExtensions.x-jsdoc-type>} time_period_gid Globally unique identifier for the time period.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TimePeriodResponseData}
     */
    getTimePeriod(time_period_gid, opts) {

        return this.getTimePeriodWithHttpInfo(time_period_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get time periods
     * Returns compact time period records.
     * @param {String} workspace Globally unique identifier for the workspace.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Date} opts.start_on ISO 8601 date string
     * @param {Date} opts.end_on ISO 8601 date string
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTimePeriodsWithHttpInfo(workspace, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'workspace' is set
        if (workspace === undefined || workspace === null) {
            throw new Error("Missing the required parameter 'workspace' when calling getTimePeriods");
        }

        let pathParams = {
            
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
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return Collection.fromApiClient(
                this.apiClient.callApi(
                    '/time_periods', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/time_periods',
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
            '/time_periods', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get time periods
     * Returns compact time period records.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace Globally unique identifier for the workspace.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Date} opts.start_on ISO 8601 date string
     * @param {Date} opts.end_on ISO 8601 date string
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TimePeriodResponseArray}
     */
    getTimePeriods(workspace, opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getTimePeriodsWithHttpInfo(workspace, opts)
        }

        return this.getTimePeriodsWithHttpInfo(workspace, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
