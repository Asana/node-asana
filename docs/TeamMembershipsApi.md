# Asana.TeamMembershipsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTeamMembership**](TeamMembershipsApi.md#getTeamMembership) | **GET** /team_memberships/{team_membership_gid} | Get a team membership
[**getTeamMemberships**](TeamMembershipsApi.md#getTeamMemberships) | **GET** /team_memberships | Get team memberships
[**getTeamMembershipsForTeam**](TeamMembershipsApi.md#getTeamMembershipsForTeam) | **GET** /teams/{team_gid}/team_memberships | Get memberships from a team
[**getTeamMembershipsForUser**](TeamMembershipsApi.md#getTeamMembershipsForUser) | **GET** /users/{user_gid}/team_memberships | Get memberships from a user

<a name="getTeamMembership"></a>
# **getTeamMembership**

Get a team membership

Returns the complete team membership record for a single team membership.

([more information](https://developers.asana.com/reference/getteammembership))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let teamMembershipsApiInstance = new Asana.TeamMembershipsApi();
let team_membership_gid = "724362"; // String | 
let opts = { 
    'opt_fields': "is_admin,is_guest,is_limited_access,team,team.name,user,user.name"
};
teamMembershipsApiInstance.getTeamMembership(team_membership_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_membership_gid** | **String**|  | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTeamMemberships"></a>
# **getTeamMemberships**

Get team memberships

Returns compact team membership records.

([more information](https://developers.asana.com/reference/getteammemberships))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let teamMembershipsApiInstance = new Asana.TeamMembershipsApi();
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'team': "159874", 
    'user': "512241", 
    'workspace': "31326", 
    'opt_fields': "is_admin,is_guest,is_limited_access,offset,path,team,team.name,uri,user,user.name"
};
teamMembershipsApiInstance.getTeamMemberships(opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **team** | **String**| Globally unique identifier for the team. | [optional] 
 **user** | **String**| A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user. This parameter must be used with the workspace parameter. | [optional] 
 **workspace** | **String**| Globally unique identifier for the workspace. This parameter must be used with the user parameter. | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTeamMembershipsForTeam"></a>
# **getTeamMembershipsForTeam**

Get memberships from a team

Returns the compact team memberships for the team.

([more information](https://developers.asana.com/reference/getteammembershipsforteam))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let teamMembershipsApiInstance = new Asana.TeamMembershipsApi();
let team_gid = "159874"; // String | Globally unique identifier for the team.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "is_admin,is_guest,is_limited_access,offset,path,team,team.name,uri,user,user.name"
};
teamMembershipsApiInstance.getTeamMembershipsForTeam(team_gid, opts).then((result) => {
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

<a name="getTeamMembershipsForUser"></a>
# **getTeamMembershipsForUser**

Get memberships from a user

Returns the compact team membership records for the user.

([more information](https://developers.asana.com/reference/getteammembershipsforuser))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let teamMembershipsApiInstance = new Asana.TeamMembershipsApi();
let user_gid = "me"; // String | A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
let workspace = "31326"; // String | Globally unique identifier for the workspace.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "is_admin,is_guest,is_limited_access,offset,path,team,team.name,uri,user,user.name"
};
teamMembershipsApiInstance.getTeamMembershipsForUser(user_gid, workspace, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_gid** | **String**| A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user. | 
 **workspace** | **String**| Globally unique identifier for the workspace. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

