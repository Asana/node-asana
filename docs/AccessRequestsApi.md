# Asana.AccessRequestsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveAccessRequest**](AccessRequestsApi.md#approveAccessRequest) | **POST** /access_requests/{access_request_gid}/approve | Approve an access request
[**createAccessRequest**](AccessRequestsApi.md#createAccessRequest) | **POST** /access_requests | Create an access request
[**getAccessRequests**](AccessRequestsApi.md#getAccessRequests) | **GET** /access_requests | Get access requests
[**rejectAccessRequest**](AccessRequestsApi.md#rejectAccessRequest) | **POST** /access_requests/{access_request_gid}/reject | Reject an access request

<a name="approveAccessRequest"></a>
# **approveAccessRequest**

Approve an access request

Approves an access request for a target object.

([more information](https://developers.asana.com/reference/approveaccessrequest))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let accessRequestsApiInstance = new Asana.AccessRequestsApi();
let access_request_gid = "12345"; // String | Globally unique identifier for the access request.

accessRequestsApiInstance.approveAccessRequest(access_request_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_request_gid** | **String**| Globally unique identifier for the access request. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="createAccessRequest"></a>
# **createAccessRequest**

Create an access request

Submits a new access request for a private object. Currently supports projects and portfolios.

([more information](https://developers.asana.com/reference/createaccessrequest))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let accessRequestsApiInstance = new Asana.AccessRequestsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | 

accessRequestsApiInstance.createAccessRequest(body).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="getAccessRequests"></a>
# **getAccessRequests**

Get access requests

Returns the pending access requests for a target object or a target object filtered by user.

([more information](https://developers.asana.com/reference/getaccessrequests))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let accessRequestsApiInstance = new Asana.AccessRequestsApi();
let target = "1331"; // String | Globally unique identifier for the target object.
let opts = { 
    'user': "me", 
    'opt_fields': "approval_status,message,requester,requester.name,target"
};
accessRequestsApiInstance.getAccessRequests(target, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | **String**| Globally unique identifier for the target object. | 
 **user** | **String**| A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user. | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="rejectAccessRequest"></a>
# **rejectAccessRequest**

Reject an access request

Rejects an access request for a target object.

([more information](https://developers.asana.com/reference/rejectaccessrequest))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let accessRequestsApiInstance = new Asana.AccessRequestsApi();
let access_request_gid = "12345"; // String | Globally unique identifier for the access request.

accessRequestsApiInstance.rejectAccessRequest(access_request_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_request_gid** | **String**| Globally unique identifier for the access request. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

