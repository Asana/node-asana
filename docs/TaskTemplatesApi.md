# Asana.TaskTemplatesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTaskTemplate**](TaskTemplatesApi.md#deleteTaskTemplate) | **DELETE** /task_templates/{task_template_gid} | Delete a task template
[**getTaskTemplate**](TaskTemplatesApi.md#getTaskTemplate) | **GET** /task_templates/{task_template_gid} | Get a task template
[**getTaskTemplates**](TaskTemplatesApi.md#getTaskTemplates) | **GET** /task_templates | Get multiple task templates
[**instantiateTask**](TaskTemplatesApi.md#instantiateTask) | **POST** /task_templates/{task_template_gid}/instantiateTask | Instantiate a task from a task template

<a name="deleteTaskTemplate"></a>
# **deleteTaskTemplate**

Delete a task template

A specific, existing task template can be deleted by making a DELETE request on the URL for that task template. Returns an empty data record.

([more information](https://developers.asana.com/reference/deletetasktemplate))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let taskTemplatesApiInstance = new Asana.TaskTemplatesApi();
let task_template_gid = "1331"; // String | Globally unique identifier for the task template.

taskTemplatesApiInstance.deleteTaskTemplate(task_template_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_template_gid** | **String**| Globally unique identifier for the task template. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTaskTemplate"></a>
# **getTaskTemplate**

Get a task template

Returns the complete task template record for a single task template.

([more information](https://developers.asana.com/reference/gettasktemplate))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let taskTemplatesApiInstance = new Asana.TaskTemplatesApi();
let task_template_gid = "1331"; // String | Globally unique identifier for the task template.
let opts = { 
    'opt_fields': "created_at,created_by,name,project,template"
};
taskTemplatesApiInstance.getTaskTemplate(task_template_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_template_gid** | **String**| Globally unique identifier for the task template. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTaskTemplates"></a>
# **getTaskTemplates**

Get multiple task templates

Returns the compact task template records for some filtered set of task templates. You must specify a `project`

([more information](https://developers.asana.com/reference/gettasktemplates))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let taskTemplatesApiInstance = new Asana.TaskTemplatesApi();
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'project': "321654", 
    'opt_fields': "created_at,created_by,name,project,template"
};
taskTemplatesApiInstance.getTaskTemplates(opts).then((result) => {
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
 **project** | **String**| The project to filter task templates on. | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="instantiateTask"></a>
# **instantiateTask**

Instantiate a task from a task template

Creates and returns a job that will asynchronously handle the task instantiation.

([more information](https://developers.asana.com/reference/instantiatetask))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let taskTemplatesApiInstance = new Asana.TaskTemplatesApi();
let task_template_gid = "1331"; // String | Globally unique identifier for the task template.
let opts = { 
    'body': {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}, 
    'opt_fields': "new_project,new_project.name,new_project_template,new_project_template.name,new_task,new_task.created_by,new_task.name,new_task.resource_subtype,resource_subtype,status"
};
taskTemplatesApiInstance.instantiateTask(task_template_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_template_gid** | **String**| Globally unique identifier for the task template. | 
 **body** | **Object**| Describes the inputs used for instantiating a task - the task&#x27;s name. | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

