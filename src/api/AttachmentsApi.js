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
* Attachments service.
* @module api/AttachmentsApi
* @version 3.0.10
*/
export class AttachmentsApi {

    /**
    * Constructs a new AttachmentsApi. 
    * @alias module:api/AttachmentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Upload an attachment
     * Upload an attachment.  This method uploads an attachment on an object and returns the compact record for the created attachment object. This is possible by either:  - Providing the URL of the external resource being attached, or - Downloading the file content first and then uploading it as any other attachment. Note that it is not possible to attach files from third party services such as Dropbox, Box, Vimeo &amp; Google Drive via the API  The 100MB size limit on attachments in Asana is enforced on this endpoint.  This endpoint expects a multipart/form-data encoded request containing the full contents of the file to be uploaded.  Requests made should follow the HTTP/1.1 specification that line terminators are of the form &#x60;CRLF&#x60; or &#x60;\\r\\n&#x60; outlined [here](http://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#Basic-Rules) in order for the server to reliably and properly handle the request.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.resource_subtype 
     * @param {Blob} opts.file 
     * @param {String} opts.parent 
     * @param {String} opts.url 
     * @param {String} opts.name 
     * @param {Boolean} opts.connect_to_app 
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createAttachmentForObjectWithHttpInfo(opts) {
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
            'resource_subtype': opts['resource_subtype'],'file': opts['file'],'parent': opts['parent'],'url': opts['url'],'name': opts['name'],'connect_to_app': opts['connect_to_app']
        };

        let authNames = ['personalAccessToken'];
        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json; charset=UTF-8'];
        let returnType = 'Blob';

        return this.apiClient.callApi(
            '/attachments', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Upload an attachment
     * Upload an attachment.  This method uploads an attachment on an object and returns the compact record for the created attachment object. This is possible by either:  - Providing the URL of the external resource being attached, or - Downloading the file content first and then uploading it as any other attachment. Note that it is not possible to attach files from third party services such as Dropbox, Box, Vimeo &amp; Google Drive via the API  The 100MB size limit on attachments in Asana is enforced on this endpoint.  This endpoint expects a multipart/form-data encoded request containing the full contents of the file to be uploaded.  Requests made should follow the HTTP/1.1 specification that line terminators are of the form &#x60;CRLF&#x60; or &#x60;\\r\\n&#x60; outlined [here](http://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#Basic-Rules) in order for the server to reliably and properly handle the request.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.resource_subtype 
     * @param {Blob} opts.file 
     * @param {String} opts.parent 
     * @param {String} opts.url 
     * @param {String} opts.name 
     * @param {Boolean} opts.connect_to_app 
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachmentResponseData}
     */
    createAttachmentForObject(opts) {

        return this.createAttachmentForObjectWithHttpInfo(opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Delete an attachment
     * Deletes a specific, existing attachment.  Returns an empty data record.
     * @param {String} attachment_gid Globally unique identifier for the attachment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteAttachmentWithHttpInfo(attachment_gid) {
        
        let postBody = null;
        // verify the required parameter 'attachment_gid' is set
        if (attachment_gid === undefined || attachment_gid === null) {
            throw new Error("Missing the required parameter 'attachment_gid' when calling deleteAttachment");
        }

        let pathParams = {
            'attachment_gid': attachment_gid
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
            '/attachments/{attachment_gid}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Delete an attachment
     * Deletes a specific, existing attachment.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} attachment_gid Globally unique identifier for the attachment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteAttachment(attachment_gid) {

        return this.deleteAttachmentWithHttpInfo(attachment_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get an attachment
     * Get the full record for a single attachment.
     * @param {String} attachment_gid Globally unique identifier for the attachment.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getAttachmentWithHttpInfo(attachment_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'attachment_gid' is set
        if (attachment_gid === undefined || attachment_gid === null) {
            throw new Error("Missing the required parameter 'attachment_gid' when calling getAttachment");
        }

        let pathParams = {
            'attachment_gid': attachment_gid
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
            '/attachments/{attachment_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get an attachment
     * Get the full record for a single attachment.
     * @param {<&vendorExtensions.x-jsdoc-type>} attachment_gid Globally unique identifier for the attachment.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachmentResponseData}
     */
    getAttachment(attachment_gid, opts) {

        return this.getAttachmentWithHttpInfo(attachment_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get attachments from an object
     * Returns the compact records for all attachments on the object.  There are three possible &#x60;parent&#x60; values for this request: &#x60;project&#x60;, &#x60;project_brief&#x60;, and &#x60;task&#x60;. For a project, an attachment refers to a file uploaded to the \&quot;Key resources\&quot; section in the project Overview. For a project brief, an attachment refers to inline files in the project brief itself. For a task, an attachment refers to a file directly associated to that task.  Note that within the Asana app, inline images in the task description do not appear in the index of image thumbnails nor as stories in the task. However, requests made to &#x60;GET /attachments&#x60; for a task will return all of the images in the task, including inline images.
     * @param {String} parent Globally unique identifier for object to fetch statuses from. Must be a GID for a &#x60;project&#x60;, &#x60;project_brief&#x60;, or &#x60;task&#x60;.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getAttachmentsForObjectWithHttpInfo(parent, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'parent' is set
        if (parent === undefined || parent === null) {
            throw new Error("Missing the required parameter 'parent' when calling getAttachmentsForObject");
        }

        let pathParams = {
            
        };
        let queryParams = {};
        opts = opts || {};
        queryParams = opts;
        queryParams['parent'] = parent;

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
                    '/attachments', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/attachments',
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
            '/attachments', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get attachments from an object
     * Returns the compact records for all attachments on the object.  There are three possible &#x60;parent&#x60; values for this request: &#x60;project&#x60;, &#x60;project_brief&#x60;, and &#x60;task&#x60;. For a project, an attachment refers to a file uploaded to the \&quot;Key resources\&quot; section in the project Overview. For a project brief, an attachment refers to inline files in the project brief itself. For a task, an attachment refers to a file directly associated to that task.  Note that within the Asana app, inline images in the task description do not appear in the index of image thumbnails nor as stories in the task. However, requests made to &#x60;GET /attachments&#x60; for a task will return all of the images in the task, including inline images.
     * @param {<&vendorExtensions.x-jsdoc-type>} parent Globally unique identifier for object to fetch statuses from. Must be a GID for a &#x60;project&#x60;, &#x60;project_brief&#x60;, or &#x60;task&#x60;.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachmentResponseArray}
     */
    getAttachmentsForObject(parent, opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getAttachmentsForObjectWithHttpInfo(parent, opts)
        }

        return this.getAttachmentsForObjectWithHttpInfo(parent, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
