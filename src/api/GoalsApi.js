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
* Goals service.
* @module api/GoalsApi
* @version 3.0.7
*/
export class GoalsApi {

    /**
    * Constructs a new GoalsApi. 
    * @alias module:api/GoalsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a collaborator to a goal
     * Adds followers to a goal. Returns the goal the followers were added to. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     * @param {module:model/Object} body The followers to be added as collaborators
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addFollowersWithHttpInfo(body, goal_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling addFollowers");
        }
        // verify the required parameter 'goal_gid' is set
        if (goal_gid === undefined || goal_gid === null) {
            throw new Error("Missing the required parameter 'goal_gid' when calling addFollowers");
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
            '/goals/{goal_gid}/addFollowers', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Add a collaborator to a goal
     * Adds followers to a goal. Returns the goal the followers were added to. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The followers to be added as collaborators
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseData}
     */
    addFollowers(body, goal_gid, opts) {

        return this.addFollowersWithHttpInfo(body, goal_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Create a goal
     * Creates a new goal in a workspace or team.  Returns the full record of the newly created goal.
     * @param {module:model/Object} body The goal to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createGoalWithHttpInfo(body, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling createGoal");
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
            '/goals', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Create a goal
     * Creates a new goal in a workspace or team.  Returns the full record of the newly created goal.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The goal to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseData}
     */
    createGoal(body, opts) {

        return this.createGoalWithHttpInfo(body, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Create a goal metric
     * Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.
     * @param {module:model/Object} body The goal metric to create.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createGoalMetricWithHttpInfo(body, goal_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling createGoalMetric");
        }
        // verify the required parameter 'goal_gid' is set
        if (goal_gid === undefined || goal_gid === null) {
            throw new Error("Missing the required parameter 'goal_gid' when calling createGoalMetric");
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
            '/goals/{goal_gid}/setMetric', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Create a goal metric
     * Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The goal metric to create.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseData}
     */
    createGoalMetric(body, goal_gid, opts) {

        return this.createGoalMetricWithHttpInfo(body, goal_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Delete a goal
     * A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.  Returns an empty data record.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteGoalWithHttpInfo(goal_gid) {
        
        let postBody = null;
        // verify the required parameter 'goal_gid' is set
        if (goal_gid === undefined || goal_gid === null) {
            throw new Error("Missing the required parameter 'goal_gid' when calling deleteGoal");
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
        let contentTypes = [];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = 'Blob';

        return this.apiClient.callApi(
            '/goals/{goal_gid}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Delete a goal
     * A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteGoal(goal_gid) {

        return this.deleteGoalWithHttpInfo(goal_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a goal
     * Returns the complete goal record for a single goal.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getGoalWithHttpInfo(goal_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'goal_gid' is set
        if (goal_gid === undefined || goal_gid === null) {
            throw new Error("Missing the required parameter 'goal_gid' when calling getGoal");
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
        let contentTypes = [];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = 'Blob';

        return this.apiClient.callApi(
            '/goals/{goal_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a goal
     * Returns the complete goal record for a single goal.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseData}
     */
    getGoal(goal_gid, opts) {

        return this.getGoalWithHttpInfo(goal_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get goals
     * Returns compact goal records.
     * @param {Object} opts Optional parameters
     * @param {String} opts.portfolio Globally unique identifier for supporting portfolio.
     * @param {String} opts.project Globally unique identifier for supporting project.
     * @param {String} opts.task Globally unique identifier for supporting task.
     * @param {Boolean} opts.is_workspace_level Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter.
     * @param {String} opts.team Globally unique identifier for the team.
     * @param {String} opts.workspace Globally unique identifier for the workspace.
     * @param {Array.<String>} opts.time_periods Globally unique identifiers for the time periods.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getGoalsWithHttpInfo(opts) {
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
                    '/goals', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/goals',
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
            '/goals', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get goals
     * Returns compact goal records.
     * @param {Object} opts Optional parameters
     * @param {String} opts.portfolio Globally unique identifier for supporting portfolio.
     * @param {String} opts.project Globally unique identifier for supporting project.
     * @param {String} opts.task Globally unique identifier for supporting task.
     * @param {Boolean} opts.is_workspace_level Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter.
     * @param {String} opts.team Globally unique identifier for the team.
     * @param {String} opts.workspace Globally unique identifier for the workspace.
     * @param {Array.<String>} opts.time_periods Globally unique identifiers for the time periods.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseArray}
     */
    getGoals(opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getGoalsWithHttpInfo(opts)
        }

        return this.getGoalsWithHttpInfo(opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get parent goals from a goal
     * Returns a compact representation of all of the parent goals of a goal.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getParentGoalsForGoalWithHttpInfo(goal_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'goal_gid' is set
        if (goal_gid === undefined || goal_gid === null) {
            throw new Error("Missing the required parameter 'goal_gid' when calling getParentGoalsForGoal");
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
        let contentTypes = [];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = 'Blob';
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return Collection.fromApiClient(
                this.apiClient.callApi(
                    '/goals/{goal_gid}/parentGoals', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/goals/{goal_gid}/parentGoals',
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
            '/goals/{goal_gid}/parentGoals', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get parent goals from a goal
     * Returns a compact representation of all of the parent goals of a goal.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseArray}
     */
    getParentGoalsForGoal(goal_gid, opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getParentGoalsForGoalWithHttpInfo(goal_gid, opts)
        }

        return this.getParentGoalsForGoalWithHttpInfo(goal_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Remove a collaborator from a goal
     * Removes followers from a goal. Returns the goal the followers were removed from. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     * @param {module:model/Object} body The followers to be removed as collaborators
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeFollowersWithHttpInfo(body, goal_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling removeFollowers");
        }
        // verify the required parameter 'goal_gid' is set
        if (goal_gid === undefined || goal_gid === null) {
            throw new Error("Missing the required parameter 'goal_gid' when calling removeFollowers");
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
            '/goals/{goal_gid}/removeFollowers', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Remove a collaborator from a goal
     * Removes followers from a goal. Returns the goal the followers were removed from. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The followers to be removed as collaborators
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseData}
     */
    removeFollowers(body, goal_gid, opts) {

        return this.removeFollowersWithHttpInfo(body, goal_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Update a goal
     * An existing goal can be updated by making a PUT request on the URL for that goal. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated goal record.
     * @param {module:model/Object} body The updated fields for the goal.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateGoalWithHttpInfo(body, goal_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling updateGoal");
        }
        // verify the required parameter 'goal_gid' is set
        if (goal_gid === undefined || goal_gid === null) {
            throw new Error("Missing the required parameter 'goal_gid' when calling updateGoal");
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
            '/goals/{goal_gid}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Update a goal
     * An existing goal can be updated by making a PUT request on the URL for that goal. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated goal record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The updated fields for the goal.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseData}
     */
    updateGoal(body, goal_gid, opts) {

        return this.updateGoalWithHttpInfo(body, goal_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Update a goal metric
     * Updates a goal&#x27;s existing metric&#x27;s &#x60;current_number_value&#x60; if one exists, otherwise responds with a 400 status code.  Returns the complete updated goal metric record.
     * @param {module:model/Object} body The updated fields for the goal metric.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateGoalMetricWithHttpInfo(body, goal_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling updateGoalMetric");
        }
        // verify the required parameter 'goal_gid' is set
        if (goal_gid === undefined || goal_gid === null) {
            throw new Error("Missing the required parameter 'goal_gid' when calling updateGoalMetric");
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
            '/goals/{goal_gid}/setMetricCurrentValue', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Update a goal metric
     * Updates a goal&#x27;s existing metric&#x27;s &#x60;current_number_value&#x60; if one exists, otherwise responds with a 400 status code.  Returns the complete updated goal metric record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The updated fields for the goal metric.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseData}
     */
    updateGoalMetric(body, goal_gid, opts) {

        return this.updateGoalMetricWithHttpInfo(body, goal_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
