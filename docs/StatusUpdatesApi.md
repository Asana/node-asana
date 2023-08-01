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
> StatusUpdateResponseData createStatusForObject(body, opts)

Create a status update

Creates a new status update on an object. Returns the full record of the newly created status update.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.StatusUpdatesApi();
let body = new Asana.StatusUpdatesBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // StatusUpdatesBody | The status update to create.
let opts = { 
  'limit': 50 // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9" // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'opt_fields': ["author","author.name","created_at","created_by","created_by.name","hearted","hearts","hearts.user","hearts.user.name","html_text","liked","likes","likes.user","likes.user.name","modified_at","num_hearts","num_likes","parent","parent.name","resource_subtype","status_type","text","title"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createStatusForObject(body, opts, (error, data, response) => {
  if (error) {
  console.error(error);
  } else {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**StatusUpdatesBody**](StatusUpdatesBody.md)| The status update to create. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**StatusUpdateResponseData**](StatusUpdateResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteStatus"></a>
# **deleteStatus**
> EmptyResponseData deleteStatus(status_update_gid)

Delete a status update

Deletes a specific, existing status update.  Returns an empty data record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.StatusUpdatesApi();
let status_update_gid = "321654"; // String | The status update to get.

apiInstance.deleteStatus(status_update_gid, (error, data, response) => {
  if (error) {
  console.error(error);
  } else {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status_update_gid** | **String**| The status update to get. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getStatus"></a>
# **getStatus**
> StatusUpdateResponseData getStatus(status_update_gid, opts)

Get a status update

Returns the complete record for a single status update.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.StatusUpdatesApi();
let status_update_gid = "321654"; // String | The status update to get.
let opts = { 
  'opt_fields': ["author","author.name","created_at","created_by","created_by.name","hearted","hearts","hearts.user","hearts.user.name","html_text","liked","likes","likes.user","likes.user.name","modified_at","num_hearts","num_likes","parent","parent.name","resource_subtype","status_type","text","title"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getStatus(status_update_gid, opts, (error, data, response) => {
  if (error) {
  console.error(error);
  } else {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status_update_gid** | **String**| The status update to get. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**StatusUpdateResponseData**](StatusUpdateResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getStatusesForObject"></a>
# **getStatusesForObject**
> StatusUpdateResponseArray getStatusesForObject(parent, opts)

Get status updates from an object

Returns the compact status update records for all updates on the object.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.StatusUpdatesApi();
let parent = "159874"; // String | Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal.
let opts = { 
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'created_since': new Date("2012-02-22T02:06:58.158Z"), // Date | Only return statuses that have been created since the given time.
  'opt_fields': ["author","author.name","created_at","created_by","created_by.name","hearted","hearts","hearts.user","hearts.user.name","html_text","liked","likes","likes.user","likes.user.name","modified_at","num_hearts","num_likes","offset","parent","parent.name","path","resource_subtype","status_type","text","title","uri"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getStatusesForObject(parent, opts, (error, data, response) => {
  if (error) {
  console.error(error);
  } else {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **String**| Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **created_since** | **Date**| Only return statuses that have been created since the given time. | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**StatusUpdateResponseArray**](StatusUpdateResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

