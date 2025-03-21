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
* Rules service.
* @module api/RulesApi
* @version 3.0.16
*/
export class RulesApi {

    /**
    * Constructs a new RulesApi. 
    * @alias module:api/RulesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Trigger a rule
     * Trigger a rule which uses an [\&quot;incoming web request\&quot;](/docs/incoming-web-requests) trigger.
     * @param {module:model/Object} body A dictionary of variables accessible from within the rule.
     * @param {String} rule_trigger_gid The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    triggerRuleWithHttpInfo(body, rule_trigger_gid) {
        
        let postBody = body;
        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling triggerRule");
        }
        // verify the required parameter 'rule_trigger_gid' is set
        if (rule_trigger_gid === undefined || rule_trigger_gid === null) {
            throw new Error("Missing the required parameter 'rule_trigger_gid' when calling triggerRule");
        }

        let pathParams = {
            'rule_trigger_gid': rule_trigger_gid
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
            '/rule_triggers/{rule_trigger_gid}/run', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Trigger a rule
     * Trigger a rule which uses an [\&quot;incoming web request\&quot;](/docs/incoming-web-requests) trigger.
     * @param {<&vendorExtensions.x-jsdoc-type>} body A dictionary of variables accessible from within the rule.
     * @param {<&vendorExtensions.x-jsdoc-type>} rule_trigger_gid The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RuleTriggerResponseData}
     */
    triggerRule(body, rule_trigger_gid) {

        return this.triggerRuleWithHttpInfo(body, rule_trigger_gid)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

}
