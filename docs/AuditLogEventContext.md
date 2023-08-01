# Asana.AuditLogEventContext

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_type** | **String** | The type of context. Can be one of &#x60;web&#x60;, &#x60;desktop&#x60;, &#x60;mobile&#x60;, &#x60;asana_support&#x60;, &#x60;asana&#x60;, &#x60;email&#x60;, or &#x60;api&#x60;. | [optional] 
**api_authentication_method** | **String** | The authentication method used in the context of an API request. Only present if the &#x60;context_type&#x60; is &#x60;api&#x60;. Can be one of &#x60;cookie&#x60;, &#x60;oauth&#x60;, &#x60;personal_access_token&#x60;, or &#x60;service_account&#x60;. | [optional] 
**client_ip_address** | **String** | The IP address of the client that initiated the event, if applicable. | [optional] 
**user_agent** | **String** | The user agent of the client that initiated the event, if applicable. | [optional] 
**oauth_app_name** | **String** | The name of the OAuth App that initiated the event. Only present if the &#x60;api_authentication_method&#x60; is &#x60;oauth&#x60;. | [optional] 

<a name="ContextTypeEnum"></a>
## Enum: ContextTypeEnum

* `web` (value: `"web"`)
* `desktop` (value: `"desktop"`)
* `mobile` (value: `"mobile"`)
* `asana_support` (value: `"asana_support"`)
* `asana` (value: `"asana"`)
* `email` (value: `"email"`)
* `api` (value: `"api"`)


<a name="ApiAuthenticationMethodEnum"></a>
## Enum: ApiAuthenticationMethodEnum

* `cookie` (value: `"cookie"`)
* `oauth` (value: `"oauth"`)
* `personal_access_token` (value: `"personal_access_token"`)
* `service_account` (value: `"service_account"`)

