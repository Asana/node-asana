# Asana.TimesheetApprovalStatusesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTimesheetApprovalStatus**](TimesheetApprovalStatusesApi.md#createTimesheetApprovalStatus) | **POST** /timesheet_approval_statuses | Create a timesheet approval status
[**getTimesheetApprovalStatus**](TimesheetApprovalStatusesApi.md#getTimesheetApprovalStatus) | **GET** /timesheet_approval_statuses/{timesheet_approval_status_gid} | Get a timesheet approval status
[**getTimesheetApprovalStatuses**](TimesheetApprovalStatusesApi.md#getTimesheetApprovalStatuses) | **GET** /timesheet_approval_statuses | Get multiple timesheet approval statuses
[**updateTimesheetApprovalStatus**](TimesheetApprovalStatusesApi.md#updateTimesheetApprovalStatus) | **PUT** /timesheet_approval_statuses/{timesheet_approval_status_gid} | Update a timesheet approval status

<a name="createTimesheetApprovalStatus"></a>
# **createTimesheetApprovalStatus**

Create a timesheet approval status

<b>Required scope: </b><code>timesheet_approval_statuses:write</code>  Creates a new timesheet approval status for a user's timesheet week. The start_date must be a Monday and end_date must be the following Sunday. Returns the created timesheet approval status record.

([more information](https://developers.asana.com/reference/createtimesheetapprovalstatus))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timesheetApprovalStatusesApiInstance = new Asana.TimesheetApprovalStatusesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The timesheet approval status to create.
let opts = { 
    'opt_fields': "approval_status,created_at,end_date,start_date,user,user.name,workspace,workspace.name"
};
timesheetApprovalStatusesApiInstance.createTimesheetApprovalStatus(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The timesheet approval status to create. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="getTimesheetApprovalStatus"></a>
# **getTimesheetApprovalStatus**

Get a timesheet approval status

<b>Required scope: </b><code>timesheet_approval_statuses:read</code>  Returns the complete timesheet approval status record for a single timesheet approval status.

([more information](https://developers.asana.com/reference/gettimesheetapprovalstatus))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timesheetApprovalStatusesApiInstance = new Asana.TimesheetApprovalStatusesApi(client);
let timesheet_approval_status_gid = "917392"; // String | Globally unique identifier for the timesheet approval status.
let opts = { 
    'opt_fields': "approval_status,created_at,end_date,start_date,user,user.name,workspace,workspace.name"
};
timesheetApprovalStatusesApiInstance.getTimesheetApprovalStatus(timesheet_approval_status_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timesheet_approval_status_gid** | **String**| Globally unique identifier for the timesheet approval status. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTimesheetApprovalStatuses"></a>
# **getTimesheetApprovalStatuses**

Get multiple timesheet approval statuses

<b>Required scope: </b><code>timesheet_approval_statuses:read</code>  Returns a list of timesheet approval statuses filtered by workspace and optionally by user, date range, or approval status.

([more information](https://developers.asana.com/reference/gettimesheetapprovalstatuses))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timesheetApprovalStatusesApiInstance = new Asana.TimesheetApprovalStatusesApi(client);
let workspace = "12345"; // String | Globally unique identifier for the workspace.
let opts = { 
    'user': "67890", 
    'from_date': "2025-11-01", 
    'to_date': "2025-11-30", 
    'approval_statuses': "draft", 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "approval_status,created_at,end_date,offset,path,start_date,uri,user,user.name,workspace,workspace.name"
};
timesheetApprovalStatusesApiInstance.getTimesheetApprovalStatuses(workspace, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **String**| Globally unique identifier for the workspace. | 
 **user** | **String**| Globally unique identifier for the user to filter timesheet approval statuses by. | [optional] 
 **from_date** | **Date**| The start date for filtering timesheet approval statuses. | [optional] 
 **to_date** | **Date**| The end date for filtering timesheet approval statuses. | [optional] 
 **approval_statuses** | **String**| Filter by approval status. Can be one or more of draft, submitted, approved, or rejected. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateTimesheetApprovalStatus"></a>
# **updateTimesheetApprovalStatus**

Update a timesheet approval status

<b>Required scope: </b><code>timesheet_approval_statuses:write</code>  Updates the approval status of a timesheet approval status. The update supports state transitions such as submitting, recalling submission, approving, and rejecting. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged. Invalid transitions will result in a 400 error.

([more information](https://developers.asana.com/reference/updatetimesheetapprovalstatus))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timesheetApprovalStatusesApiInstance = new Asana.TimesheetApprovalStatusesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The fields to update on the timesheet approval status.
let timesheet_approval_status_gid = "917392"; // String | Globally unique identifier for the timesheet approval status.
let opts = { 
    'opt_fields': "approval_status,created_at,end_date,start_date,user,user.name,workspace,workspace.name"
};
timesheetApprovalStatusesApiInstance.updateTimesheetApprovalStatus(body, timesheet_approval_status_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The fields to update on the timesheet approval status. | 
 **timesheet_approval_status_gid** | **String**| Globally unique identifier for the timesheet approval status. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

