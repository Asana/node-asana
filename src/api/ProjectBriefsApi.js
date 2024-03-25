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
* ProjectBriefs service.
* @module api/ProjectBriefsApi
* @version 3.0.4
*/
export class ProjectBriefsApi {

    /**
    * Constructs a new ProjectBriefsApi. 
    * @alias module:api/ProjectBriefsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a project brief
     * Creates a new project brief.  Returns the full record of the newly created project brief.
     * @param {module:model/Object} body The project brief to create.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createProjectBriefWithHttpInfo(body, project_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling createProjectBrief");
        }
        // verify the required parameter 'project_gid' is set
        if (project_gid === undefined || project_gid === null) {
            throw new Error("Missing the required parameter 'project_gid' when calling createProjectBrief");
        }

        let pathParams = {
            'project_gid': project_gid
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
            '/projects/{project_gid}/project_briefs', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Create a project brief
     * Creates a new project brief.  Returns the full record of the newly created project brief.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The project brief to create.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectBriefResponseData}
     */
    createProjectBrief(body, project_gid, opts) {

        return this.createProjectBriefWithHttpInfo(body, project_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Delete a project brief
     * Deletes a specific, existing project brief.  Returns an empty data record.
     * @param {String} project_brief_gid Globally unique identifier for the project brief.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteProjectBriefWithHttpInfo(project_brief_gid) {
        
        let postBody = null;
        // verify the required parameter 'project_brief_gid' is set
        if (project_brief_gid === undefined || project_brief_gid === null) {
            throw new Error("Missing the required parameter 'project_brief_gid' when calling deleteProjectBrief");
        }

        let pathParams = {
            'project_brief_gid': project_brief_gid
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
            '/project_briefs/{project_brief_gid}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Delete a project brief
     * Deletes a specific, existing project brief.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_brief_gid Globally unique identifier for the project brief.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteProjectBrief(project_brief_gid) {

        return this.deleteProjectBriefWithHttpInfo(project_brief_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a project brief
     * Get the full record for a project brief.
     * @param {String} project_brief_gid Globally unique identifier for the project brief.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectBriefWithHttpInfo(project_brief_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'project_brief_gid' is set
        if (project_brief_gid === undefined || project_brief_gid === null) {
            throw new Error("Missing the required parameter 'project_brief_gid' when calling getProjectBrief");
        }

        let pathParams = {
            'project_brief_gid': project_brief_gid
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
            '/project_briefs/{project_brief_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a project brief
     * Get the full record for a project brief.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_brief_gid Globally unique identifier for the project brief.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectBriefResponseData}
     */
    getProjectBrief(project_brief_gid, opts) {

        return this.getProjectBriefWithHttpInfo(project_brief_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Update a project brief
     * An existing project brief can be updated by making a PUT request on the URL for that project brief. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated project brief record.
     * @param {module:model/Object} body The updated fields for the project brief.
     * @param {String} project_brief_gid Globally unique identifier for the project brief.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateProjectBriefWithHttpInfo(body, project_brief_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling updateProjectBrief");
        }
        // verify the required parameter 'project_brief_gid' is set
        if (project_brief_gid === undefined || project_brief_gid === null) {
            throw new Error("Missing the required parameter 'project_brief_gid' when calling updateProjectBrief");
        }

        let pathParams = {
            'project_brief_gid': project_brief_gid
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
            '/project_briefs/{project_brief_gid}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Update a project brief
     * An existing project brief can be updated by making a PUT request on the URL for that project brief. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated project brief record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The updated fields for the project brief.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_brief_gid Globally unique identifier for the project brief.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectBriefResponseData}
     */
    updateProjectBrief(body, project_brief_gid, opts) {

        return this.updateProjectBriefWithHttpInfo(body, project_brief_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
