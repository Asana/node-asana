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
* CustomFields service.
* @module api/CustomFieldsApi
* @version 3.0.16
*/
export class CustomFieldsApi {

    /**
    * Constructs a new CustomFieldsApi. 
    * @alias module:api/CustomFieldsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a custom field
     * Creates a new custom field in a workspace. Every custom field is required to be created in a specific workspace, and this workspace cannot be changed once set.  A custom field’s name must be unique within a workspace and not conflict with names of existing task properties such as &#x60;Due Date&#x60; or &#x60;Assignee&#x60;. A custom field’s type must be one of &#x60;text&#x60;, &#x60;enum&#x60;, &#x60;multi_enum&#x60;, &#x60;number&#x60;, &#x60;date&#x60;, or &#x60;people&#x60;.  Returns the full record of the newly created custom field.
     * @param {module:model/Object} body The custom field object to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createCustomFieldWithHttpInfo(body, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling createCustomField");
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
            '/custom_fields', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Create a custom field
     * Creates a new custom field in a workspace. Every custom field is required to be created in a specific workspace, and this workspace cannot be changed once set.  A custom field’s name must be unique within a workspace and not conflict with names of existing task properties such as &#x60;Due Date&#x60; or &#x60;Assignee&#x60;. A custom field’s type must be one of &#x60;text&#x60;, &#x60;enum&#x60;, &#x60;multi_enum&#x60;, &#x60;number&#x60;, &#x60;date&#x60;, or &#x60;people&#x60;.  Returns the full record of the newly created custom field.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The custom field object to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomFieldResponseData}
     */
    createCustomField(body, opts) {

        return this.createCustomFieldWithHttpInfo(body, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Create an enum option
     * Creates an enum option and adds it to this custom field’s list of enum options. A custom field can have at most 500 enum options (including disabled options). By default new enum options are inserted at the end of a custom field’s list. Locked custom fields can only have enum options added by the user who locked the field. Returns the full record of the newly created enum option.
     * @param {String} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The enum option object to create.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createEnumOptionForCustomFieldWithHttpInfo(custom_field_gid, opts) {
        opts = opts || {};
        let postBody = opts['body'];
        // verify the required parameter 'custom_field_gid' is set
        if (custom_field_gid === undefined || custom_field_gid === null) {
            throw new Error("Missing the required parameter 'custom_field_gid' when calling createEnumOptionForCustomField");
        }

        let pathParams = {
            'custom_field_gid': custom_field_gid
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
            '/custom_fields/{custom_field_gid}/enum_options', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Create an enum option
     * Creates an enum option and adds it to this custom field’s list of enum options. A custom field can have at most 500 enum options (including disabled options). By default new enum options are inserted at the end of a custom field’s list. Locked custom fields can only have enum options added by the user who locked the field. Returns the full record of the newly created enum option.
     * @param {<&vendorExtensions.x-jsdoc-type>} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The enum option object to create.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnumOptionData}
     */
    createEnumOptionForCustomField(custom_field_gid, opts) {

        return this.createEnumOptionForCustomFieldWithHttpInfo(custom_field_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Delete a custom field
     * A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field. Locked custom fields can only be deleted by the user who locked the field. Returns an empty data record.
     * @param {String} custom_field_gid Globally unique identifier for the custom field.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteCustomFieldWithHttpInfo(custom_field_gid) {
        
        let postBody = null;
        // verify the required parameter 'custom_field_gid' is set
        if (custom_field_gid === undefined || custom_field_gid === null) {
            throw new Error("Missing the required parameter 'custom_field_gid' when calling deleteCustomField");
        }

        let pathParams = {
            'custom_field_gid': custom_field_gid
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
            '/custom_fields/{custom_field_gid}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Delete a custom field
     * A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field. Locked custom fields can only be deleted by the user who locked the field. Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} custom_field_gid Globally unique identifier for the custom field.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteCustomField(custom_field_gid) {

        return this.deleteCustomFieldWithHttpInfo(custom_field_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a custom field
     * Get the complete definition of a custom field’s metadata.  Since custom fields can be defined for one of a number of types, and these types have different data and behaviors, there are fields that are relevant to a particular type. For instance, as noted above, enum_options is only relevant for the enum type and defines the set of choices that the enum could represent. The examples below show some of these type-specific custom field definitions.
     * @param {String} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getCustomFieldWithHttpInfo(custom_field_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'custom_field_gid' is set
        if (custom_field_gid === undefined || custom_field_gid === null) {
            throw new Error("Missing the required parameter 'custom_field_gid' when calling getCustomField");
        }

        let pathParams = {
            'custom_field_gid': custom_field_gid
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
            '/custom_fields/{custom_field_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a custom field
     * Get the complete definition of a custom field’s metadata.  Since custom fields can be defined for one of a number of types, and these types have different data and behaviors, there are fields that are relevant to a particular type. For instance, as noted above, enum_options is only relevant for the enum type and defines the set of choices that the enum could represent. The examples below show some of these type-specific custom field definitions.
     * @param {<&vendorExtensions.x-jsdoc-type>} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomFieldResponseData}
     */
    getCustomField(custom_field_gid, opts) {

        return this.getCustomFieldWithHttpInfo(custom_field_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a workspace&#x27;s custom fields
     * Returns a list of the compact representation of all of the custom fields in a workspace.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getCustomFieldsForWorkspaceWithHttpInfo(workspace_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'workspace_gid' is set
        if (workspace_gid === undefined || workspace_gid === null) {
            throw new Error("Missing the required parameter 'workspace_gid' when calling getCustomFieldsForWorkspace");
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
                    '/workspaces/{workspace_gid}/custom_fields', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/workspaces/{workspace_gid}/custom_fields',
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
            '/workspaces/{workspace_gid}/custom_fields', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a workspace&#x27;s custom fields
     * Returns a list of the compact representation of all of the custom fields in a workspace.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomFieldResponseArray}
     */
    getCustomFieldsForWorkspace(workspace_gid, opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getCustomFieldsForWorkspaceWithHttpInfo(workspace_gid, opts)
        }

        return this.getCustomFieldsForWorkspaceWithHttpInfo(workspace_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Reorder a custom field&#x27;s enum
     * Moves a particular enum option to be either before or after another specified enum option in the custom field. Locked custom fields can only be reordered by the user who locked the field.
     * @param {String} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The enum option object to create.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    insertEnumOptionForCustomFieldWithHttpInfo(custom_field_gid, opts) {
        opts = opts || {};
        let postBody = opts['body'];
        // verify the required parameter 'custom_field_gid' is set
        if (custom_field_gid === undefined || custom_field_gid === null) {
            throw new Error("Missing the required parameter 'custom_field_gid' when calling insertEnumOptionForCustomField");
        }

        let pathParams = {
            'custom_field_gid': custom_field_gid
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
            '/custom_fields/{custom_field_gid}/enum_options/insert', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Reorder a custom field&#x27;s enum
     * Moves a particular enum option to be either before or after another specified enum option in the custom field. Locked custom fields can only be reordered by the user who locked the field.
     * @param {<&vendorExtensions.x-jsdoc-type>} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The enum option object to create.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnumOptionData}
     */
    insertEnumOptionForCustomField(custom_field_gid, opts) {

        return this.insertEnumOptionForCustomFieldWithHttpInfo(custom_field_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Update a custom field
     * A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the custom field. A custom field’s &#x60;type&#x60; cannot be updated. An enum custom field’s &#x60;enum_options&#x60; cannot be updated with this endpoint. Instead see “Work With Enum Options” for information on how to update &#x60;enum_options&#x60;. Locked custom fields can only be updated by the user who locked the field. Returns the complete updated custom field record.
     * @param {String} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The custom field object with all updated properties.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateCustomFieldWithHttpInfo(custom_field_gid, opts) {
        opts = opts || {};
        let postBody = opts['body'];
        // verify the required parameter 'custom_field_gid' is set
        if (custom_field_gid === undefined || custom_field_gid === null) {
            throw new Error("Missing the required parameter 'custom_field_gid' when calling updateCustomField");
        }

        let pathParams = {
            'custom_field_gid': custom_field_gid
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
            '/custom_fields/{custom_field_gid}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Update a custom field
     * A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the custom field. A custom field’s &#x60;type&#x60; cannot be updated. An enum custom field’s &#x60;enum_options&#x60; cannot be updated with this endpoint. Instead see “Work With Enum Options” for information on how to update &#x60;enum_options&#x60;. Locked custom fields can only be updated by the user who locked the field. Returns the complete updated custom field record.
     * @param {<&vendorExtensions.x-jsdoc-type>} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The custom field object with all updated properties.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomFieldResponseData}
     */
    updateCustomField(custom_field_gid, opts) {

        return this.updateCustomFieldWithHttpInfo(custom_field_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Update an enum option
     * Updates an existing enum option. Enum custom fields require at least one enabled enum option. Locked custom fields can only be updated by the user who locked the field. Returns the full record of the updated enum option.
     * @param {String} enum_option_gid Globally unique identifier for the enum option.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The enum option object to update
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateEnumOptionWithHttpInfo(enum_option_gid, opts) {
        opts = opts || {};
        let postBody = opts['body'];
        // verify the required parameter 'enum_option_gid' is set
        if (enum_option_gid === undefined || enum_option_gid === null) {
            throw new Error("Missing the required parameter 'enum_option_gid' when calling updateEnumOption");
        }

        let pathParams = {
            'enum_option_gid': enum_option_gid
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
            '/enum_options/{enum_option_gid}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Update an enum option
     * Updates an existing enum option. Enum custom fields require at least one enabled enum option. Locked custom fields can only be updated by the user who locked the field. Returns the full record of the updated enum option.
     * @param {<&vendorExtensions.x-jsdoc-type>} enum_option_gid Globally unique identifier for the enum option.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The enum option object to update
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnumOptionData}
     */
    updateEnumOption(enum_option_gid, opts) {

        return this.updateEnumOptionWithHttpInfo(enum_option_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
