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
* Portfolios service.
* @module api/PortfoliosApi
* @version 3.0.11
*/
export class PortfoliosApi {

    /**
    * Constructs a new PortfoliosApi. 
    * @alias module:api/PortfoliosApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a custom field to a portfolio
     * Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the portfolio.
     * @param {module:model/Object} body Information about the custom field setting.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addCustomFieldSettingForPortfolioWithHttpInfo(body, portfolio_gid) {
        
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling addCustomFieldSettingForPortfolio");
        }
        // verify the required parameter 'portfolio_gid' is set
        if (portfolio_gid === undefined || portfolio_gid === null) {
            throw new Error("Missing the required parameter 'portfolio_gid' when calling addCustomFieldSettingForPortfolio");
        }

        let pathParams = {
            'portfolio_gid': portfolio_gid
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
            '/portfolios/{portfolio_gid}/addCustomFieldSetting', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Add a custom field to a portfolio
     * Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the portfolio.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the custom field setting.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomFieldSettingResponseData}
     */
    addCustomFieldSettingForPortfolio(body, portfolio_gid) {

        return this.addCustomFieldSettingForPortfolioWithHttpInfo(body, portfolio_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Add a portfolio item
     * Add an item to a portfolio. Returns an empty data block.
     * @param {module:model/Object} body Information about the item being inserted.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addItemForPortfolioWithHttpInfo(body, portfolio_gid) {
        
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling addItemForPortfolio");
        }
        // verify the required parameter 'portfolio_gid' is set
        if (portfolio_gid === undefined || portfolio_gid === null) {
            throw new Error("Missing the required parameter 'portfolio_gid' when calling addItemForPortfolio");
        }

        let pathParams = {
            'portfolio_gid': portfolio_gid
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
            '/portfolios/{portfolio_gid}/addItem', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Add a portfolio item
     * Add an item to a portfolio. Returns an empty data block.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the item being inserted.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    addItemForPortfolio(body, portfolio_gid) {

        return this.addItemForPortfolioWithHttpInfo(body, portfolio_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Add users to a portfolio
     * Adds the specified list of users as members of the portfolio. Returns the updated portfolio record.
     * @param {module:model/Object} body Information about the members being added.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addMembersForPortfolioWithHttpInfo(body, portfolio_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling addMembersForPortfolio");
        }
        // verify the required parameter 'portfolio_gid' is set
        if (portfolio_gid === undefined || portfolio_gid === null) {
            throw new Error("Missing the required parameter 'portfolio_gid' when calling addMembersForPortfolio");
        }

        let pathParams = {
            'portfolio_gid': portfolio_gid
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
            '/portfolios/{portfolio_gid}/addMembers', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Add users to a portfolio
     * Adds the specified list of users as members of the portfolio. Returns the updated portfolio record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the members being added.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioResponseData}
     */
    addMembersForPortfolio(body, portfolio_gid, opts) {

        return this.addMembersForPortfolioWithHttpInfo(body, portfolio_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Create a portfolio
     * Creates a new portfolio in the given workspace with the supplied name.  Note that portfolios created in the Asana UI may have some state (like the “Priority” custom field) which is automatically added to the portfolio when it is created. Portfolios created via our API will *not* be created with the same initial state to allow integrations to create their own starting state on a portfolio.
     * @param {module:model/Object} body The portfolio to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createPortfolioWithHttpInfo(body, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling createPortfolio");
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
            '/portfolios', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Create a portfolio
     * Creates a new portfolio in the given workspace with the supplied name.  Note that portfolios created in the Asana UI may have some state (like the “Priority” custom field) which is automatically added to the portfolio when it is created. Portfolios created via our API will *not* be created with the same initial state to allow integrations to create their own starting state on a portfolio.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The portfolio to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioResponseData}
     */
    createPortfolio(body, opts) {

        return this.createPortfolioWithHttpInfo(body, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Delete a portfolio
     * An existing portfolio can be deleted by making a DELETE request on the URL for that portfolio.  Returns an empty data record.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deletePortfolioWithHttpInfo(portfolio_gid) {
        
        let postBody = null;
        // verify the required parameter 'portfolio_gid' is set
        if (portfolio_gid === undefined || portfolio_gid === null) {
            throw new Error("Missing the required parameter 'portfolio_gid' when calling deletePortfolio");
        }

        let pathParams = {
            'portfolio_gid': portfolio_gid
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
            '/portfolios/{portfolio_gid}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Delete a portfolio
     * An existing portfolio can be deleted by making a DELETE request on the URL for that portfolio.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deletePortfolio(portfolio_gid) {

        return this.deletePortfolioWithHttpInfo(portfolio_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get portfolio items
     * Get a list of the items in compact form in a portfolio.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getItemsForPortfolioWithHttpInfo(portfolio_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'portfolio_gid' is set
        if (portfolio_gid === undefined || portfolio_gid === null) {
            throw new Error("Missing the required parameter 'portfolio_gid' when calling getItemsForPortfolio");
        }

        let pathParams = {
            'portfolio_gid': portfolio_gid
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
                    '/portfolios/{portfolio_gid}/items', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/portfolios/{portfolio_gid}/items',
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
            '/portfolios/{portfolio_gid}/items', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get portfolio items
     * Get a list of the items in compact form in a portfolio.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectResponseArray}
     */
    getItemsForPortfolio(portfolio_gid, opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getItemsForPortfolioWithHttpInfo(portfolio_gid, opts)
        }

        return this.getItemsForPortfolioWithHttpInfo(portfolio_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a portfolio
     * Returns the complete portfolio record for a single portfolio.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getPortfolioWithHttpInfo(portfolio_gid, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'portfolio_gid' is set
        if (portfolio_gid === undefined || portfolio_gid === null) {
            throw new Error("Missing the required parameter 'portfolio_gid' when calling getPortfolio");
        }

        let pathParams = {
            'portfolio_gid': portfolio_gid
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
            '/portfolios/{portfolio_gid}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a portfolio
     * Returns the complete portfolio record for a single portfolio.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioResponseData}
     */
    getPortfolio(portfolio_gid, opts) {

        return this.getPortfolioWithHttpInfo(portfolio_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get multiple portfolios
     * Returns a list of the portfolios in compact representation that are owned by the current API user.
     * @param {String} workspace The workspace or organization to filter portfolios on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {String} opts.owner The user who owns the portfolio. Currently, API users can only get a list of portfolios that they themselves own, unless the request is made from a Service Account. In the case of a Service Account, if this parameter is specified, then all portfolios owned by this parameter are returned. Otherwise, all portfolios across the workspace are returned.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getPortfoliosWithHttpInfo(workspace, opts) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'workspace' is set
        if (workspace === undefined || workspace === null) {
            throw new Error("Missing the required parameter 'workspace' when calling getPortfolios");
        }

        let pathParams = {
            
        };
        let queryParams = {};
        opts = opts || {};
        queryParams = opts;
        queryParams['workspace'] = workspace;

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
                    '/portfolios', 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, returnType
                ),
                this.apiClient,
                {
                    'path': '/portfolios',
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
            '/portfolios', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get multiple portfolios
     * Returns a list of the portfolios in compact representation that are owned by the current API user.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace The workspace or organization to filter portfolios on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.*
     * @param {String} opts.owner The user who owns the portfolio. Currently, API users can only get a list of portfolios that they themselves own, unless the request is made from a Service Account. In the case of a Service Account, if this parameter is specified, then all portfolios owned by this parameter are returned. Otherwise, all portfolios across the workspace are returned.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioResponseArray}
     */
    getPortfolios(workspace, opts) {
        // Check if RETURN_COLLECTION is set and return a collection object if it is
        if (this.apiClient.RETURN_COLLECTION) {
            return this.getPortfoliosWithHttpInfo(workspace, opts)
        }

        return this.getPortfoliosWithHttpInfo(workspace, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Remove a custom field from a portfolio
     * Removes a custom field setting from a portfolio.
     * @param {module:model/Object} body Information about the custom field setting being removed.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeCustomFieldSettingForPortfolioWithHttpInfo(body, portfolio_gid) {
        
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling removeCustomFieldSettingForPortfolio");
        }
        // verify the required parameter 'portfolio_gid' is set
        if (portfolio_gid === undefined || portfolio_gid === null) {
            throw new Error("Missing the required parameter 'portfolio_gid' when calling removeCustomFieldSettingForPortfolio");
        }

        let pathParams = {
            'portfolio_gid': portfolio_gid
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
            '/portfolios/{portfolio_gid}/removeCustomFieldSetting', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Remove a custom field from a portfolio
     * Removes a custom field setting from a portfolio.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the custom field setting being removed.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    removeCustomFieldSettingForPortfolio(body, portfolio_gid) {

        return this.removeCustomFieldSettingForPortfolioWithHttpInfo(body, portfolio_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Remove a portfolio item
     * Remove an item from a portfolio. Returns an empty data block.
     * @param {module:model/Object} body Information about the item being removed.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeItemForPortfolioWithHttpInfo(body, portfolio_gid) {
        
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling removeItemForPortfolio");
        }
        // verify the required parameter 'portfolio_gid' is set
        if (portfolio_gid === undefined || portfolio_gid === null) {
            throw new Error("Missing the required parameter 'portfolio_gid' when calling removeItemForPortfolio");
        }

        let pathParams = {
            'portfolio_gid': portfolio_gid
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
            '/portfolios/{portfolio_gid}/removeItem', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Remove a portfolio item
     * Remove an item from a portfolio. Returns an empty data block.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the item being removed.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    removeItemForPortfolio(body, portfolio_gid) {

        return this.removeItemForPortfolioWithHttpInfo(body, portfolio_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Remove users from a portfolio
     * Removes the specified list of users from members of the portfolio. Returns the updated portfolio record.
     * @param {module:model/Object} body Information about the members being removed.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeMembersForPortfolioWithHttpInfo(body, portfolio_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling removeMembersForPortfolio");
        }
        // verify the required parameter 'portfolio_gid' is set
        if (portfolio_gid === undefined || portfolio_gid === null) {
            throw new Error("Missing the required parameter 'portfolio_gid' when calling removeMembersForPortfolio");
        }

        let pathParams = {
            'portfolio_gid': portfolio_gid
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
            '/portfolios/{portfolio_gid}/removeMembers', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Remove users from a portfolio
     * Removes the specified list of users from members of the portfolio. Returns the updated portfolio record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the members being removed.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioResponseData}
     */
    removeMembersForPortfolio(body, portfolio_gid, opts) {

        return this.removeMembersForPortfolioWithHttpInfo(body, portfolio_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Update a portfolio
     * An existing portfolio can be updated by making a PUT request on the URL for that portfolio. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated portfolio record.
     * @param {module:model/Object} body The updated fields for the portfolio.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updatePortfolioWithHttpInfo(body, portfolio_gid, opts) {
        opts = opts || {};
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling updatePortfolio");
        }
        // verify the required parameter 'portfolio_gid' is set
        if (portfolio_gid === undefined || portfolio_gid === null) {
            throw new Error("Missing the required parameter 'portfolio_gid' when calling updatePortfolio");
        }

        let pathParams = {
            'portfolio_gid': portfolio_gid
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
            '/portfolios/{portfolio_gid}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Update a portfolio
     * An existing portfolio can be updated by making a PUT request on the URL for that portfolio. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated portfolio record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The updated fields for the portfolio.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioResponseData}
     */
    updatePortfolio(body, portfolio_gid, opts) {

        return this.updatePortfolioWithHttpInfo(body, portfolio_gid, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
