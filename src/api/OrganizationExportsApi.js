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
* OrganizationExports service.
* @module api/OrganizationExportsApi
* @version 3.0.2
*/
export class OrganizationExportsApi {

    /**
    * Constructs a new OrganizationExportsApi. 
    * @alias module:api/OrganizationExportsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create an organization export request
     * This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.
     * @param {module:model/Object} body The organization to export.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createOrganizationExportWithHttpInfo(body, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling createOrganizationExport");
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
        if (this.apiClient.RETURN_COLLECTION && false) {
            return Collection.fromApiClient(
                this.apiClient.callApi(
                    '/organization_exports', 'POST',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/organization_exports',
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
                '/organization_exports', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }
    }

    /**
     * Create an organization export request
     * This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The organization to export.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationExportResponseData}
     */
    createOrganizationExport(body, opts) {

        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION && false) {
            return this.createOrganizationExportWithHttpInfo(body, opts)
        } else {
            return this.createOrganizationExportWithHttpInfo(body, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        }
    }


    /**
     * Get details on an org export request
     * Returns details of a previously-requested Organization export.
     * @param {String} organization_export_gid Globally unique identifier for the organization export.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getOrganizationExportWithHttpInfo(organization_export_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'organization_export_gid' is set
        if (organization_export_gid === undefined || organization_export_gid === null) {
            throw new Error("Missing the required parameter 'organization_export_gid' when calling getOrganizationExport");
        }

        let pathParams = {
            'organization_export_gid': organization_export_gid
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
                    '/organization_exports/{organization_export_gid}', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/organization_exports/{organization_export_gid}',
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
                '/organization_exports/{organization_export_gid}', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }
    }

    /**
     * Get details on an org export request
     * Returns details of a previously-requested Organization export.
     * @param {<&vendorExtensions.x-jsdoc-type>} organization_export_gid Globally unique identifier for the organization export.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationExportResponseData}
     */
    getOrganizationExport(organization_export_gid, opts) {

        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION && false) {
            return this.getOrganizationExportWithHttpInfo(organization_export_gid, opts)
        } else {
            return this.getOrganizationExportWithHttpInfo(organization_export_gid, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        }
    }

}
