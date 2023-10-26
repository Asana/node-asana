# Asana.ProjectBriefsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProjectBrief**](ProjectBriefsApi.md#createProjectBrief) | **POST** /projects/{project_gid}/project_briefs | Create a project brief
[**deleteProjectBrief**](ProjectBriefsApi.md#deleteProjectBrief) | **DELETE** /project_briefs/{project_brief_gid} | Delete a project brief
[**getProjectBrief**](ProjectBriefsApi.md#getProjectBrief) | **GET** /project_briefs/{project_brief_gid} | Get a project brief
[**updateProjectBrief**](ProjectBriefsApi.md#updateProjectBrief) | **PUT** /project_briefs/{project_brief_gid} | Update a project brief

<a name="createProjectBrief"></a>
# **createProjectBrief**

Create a project brief

Creates a new project brief.  Returns the full record of the newly created project brief.

([more information](https://developers.asana.com/reference/createprojectbrief))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectBriefsApiInstance = new Asana.ProjectBriefsApi();
let body = {"data": {"param1": "value1", "param2": "value2",}}; // Object | The project brief to create.
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
    'opt_fields': "html_text,permalink_url,project,project.name,text,title"
};
projectBriefsApiInstance.createProjectBrief(body, project_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The project brief to create. | 
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteProjectBrief"></a>
# **deleteProjectBrief**

Delete a project brief

Deletes a specific, existing project brief.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deleteprojectbrief))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectBriefsApiInstance = new Asana.ProjectBriefsApi();
let project_brief_gid = "12345"; // String | Globally unique identifier for the project brief.

projectBriefsApiInstance.deleteProjectBrief(project_brief_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_brief_gid** | **String**| Globally unique identifier for the project brief. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getProjectBrief"></a>
# **getProjectBrief**

Get a project brief

Get the full record for a project brief.

([more information](https://developers.asana.com/reference/getprojectbrief))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectBriefsApiInstance = new Asana.ProjectBriefsApi();
let project_brief_gid = "12345"; // String | Globally unique identifier for the project brief.
let opts = { 
    'opt_fields': "html_text,permalink_url,project,project.name,text,title"
};
projectBriefsApiInstance.getProjectBrief(project_brief_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_brief_gid** | **String**| Globally unique identifier for the project brief. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateProjectBrief"></a>
# **updateProjectBrief**

Update a project brief

An existing project brief can be updated by making a PUT request on the URL for that project brief. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated project brief record.

([more information](https://developers.asana.com/reference/updateprojectbrief))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectBriefsApiInstance = new Asana.ProjectBriefsApi();
let body = {"data": {"param1": "value1", "param2": "value2",}}; // Object | The updated fields for the project brief.
let project_brief_gid = "12345"; // String | Globally unique identifier for the project brief.
let opts = { 
    'opt_fields': "html_text,permalink_url,project,project.name,text,title"
};
projectBriefsApiInstance.updateProjectBrief(body, project_brief_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The updated fields for the project brief. | 
 **project_brief_gid** | **String**| Globally unique identifier for the project brief. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

