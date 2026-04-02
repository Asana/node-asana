# Asana.TimeTrackingCategoriesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTimeTrackingCategory**](TimeTrackingCategoriesApi.md#createTimeTrackingCategory) | **POST** /time_tracking_categories | Create a time tracking category
[**deleteTimeTrackingCategory**](TimeTrackingCategoriesApi.md#deleteTimeTrackingCategory) | **DELETE** /time_tracking_categories/{time_tracking_category_gid} | Delete a time tracking category
[**getTimeTrackingCategories**](TimeTrackingCategoriesApi.md#getTimeTrackingCategories) | **GET** /time_tracking_categories | Get time tracking categories for a workspace
[**getTimeTrackingCategory**](TimeTrackingCategoriesApi.md#getTimeTrackingCategory) | **GET** /time_tracking_categories/{time_tracking_category_gid} | Get a time tracking category
[**getTimeTrackingEntriesForTimeTrackingCategory**](TimeTrackingCategoriesApi.md#getTimeTrackingEntriesForTimeTrackingCategory) | **GET** /time_tracking_categories/{time_tracking_category_gid}/time_tracking_entries | Get time tracking entries for a time tracking category
[**updateTimeTrackingCategory**](TimeTrackingCategoriesApi.md#updateTimeTrackingCategory) | **PUT** /time_tracking_categories/{time_tracking_category_gid} | Update a time tracking category

<a name="createTimeTrackingCategory"></a>
# **createTimeTrackingCategory**

Create a time tracking category

<b>Required scope: </b><code>time_tracking_categories:write</code>  Creates a new time tracking category in a given workspace.  Returns the record of the newly created time tracking category.

([more information](https://developers.asana.com/reference/createtimetrackingcategory))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timeTrackingCategoriesApiInstance = new Asana.TimeTrackingCategoriesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | Information about the time tracking category.
let opts = { 
    'opt_fields': "color,is_archived,name"
};
timeTrackingCategoriesApiInstance.createTimeTrackingCategory(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| Information about the time tracking category. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteTimeTrackingCategory"></a>
# **deleteTimeTrackingCategory**

Delete a time tracking category

<b>Required scope: </b><code>time_tracking_categories:delete</code>  Deletes a specific, existing time tracking category.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deletetimetrackingcategory))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timeTrackingCategoriesApiInstance = new Asana.TimeTrackingCategoriesApi(client);
let time_tracking_category_gid = "917392"; // String | Globally unique identifier for the time tracking category.

timeTrackingCategoriesApiInstance.deleteTimeTrackingCategory(time_tracking_category_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **time_tracking_category_gid** | **String**| Globally unique identifier for the time tracking category. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTimeTrackingCategories"></a>
# **getTimeTrackingCategories**

Get time tracking categories for a workspace

<b>Required scope: </b><code>time_tracking_categories:read</code>  Returns a paginated list of time tracking categories for a given workspace.

([more information](https://developers.asana.com/reference/gettimetrackingcategories))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timeTrackingCategoriesApiInstance = new Asana.TimeTrackingCategoriesApi(client);
let workspace = "12345"; // String | Globally unique identifier for the workspace.
let opts = { 
    'is_archived': false, 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "color,is_archived,name,offset,path,uri"
};
timeTrackingCategoriesApiInstance.getTimeTrackingCategories(workspace, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **String**| Globally unique identifier for the workspace. | 
 **is_archived** | **Boolean**| Filter by archived status. If not provided, defaults to returning non-archived categories. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTimeTrackingCategory"></a>
# **getTimeTrackingCategory**

Get a time tracking category

<b>Required scope: </b><code>time_tracking_categories:read</code>  Returns the complete time tracking category record for a single time tracking category.

([more information](https://developers.asana.com/reference/gettimetrackingcategory))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timeTrackingCategoriesApiInstance = new Asana.TimeTrackingCategoriesApi(client);
let time_tracking_category_gid = "917392"; // String | Globally unique identifier for the time tracking category.
let opts = { 
    'opt_fields': "color,is_archived,name"
};
timeTrackingCategoriesApiInstance.getTimeTrackingCategory(time_tracking_category_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **time_tracking_category_gid** | **String**| Globally unique identifier for the time tracking category. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTimeTrackingEntriesForTimeTrackingCategory"></a>
# **getTimeTrackingEntriesForTimeTrackingCategory**

Get time tracking entries for a time tracking category

<b>Required scope: </b><code>time_tracking_categories:read</code>  Returns a paginated list of time tracking entries filtered by a given time tracking category.

([more information](https://developers.asana.com/reference/gettimetrackingentriesfortimetrackingcategory))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timeTrackingCategoriesApiInstance = new Asana.TimeTrackingCategoriesApi(client);
let time_tracking_category_gid = "917392"; // String | Globally unique identifier for the time tracking category.
let opts = { 
    'start_date': "2025-01-01", 
    'end_date': "2025-12-31", 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "attributable_to,attributable_to.name,categories,categories.color,categories.name,created_by,created_by.name,duration_minutes,entered_on,offset,path,uri"
};
timeTrackingCategoriesApiInstance.getTimeTrackingEntriesForTimeTrackingCategory(time_tracking_category_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **time_tracking_category_gid** | **String**| Globally unique identifier for the time tracking category. | 
 **start_date** | **Date**| The start date for filtering time tracking entries by their entry date. | [optional] 
 **end_date** | **Date**| The end date for filtering time tracking entries by their entry date. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateTimeTrackingCategory"></a>
# **updateTimeTrackingCategory**

Update a time tracking category

<b>Required scope: </b><code>time_tracking_categories:write</code>  Updates the properties of a time tracking category. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated time tracking category record.

([more information](https://developers.asana.com/reference/updatetimetrackingcategory))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timeTrackingCategoriesApiInstance = new Asana.TimeTrackingCategoriesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The updated fields for the time tracking category.
let time_tracking_category_gid = "917392"; // String | Globally unique identifier for the time tracking category.
let opts = { 
    'opt_fields': "color,is_archived,name"
};
timeTrackingCategoriesApiInstance.updateTimeTrackingCategory(body, time_tracking_category_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The updated fields for the time tracking category. | 
 **time_tracking_category_gid** | **String**| Globally unique identifier for the time tracking category. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

