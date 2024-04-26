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
* Teams service.
* @module api/TeamsApi
* @version 3.0.6
*/
export class TeamsApi {

    /**
    * Constructs a new TeamsApi. 
    * @alias module:api/TeamsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a user to a team
     * The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.  Returns the complete team membership record for the newly added user.
     * @param {module:model/Object} body The user to add to the team.
     * @param {String} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addUserForTeamWithHttpInfo(body, team_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling addUserForTeam");
        }
        // verify the required parameter 'team_gid' is set
        if (team_gid === undefined || team_gid === null) {
            throw new Error("Missing the required parameter 'team_gid' when calling addUserForTeam");
        }

        let pathParams = {
            'team_gid': team_gid
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
            '/teams/{team_gid}/addUser', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Add a user to a team
     * The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.  Returns the complete team membership record for the newly added user.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The user to add to the team.
     * @param {<&vendorExtensions.x-jsdoc-type>} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TeamMembershipResponseData}
     */
    addUserForTeam(body, team_gid, opts) {

        return this.addUserForTeamWithHttpInfo(body, team_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Create a team
     * Creates a team within the current workspace.
     * @param {module:model/Object} body The team to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createTeamWithHttpInfo(body, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling createTeam");
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
            '/teams', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Create a team
     * Creates a team within the current workspace.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The team to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TeamResponseData}
     */
    createTeam(body, opts) {

        return this.createTeamWithHttpInfo(body, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a team
     * Returns the full record for a single team.
     * @param {String} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTeamWithHttpInfo(team_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'team_gid' is set
        if (team_gid === undefined || team_gid === null) {
            throw new Error("Missing the required parameter 'team_gid' when calling getTeam");
        }

        let pathParams = {
            'team_gid': team_gid
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
            '/teams/{team_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a team
     * Returns the full record for a single team.
     * @param {<&vendorExtensions.x-jsdoc-type>} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TeamResponseData}
     */
    getTeam(team_gid, opts) {

        return this.getTeamWithHttpInfo(team_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get teams for a user
     * Returns the compact records for all teams to which the given user is assigned.
     * @param {String} user_gid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {String} organization The workspace or organization to filter teams on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTeamsForUserWithHttpInfo(user_gid, organization, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'user_gid' is set
        if (user_gid === undefined || user_gid === null) {
            throw new Error("Missing the required parameter 'user_gid' when calling getTeamsForUser");
        }
        // verify the required parameter 'organization' is set
        if (organization === undefined || organization === null) {
            throw new Error("Missing the required parameter 'organization' when calling getTeamsForUser");
        }

        let pathParams = {
            'user_gid': user_gid
        };
        let queryParams = {};
        opts = opts || {};
        queryParams = opts;
        queryParams['organization'] = organization;

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
                    '/users/{user_gid}/teams', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/users/{user_gid}/teams',
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
            '/users/{user_gid}/teams', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get teams for a user
     * Returns the compact records for all teams to which the given user is assigned.
     * @param {<&vendorExtensions.x-jsdoc-type>} user_gid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {<&vendorExtensions.x-jsdoc-type>} organization The workspace or organization to filter teams on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TeamResponseArray}
     */
    getTeamsForUser(user_gid, organization, opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getTeamsForUserWithHttpInfo(user_gid, organization, opts)
        }

        return this.getTeamsForUserWithHttpInfo(user_gid, organization, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get teams in a workspace
     * Returns the compact records for all teams in the workspace visible to the authorized user.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTeamsForWorkspaceWithHttpInfo(workspace_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'workspace_gid' is set
        if (workspace_gid === undefined || workspace_gid === null) {
            throw new Error("Missing the required parameter 'workspace_gid' when calling getTeamsForWorkspace");
        }

        let pathParams = {
            'workspace_gid': workspace_gid
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
                    '/workspaces/{workspace_gid}/teams', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/workspaces/{workspace_gid}/teams',
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
            '/workspaces/{workspace_gid}/teams', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get teams in a workspace
     * Returns the compact records for all teams in the workspace visible to the authorized user.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TeamResponseArray}
     */
    getTeamsForWorkspace(workspace_gid, opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getTeamsForWorkspaceWithHttpInfo(workspace_gid, opts)
        }

        return this.getTeamsForWorkspaceWithHttpInfo(workspace_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Remove a user from a team
     * The user making this call must be a member of the team in order to remove themselves or others.
     * @param {module:model/Object} body The user to remove from the team.
     * @param {String} team_gid Globally unique identifier for the team.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeUserForTeamWithHttpInfo(body, team_gid) {
        
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling removeUserForTeam");
        }
        // verify the required parameter 'team_gid' is set
        if (team_gid === undefined || team_gid === null) {
            throw new Error("Missing the required parameter 'team_gid' when calling removeUserForTeam");
        }

        let pathParams = {
            'team_gid': team_gid
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
            '/teams/{team_gid}/removeUser', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Remove a user from a team
     * The user making this call must be a member of the team in order to remove themselves or others.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The user to remove from the team.
     * @param {<&vendorExtensions.x-jsdoc-type>} team_gid Globally unique identifier for the team.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    removeUserForTeam(body, team_gid) {

        return this.removeUserForTeamWithHttpInfo(body, team_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Update a team
     * Updates a team within the current workspace.
     * @param {module:model/Object} body The team to update.
     * @param {String} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateTeamWithHttpInfo(body, team_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling updateTeam");
        }
        // verify the required parameter 'team_gid' is set
        if (team_gid === undefined || team_gid === null) {
            throw new Error("Missing the required parameter 'team_gid' when calling updateTeam");
        }

        let pathParams = {
            'team_gid': team_gid
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
            '/teams/{team_gid}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Update a team
     * Updates a team within the current workspace.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The team to update.
     * @param {<&vendorExtensions.x-jsdoc-type>} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TeamResponseData}
     */
    updateTeam(body, team_gid, opts) {

        return this.updateTeamWithHttpInfo(body, team_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
