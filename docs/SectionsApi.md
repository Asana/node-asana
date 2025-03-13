# Asana.SectionsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTaskForSection**](SectionsApi.md#addTaskForSection) | **POST** /sections/{section_gid}/addTask | Add task to section
[**createSectionForProject**](SectionsApi.md#createSectionForProject) | **POST** /projects/{project_gid}/sections | Create a section in a project
[**deleteSection**](SectionsApi.md#deleteSection) | **DELETE** /sections/{section_gid} | Delete a section
[**getSection**](SectionsApi.md#getSection) | **GET** /sections/{section_gid} | Get a section
[**getSectionsForProject**](SectionsApi.md#getSectionsForProject) | **GET** /projects/{project_gid}/sections | Get sections in a project
[**insertSectionForProject**](SectionsApi.md#insertSectionForProject) | **POST** /projects/{project_gid}/sections/insert | Move or Insert sections
[**updateSection**](SectionsApi.md#updateSection) | **PUT** /sections/{section_gid} | Update a section

<a name="addTaskForSection"></a>
# **addTaskForSection**

Add task to section

Add a task to a specific, existing section. This will remove the task from other sections of the project.  The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.  This does not work for separators (tasks with the resource_subtype of section).

([more information](https://developers.asana.com/reference/addtaskforsection))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let sectionsApiInstance = new Asana.SectionsApi();
let section_gid = "321654"; // String | The globally unique identifier for the section.
let opts = { 
    'body': {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}
};
sectionsApiInstance.addTaskForSection(section_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section_gid** | **String**| The globally unique identifier for the section. | 
 **body** | **Object**| The task and optionally the insert location. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createSectionForProject"></a>
# **createSectionForProject**

Create a section in a project

Creates a new section in a project. Returns the full record of the newly created section.

([more information](https://developers.asana.com/reference/createsectionforproject))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let sectionsApiInstance = new Asana.SectionsApi();
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
    'body': {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}, 
    'opt_fields': "created_at,name,project,project.name,projects,projects.name"
};
sectionsApiInstance.createSectionForProject(project_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **body** | **Object**| The section to create. | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteSection"></a>
# **deleteSection**

Delete a section

A specific, existing section can be deleted by making a DELETE request on the URL for that section.  Note that sections must be empty to be deleted.  The last remaining section cannot be deleted.  Returns an empty data block.

([more information](https://developers.asana.com/reference/deletesection))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let sectionsApiInstance = new Asana.SectionsApi();
let section_gid = "321654"; // String | The globally unique identifier for the section.

sectionsApiInstance.deleteSection(section_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section_gid** | **String**| The globally unique identifier for the section. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getSection"></a>
# **getSection**

Get a section

Returns the complete record for a single section.

([more information](https://developers.asana.com/reference/getsection))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let sectionsApiInstance = new Asana.SectionsApi();
let section_gid = "321654"; // String | The globally unique identifier for the section.
let opts = { 
    'opt_fields': "created_at,name,project,project.name,projects,projects.name"
};
sectionsApiInstance.getSection(section_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section_gid** | **String**| The globally unique identifier for the section. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getSectionsForProject"></a>
# **getSectionsForProject**

Get sections in a project

Returns the compact records for all sections in the specified project.

([more information](https://developers.asana.com/reference/getsectionsforproject))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let sectionsApiInstance = new Asana.SectionsApi();
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "created_at,name,offset,path,project,project.name,projects,projects.name,uri"
};
sectionsApiInstance.getSectionsForProject(project_gid, opts).then((result) => {
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

<a name="insertSectionForProject"></a>
# **insertSectionForProject**

Move or Insert sections

Move sections relative to each other. One of `before_section` or `after_section` is required.  Sections cannot be moved between projects.  Returns an empty data block.

([more information](https://developers.asana.com/reference/insertsectionforproject))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let sectionsApiInstance = new Asana.SectionsApi();
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
    'body': {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}
};
sectionsApiInstance.insertSectionForProject(project_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **body** | **Object**| The section&#x27;s move action. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updateSection"></a>
# **updateSection**

Update a section

A specific, existing section can be updated by making a PUT request on the URL for that project. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged. (note that at this time, the only field that can be updated is the `name` field.)  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated section record.

([more information](https://developers.asana.com/reference/updatesection))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let sectionsApiInstance = new Asana.SectionsApi();
let section_gid = "321654"; // String | The globally unique identifier for the section.
let opts = { 
    'body': {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}, 
    'opt_fields': "created_at,name,project,project.name,projects,projects.name"
};
sectionsApiInstance.updateSection(section_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section_gid** | **String**| The globally unique identifier for the section. | 
 **body** | **Object**| The section to create. | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

