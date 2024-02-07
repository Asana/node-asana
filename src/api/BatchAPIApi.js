/*
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.52
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
var Collection = require('../utils/collection');

/**
* BatchAPI service.
* @module api/BatchAPIApi
* @version 3.0.2
*/
export class BatchAPIApi {

    /**
    * Constructs a new BatchAPIApi. 
    * @alias module:api/BatchAPIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Submit parallel requests
     * Make multiple requests in parallel to Asana&#x27;s API.
     * @param {module:model/Object} body The requests to batch together via the Batch API.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createBatchRequestWithHttpInfo(body, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling createBatchRequest");
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

        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION && true) {
            return Collection.fromApiClient(
                this.apiClient.callApi(
                    '/batch', 'POST',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/batch',
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
                '/batch', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }
    }

    /**
     * Submit parallel requests
     * Make multiple requests in parallel to Asana&#x27;s API.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The requests to batch together via the Batch API.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchResponseArray}
     */
    createBatchRequest(body, opts) {

        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION && true) {
            return this.createBatchRequestWithHttpInfo(body, opts)
        } else {
            return this.createBatchRequestWithHttpInfo(body, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        }
    }

}
