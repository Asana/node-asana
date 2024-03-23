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
* ProjectTemplates service.
* @module api/ProjectTemplatesApi
* @version 3.0.3
*/
export class ProjectTemplatesApi {

    /**
    * Constructs a new ProjectTemplatesApi. 
    * @alias module:api/ProjectTemplatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete a project template
     * A specific, existing project template can be deleted by making a DELETE request on the URL for that project template.  Returns an empty data record.
     * @param {String} project_template_gid Globally unique identifier for the project template.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteProjectTemplateWithHttpInfo(project_template_gid) {
        
        let postBody = null;
        // verify the required parameter 'project_template_gid' is set
        if (project_template_gid === undefined || project_template_gid === null) {
            throw new Error("Missing the required parameter 'project_template_gid' when calling deleteProjectTemplate");
        }

        let pathParams = {
            'project_template_gid': project_template_gid
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
            '/project_templates/{project_template_gid}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Delete a project template
     * A specific, existing project template can be deleted by making a DELETE request on the URL for that project template.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_template_gid Globally unique identifier for the project template.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteProjectTemplate(project_template_gid) {

        return this.deleteProjectTemplateWithHttpInfo(project_template_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a project template
     * Returns the complete project template record for a single project template.
     * @param {String} project_template_gid Globally unique identifier for the project template.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectTemplateWithHttpInfo(project_template_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'project_template_gid' is set
        if (project_template_gid === undefined || project_template_gid === null) {
            throw new Error("Missing the required parameter 'project_template_gid' when calling getProjectTemplate");
        }

        let pathParams = {
            'project_template_gid': project_template_gid
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
            '/project_templates/{project_template_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a project template
     * Returns the complete project template record for a single project template.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_template_gid Globally unique identifier for the project template.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectTemplateResponseData}
     */
    getProjectTemplate(project_template_gid, opts) {

        return this.getProjectTemplateWithHttpInfo(project_template_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get multiple project templates
     * Returns the compact project template records for all project templates in the given team or workspace.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workspace The workspace to filter results on.
     * @param {String} opts.team The team to filter projects on.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectTemplatesWithHttpInfo(opts) {
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
                    '/project_templates', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/project_templates',
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
            '/project_templates', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get multiple project templates
     * Returns the compact project template records for all project templates in the given team or workspace.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workspace The workspace to filter results on.
     * @param {String} opts.team The team to filter projects on.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectTemplateResponseArray}
     */
    getProjectTemplates(opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getProjectTemplatesWithHttpInfo(opts)
        }

        return this.getProjectTemplatesWithHttpInfo(opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a team&#x27;s project templates
     * Returns the compact project template records for all project templates in the team.
     * @param {String} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectTemplatesForTeamWithHttpInfo(team_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'team_gid' is set
        if (team_gid === undefined || team_gid === null) {
            throw new Error("Missing the required parameter 'team_gid' when calling getProjectTemplatesForTeam");
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
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return Collection.fromApiClient(
                this.apiClient.callApi(
                    '/teams/{team_gid}/project_templates', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/teams/{team_gid}/project_templates',
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
            '/teams/{team_gid}/project_templates', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a team&#x27;s project templates
     * Returns the compact project template records for all project templates in the team.
     * @param {<&vendorExtensions.x-jsdoc-type>} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectTemplateResponseArray}
     */
    getProjectTemplatesForTeam(team_gid, opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getProjectTemplatesForTeamWithHttpInfo(team_gid, opts)
        }

        return this.getProjectTemplatesForTeamWithHttpInfo(team_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Instantiate a project from a project template
     * Creates and returns a job that will asynchronously handle the project instantiation.  To form this request, it is recommended to first make a request to [get a project template](/reference/getprojecttemplate). Then, from the response, copy the &#x60;gid&#x60; from the object in the &#x60;requested_dates&#x60; array. This &#x60;gid&#x60; should be used in &#x60;requested_dates&#x60; to instantiate a project.  _Note: The body of this request will differ if your workspace is an organization. To determine if your workspace is an organization, use the [is_organization](/reference/workspaces) parameter._
     * @param {String} project_template_gid Globally unique identifier for the project template.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body Describes the inputs used for instantiating a project, such as the resulting project&#x27;s name, which team it should be created in, and values for date variables.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    instantiateProjectWithHttpInfo(project_template_gid, opts) {
        opts = opts || {};
        let postBody = opts['body'];
        // verify the required parameter 'project_template_gid' is set
        if (project_template_gid === undefined || project_template_gid === null) {
            throw new Error("Missing the required parameter 'project_template_gid' when calling instantiateProject");
        }

        let pathParams = {
            'project_template_gid': project_template_gid
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
            '/project_templates/{project_template_gid}/instantiateProject', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Instantiate a project from a project template
     * Creates and returns a job that will asynchronously handle the project instantiation.  To form this request, it is recommended to first make a request to [get a project template](/reference/getprojecttemplate). Then, from the response, copy the &#x60;gid&#x60; from the object in the &#x60;requested_dates&#x60; array. This &#x60;gid&#x60; should be used in &#x60;requested_dates&#x60; to instantiate a project.  _Note: The body of this request will differ if your workspace is an organization. To determine if your workspace is an organization, use the [is_organization](/reference/workspaces) parameter._
     * @param {<&vendorExtensions.x-jsdoc-type>} project_template_gid Globally unique identifier for the project template.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body Describes the inputs used for instantiating a project, such as the resulting project&#x27;s name, which team it should be created in, and values for date variables.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobResponseData}
     */
    instantiateProject(project_template_gid, opts) {

        return this.instantiateProjectWithHttpInfo(project_template_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
