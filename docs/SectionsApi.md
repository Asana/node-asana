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
> EmptyResponseData addTaskForSection(section_gid, opts)

Add task to section

Add a task to a specific, existing section. This will remove the task from other sections of the project.  The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.  This does not work for separators (tasks with the resource_subtype of section).

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.SectionsApi();
let section_gid = "321654"; // String | The globally unique identifier for the section.
let opts = { 
    'body': new Asana.SectionGidAddTaskBody.constructFromObject({data: {param1: "value1", param2: "value2",}}) // SectionGidAddTaskBody | The task and optionally the insert location.
};
apiInstance.addTaskForSection(section_gid, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
    }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section_gid** | **String**| The globally unique identifier for the section. | 
 **body** | [**SectionGidAddTaskBody**](SectionGidAddTaskBody.md)| The task and optionally the insert location. | [optional] 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createSectionForProject"></a>
# **createSectionForProject**
> SectionResponseData createSectionForProject(project_gid, opts)

Create a section in a project

Creates a new section in a project. Returns the full record of the newly created section.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.SectionsApi();
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
    'body': new Asana.ProjectGidSectionsBody.constructFromObject({data: {param1: "value1", param2: "value2",}}) // ProjectGidSectionsBody | The section to create.
    'opt_fields': ["created_at","name","project","project.name","projects","projects.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createSectionForProject(project_gid, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
    }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **body** | [**ProjectGidSectionsBody**](ProjectGidSectionsBody.md)| The section to create. | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**SectionResponseData**](SectionResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteSection"></a>
# **deleteSection**
> EmptyResponseData deleteSection(section_gid)

Delete a section

A specific, existing section can be deleted by making a DELETE request on the URL for that section.  Note that sections must be empty to be deleted.  The last remaining section cannot be deleted.  Returns an empty data block.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.SectionsApi();
let section_gid = "321654"; // String | The globally unique identifier for the section.

apiInstance.deleteSection(section_gid, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
    }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section_gid** | **String**| The globally unique identifier for the section. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getSection"></a>
# **getSection**
> SectionResponseData getSection(section_gid, opts)

Get a section

Returns the complete record for a single section.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.SectionsApi();
let section_gid = "321654"; // String | The globally unique identifier for the section.
let opts = { 
    'opt_fields': ["created_at","name","project","project.name","projects","projects.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getSection(section_gid, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
    }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section_gid** | **String**| The globally unique identifier for the section. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**SectionResponseData**](SectionResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getSectionsForProject"></a>
# **getSectionsForProject**
> SectionResponseArray getSectionsForProject(project_gid, opts)

Get sections in a project

Returns the compact records for all sections in the specified project.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.SectionsApi();
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
    'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'opt_fields': ["created_at","name","offset","path","project","project.name","projects","projects.name","uri"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getSectionsForProject(project_gid, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
    }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**SectionResponseArray**](SectionResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="insertSectionForProject"></a>
# **insertSectionForProject**
> EmptyResponseData insertSectionForProject(project_gid, opts)

Move or Insert sections

Move sections relative to each other. One of &#x60;before_section&#x60; or &#x60;after_section&#x60; is required.  Sections cannot be moved between projects.  Returns an empty data block.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.SectionsApi();
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
    'body': new Asana.SectionsInsertBody.constructFromObject({data: {param1: "value1", param2: "value2",}}) // SectionsInsertBody | The section's move action.
};
apiInstance.insertSectionForProject(project_gid, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
    }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **body** | [**SectionsInsertBody**](SectionsInsertBody.md)| The section&#x27;s move action. | [optional] 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updateSection"></a>
# **updateSection**
> SectionResponseData updateSection(section_gid, opts)

Update a section

A specific, existing section can be updated by making a PUT request on the URL for that project. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged. (note that at this time, the only field that can be updated is the &#x60;name&#x60; field.)  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated section record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.SectionsApi();
let section_gid = "321654"; // String | The globally unique identifier for the section.
let opts = { 
    'body': new Asana.SectionsSectionGidBody.constructFromObject({data: {param1: "value1", param2: "value2",}}) // SectionsSectionGidBody | The section to create.
    'opt_fields': ["created_at","name","project","project.name","projects","projects.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.updateSection(section_gid, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
    }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section_gid** | **String**| The globally unique identifier for the section. | 
 **body** | [**SectionsSectionGidBody**](SectionsSectionGidBody.md)| The section to create. | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**SectionResponseData**](SectionResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

