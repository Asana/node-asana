# Asana.UserTaskListsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserTaskList**](UserTaskListsApi.md#getUserTaskList) | **GET** /user_task_lists/{user_task_list_gid} | Get a user task list
[**getUserTaskListForUser**](UserTaskListsApi.md#getUserTaskListForUser) | **GET** /users/{user_gid}/user_task_list | Get a user&#x27;s task list

<a name="getUserTaskList"></a>
# **getUserTaskList**

Get a user task list

Returns the full record for a user task list.

([more information](https://developers.asana.com/reference/getusertasklist))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let userTaskListsApiInstance = new Asana.UserTaskListsApi();
let user_task_list_gid = "12345"; // String | Globally unique identifier for the user task list.
let opts = { 
    'opt_fields': "name,owner,workspace"
};
userTaskListsApiInstance.getUserTaskList(user_task_list_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_task_list_gid** | **String**| Globally unique identifier for the user task list. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getUserTaskListForUser"></a>
# **getUserTaskListForUser**

Get a user&#x27;s task list

Returns the full record for a user's task list.

([more information](https://developers.asana.com/reference/getusertasklistforuser))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let userTaskListsApiInstance = new Asana.UserTaskListsApi();
let user_gid = "me"; // String | A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
let workspace = "1234"; // String | The workspace in which to get the user task list.
let opts = { 
    'opt_fields': "name,owner,workspace"
};
userTaskListsApiInstance.getUserTaskListForUser(user_gid, workspace, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_gid** | **String**| A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user. | 
 **workspace** | **String**| The workspace in which to get the user task list. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

