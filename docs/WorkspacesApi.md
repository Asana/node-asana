# Asana.WorkspacesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserForWorkspace**](WorkspacesApi.md#addUserForWorkspace) | **POST** /workspaces/{workspace_gid}/addUser | Add a user to a workspace or organization
[**getWorkspace**](WorkspacesApi.md#getWorkspace) | **GET** /workspaces/{workspace_gid} | Get a workspace
[**getWorkspaces**](WorkspacesApi.md#getWorkspaces) | **GET** /workspaces | Get multiple workspaces
[**removeUserForWorkspace**](WorkspacesApi.md#removeUserForWorkspace) | **POST** /workspaces/{workspace_gid}/removeUser | Remove a user from a workspace or organization
[**updateWorkspace**](WorkspacesApi.md#updateWorkspace) | **PUT** /workspaces/{workspace_gid} | Update a workspace

<a name="addUserForWorkspace"></a>
# **addUserForWorkspace**
> UserBaseResponseData addUserForWorkspace(bodyworkspace_gid, opts)

Add a user to a workspace or organization

Add a user to a workspace or organization. The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.WorkspacesApi();
let body = new Asana.WorkspaceGidAddUserBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // WorkspaceGidAddUserBody | The user to add to the workspace.
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
    'opt_fields': ["email","name","photo","photo.image_1024x1024","photo.image_128x128","photo.image_21x21","photo.image_27x27","photo.image_36x36","photo.image_60x60"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.addUserForWorkspace(bodyworkspace_gid, opts, (error, data, response) => {
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
 **body** | [**WorkspaceGidAddUserBody**](WorkspaceGidAddUserBody.md)| The user to add to the workspace. | 
 **workspace_gid** | **String**| Globally unique identifier for the workspace or organization. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**UserBaseResponseData**](UserBaseResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="getWorkspace"></a>
# **getWorkspace**
> WorkspaceResponseData getWorkspace(workspace_gid, opts)

Get a workspace

Returns the full workspace record for a single workspace.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.WorkspacesApi();
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
    'opt_fields': ["email_domains","is_organization","name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getWorkspace(workspace_gid, opts, (error, data, response) => {
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
 **workspace_gid** | **String**| Globally unique identifier for the workspace or organization. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**WorkspaceResponseData**](WorkspaceResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getWorkspaces"></a>
# **getWorkspaces**
> WorkspaceResponseArray getWorkspaces(opts)

Get multiple workspaces

Returns the compact records for all workspaces visible to the authorized user.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.WorkspacesApi();
let opts = { 
    'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'opt_fields': ["email_domains","is_organization","name","offset","path","uri"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getWorkspaces(opts, (error, data, response) => {
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
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**WorkspaceResponseArray**](WorkspaceResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="removeUserForWorkspace"></a>
# **removeUserForWorkspace**
> EmptyResponseData removeUserForWorkspace(bodyworkspace_gid)

Remove a user from a workspace or organization

Remove a user from a workspace or organization. The user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address. Returns an empty data record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.WorkspacesApi();
let body = new Asana.WorkspaceGidRemoveUserBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // WorkspaceGidRemoveUserBody | The user to remove from the workspace.
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.

apiInstance.removeUserForWorkspace(bodyworkspace_gid, (error, data, response) => {
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
 **body** | [**WorkspaceGidRemoveUserBody**](WorkspaceGidRemoveUserBody.md)| The user to remove from the workspace. | 
 **workspace_gid** | **String**| Globally unique identifier for the workspace or organization. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updateWorkspace"></a>
# **updateWorkspace**
> WorkspaceResponseData updateWorkspace(bodyworkspace_gid, opts)

Update a workspace

A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged. Currently the only field that can be modified for a workspace is its name. Returns the complete, updated workspace record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.WorkspacesApi();
let body = new Asana.WorkspacesWorkspaceGidBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // WorkspacesWorkspaceGidBody | The workspace object with all updated properties.
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
    'opt_fields': ["email_domains","is_organization","name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.updateWorkspace(bodyworkspace_gid, opts, (error, data, response) => {
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
 **body** | [**WorkspacesWorkspaceGidBody**](WorkspacesWorkspaceGidBody.md)| The workspace object with all updated properties. | 
 **workspace_gid** | **String**| Globally unique identifier for the workspace or organization. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**WorkspaceResponseData**](WorkspaceResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

