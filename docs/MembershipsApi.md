# Asana.MembershipsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMembership**](MembershipsApi.md#createMembership) | **POST** /memberships | Create a membership
[**deleteMembership**](MembershipsApi.md#deleteMembership) | **DELETE** /memberships/{membership_gid} | Delete a membership
[**getMembership**](MembershipsApi.md#getMembership) | **GET** /memberships/{membership_gid} | Get a membership
[**getMemberships**](MembershipsApi.md#getMemberships) | **GET** /memberships | Get multiple memberships

<a name="createMembership"></a>
# **createMembership**

Create a membership

Creates a new membership in a `goal`. `Teams` or `users` can be a member of `goals`.  Returns the full record of the newly created membership.

([more information](https://developers.asana.com/reference/createmembership))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let membershipsApiInstance = new Asana.MembershipsApi();
let opts = { 
    'body': {"data": {"param1": "value1", "param2": "value2",}}
};
membershipsApiInstance.createMembership(opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The updated fields for the membership. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteMembership"></a>
# **deleteMembership**

Delete a membership

A specific, existing membership can be deleted by making a `DELETE` request on the URL for that membership.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deletemembership))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let membershipsApiInstance = new Asana.MembershipsApi();
let membership_gid = "12345"; // String | Globally unique identifier for the membership.

membershipsApiInstance.deleteMembership(membership_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **membership_gid** | **String**| Globally unique identifier for the membership. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getMembership"></a>
# **getMembership**

Get a membership

Returns compact `project_membership` record for a single membership. `GET` only supports project memberships currently

([more information](https://developers.asana.com/reference/getmembership))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let membershipsApiInstance = new Asana.MembershipsApi();
let membership_gid = "12345"; // String | Globally unique identifier for the membership.
let opts = { 
    'opt_fields': "access_level,member,member.name,parent,parent.name,resource_subtype"
};
membershipsApiInstance.getMembership(membership_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **membership_gid** | **String**| Globally unique identifier for the membership. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getMemberships"></a>
# **getMemberships**

Get multiple memberships

Returns compact `goal_membership` or `project_membership` records. The possible types for `parent` in this request are `goal` or `project`. An additional member (user GID or team GID) can be passed in to filter to a specific membership.

([more information](https://developers.asana.com/reference/getmemberships))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let membershipsApiInstance = new Asana.MembershipsApi();
let opts = { 
    'parent': "159874", 
    'member': "1061493", 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "offset,path,uri"
};
membershipsApiInstance.getMemberships(opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **String**| Globally unique identifier for &#x60;goal&#x60; or &#x60;project&#x60;. | [optional] 
 **member** | **String**| Globally unique identifier for &#x60;team&#x60; or &#x60;user&#x60;. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

