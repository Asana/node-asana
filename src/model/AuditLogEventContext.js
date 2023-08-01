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
import {ApiClient} from '../ApiClient';

/**
 * The AuditLogEventContext model module.
 * @module model/AuditLogEventContext
 * @version 2.0.0
 */
export class AuditLogEventContext {
  /**
   * Constructs a new <code>AuditLogEventContext</code>.
   * The context from which this event originated.
   * @alias module:model/AuditLogEventContext
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AuditLogEventContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuditLogEventContext} obj Optional instance to populate.
   * @return {module:model/AuditLogEventContext} The populated <code>AuditLogEventContext</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AuditLogEventContext();
      if (data.hasOwnProperty('context_type'))
        obj.context_type = ApiClient.convertToType(data['context_type'], 'String');
      if (data.hasOwnProperty('api_authentication_method'))
        obj.api_authentication_method = ApiClient.convertToType(data['api_authentication_method'], 'String');
      if (data.hasOwnProperty('client_ip_address'))
        obj.client_ip_address = ApiClient.convertToType(data['client_ip_address'], 'String');
      if (data.hasOwnProperty('user_agent'))
        obj.user_agent = ApiClient.convertToType(data['user_agent'], 'String');
      if (data.hasOwnProperty('oauth_app_name'))
        obj.oauth_app_name = ApiClient.convertToType(data['oauth_app_name'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>context_type</code> property.
 * @enum {String}
 * @readonly
 */
AuditLogEventContext.ContextTypeEnum = {
  /**
   * value: "web"
   * @const
   */
  web: "web",

  /**
   * value: "desktop"
   * @const
   */
  desktop: "desktop",

  /**
   * value: "mobile"
   * @const
   */
  mobile: "mobile",

  /**
   * value: "asana_support"
   * @const
   */
  asana_support: "asana_support",

  /**
   * value: "asana"
   * @const
   */
  asana: "asana",

  /**
   * value: "email"
   * @const
   */
  email: "email",

  /**
   * value: "api"
   * @const
   */
  api: "api"
};
/**
 * The type of context. Can be one of `web`, `desktop`, `mobile`, `asana_support`, `asana`, `email`, or `api`.
 * @member {module:model/AuditLogEventContext.ContextTypeEnum} context_type
 */
AuditLogEventContext.prototype.context_type = undefined;

/**
 * Allowed values for the <code>api_authentication_method</code> property.
 * @enum {String}
 * @readonly
 */
AuditLogEventContext.ApiAuthenticationMethodEnum = {
  /**
   * value: "cookie"
   * @const
   */
  cookie: "cookie",

  /**
   * value: "oauth"
   * @const
   */
  oauth: "oauth",

  /**
   * value: "personal_access_token"
   * @const
   */
  personal_access_token: "personal_access_token",

  /**
   * value: "service_account"
   * @const
   */
  service_account: "service_account"
};
/**
 * The authentication method used in the context of an API request. Only present if the `context_type` is `api`. Can be one of `cookie`, `oauth`, `personal_access_token`, or `service_account`.
 * @member {module:model/AuditLogEventContext.ApiAuthenticationMethodEnum} api_authentication_method
 */
AuditLogEventContext.prototype.api_authentication_method = undefined;

/**
 * The IP address of the client that initiated the event, if applicable.
 * @member {String} client_ip_address
 */
AuditLogEventContext.prototype.client_ip_address = undefined;

/**
 * The user agent of the client that initiated the event, if applicable.
 * @member {String} user_agent
 */
AuditLogEventContext.prototype.user_agent = undefined;

/**
 * The name of the OAuth App that initiated the event. Only present if the `api_authentication_method` is `oauth`.
 * @member {String} oauth_app_name
 */
AuditLogEventContext.prototype.oauth_app_name = undefined;

