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
> ProjectBriefResponseData createProjectBrief(bodyproject_gid, opts)

Create a project brief

Creates a new project brief.  Returns the full record of the newly created project brief.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectBriefsApi();
let body = new Asana.ProjectGidProjectBriefsBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // ProjectGidProjectBriefsBody | The project brief to create.
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
  'opt_fields': ["html_text","permalink_url","project","project.name","text","title"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createProjectBrief(bodyproject_gid, opts, (error, data, response) => {
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
 **body** | [**ProjectGidProjectBriefsBody**](ProjectGidProjectBriefsBody.md)| The project brief to create. | 
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**ProjectBriefResponseData**](ProjectBriefResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteProjectBrief"></a>
# **deleteProjectBrief**
> EmptyResponseData deleteProjectBrief(project_brief_gid)

Delete a project brief

Deletes a specific, existing project brief.  Returns an empty data record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectBriefsApi();
let project_brief_gid = "12345"; // String | Globally unique identifier for the project brief.

apiInstance.deleteProjectBrief(project_brief_gid, (error, data, response) => {
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
 **project_brief_gid** | **String**| Globally unique identifier for the project brief. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getProjectBrief"></a>
# **getProjectBrief**
> ProjectBriefResponseData getProjectBrief(project_brief_gid, opts)

Get a project brief

Get the full record for a project brief.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectBriefsApi();
let project_brief_gid = "12345"; // String | Globally unique identifier for the project brief.
let opts = { 
  'opt_fields': ["html_text","permalink_url","project","project.name","text","title"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getProjectBrief(project_brief_gid, opts, (error, data, response) => {
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
 **project_brief_gid** | **String**| Globally unique identifier for the project brief. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**ProjectBriefResponseData**](ProjectBriefResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateProjectBrief"></a>
# **updateProjectBrief**
> ProjectBriefResponseData updateProjectBrief(bodyproject_brief_gid, opts)

Update a project brief

An existing project brief can be updated by making a PUT request on the URL for that project brief. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated project brief record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectBriefsApi();
let body = new Asana.ProjectBriefsProjectBriefGidBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // ProjectBriefsProjectBriefGidBody | The updated fields for the project brief.
let project_brief_gid = "12345"; // String | Globally unique identifier for the project brief.
let opts = { 
  'opt_fields': ["html_text","permalink_url","project","project.name","text","title"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.updateProjectBrief(bodyproject_brief_gid, opts, (error, data, response) => {
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
 **body** | [**ProjectBriefsProjectBriefGidBody**](ProjectBriefsProjectBriefGidBody.md)| The updated fields for the project brief. | 
 **project_brief_gid** | **String**| Globally unique identifier for the project brief. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**ProjectBriefResponseData**](ProjectBriefResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

