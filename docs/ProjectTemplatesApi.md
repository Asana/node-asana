# Asana.ProjectTemplatesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProjectTemplate**](ProjectTemplatesApi.md#deleteProjectTemplate) | **DELETE** /project_templates/{project_template_gid} | Delete a project template
[**getProjectTemplate**](ProjectTemplatesApi.md#getProjectTemplate) | **GET** /project_templates/{project_template_gid} | Get a project template
[**getProjectTemplates**](ProjectTemplatesApi.md#getProjectTemplates) | **GET** /project_templates | Get multiple project templates
[**getProjectTemplatesForTeam**](ProjectTemplatesApi.md#getProjectTemplatesForTeam) | **GET** /teams/{team_gid}/project_templates | Get a team&#x27;s project templates
[**instantiateProject**](ProjectTemplatesApi.md#instantiateProject) | **POST** /project_templates/{project_template_gid}/instantiateProject | Instantiate a project from a project template

<a name="deleteProjectTemplate"></a>
# **deleteProjectTemplate**

Delete a project template

A specific, existing project template can be deleted by making a DELETE request on the URL for that project template.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deleteprojecttemplate))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectTemplatesApiInstance = new Asana.ProjectTemplatesApi();
let project_template_gid = "1331"; // String | Globally unique identifier for the project template.

projectTemplatesApiInstance.deleteProjectTemplate(project_template_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_template_gid** | **String**| Globally unique identifier for the project template. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getProjectTemplate"></a>
# **getProjectTemplate**

Get a project template

Returns the complete project template record for a single project template.

([more information](https://developers.asana.com/reference/getprojecttemplate))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectTemplatesApiInstance = new Asana.ProjectTemplatesApi();
let project_template_gid = "1331"; // String | Globally unique identifier for the project template.
let opts = { 
    'opt_fields': "color,description,html_description,name,owner,public,requested_dates,requested_dates.description,requested_dates.name,requested_roles,requested_roles.name,team,team.name"
};
projectTemplatesApiInstance.getProjectTemplate(project_template_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_template_gid** | **String**| Globally unique identifier for the project template. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getProjectTemplates"></a>
# **getProjectTemplates**

Get multiple project templates

Returns the compact project template records for all project templates in the given team or workspace.

([more information](https://developers.asana.com/reference/getprojecttemplates))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectTemplatesApiInstance = new Asana.ProjectTemplatesApi();
let opts = { 
    'workspace': "12345", 
    'team': "14916", 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "color,description,html_description,name,offset,owner,path,public,requested_dates,requested_dates.description,requested_dates.name,requested_roles,requested_roles.name,team,team.name,uri"
};
projectTemplatesApiInstance.getProjectTemplates(opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **String**| The workspace to filter results on. | [optional] 
 **team** | **String**| The team to filter projects on. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getProjectTemplatesForTeam"></a>
# **getProjectTemplatesForTeam**

Get a team&#x27;s project templates

Returns the compact project template records for all project templates in the team.

([more information](https://developers.asana.com/reference/getprojecttemplatesforteam))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectTemplatesApiInstance = new Asana.ProjectTemplatesApi();
let team_gid = "159874"; // String | Globally unique identifier for the team.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "color,description,html_description,name,offset,owner,path,public,requested_dates,requested_dates.description,requested_dates.name,requested_roles,requested_roles.name,team,team.name,uri"
};
projectTemplatesApiInstance.getProjectTemplatesForTeam(team_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_gid** | **String**| Globally unique identifier for the team. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="instantiateProject"></a>
# **instantiateProject**

Instantiate a project from a project template

Creates and returns a job that will asynchronously handle the project instantiation.  To form this request, it is recommended to first make a request to [get a project template](/reference/getprojecttemplate). Then, from the response, copy the `gid` from the object in the `requested_dates` array. This `gid` should be used in `requested_dates` to instantiate a project.  _Note: The body of this request will differ if your workspace is an organization. To determine if your workspace is an organization, use the [is_organization](/reference/workspaces) parameter._

([more information](https://developers.asana.com/reference/instantiateproject))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectTemplatesApiInstance = new Asana.ProjectTemplatesApi();
let project_template_gid = "1331"; // String | Globally unique identifier for the project template.
let opts = { 
    'body': {"data": {"param1": "value1", "param2": "value2",}}, 
    'opt_fields': "new_project,new_project.name,new_project_template,new_project_template.name,new_task,new_task.created_by,new_task.name,new_task.resource_subtype,resource_subtype,status"
};
projectTemplatesApiInstance.instantiateProject(project_template_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_template_gid** | **String**| Globally unique identifier for the project template. | 
 **body** | **Object**| Describes the inputs used for instantiating a project, such as the resulting project&#x27;s name, which team it should be created in, and values for date variables. | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

