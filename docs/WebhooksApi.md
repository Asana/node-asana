# Asana.WebhooksApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhook**](WebhooksApi.md#createWebhook) | **POST** /webhooks | Establish a webhook
[**deleteWebhook**](WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks/{webhook_gid} | Delete a webhook
[**getWebhook**](WebhooksApi.md#getWebhook) | **GET** /webhooks/{webhook_gid} | Get a webhook
[**getWebhooks**](WebhooksApi.md#getWebhooks) | **GET** /webhooks | Get multiple webhooks
[**updateWebhook**](WebhooksApi.md#updateWebhook) | **PUT** /webhooks/{webhook_gid} | Update a webhook

<a name="createWebhook"></a>
# **createWebhook**

Establish a webhook

Establishing a webhook is a two-part process. First, a simple HTTP POST request initiates the creation similar to creating any other resource.  Next, in the middle of this request comes the confirmation handshake. When a webhook is created, we will send a test POST to the target with an `X-Hook-Secret` header. The target must respond with a `200 OK` or `204 No Content` and a matching `X-Hook-Secret` header to confirm that this webhook subscription is indeed expected. We strongly recommend storing this secret to be used to verify future webhook event signatures.  The POST request to create the webhook will then return with the status of the request. If you do not acknowledge the webhook’s confirmation handshake it will fail to setup, and you will receive an error in response to your attempt to create it. This means you need to be able to receive and complete the webhook *while* the POST request is in-flight (in other words, have a server that can handle requests asynchronously).  Invalid hostnames like localhost will receive a 403 Forbidden status code.  ``` # Request curl -H \"Authorization: Bearer <personal_access_token>\" \\ -X POST https://app.asana.com/api/1.0/webhooks \\ -d \"resource=8675309\" \\ -d \"target=https://example.com/receive-webhook/7654\" ```  ``` # Handshake sent to https://example.com/ POST /receive-webhook/7654 X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81 ```  ``` # Handshake response sent by example.com HTTP/1.1 200 X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81 ```  ``` # Response HTTP/1.1 201 {   \"data\": {     \"gid\": \"43214\",     \"resource\": {       \"gid\": \"8675309\",       \"name\": \"Bugs\"     },     \"target\": \"https://example.com/receive-webhook/7654\",     \"active\": false,     \"last_success_at\": null,     \"last_failure_at\": null,     \"last_failure_content\": null   },   \"X-Hook-Secret\": \"b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81\" } ```

([more information](https://developers.asana.com/reference/createwebhook))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let webhooksApiInstance = new Asana.WebhooksApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The webhook workspace and target.
let opts = { 
    'opt_fields': "active,created_at,delivery_retry_count,failure_deletion_timestamp,filters,filters.action,filters.fields,filters.resource_subtype,last_failure_at,last_failure_content,last_success_at,next_attempt_after,resource,resource.name,target"
};
webhooksApiInstance.createWebhook(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The webhook workspace and target. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteWebhook"></a>
# **deleteWebhook**

Delete a webhook

This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.

([more information](https://developers.asana.com/reference/deletewebhook))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let webhooksApiInstance = new Asana.WebhooksApi();
let webhook_gid = "12345"; // String | Globally unique identifier for the webhook.

webhooksApiInstance.deleteWebhook(webhook_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_gid** | **String**| Globally unique identifier for the webhook. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getWebhook"></a>
# **getWebhook**

Get a webhook

Returns the full record for the given webhook.

([more information](https://developers.asana.com/reference/getwebhook))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let webhooksApiInstance = new Asana.WebhooksApi();
let webhook_gid = "12345"; // String | Globally unique identifier for the webhook.
let opts = { 
    'opt_fields': "active,created_at,delivery_retry_count,failure_deletion_timestamp,filters,filters.action,filters.fields,filters.resource_subtype,last_failure_at,last_failure_content,last_success_at,next_attempt_after,resource,resource.name,target"
};
webhooksApiInstance.getWebhook(webhook_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_gid** | **String**| Globally unique identifier for the webhook. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getWebhooks"></a>
# **getWebhooks**

Get multiple webhooks

Get the compact representation of all webhooks your app has registered for the authenticated user in the given workspace.

([more information](https://developers.asana.com/reference/getwebhooks))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let webhooksApiInstance = new Asana.WebhooksApi();
let workspace = "1331"; // String | The workspace to query for webhooks in.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'resource': "51648", 
    'opt_fields': "active,created_at,delivery_retry_count,failure_deletion_timestamp,filters,filters.action,filters.fields,filters.resource_subtype,last_failure_at,last_failure_content,last_success_at,next_attempt_after,offset,path,resource,resource.name,target,uri"
};
webhooksApiInstance.getWebhooks(workspace, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **String**| The workspace to query for webhooks in. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **resource** | **String**| Only return webhooks for the given resource. | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateWebhook"></a>
# **updateWebhook**

Update a webhook

An existing webhook's filters can be updated by making a PUT request on the URL for that webhook. Note that the webhook's previous `filters` array will be completely overwritten by the `filters` sent in the PUT request.

([more information](https://developers.asana.com/reference/updatewebhook))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let webhooksApiInstance = new Asana.WebhooksApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The updated filters for the webhook.
let webhook_gid = "12345"; // String | Globally unique identifier for the webhook.
let opts = { 
    'opt_fields': "active,created_at,delivery_retry_count,failure_deletion_timestamp,filters,filters.action,filters.fields,filters.resource_subtype,last_failure_at,last_failure_content,last_success_at,next_attempt_after,resource,resource.name,target"
};
webhooksApiInstance.updateWebhook(body, webhook_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The updated filters for the webhook. | 
 **webhook_gid** | **String**| Globally unique identifier for the webhook. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

