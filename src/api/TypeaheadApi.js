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
* Typeahead service.
* @module api/TypeaheadApi
* @version 3.0.11
*/
export class TypeaheadApi {

    /**
    * Constructs a new TypeaheadApi. 
    * @alias module:api/TypeaheadApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get objects via typeahead
     * Retrieves objects in the workspace based via an auto-completion/typeahead search algorithm. This feature is meant to provide results quickly, so do not rely on this API to provide extremely accurate search results. The result set is limited to a single page of results with a maximum size, so you won’t be able to fetch large numbers of results.  The typeahead search API provides search for objects from a single workspace. This endpoint should be used to query for objects when creating an auto-completion/typeahead search feature. This API is meant to provide results quickly and should not be relied upon for accurate or exhaustive search results. The results sets are limited in size and cannot be paginated.  Queries return a compact representation of each object which is typically the gid and name fields. Interested in a specific set of fields or all of the fields?! Of course you are. Use field selectors to manipulate what data is included in a response.  Resources with type &#x60;user&#x60; are returned in order of most contacted to least contacted. This is determined by task assignments, adding the user to projects, and adding the user as a follower to tasks, messages, etc.  Resources with type &#x60;project&#x60; are returned in order of recency. This is determined when the user visits the project, is added to the project, and completes tasks in the project.  Resources with type &#x60;task&#x60; are returned with priority placed on tasks the user is following, but no guarantee on the order of those tasks.  Resources with type &#x60;project_template&#x60; are returned with priority placed on favorited project templates.  Leaving the &#x60;query&#x60; string empty or omitted will give you results, still following the resource ordering above. This could be used to list users or projects that are relevant for the requesting user&#x27;s api token.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {module:model/String} resource_type The type of values the typeahead should return. You can choose from one of the following: &#x60;custom_field&#x60;, &#x60;goal&#x60;, &#x60;project&#x60;, &#x60;project_template&#x60;, &#x60;portfolio&#x60;, &#x60;tag&#x60;, &#x60;task&#x60;, &#x60;team&#x60;, and &#x60;user&#x60;. Note that unlike in the names of endpoints, the types listed here are in singular form (e.g. &#x60;task&#x60;). Using multiple types is not yet supported.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type *Deprecated: new integrations should prefer the resource_type field.* (default to <.>)
     * @param {String} opts.query The string that will be used to search for relevant objects. If an empty string is passed in, the API will return results.
     * @param {Number} opts.count The number of results to return. The default is 20 if this parameter is omitted, with a minimum of 1 and a maximum of 100. If there are fewer results found than requested, all will be returned.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    typeaheadForWorkspaceWithHttpInfo(workspace_gid, resource_type, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'workspace_gid' is set
        if (workspace_gid === undefined || workspace_gid === null) {
            throw new Error("Missing the required parameter 'workspace_gid' when calling typeaheadForWorkspace");
        }
        // verify the required parameter 'resource_type' is set
        if (resource_type === undefined || resource_type === null) {
            throw new Error("Missing the required parameter 'resource_type' when calling typeaheadForWorkspace");
        }

        let pathParams = {
            'workspace_gid': workspace_gid
        };
        let queryParams = {};
        opts = opts || {};
        queryParams = opts;
        queryParams['resource_type'] = resource_type;

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
                    '/workspaces/{workspace_gid}/typeahead', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/workspaces/{workspace_gid}/typeahead',
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
            '/workspaces/{workspace_gid}/typeahead', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get objects via typeahead
     * Retrieves objects in the workspace based via an auto-completion/typeahead search algorithm. This feature is meant to provide results quickly, so do not rely on this API to provide extremely accurate search results. The result set is limited to a single page of results with a maximum size, so you won’t be able to fetch large numbers of results.  The typeahead search API provides search for objects from a single workspace. This endpoint should be used to query for objects when creating an auto-completion/typeahead search feature. This API is meant to provide results quickly and should not be relied upon for accurate or exhaustive search results. The results sets are limited in size and cannot be paginated.  Queries return a compact representation of each object which is typically the gid and name fields. Interested in a specific set of fields or all of the fields?! Of course you are. Use field selectors to manipulate what data is included in a response.  Resources with type &#x60;user&#x60; are returned in order of most contacted to least contacted. This is determined by task assignments, adding the user to projects, and adding the user as a follower to tasks, messages, etc.  Resources with type &#x60;project&#x60; are returned in order of recency. This is determined when the user visits the project, is added to the project, and completes tasks in the project.  Resources with type &#x60;task&#x60; are returned with priority placed on tasks the user is following, but no guarantee on the order of those tasks.  Resources with type &#x60;project_template&#x60; are returned with priority placed on favorited project templates.  Leaving the &#x60;query&#x60; string empty or omitted will give you results, still following the resource ordering above. This could be used to list users or projects that are relevant for the requesting user&#x27;s api token.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {<&vendorExtensions.x-jsdoc-type>} resource_type The type of values the typeahead should return. You can choose from one of the following: &#x60;custom_field&#x60;, &#x60;goal&#x60;, &#x60;project&#x60;, &#x60;project_template&#x60;, &#x60;portfolio&#x60;, &#x60;tag&#x60;, &#x60;task&#x60;, &#x60;team&#x60;, and &#x60;user&#x60;. Note that unlike in the names of endpoints, the types listed here are in singular form (e.g. &#x60;task&#x60;). Using multiple types is not yet supported.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type *Deprecated: new integrations should prefer the resource_type field.* (default to <.>)
     * @param {String} opts.query The string that will be used to search for relevant objects. If an empty string is passed in, the API will return results.
     * @param {Number} opts.count The number of results to return. The default is 20 if this parameter is omitted, with a minimum of 1 and a maximum of 100. If there are fewer results found than requested, all will be returned.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AsanaNamedResourceArray}
     */
    typeaheadForWorkspace(workspace_gid, resource_type, opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.typeaheadForWorkspaceWithHttpInfo(workspace_gid, resource_type, opts)
        }

        return this.typeaheadForWorkspaceWithHttpInfo(workspace_gid, resource_type, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
