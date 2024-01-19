# Asana.StatusUpdatesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createStatusForObject**](StatusUpdatesApi.md#createStatusForObject) | **POST** /status_updates | Create a status update
[**deleteStatus**](StatusUpdatesApi.md#deleteStatus) | **DELETE** /status_updates/{status_update_gid} | Delete a status update
[**getStatus**](StatusUpdatesApi.md#getStatus) | **GET** /status_updates/{status_update_gid} | Get a status update
[**getStatusesForObject**](StatusUpdatesApi.md#getStatusesForObject) | **GET** /status_updates | Get status updates from an object

<a name="createStatusForObject"></a>
# **createStatusForObject**

Create a status update

Creates a new status update on an object. Returns the full record of the newly created status update.

([more information](https://developers.asana.com/reference/createstatusforobject))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let statusUpdatesApiInstance = new Asana.StatusUpdatesApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The status update to create.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "author,author.name,created_at,created_by,created_by.name,hearted,hearts,hearts.user,hearts.user.name,html_text,liked,likes,likes.user,likes.user.name,modified_at,num_hearts,num_likes,parent,parent.name,resource_subtype,status_type,text,title"
};
statusUpdatesApiInstance.createStatusForObject(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The status update to create. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteStatus"></a>
# **deleteStatus**

Delete a status update

Deletes a specific, existing status update.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deletestatus))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let statusUpdatesApiInstance = new Asana.StatusUpdatesApi();
let status_update_gid = "321654"; // String | The status update to get.

statusUpdatesApiInstance.deleteStatus(status_update_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status_update_gid** | **String**| The status update to get. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getStatus"></a>
# **getStatus**

Get a status update

Returns the complete record for a single status update.

([more information](https://developers.asana.com/reference/getstatus))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let statusUpdatesApiInstance = new Asana.StatusUpdatesApi();
let status_update_gid = "321654"; // String | The status update to get.
let opts = { 
    'opt_fields': "author,author.name,created_at,created_by,created_by.name,hearted,hearts,hearts.user,hearts.user.name,html_text,liked,likes,likes.user,likes.user.name,modified_at,num_hearts,num_likes,parent,parent.name,resource_subtype,status_type,text,title"
};
statusUpdatesApiInstance.getStatus(status_update_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status_update_gid** | **String**| The status update to get. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getStatusesForObject"></a>
# **getStatusesForObject**

Get status updates from an object

Returns the compact status update records for all updates on the object.

([more information](https://developers.asana.com/reference/getstatusesforobject))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let statusUpdatesApiInstance = new Asana.StatusUpdatesApi();
let parent = "159874"; // String | Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'created_since': "2012-02-22T02:06:58.158Z", 
    'opt_fields': "author,author.name,created_at,created_by,created_by.name,hearted,hearts,hearts.user,hearts.user.name,html_text,liked,likes,likes.user,likes.user.name,modified_at,num_hearts,num_likes,offset,parent,parent.name,path,resource_subtype,status_type,text,title,uri"
};
statusUpdatesApiInstance.getStatusesForObject(parent, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **String**| Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **created_since** | **Date**| Only return statuses that have been created since the given time. | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

