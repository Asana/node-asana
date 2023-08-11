/*
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {EmptyResponseData} from '../model/EmptyResponseData';
import {ErrorResponse} from '../model/ErrorResponse';
import {StoriesStoryGidBody} from '../model/StoriesStoryGidBody';
import {StoryResponseArray} from '../model/StoryResponseArray';
import {StoryResponseData} from '../model/StoryResponseData';
import {TaskGidStoriesBody} from '../model/TaskGidStoriesBody';

/**
* Stories service.
* @module api/StoriesApi
* @version 2.0.3
*/
export class StoriesApi {

    /**
    * Constructs a new StoriesApi. 
    * @alias module:api/StoriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createStoryForTask operation.
     * @callback moduleapi/StoriesApi~createStoryForTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StoryResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a story on a task
     * Adds a story to a task. This endpoint currently only allows for comment stories to be created. The comment will be authored by the currently authenticated user, and timestamped when the server receives the request.  Returns the full record for the new story added to the task.
     * @param {module:model/TaskGidStoriesBody} body The story to create.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/StoriesApi~createStoryForTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createStoryForTask(body, task_gid, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createStoryForTask");
      }
      // verify the required parameter 'task_gid' is set
      if (task_gid === undefined || task_gid === null) {
        throw new Error("Missing the required parameter 'task_gid' when calling createStoryForTask");
      }

      let pathParams = {
        'task_gid': task_gid
      };
      let queryParams = {
        'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = StoryResponseData;

      return this.apiClient.callApi(
        '/tasks/{task_gid}/stories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteStory operation.
     * @callback moduleapi/StoriesApi~deleteStoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a story
     * Deletes a story. A user can only delete stories they have created.  Returns an empty data record.
     * @param {String} story_gid Globally unique identifier for the story.
     * @param {module:api/StoriesApi~deleteStoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deleteStory(story_gid, callback) {
      
      let postBody = null;
      // verify the required parameter 'story_gid' is set
      if (story_gid === undefined || story_gid === null) {
        throw new Error("Missing the required parameter 'story_gid' when calling deleteStory");
      }

      let pathParams = {
        'story_gid': story_gid
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = EmptyResponseData;

      return this.apiClient.callApi(
        '/stories/{story_gid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getStoriesForTask operation.
     * @callback moduleapi/StoriesApi~getStoriesForTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StoryResponseArray{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get stories from a task
     * Returns the compact records for all stories on the task.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/StoriesApi~getStoriesForTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getStoriesForTask(task_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'task_gid' is set
      if (task_gid === undefined || task_gid === null) {
        throw new Error("Missing the required parameter 'task_gid' when calling getStoriesForTask");
      }

      let pathParams = {
        'task_gid': task_gid
      };
      let queryParams = {
        'limit': opts['limit'],'offset': opts['offset'],'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = StoryResponseArray;

      return this.apiClient.callApi(
        '/tasks/{task_gid}/stories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getStory operation.
     * @callback moduleapi/StoriesApi~getStoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StoryResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a story
     * Returns the full record for a single story.
     * @param {String} story_gid Globally unique identifier for the story.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/StoriesApi~getStoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getStory(story_gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'story_gid' is set
      if (story_gid === undefined || story_gid === null) {
        throw new Error("Missing the required parameter 'story_gid' when calling getStory");
      }

      let pathParams = {
        'story_gid': story_gid
      };
      let queryParams = {
        'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = StoryResponseData;

      return this.apiClient.callApi(
        '/stories/{story_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateStory operation.
     * @callback moduleapi/StoriesApi~updateStoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StoryResponseData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a story
     * Updates the story and returns the full record for the updated story. Only comment stories can have their text updated, and only comment stories and attachment stories can be pinned. Only one of &#x60;text&#x60; and &#x60;html_text&#x60; can be specified.
     * @param {module:model/StoriesStoryGidBody} body The comment story to update.
     * @param {String} story_gid Globally unique identifier for the story.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {module:api/StoriesApi~updateStoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateStory(body, story_gid, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateStory");
      }
      // verify the required parameter 'story_gid' is set
      if (story_gid === undefined || story_gid === null) {
        throw new Error("Missing the required parameter 'story_gid' when calling updateStory");
      }

      let pathParams = {
        'story_gid': story_gid
      };
      let queryParams = {
        'opt_fields': this.apiClient.buildCollectionParam(opts['opt_fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json; charset=UTF-8'];
      let returnType = StoryResponseData;

      return this.apiClient.callApi(
        '/stories/{story_gid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}