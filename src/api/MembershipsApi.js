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
* Memberships service.
* @module api/MembershipsApi
* @version 3.0.10
*/
export class MembershipsApi {

    /**
    * Constructs a new MembershipsApi. 
    * @alias module:api/MembershipsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a membership
     * Creates a new membership in a &#x60;goal&#x60; or &#x60;project&#x60;. &#x60;Teams&#x60; or &#x60;users&#x60; can be a member of &#x60;goals&#x60; or &#x60;projects&#x60;.  Returns the full record of the newly created membership.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The updated fields for the membership.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createMembershipWithHttpInfo(opts) {
        opts = opts || {};
        let postBody = opts['body'];

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
            '/memberships', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Create a membership
     * Creates a new membership in a &#x60;goal&#x60; or &#x60;project&#x60;. &#x60;Teams&#x60; or &#x60;users&#x60; can be a member of &#x60;goals&#x60; or &#x60;projects&#x60;.  Returns the full record of the newly created membership.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The updated fields for the membership.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MembershipResponseData}
     */
    createMembership(opts) {

        return this.createMembershipWithHttpInfo(opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Delete a membership
     * A specific, existing membership for a &#x60;goal&#x60; or &#x60;project&#x60; can be deleted by making a &#x60;DELETE&#x60; request on the URL for that membership.  Returns an empty data record.
     * @param {String} membership_gid Globally unique identifier for the membership.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteMembershipWithHttpInfo(membership_gid) {
        
        let postBody = null;
        // verify the required parameter 'membership_gid' is set
        if (membership_gid === undefined || membership_gid === null) {
            throw new Error("Missing the required parameter 'membership_gid' when calling deleteMembership");
        }

        let pathParams = {
            'membership_gid': membership_gid
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
            '/memberships/{membership_gid}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Delete a membership
     * A specific, existing membership for a &#x60;goal&#x60; or &#x60;project&#x60; can be deleted by making a &#x60;DELETE&#x60; request on the URL for that membership.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} membership_gid Globally unique identifier for the membership.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteMembership(membership_gid) {

        return this.deleteMembershipWithHttpInfo(membership_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a membership
     * Returns compact &#x60;project_membership&#x60; record for a single membership. &#x60;GET&#x60; only supports project memberships currently
     * @param {String} membership_gid Globally unique identifier for the membership.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getMembershipWithHttpInfo(membership_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'membership_gid' is set
        if (membership_gid === undefined || membership_gid === null) {
            throw new Error("Missing the required parameter 'membership_gid' when calling getMembership");
        }

        let pathParams = {
            'membership_gid': membership_gid
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
            '/memberships/{membership_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a membership
     * Returns compact &#x60;project_membership&#x60; record for a single membership. &#x60;GET&#x60; only supports project memberships currently
     * @param {<&vendorExtensions.x-jsdoc-type>} membership_gid Globally unique identifier for the membership.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectMembershipCompactResponseData}
     */
    getMembership(membership_gid, opts) {

        return this.getMembershipWithHttpInfo(membership_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get multiple memberships
     * Returns compact &#x60;goal_membership&#x60;, &#x60;project_membership&#x60;, or &#x60;portfolio_membership&#x60; records. The possible types for &#x60;parent&#x60; in this request are &#x60;goal&#x60;, &#x60;project&#x60;, or &#x60;portfolio&#x60;. An additional member (user GID or team GID) can be passed in to filter to a specific membership. Teams are not supported for portfolios yet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.parent Globally unique identifier for &#x60;goal&#x60;, &#x60;project&#x60;, or &#x60;portfolio&#x60;.
     * @param {String} opts.member Globally unique identifier for &#x60;team&#x60; or &#x60;user&#x60;.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getMembershipsWithHttpInfo(opts) {
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
                    '/memberships', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/memberships',
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
            '/memberships', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get multiple memberships
     * Returns compact &#x60;goal_membership&#x60;, &#x60;project_membership&#x60;, or &#x60;portfolio_membership&#x60; records. The possible types for &#x60;parent&#x60; in this request are &#x60;goal&#x60;, &#x60;project&#x60;, or &#x60;portfolio&#x60;. An additional member (user GID or team GID) can be passed in to filter to a specific membership. Teams are not supported for portfolios yet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.parent Globally unique identifier for &#x60;goal&#x60;, &#x60;project&#x60;, or &#x60;portfolio&#x60;.
     * @param {String} opts.member Globally unique identifier for &#x60;team&#x60; or &#x60;user&#x60;.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MembershipResponseArray}
     */
    getMemberships(opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getMembershipsWithHttpInfo(opts)
        }

        return this.getMembershipsWithHttpInfo(opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Update a membership
     * An existing membership can be updated by making a &#x60;PUT&#x60; request on the URL for that goal. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged. Memberships on &#x60;goals&#x60; and &#x60;projects&#x60; can be updated.  Returns the full record of the updated membership.
     * @param {module:model/Object} body The membership to update.
     * @param {String} membership_gid Globally unique identifier for the membership.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateMembershipWithHttpInfo(body, membership_gid) {
        
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling updateMembership");
        }
        // verify the required parameter 'membership_gid' is set
        if (membership_gid === undefined || membership_gid === null) {
            throw new Error("Missing the required parameter 'membership_gid' when calling updateMembership");
        }

        let pathParams = {
            'membership_gid': membership_gid
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
            '/memberships/{membership_gid}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Update a membership
     * An existing membership can be updated by making a &#x60;PUT&#x60; request on the URL for that goal. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged. Memberships on &#x60;goals&#x60; and &#x60;projects&#x60; can be updated.  Returns the full record of the updated membership.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The membership to update.
     * @param {<&vendorExtensions.x-jsdoc-type>} membership_gid Globally unique identifier for the membership.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MembershipResponseData}
     */
    updateMembership(body, membership_gid) {

        return this.updateMembershipWithHttpInfo(body, membership_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
