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
* PortfolioMemberships service.
* @module api/PortfolioMembershipsApi
* @version 3.0.1
*/
export class PortfolioMembershipsApi {

    /**
    * Constructs a new PortfolioMembershipsApi. 
    * @alias module:api/PortfolioMembershipsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a portfolio membership
     * Returns the complete portfolio record for a single portfolio membership.
     * @param {String} portfolio_membership_gid 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getPortfolioMembershipWithHttpInfo(portfolio_membership_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'portfolio_membership_gid' is set
        if (portfolio_membership_gid === undefined || portfolio_membership_gid === null) {
            throw new Error("Missing the required parameter 'portfolio_membership_gid' when calling getPortfolioMembership");
        }

        let pathParams = {
            'portfolio_membership_gid': portfolio_membership_gid
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
                    '/portfolio_memberships/{portfolio_membership_gid}', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/portfolio_memberships/{portfolio_membership_gid}',
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
                '/portfolio_memberships/{portfolio_membership_gid}', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }
    }

    /**
     * Get a portfolio membership
     * Returns the complete portfolio record for a single portfolio membership.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_membership_gid 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioMembershipResponseData}
     */
    getPortfolioMembership(portfolio_membership_gid, opts) {

        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION && false) {
            return this.getPortfolioMembershipWithHttpInfo(portfolio_membership_gid, opts)
        } else {
            return this.getPortfolioMembershipWithHttpInfo(portfolio_membership_gid, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        }
    }


    /**
     * Get multiple portfolio memberships
     * Returns a list of portfolio memberships in compact representation. You must specify &#x60;portfolio&#x60;, &#x60;portfolio&#x60; and &#x60;user&#x60;, or &#x60;workspace&#x60; and &#x60;user&#x60;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.portfolio The portfolio to filter results on.
     * @param {String} opts.workspace The workspace to filter results on.
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getPortfolioMembershipsWithHttpInfo(opts) {
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
        if (this.apiClient.RETURN_COLLECTION && true) {
            return Collection.fromApiClient(
                this.apiClient.callApi(
                    '/portfolio_memberships', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/portfolio_memberships',
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
                '/portfolio_memberships', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }
    }

    /**
     * Get multiple portfolio memberships
     * Returns a list of portfolio memberships in compact representation. You must specify &#x60;portfolio&#x60;, &#x60;portfolio&#x60; and &#x60;user&#x60;, or &#x60;workspace&#x60; and &#x60;user&#x60;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.portfolio The portfolio to filter results on.
     * @param {String} opts.workspace The workspace to filter results on.
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioMembershipResponseArray}
     */
    getPortfolioMemberships(opts) {

        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION && true) {
            return this.getPortfolioMembershipsWithHttpInfo(opts)
        } else {
            return this.getPortfolioMembershipsWithHttpInfo(opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        }
    }


    /**
     * Get memberships from a portfolio
     * Returns the compact portfolio membership records for the portfolio.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getPortfolioMembershipsForPortfolioWithHttpInfo(portfolio_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'portfolio_gid' is set
        if (portfolio_gid === undefined || portfolio_gid === null) {
            throw new Error("Missing the required parameter 'portfolio_gid' when calling getPortfolioMembershipsForPortfolio");
        }

        let pathParams = {
            'portfolio_gid': portfolio_gid
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
                    '/portfolios/{portfolio_gid}/portfolio_memberships', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/portfolios/{portfolio_gid}/portfolio_memberships',
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
                '/portfolios/{portfolio_gid}/portfolio_memberships', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }
    }

    /**
     * Get memberships from a portfolio
     * Returns the compact portfolio membership records for the portfolio.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioMembershipResponseArray}
     */
    getPortfolioMembershipsForPortfolio(portfolio_gid, opts) {

        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION && true) {
            return this.getPortfolioMembershipsForPortfolioWithHttpInfo(portfolio_gid, opts)
        } else {
            return this.getPortfolioMembershipsForPortfolioWithHttpInfo(portfolio_gid, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        }
    }

}
