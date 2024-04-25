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
* GoalRelationships service.
* @module api/GoalRelationshipsApi
* @version 3.0.5
*/
export class GoalRelationshipsApi {

    /**
    * Constructs a new GoalRelationshipsApi. 
    * @alias module:api/GoalRelationshipsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a supporting goal relationship
     * Creates a goal relationship by adding a supporting resource to a given goal.  Returns the newly created goal relationship record.
     * @param {module:model/Object} body The supporting resource to be added to the goal
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addSupportingRelationshipWithHttpInfo(body, goal_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling addSupportingRelationship");
        }
        // verify the required parameter 'goal_gid' is set
        if (goal_gid === undefined || goal_gid === null) {
            throw new Error("Missing the required parameter 'goal_gid' when calling addSupportingRelationship");
        }

        let pathParams = {
            'goal_gid': goal_gid
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
            '/goals/{goal_gid}/addSupportingRelationship', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Add a supporting goal relationship
     * Creates a goal relationship by adding a supporting resource to a given goal.  Returns the newly created goal relationship record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The supporting resource to be added to the goal
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalRelationshipResponseData}
     */
    addSupportingRelationship(body, goal_gid, opts) {

        return this.addSupportingRelationshipWithHttpInfo(body, goal_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a goal relationship
     * Returns the complete updated goal relationship record for a single goal relationship.
     * @param {String} goal_relationship_gid Globally unique identifier for the goal relationship.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getGoalRelationshipWithHttpInfo(goal_relationship_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'goal_relationship_gid' is set
        if (goal_relationship_gid === undefined || goal_relationship_gid === null) {
            throw new Error("Missing the required parameter 'goal_relationship_gid' when calling getGoalRelationship");
        }

        let pathParams = {
            'goal_relationship_gid': goal_relationship_gid
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
            '/goal_relationships/{goal_relationship_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a goal relationship
     * Returns the complete updated goal relationship record for a single goal relationship.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_relationship_gid Globally unique identifier for the goal relationship.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalRelationshipResponseData}
     */
    getGoalRelationship(goal_relationship_gid, opts) {

        return this.getGoalRelationshipWithHttpInfo(goal_relationship_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get goal relationships
     * Returns compact goal relationship records.
     * @param {String} supported_goal Globally unique identifier for the supported goal in the goal relationship.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {String} opts.resource_subtype If provided, filter to goal relationships with a given resource_subtype.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getGoalRelationshipsWithHttpInfo(supported_goal, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'supported_goal' is set
        if (supported_goal === undefined || supported_goal === null) {
            throw new Error("Missing the required parameter 'supported_goal' when calling getGoalRelationships");
        }

        let pathParams = {
            
        };
        let queryParams = {};
        opts = opts || {};
        queryParams = opts;
        queryParams['supported_goal'] = supported_goal;

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
                    '/goal_relationships', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/goal_relationships',
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
            '/goal_relationships', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get goal relationships
     * Returns compact goal relationship records.
     * @param {<&vendorExtensions.x-jsdoc-type>} supported_goal Globally unique identifier for the supported goal in the goal relationship.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {String} opts.resource_subtype If provided, filter to goal relationships with a given resource_subtype.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalRelationshipResponseArray}
     */
    getGoalRelationships(supported_goal, opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getGoalRelationshipsWithHttpInfo(supported_goal, opts)
        }

        return this.getGoalRelationshipsWithHttpInfo(supported_goal, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Removes a supporting goal relationship
     * Removes a goal relationship for a given parent goal.
     * @param {module:model/Object} body The supporting resource to be removed from the goal
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeSupportingRelationshipWithHttpInfo(body, goal_gid) {
        
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling removeSupportingRelationship");
        }
        // verify the required parameter 'goal_gid' is set
        if (goal_gid === undefined || goal_gid === null) {
            throw new Error("Missing the required parameter 'goal_gid' when calling removeSupportingRelationship");
        }

        let pathParams = {
            'goal_gid': goal_gid
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
            '/goals/{goal_gid}/removeSupportingRelationship', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Removes a supporting goal relationship
     * Removes a goal relationship for a given parent goal.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The supporting resource to be removed from the goal
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    removeSupportingRelationship(body, goal_gid) {

        return this.removeSupportingRelationshipWithHttpInfo(body, goal_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Update a goal relationship
     * An existing goal relationship can be updated by making a PUT request on the URL for that goal relationship. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated goal relationship record.
     * @param {module:model/Object} body The updated fields for the goal relationship.
     * @param {String} goal_relationship_gid Globally unique identifier for the goal relationship.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateGoalRelationshipWithHttpInfo(body, goal_relationship_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling updateGoalRelationship");
        }
        // verify the required parameter 'goal_relationship_gid' is set
        if (goal_relationship_gid === undefined || goal_relationship_gid === null) {
            throw new Error("Missing the required parameter 'goal_relationship_gid' when calling updateGoalRelationship");
        }

        let pathParams = {
            'goal_relationship_gid': goal_relationship_gid
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
            '/goal_relationships/{goal_relationship_gid}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Update a goal relationship
     * An existing goal relationship can be updated by making a PUT request on the URL for that goal relationship. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated goal relationship record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The updated fields for the goal relationship.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_relationship_gid Globally unique identifier for the goal relationship.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalRelationshipResponseData}
     */
    updateGoalRelationship(body, goal_relationship_gid, opts) {

        return this.updateGoalRelationshipWithHttpInfo(body, goal_relationship_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
