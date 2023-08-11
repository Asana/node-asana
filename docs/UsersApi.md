# Asana.UsersApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFavoritesForUser**](UsersApi.md#getFavoritesForUser) | **GET** /users/{user_gid}/favorites | Get a user&#x27;s favorites
[**getUser**](UsersApi.md#getUser) | **GET** /users/{user_gid} | Get a user
[**getUsers**](UsersApi.md#getUsers) | **GET** /users | Get multiple users
[**getUsersForTeam**](UsersApi.md#getUsersForTeam) | **GET** /teams/{team_gid}/users | Get users in a team
[**getUsersForWorkspace**](UsersApi.md#getUsersForWorkspace) | **GET** /workspaces/{workspace_gid}/users | Get users in a workspace or organization

<a name="getFavoritesForUser"></a>
# **getFavoritesForUser**
> AsanaNamedResourceArray getFavoritesForUser(user_gid, resource_type, workspace, opts)

Get a user&#x27;s favorites

Returns all of a user&#x27;s favorites in the given workspace, of the given type. Results are given in order (The same order as Asana&#x27;s sidebar).

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.UsersApi();
let user_gid = "me"; // String | A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
let resource_type = "project"; // String | The resource type of favorites to be returned.
let workspace = "1234"; // String | The workspace in which to get favorites.
let opts = { 
    'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'opt_fields': ["name","offset","path","uri"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getFavoritesForUser(user_gid, resource_type, workspace, opts, (error, data, response) => {
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
 **user_gid** | **String**| A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user. | 
 **resource_type** | **String**| The resource type of favorites to be returned. | [default to project]
 **workspace** | **String**| The workspace in which to get favorites. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**AsanaNamedResourceArray**](AsanaNamedResourceArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getUser"></a>
# **getUser**
> UserResponseData getUser(user_gid, opts)

Get a user

Returns the full user record for the single user with the provided ID.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.UsersApi();
let user_gid = "me"; // String | A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
let opts = { 
    'opt_fields': ["email","name","photo","photo.image_1024x1024","photo.image_128x128","photo.image_21x21","photo.image_27x27","photo.image_36x36","photo.image_60x60","workspaces","workspaces.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getUser(user_gid, opts, (error, data, response) => {
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
 **user_gid** | **String**| A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**UserResponseData**](UserResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getUsers"></a>
# **getUsers**
> UserResponseArray getUsers(opts)

Get multiple users

Returns the user records for all users in all workspaces and organizations accessible to the authenticated user. Accepts an optional workspace ID parameter. Results are sorted by user ID.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.UsersApi();
let opts = { 
    'workspace': "1331", // String | The workspace or organization ID to filter users on.
    'team': "15627", // String | The team ID to filter users on.
    'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'opt_fields': ["email","name","offset","path","photo","photo.image_1024x1024","photo.image_128x128","photo.image_21x21","photo.image_27x27","photo.image_36x36","photo.image_60x60","uri","workspaces","workspaces.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getUsers(opts, (error, data, response) => {
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
 **workspace** | **String**| The workspace or organization ID to filter users on. | [optional] 
 **team** | **String**| The team ID to filter users on. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**UserResponseArray**](UserResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getUsersForTeam"></a>
# **getUsersForTeam**
> UserResponseArray getUsersForTeam(team_gid, opts)

Get users in a team

Returns the compact records for all users that are members of the team. Results are sorted alphabetically and limited to 2000. For more results use the &#x60;/users&#x60; endpoint.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.UsersApi();
let team_gid = "159874"; // String | Globally unique identifier for the team.
let opts = { 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'opt_fields': ["email","name","photo","photo.image_1024x1024","photo.image_128x128","photo.image_21x21","photo.image_27x27","photo.image_36x36","photo.image_60x60","workspaces","workspaces.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getUsersForTeam(team_gid, opts, (error, data, response) => {
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
 **team_gid** | **String**| Globally unique identifier for the team. | 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**UserResponseArray**](UserResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getUsersForWorkspace"></a>
# **getUsersForWorkspace**
> UserResponseArray getUsersForWorkspace(workspace_gid, opts)

Get users in a workspace or organization

Returns the compact records for all users in the specified workspace or organization. Results are sorted alphabetically and limited to 2000. For more results use the &#x60;/users&#x60; endpoint.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.UsersApi();
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'opt_fields': ["email","name","photo","photo.image_1024x1024","photo.image_128x128","photo.image_21x21","photo.image_27x27","photo.image_36x36","photo.image_60x60","workspaces","workspaces.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getUsersForWorkspace(workspace_gid, opts, (error, data, response) => {
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
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**UserResponseArray**](UserResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

