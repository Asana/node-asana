# Asana.TagsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTag**](TagsApi.md#createTag) | **POST** /tags | Create a tag
[**createTagForWorkspace**](TagsApi.md#createTagForWorkspace) | **POST** /workspaces/{workspace_gid}/tags | Create a tag in a workspace
[**deleteTag**](TagsApi.md#deleteTag) | **DELETE** /tags/{tag_gid} | Delete a tag
[**getTag**](TagsApi.md#getTag) | **GET** /tags/{tag_gid} | Get a tag
[**getTags**](TagsApi.md#getTags) | **GET** /tags | Get multiple tags
[**getTagsForTask**](TagsApi.md#getTagsForTask) | **GET** /tasks/{task_gid}/tags | Get a task&#x27;s tags
[**getTagsForWorkspace**](TagsApi.md#getTagsForWorkspace) | **GET** /workspaces/{workspace_gid}/tags | Get tags in a workspace
[**updateTag**](TagsApi.md#updateTag) | **PUT** /tags/{tag_gid} | Update a tag

<a name="createTag"></a>
# **createTag**

Create a tag

Creates a new tag in a workspace or organization.  Every tag is required to be created in a specific workspace or organization, and this cannot be changed once set. Note that you can use the workspace parameter regardless of whether or not it is an organization.  Returns the full record of the newly created tag.

([more information](https://developers.asana.com/reference/createtag))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tagsApiInstance = new Asana.TagsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The tag to create.
let opts = { 
    'opt_fields': "color,created_at,followers,followers.name,name,notes,permalink_url,workspace,workspace.name"
};
tagsApiInstance.createTag(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The tag to create. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createTagForWorkspace"></a>
# **createTagForWorkspace**

Create a tag in a workspace

Creates a new tag in a workspace or organization.  Every tag is required to be created in a specific workspace or organization, and this cannot be changed once set. Note that you can use the workspace parameter regardless of whether or not it is an organization.  Returns the full record of the newly created tag.

([more information](https://developers.asana.com/reference/createtagforworkspace))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tagsApiInstance = new Asana.TagsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The tag to create.
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
    'opt_fields': "color,created_at,followers,followers.name,name,notes,permalink_url,workspace,workspace.name"
};
tagsApiInstance.createTagForWorkspace(body, workspace_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The tag to create. | 
 **workspace_gid** | **String**| Globally unique identifier for the workspace or organization. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteTag"></a>
# **deleteTag**

Delete a tag

A specific, existing tag can be deleted by making a DELETE request on the URL for that tag.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deletetag))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tagsApiInstance = new Asana.TagsApi();
let tag_gid = "11235"; // String | Globally unique identifier for the tag.

tagsApiInstance.deleteTag(tag_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_gid** | **String**| Globally unique identifier for the tag. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTag"></a>
# **getTag**

Get a tag

Returns the complete tag record for a single tag.

([more information](https://developers.asana.com/reference/gettag))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tagsApiInstance = new Asana.TagsApi();
let tag_gid = "11235"; // String | Globally unique identifier for the tag.
let opts = { 
    'opt_fields': "color,created_at,followers,followers.name,name,notes,permalink_url,workspace,workspace.name"
};
tagsApiInstance.getTag(tag_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_gid** | **String**| Globally unique identifier for the tag. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTags"></a>
# **getTags**

Get multiple tags

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

([more information](https://developers.asana.com/reference/gettags))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tagsApiInstance = new Asana.TagsApi();
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'workspace': "1331", 
    'opt_fields': "color,created_at,followers,followers.name,name,notes,offset,path,permalink_url,uri,workspace,workspace.name"
};
tagsApiInstance.getTags(opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **workspace** | **String**| The workspace to filter tags on. | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTagsForTask"></a>
# **getTagsForTask**

Get a task&#x27;s tags

Get a compact representation of all of the tags the task has.

([more information](https://developers.asana.com/reference/gettagsfortask))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tagsApiInstance = new Asana.TagsApi();
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "color,created_at,followers,followers.name,name,notes,offset,path,permalink_url,uri,workspace,workspace.name"
};
tagsApiInstance.getTagsForTask(task_gid, opts).then((result) => {
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
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTagsForWorkspace"></a>
# **getTagsForWorkspace**

Get tags in a workspace

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

([more information](https://developers.asana.com/reference/gettagsforworkspace))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tagsApiInstance = new Asana.TagsApi();
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "color,created_at,followers,followers.name,name,notes,offset,path,permalink_url,uri,workspace,workspace.name"
};
tagsApiInstance.getTagsForWorkspace(workspace_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_gid** | **String**| Globally unique identifier for the workspace or organization. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateTag"></a>
# **updateTag**

Update a tag

Updates the properties of a tag. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the tag.  Returns the complete updated tag record.

([more information](https://developers.asana.com/reference/updatetag))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tagsApiInstance = new Asana.TagsApi();
let tag_gid = "11235"; // String | Globally unique identifier for the tag.
let opts = { 
    'opt_fields': "color,created_at,followers,followers.name,name,notes,permalink_url,workspace,workspace.name"
};
tagsApiInstance.updateTag(tag_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_gid** | **String**| Globally unique identifier for the tag. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

