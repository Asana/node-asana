# Asana.AllocationsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAllocation**](AllocationsApi.md#createAllocation) | **POST** /allocations | Create an allocation
[**deleteAllocation**](AllocationsApi.md#deleteAllocation) | **DELETE** /allocations/{allocation_gid} | Delete an allocation
[**getAllocation**](AllocationsApi.md#getAllocation) | **GET** /allocations/{allocation_gid} | Get an allocation
[**getAllocations**](AllocationsApi.md#getAllocations) | **GET** /allocations | Get multiple allocations
[**updateAllocation**](AllocationsApi.md#updateAllocation) | **PUT** /allocations/{allocation_gid} | Update an allocation

<a name="createAllocation"></a>
# **createAllocation**

Create an allocation

Creates a new allocation.  Returns the full record of the newly created allocation.

([more information](https://developers.asana.com/reference/createallocation))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let allocationsApiInstance = new Asana.AllocationsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The allocation to create.
let opts = { 
    'opt_fields': "assignee,assignee.name,created_by,created_by.name,effort,effort.type,effort.value,end_date,parent,parent.name,resource_subtype,start_date"
};
allocationsApiInstance.createAllocation(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The allocation to create. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteAllocation"></a>
# **deleteAllocation**

Delete an allocation

A specific, existing allocation can be deleted by making a DELETE request on the URL for that allocation.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deleteallocation))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let allocationsApiInstance = new Asana.AllocationsApi();
let allocation_gid = "77688"; // String | Globally unique identifier for the allocation.

allocationsApiInstance.deleteAllocation(allocation_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocation_gid** | **String**| Globally unique identifier for the allocation. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getAllocation"></a>
# **getAllocation**

Get an allocation

Returns the complete allocation record for a single allocation.

([more information](https://developers.asana.com/reference/getallocation))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let allocationsApiInstance = new Asana.AllocationsApi();
let allocation_gid = "77688"; // String | Globally unique identifier for the allocation.
let opts = { 
    'opt_fields': "assignee,assignee.name,created_by,created_by.name,effort,effort.type,effort.value,end_date,parent,parent.name,resource_subtype,start_date"
};
allocationsApiInstance.getAllocation(allocation_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocation_gid** | **String**| Globally unique identifier for the allocation. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getAllocations"></a>
# **getAllocations**

Get multiple allocations

Returns a list of allocations filtered to a specific project or user.

([more information](https://developers.asana.com/reference/getallocations))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let allocationsApiInstance = new Asana.AllocationsApi();
let opts = { 
    'parent': "77688", 
    'assignee': "12345", 
    'workspace': "98765", 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "assignee,assignee.name,created_by,created_by.name,effort,effort.type,effort.value,end_date,offset,parent,parent.name,path,resource_subtype,start_date,uri"
};
allocationsApiInstance.getAllocations(opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **String**| Globally unique identifier for the project to filter allocations by. | [optional] 
 **assignee** | **String**| Globally unique identifier for the user the allocation is assigned to. | [optional] 
 **workspace** | **String**| Globally unique identifier for the workspace. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateAllocation"></a>
# **updateAllocation**

Update an allocation

An existing allocation can be updated by making a PUT request on the URL for that allocation. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated allocation record.

([more information](https://developers.asana.com/reference/updateallocation))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let allocationsApiInstance = new Asana.AllocationsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The updated fields for the allocation.
let allocation_gid = "77688"; // String | Globally unique identifier for the allocation.
let opts = { 
    'opt_fields': "assignee,assignee.name,created_by,created_by.name,effort,effort.type,effort.value,end_date,parent,parent.name,resource_subtype,start_date"
};
allocationsApiInstance.updateAllocation(body, allocation_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The updated fields for the allocation. | 
 **allocation_gid** | **String**| Globally unique identifier for the allocation. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

