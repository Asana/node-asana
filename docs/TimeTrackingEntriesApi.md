# Asana.TimeTrackingEntriesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTimeTrackingEntry**](TimeTrackingEntriesApi.md#createTimeTrackingEntry) | **POST** /tasks/{task_gid}/time_tracking_entries | Create a time tracking entry
[**deleteTimeTrackingEntry**](TimeTrackingEntriesApi.md#deleteTimeTrackingEntry) | **DELETE** /time_tracking_entries/{time_tracking_entry_gid} | Delete a time tracking entry
[**getTimeTrackingEntriesForTask**](TimeTrackingEntriesApi.md#getTimeTrackingEntriesForTask) | **GET** /tasks/{task_gid}/time_tracking_entries | Get time tracking entries for a task
[**getTimeTrackingEntry**](TimeTrackingEntriesApi.md#getTimeTrackingEntry) | **GET** /time_tracking_entries/{time_tracking_entry_gid} | Get a time tracking entry
[**updateTimeTrackingEntry**](TimeTrackingEntriesApi.md#updateTimeTrackingEntry) | **PUT** /time_tracking_entries/{time_tracking_entry_gid} | Update a time tracking entry

<a name="createTimeTrackingEntry"></a>
# **createTimeTrackingEntry**
> TimeTrackingEntryBaseData createTimeTrackingEntry(bodytask_gid, opts)

Create a time tracking entry

Creates a time tracking entry on a given task.  Returns the record of the newly created time tracking entry.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TimeTrackingEntriesApi();
let body = new Asana.TaskGidTimeTrackingEntriesBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TaskGidTimeTrackingEntriesBody | Information about the time tracking entry.
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
  'opt_fields': ["created_at","created_by","created_by.name","duration_minutes","entered_on","task","task.created_by","task.name","task.resource_subtype"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createTimeTrackingEntry(bodytask_gid, opts, (error, data, response) => {
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
 **body** | [**TaskGidTimeTrackingEntriesBody**](TaskGidTimeTrackingEntriesBody.md)| Information about the time tracking entry. | 
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TimeTrackingEntryBaseData**](TimeTrackingEntryBaseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteTimeTrackingEntry"></a>
# **deleteTimeTrackingEntry**
> EmptyResponseData deleteTimeTrackingEntry(time_tracking_entry_gid)

Delete a time tracking entry

A specific, existing time tracking entry can be deleted by making a &#x60;DELETE&#x60; request on the URL for that time tracking entry.  Returns an empty data record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TimeTrackingEntriesApi();
let time_tracking_entry_gid = "917392"; // String | Globally unique identifier for the time tracking entry.

apiInstance.deleteTimeTrackingEntry(time_tracking_entry_gid, (error, data, response) => {
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
 **time_tracking_entry_gid** | **String**| Globally unique identifier for the time tracking entry. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTimeTrackingEntriesForTask"></a>
# **getTimeTrackingEntriesForTask**
> TimeTrackingEntryCompactArray getTimeTrackingEntriesForTask(task_gid, opts)

Get time tracking entries for a task

Returns time tracking entries for a given task.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TimeTrackingEntriesApi();
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'opt_fields': ["created_by","created_by.name","duration_minutes","entered_on","offset","path","uri"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getTimeTrackingEntriesForTask(task_gid, opts, (error, data, response) => {
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
 **task_gid** | **String**| The task to operate on. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TimeTrackingEntryCompactArray**](TimeTrackingEntryCompactArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTimeTrackingEntry"></a>
# **getTimeTrackingEntry**
> TimeTrackingEntryBaseData getTimeTrackingEntry(time_tracking_entry_gid, opts)

Get a time tracking entry

Returns the complete time tracking entry record for a single time tracking entry.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TimeTrackingEntriesApi();
let time_tracking_entry_gid = "917392"; // String | Globally unique identifier for the time tracking entry.
let opts = { 
  'opt_fields': ["created_at","created_by","created_by.name","duration_minutes","entered_on","task","task.created_by","task.name","task.resource_subtype"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getTimeTrackingEntry(time_tracking_entry_gid, opts, (error, data, response) => {
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
 **time_tracking_entry_gid** | **String**| Globally unique identifier for the time tracking entry. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TimeTrackingEntryBaseData**](TimeTrackingEntryBaseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateTimeTrackingEntry"></a>
# **updateTimeTrackingEntry**
> TimeTrackingEntryBaseData updateTimeTrackingEntry(bodytime_tracking_entry_gid, opts)

Update a time tracking entry

A specific, existing time tracking entry can be updated by making a &#x60;PUT&#x60; request on the URL for that time tracking entry. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated time tracking entry record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TimeTrackingEntriesApi();
let body = new Asana.TimeTrackingEntriesTimeTrackingEntryGidBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TimeTrackingEntriesTimeTrackingEntryGidBody | The updated fields for the time tracking entry.
let time_tracking_entry_gid = "917392"; // String | Globally unique identifier for the time tracking entry.
let opts = { 
  'opt_fields': ["created_at","created_by","created_by.name","duration_minutes","entered_on","task","task.created_by","task.name","task.resource_subtype"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.updateTimeTrackingEntry(bodytime_tracking_entry_gid, opts, (error, data, response) => {
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
 **body** | [**TimeTrackingEntriesTimeTrackingEntryGidBody**](TimeTrackingEntriesTimeTrackingEntryGidBody.md)| The updated fields for the time tracking entry. | 
 **time_tracking_entry_gid** | **String**| Globally unique identifier for the time tracking entry. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TimeTrackingEntryBaseData**](TimeTrackingEntryBaseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

