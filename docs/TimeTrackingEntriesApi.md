# Asana.TimeTrackingEntriesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTimeTrackingEntry**](TimeTrackingEntriesApi.md#createTimeTrackingEntry) | **POST** /tasks/{task_gid}/time_tracking_entries | Create a time tracking entry
[**deleteTimeTrackingEntry**](TimeTrackingEntriesApi.md#deleteTimeTrackingEntry) | **DELETE** /time_tracking_entries/{time_tracking_entry_gid} | Delete a time tracking entry
[**getTimeTrackingEntries**](TimeTrackingEntriesApi.md#getTimeTrackingEntries) | **GET** /time_tracking_entries | Get multiple time tracking entries
[**getTimeTrackingEntriesForTask**](TimeTrackingEntriesApi.md#getTimeTrackingEntriesForTask) | **GET** /tasks/{task_gid}/time_tracking_entries | Get time tracking entries for a task
[**getTimeTrackingEntry**](TimeTrackingEntriesApi.md#getTimeTrackingEntry) | **GET** /time_tracking_entries/{time_tracking_entry_gid} | Get a time tracking entry
[**updateTimeTrackingEntry**](TimeTrackingEntriesApi.md#updateTimeTrackingEntry) | **PUT** /time_tracking_entries/{time_tracking_entry_gid} | Update a time tracking entry

<a name="createTimeTrackingEntry"></a>
# **createTimeTrackingEntry**

Create a time tracking entry

Creates a time tracking entry on a given task.  Returns the record of the newly created time tracking entry.

([more information](https://developers.asana.com/reference/createtimetrackingentry))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timeTrackingEntriesApiInstance = new Asana.TimeTrackingEntriesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | Information about the time tracking entry.
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': "approval_status,attributable_to,attributable_to.name,billable_status,created_at,created_by,created_by.name,description,duration_minutes,entered_on,task,task.created_by,task.name,task.resource_subtype"
};
timeTrackingEntriesApiInstance.createTimeTrackingEntry(body, task_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| Information about the time tracking entry. | 
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteTimeTrackingEntry"></a>
# **deleteTimeTrackingEntry**

Delete a time tracking entry

A specific, existing time tracking entry can be deleted by making a `DELETE` request on the URL for that time tracking entry.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deletetimetrackingentry))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timeTrackingEntriesApiInstance = new Asana.TimeTrackingEntriesApi(client);
let time_tracking_entry_gid = "917392"; // String | Globally unique identifier for the time tracking entry.

timeTrackingEntriesApiInstance.deleteTimeTrackingEntry(time_tracking_entry_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **time_tracking_entry_gid** | **String**| Globally unique identifier for the time tracking entry. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTimeTrackingEntries"></a>
# **getTimeTrackingEntries**

Get multiple time tracking entries

<b>Required scope: </b><code>time_tracking_entries:read</code>  Returns a list of time tracking entries filtered to a task, attributed project, portfolio or user.

([more information](https://developers.asana.com/reference/gettimetrackingentries))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timeTrackingEntriesApiInstance = new Asana.TimeTrackingEntriesApi(client);
let opts = { 
    'task': "12345", 
    'attributable_to': "12345", 
    'portfolio': "12345", 
    'user': "12345", 
    'workspace': "98765", 
    'entered_on_start_date': "2025-01-01", 
    'entered_on_end_date': "2025-12-31", 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "attributable_to,attributable_to.name,created_by,created_by.name,duration_minutes,entered_on,offset,path,uri"
};
timeTrackingEntriesApiInstance.getTimeTrackingEntries(opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task** | **String**| Globally unique identifier for the task to filter time tracking entries by. | [optional] 
 **attributable_to** | **String**| Globally unique identifier for the project the time tracking entries are attributed to. | [optional] 
 **portfolio** | **String**| Globally unique identifier for the portfolio to filter time tracking entries by. | [optional] 
 **user** | **String**| Globally unique identifier for the user to filter time tracking entries by. | [optional] 
 **workspace** | **String**| Globally unique identifier for the workspace. At least one of &#x60;entered_on_start_date&#x60; or &#x60;entered_on_end_date&#x60; must be provided when filtering by workspace. | [optional] 
 **entered_on_start_date** | **Date**| The start date for filtering time tracking entries by when they were entered. | [optional] 
 **entered_on_end_date** | **Date**| The end date for filtering time tracking entries by when they were entered. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTimeTrackingEntriesForTask"></a>
# **getTimeTrackingEntriesForTask**

Get time tracking entries for a task

<b>Required scope: </b><code>time_tracking_entries:read</code>  Returns time tracking entries for a given task.

([more information](https://developers.asana.com/reference/gettimetrackingentriesfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timeTrackingEntriesApiInstance = new Asana.TimeTrackingEntriesApi(client);
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "attributable_to,attributable_to.name,created_by,created_by.name,duration_minutes,entered_on,offset,path,uri"
};
timeTrackingEntriesApiInstance.getTimeTrackingEntriesForTask(task_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_gid** | **String**| The task to operate on. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTimeTrackingEntry"></a>
# **getTimeTrackingEntry**

Get a time tracking entry

<b>Required scope: </b><code>time_tracking_entries:read</code>  Returns the complete time tracking entry record for a single time tracking entry.

([more information](https://developers.asana.com/reference/gettimetrackingentry))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timeTrackingEntriesApiInstance = new Asana.TimeTrackingEntriesApi(client);
let time_tracking_entry_gid = "917392"; // String | Globally unique identifier for the time tracking entry.
let opts = { 
    'opt_fields': "approval_status,attributable_to,attributable_to.name,billable_status,created_at,created_by,created_by.name,description,duration_minutes,entered_on,task,task.created_by,task.name,task.resource_subtype"
};
timeTrackingEntriesApiInstance.getTimeTrackingEntry(time_tracking_entry_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **time_tracking_entry_gid** | **String**| Globally unique identifier for the time tracking entry. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateTimeTrackingEntry"></a>
# **updateTimeTrackingEntry**

Update a time tracking entry

A specific, existing time tracking entry can be updated by making a `PUT` request on the URL for that time tracking entry. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated time tracking entry record.

([more information](https://developers.asana.com/reference/updatetimetrackingentry))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timeTrackingEntriesApiInstance = new Asana.TimeTrackingEntriesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The updated fields for the time tracking entry.
let time_tracking_entry_gid = "917392"; // String | Globally unique identifier for the time tracking entry.
let opts = { 
    'opt_fields': "approval_status,attributable_to,attributable_to.name,billable_status,created_at,created_by,created_by.name,description,duration_minutes,entered_on,task,task.created_by,task.name,task.resource_subtype"
};
timeTrackingEntriesApiInstance.updateTimeTrackingEntry(body, time_tracking_entry_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The updated fields for the time tracking entry. | 
 **time_tracking_entry_gid** | **String**| Globally unique identifier for the time tracking entry. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

