# Asana.TeamsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserForTeam**](TeamsApi.md#addUserForTeam) | **POST** /teams/{team_gid}/addUser | Add a user to a team
[**createTeam**](TeamsApi.md#createTeam) | **POST** /teams | Create a team
[**getTeam**](TeamsApi.md#getTeam) | **GET** /teams/{team_gid} | Get a team
[**getTeamsForUser**](TeamsApi.md#getTeamsForUser) | **GET** /users/{user_gid}/teams | Get teams for a user
[**getTeamsForWorkspace**](TeamsApi.md#getTeamsForWorkspace) | **GET** /workspaces/{workspace_gid}/teams | Get teams in a workspace
[**removeUserForTeam**](TeamsApi.md#removeUserForTeam) | **POST** /teams/{team_gid}/removeUser | Remove a user from a team
[**updateTeam**](TeamsApi.md#updateTeam) | **PUT** /teams/{team_gid} | Update a team

<a name="addUserForTeam"></a>
# **addUserForTeam**

Add a user to a team

The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.  Returns the complete team membership record for the newly added user.

([more information](https://developers.asana.com/reference/adduserforteam))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let teamsApiInstance = new Asana.TeamsApi();
let body = {"data": {"param1": "value1", "param2": "value2",}}; // Object | The user to add to the team.
let team_gid = "159874"; // String | Globally unique identifier for the team.
let opts = { 
    'opt_fields': "is_admin,is_guest,is_limited_access,team,team.name,user,user.name"
};
teamsApiInstance.addUserForTeam(body, team_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The user to add to the team. | 
 **team_gid** | **String**| Globally unique identifier for the team. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createTeam"></a>
# **createTeam**

Create a team

Creates a team within the current workspace.

([more information](https://developers.asana.com/reference/createteam))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let teamsApiInstance = new Asana.TeamsApi();
let body = {"data": {"param1": "value1", "param2": "value2",}}; // Object | The team to create.
let opts = { 
    'opt_fields': "description,edit_team_name_or_description_access_level,edit_team_visibility_or_trash_team_access_level,guest_invite_management_access_level,html_description,join_request_management_access_level,member_invite_management_access_level,name,organization,organization.name,permalink_url,team_member_removal_access_level,visibility"
};
teamsApiInstance.createTeam(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The team to create. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="getTeam"></a>
# **getTeam**

Get a team

Returns the full record for a single team.

([more information](https://developers.asana.com/reference/getteam))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let teamsApiInstance = new Asana.TeamsApi();
let team_gid = "159874"; // String | Globally unique identifier for the team.
let opts = { 
    'opt_fields': "description,edit_team_name_or_description_access_level,edit_team_visibility_or_trash_team_access_level,guest_invite_management_access_level,html_description,join_request_management_access_level,member_invite_management_access_level,name,organization,organization.name,permalink_url,team_member_removal_access_level,visibility"
};
teamsApiInstance.getTeam(team_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_gid** | **String**| Globally unique identifier for the team. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTeamsForUser"></a>
# **getTeamsForUser**

Get teams for a user

Returns the compact records for all teams to which the given user is assigned.

([more information](https://developers.asana.com/reference/getteamsforuser))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let teamsApiInstance = new Asana.TeamsApi();
let user_gid = "me"; // String | A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
let organization = "1331"; // String | The workspace or organization to filter teams on.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "description,edit_team_name_or_description_access_level,edit_team_visibility_or_trash_team_access_level,guest_invite_management_access_level,html_description,join_request_management_access_level,member_invite_management_access_level,name,offset,organization,organization.name,path,permalink_url,team_member_removal_access_level,uri,visibility"
};
teamsApiInstance.getTeamsForUser(user_gid, organization, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_gid** | **String**| A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user. | 
 **organization** | **String**| The workspace or organization to filter teams on. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTeamsForWorkspace"></a>
# **getTeamsForWorkspace**

Get teams in a workspace

Returns the compact records for all teams in the workspace visible to the authorized user.

([more information](https://developers.asana.com/reference/getteamsforworkspace))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let teamsApiInstance = new Asana.TeamsApi();
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "description,edit_team_name_or_description_access_level,edit_team_visibility_or_trash_team_access_level,guest_invite_management_access_level,html_description,join_request_management_access_level,member_invite_management_access_level,name,offset,organization,organization.name,path,permalink_url,team_member_removal_access_level,uri,visibility"
};
teamsApiInstance.getTeamsForWorkspace(workspace_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_gid** | **String**| Globally unique identifier for the workspace or organization. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="removeUserForTeam"></a>
# **removeUserForTeam**

Remove a user from a team

The user making this call must be a member of the team in order to remove themselves or others.

([more information](https://developers.asana.com/reference/removeuserforteam))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let teamsApiInstance = new Asana.TeamsApi();
let body = {"data": {"param1": "value1", "param2": "value2",}}; // Object | The user to remove from the team.
let team_gid = "159874"; // String | Globally unique identifier for the team.

teamsApiInstance.removeUserForTeam(body, team_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The user to remove from the team. | 
 **team_gid** | **String**| Globally unique identifier for the team. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updateTeam"></a>
# **updateTeam**

Update a team

Updates a team within the current workspace.

([more information](https://developers.asana.com/reference/updateteam))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let teamsApiInstance = new Asana.TeamsApi();
let body = {"data": {"param1": "value1", "param2": "value2",}}; // Object | The team to update.
let team_gid = "159874"; // String | Globally unique identifier for the team.
let opts = { 
    'opt_fields': "description,edit_team_name_or_description_access_level,edit_team_visibility_or_trash_team_access_level,guest_invite_management_access_level,html_description,join_request_management_access_level,member_invite_management_access_level,name,organization,organization.name,permalink_url,team_member_removal_access_level,visibility"
};
teamsApiInstance.updateTeam(body, team_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The team to update. | 
 **team_gid** | **String**| Globally unique identifier for the team. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

