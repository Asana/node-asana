# Asana.MembershipsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMembership**](MembershipsApi.md#createMembership) | **POST** /memberships | Create a membership
[**deleteMembership**](MembershipsApi.md#deleteMembership) | **DELETE** /memberships/{membership_gid} | Delete a membership
[**getMembership**](MembershipsApi.md#getMembership) | **GET** /memberships/{membership_gid} | Get a membership
[**getMemberships**](MembershipsApi.md#getMemberships) | **GET** /memberships | Get multiple memberships
[**updateMembership**](MembershipsApi.md#updateMembership) | **PUT** /memberships/{membership_gid} | Update a membership

<a name="createMembership"></a>
# **createMembership**

Create a membership

Creates a new membership in a `goal`, `project`, `portfolio`, or `custom_field`. Teams or Users can be members of `goals` or `projects`. Portfolios and custom fields only support `users` as members.  Returns the full record of the newly created membership.

([more information](https://developers.asana.com/reference/createmembership))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let membershipsApiInstance = new Asana.MembershipsApi();
let opts = { 
    'body': {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}
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

A specific, existing membership for a `goal`, `project`, `portfolio` or `custom_field` can be deleted by making a `DELETE` request on the URL for that membership.  Returns an empty data record.

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

Returns a `project_membership`, `goal_membership`, `portfolio_membership`, or `custom_field_membership` record for a membership id.

([more information](https://developers.asana.com/reference/getmembership))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let membershipsApiInstance = new Asana.MembershipsApi();
let membership_gid = "12345"; // String | Globally unique identifier for the membership.

membershipsApiInstance.getMembership(membership_gid).then((result) => {
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

<a name="getMemberships"></a>
# **getMemberships**

Get multiple memberships

Returns compact `goal_membership`, `project_membership`, `portfolio_membership`, or `custom_field_membership` records. The possible types for `parent` in this request are `goal`, `project`, `portfolio`, or `custom_field`. An additional member (user GID or team GID) can be passed in to filter to a specific membership. Team as members are not supported for portfolios or custom fields yet.

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
 **parent** | **String**| Globally unique identifier for &#x60;goal&#x60;, &#x60;project&#x60;, &#x60;portfolio&#x60;, or &#x60;custom_field&#x60;. | [optional] 
 **member** | **String**| Globally unique identifier for &#x60;team&#x60; or &#x60;user&#x60;. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateMembership"></a>
# **updateMembership**

Update a membership

An existing membership can be updated by making a `PUT` request on the membership. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged. Memberships on `goals`, `projects`, `portfolios`, and `custom_fields` can be updated.  Returns the full record of the updated membership.

([more information](https://developers.asana.com/reference/updatemembership))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let membershipsApiInstance = new Asana.MembershipsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The membership to update.
let membership_gid = "12345"; // String | Globally unique identifier for the membership.

membershipsApiInstance.updateMembership(body, membership_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The membership to update. | 
 **membership_gid** | **String**| Globally unique identifier for the membership. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

