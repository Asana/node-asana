# Asana.ProjectStatusesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProjectStatusForProject**](ProjectStatusesApi.md#createProjectStatusForProject) | **POST** /projects/{project_gid}/project_statuses | Create a project status
[**deleteProjectStatus**](ProjectStatusesApi.md#deleteProjectStatus) | **DELETE** /project_statuses/{project_status_gid} | Delete a project status
[**getProjectStatus**](ProjectStatusesApi.md#getProjectStatus) | **GET** /project_statuses/{project_status_gid} | Get a project status
[**getProjectStatusesForProject**](ProjectStatusesApi.md#getProjectStatusesForProject) | **GET** /projects/{project_gid}/project_statuses | Get statuses from a project

<a name="createProjectStatusForProject"></a>
# **createProjectStatusForProject**

Create a project status

*Deprecated: new integrations should prefer the `/status_updates` route.*  Creates a new status update on the project.  Returns the full record of the newly created project status update.

([more information](https://developers.asana.com/reference/createprojectstatusforproject))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectStatusesApiInstance = new Asana.ProjectStatusesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The project status to create.
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
    'opt_fields': "author,author.name,color,created_at,created_by,created_by.name,html_text,modified_at,text,title"
};
projectStatusesApiInstance.createProjectStatusForProject(body, project_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The project status to create. | 
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteProjectStatus"></a>
# **deleteProjectStatus**

Delete a project status

*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Deletes a specific, existing project status update.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deleteprojectstatus))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectStatusesApiInstance = new Asana.ProjectStatusesApi(client);
let project_status_gid = "321654"; // String | The project status update to get.

projectStatusesApiInstance.deleteProjectStatus(project_status_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_status_gid** | **String**| The project status update to get. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getProjectStatus"></a>
# **getProjectStatus**

Get a project status

*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Returns the complete record for a single status update.

([more information](https://developers.asana.com/reference/getprojectstatus))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectStatusesApiInstance = new Asana.ProjectStatusesApi(client);
let project_status_gid = "321654"; // String | The project status update to get.
let opts = { 
    'opt_fields': "author,author.name,color,created_at,created_by,created_by.name,html_text,modified_at,text,title"
};
projectStatusesApiInstance.getProjectStatus(project_status_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_status_gid** | **String**| The project status update to get. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getProjectStatusesForProject"></a>
# **getProjectStatusesForProject**

Get statuses from a project

*Deprecated: new integrations should prefer the `/status_updates` route.*  Returns the compact project status update records for all updates on the project.

([more information](https://developers.asana.com/reference/getprojectstatusesforproject))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectStatusesApiInstance = new Asana.ProjectStatusesApi(client);
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "author,author.name,color,created_at,created_by,created_by.name,html_text,modified_at,offset,path,text,title,uri"
};
projectStatusesApiInstance.getProjectStatusesForProject(project_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

