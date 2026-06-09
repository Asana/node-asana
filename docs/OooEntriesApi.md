# Asana.OooEntriesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOooEntry**](OooEntriesApi.md#createOooEntry) | **POST** /ooo_entries | Create an OOO entry
[**deleteOooEntry**](OooEntriesApi.md#deleteOooEntry) | **DELETE** /ooo_entries/{ooo_entry_gid} | Delete an OOO entry
[**getOooEntries**](OooEntriesApi.md#getOooEntries) | **GET** /ooo_entries | Get OOO entries for a user
[**getOooEntry**](OooEntriesApi.md#getOooEntry) | **GET** /ooo_entries/{ooo_entry_gid} | Get an OOO entry
[**updateOooEntry**](OooEntriesApi.md#updateOooEntry) | **PUT** /ooo_entries/{ooo_entry_gid} | Update an OOO entry

<a name="createOooEntry"></a>
# **createOooEntry**

Create an OOO entry

<b>Required scope: </b><code>ooo_entries:write</code>  Creates a new OOO entry.  Returns the full record of the newly created OOO entry.

([more information](https://developers.asana.com/reference/createoooentry))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let oooEntriesApiInstance = new Asana.OooEntriesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The OOO entry to create.
let opts = { 
    'opt_fields': "created_by,created_by.name,end_date,start_date,user,user.name"
};
oooEntriesApiInstance.createOooEntry(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The OOO entry to create. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteOooEntry"></a>
# **deleteOooEntry**

Delete an OOO entry

<b>Required scope: </b><code>ooo_entries:delete</code>  A specific, existing OOO entry can be deleted by making a DELETE request on the URL for that OOO entry.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deleteoooentry))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let oooEntriesApiInstance = new Asana.OooEntriesApi(client);
let ooo_entry_gid = "12345"; // String | Globally unique identifier for the OOO entry.

oooEntriesApiInstance.deleteOooEntry(ooo_entry_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ooo_entry_gid** | **String**| Globally unique identifier for the OOO entry. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getOooEntries"></a>
# **getOooEntries**

Get OOO entries for a user

<b>Required scope: </b><code>ooo_entries:read</code>  Returns a list of OOO entries for the specified user.

([more information](https://developers.asana.com/reference/getoooentries))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let oooEntriesApiInstance = new Asana.OooEntriesApi(client);
let user = "12345"; // String | Globally unique identifier for the user to filter OOO entries by.
let workspace = "98765"; // String | Globally unique identifier for the workspace.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'start_date': "2025-01-01", 
    'end_date': "2025-12-31", 
    'opt_fields': "created_by,created_by.name,end_date,offset,path,start_date,uri,user,user.name"
};
oooEntriesApiInstance.getOooEntries(user, workspace, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| Globally unique identifier for the user to filter OOO entries by. | 
 **workspace** | **String**| Globally unique identifier for the workspace. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **start_date** | **Date**| An ISO 8601 date string. Filters to OOO entries that overlap with or end after this date. | [optional] 
 **end_date** | **Date**| An ISO 8601 date string. Filters to OOO entries that overlap with or start before this date. | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getOooEntry"></a>
# **getOooEntry**

Get an OOO entry

<b>Required scope: </b><code>ooo_entries:read</code>  Returns the complete OOO entry record for a single OOO entry.

([more information](https://developers.asana.com/reference/getoooentry))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let oooEntriesApiInstance = new Asana.OooEntriesApi(client);
let ooo_entry_gid = "12345"; // String | Globally unique identifier for the OOO entry.
let opts = { 
    'opt_fields': "created_by,created_by.name,end_date,start_date,user,user.name"
};
oooEntriesApiInstance.getOooEntry(ooo_entry_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ooo_entry_gid** | **String**| Globally unique identifier for the OOO entry. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateOooEntry"></a>
# **updateOooEntry**

Update an OOO entry

<b>Required scope: </b><code>ooo_entries:write</code>  An existing OOO entry can be updated by making a PUT request on the URL for that OOO entry. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated OOO entry record.

([more information](https://developers.asana.com/reference/updateoooentry))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let oooEntriesApiInstance = new Asana.OooEntriesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The updated fields for the OOO entry.
let ooo_entry_gid = "12345"; // String | Globally unique identifier for the OOO entry.
let opts = { 
    'opt_fields': "created_by,created_by.name,end_date,start_date,user,user.name"
};
oooEntriesApiInstance.updateOooEntry(body, ooo_entry_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The updated fields for the OOO entry. | 
 **ooo_entry_gid** | **String**| Globally unique identifier for the OOO entry. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

