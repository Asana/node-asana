# Asana.GoalRelationshipsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSupportingRelationship**](GoalRelationshipsApi.md#addSupportingRelationship) | **POST** /goals/{goal_gid}/addSupportingRelationship | Add a supporting goal relationship
[**getGoalRelationship**](GoalRelationshipsApi.md#getGoalRelationship) | **GET** /goal_relationships/{goal_relationship_gid} | Get a goal relationship
[**getGoalRelationships**](GoalRelationshipsApi.md#getGoalRelationships) | **GET** /goal_relationships | Get goal relationships
[**removeSupportingRelationship**](GoalRelationshipsApi.md#removeSupportingRelationship) | **POST** /goals/{goal_gid}/removeSupportingRelationship | Removes a supporting goal relationship
[**updateGoalRelationship**](GoalRelationshipsApi.md#updateGoalRelationship) | **PUT** /goal_relationships/{goal_relationship_gid} | Update a goal relationship

<a name="addSupportingRelationship"></a>
# **addSupportingRelationship**
> GoalRelationshipResponseData addSupportingRelationship(bodygoal_gid, opts)

Add a supporting goal relationship

Creates a goal relationship by adding a supporting resource to a given goal.  Returns the newly created goal relationship record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.GoalRelationshipsApi();
let body = new Asana.GoalGidAddSupportingRelationshipBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // GoalGidAddSupportingRelationshipBody | The supporting resource to be added to the goal
let goal_gid = "12345"; // String | Globally unique identifier for the goal.
let opts = { 
  'opt_fields': ["contribution_weight","resource_subtype","supported_goal","supported_goal.name","supported_goal.owner","supported_goal.owner.name","supporting_resource","supporting_resource.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.addSupportingRelationship(bodygoal_gid, opts, (error, data, response) => {
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
 **body** | [**GoalGidAddSupportingRelationshipBody**](GoalGidAddSupportingRelationshipBody.md)| The supporting resource to be added to the goal | 
 **goal_gid** | **String**| Globally unique identifier for the goal. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GoalRelationshipResponseData**](GoalRelationshipResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="getGoalRelationship"></a>
# **getGoalRelationship**
> GoalRelationshipResponseData getGoalRelationship(goal_relationship_gid, opts)

Get a goal relationship

Returns the complete updated goal relationship record for a single goal relationship.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.GoalRelationshipsApi();
let goal_relationship_gid = "12345"; // String | Globally unique identifier for the goal relationship.
let opts = { 
  'opt_fields': ["contribution_weight","resource_subtype","supported_goal","supported_goal.name","supported_goal.owner","supported_goal.owner.name","supporting_resource","supporting_resource.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getGoalRelationship(goal_relationship_gid, opts, (error, data, response) => {
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
 **goal_relationship_gid** | **String**| Globally unique identifier for the goal relationship. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GoalRelationshipResponseData**](GoalRelationshipResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getGoalRelationships"></a>
# **getGoalRelationships**
> GoalRelationshipResponseArray getGoalRelationships(supported_goal, opts)

Get goal relationships

Returns compact goal relationship records.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.GoalRelationshipsApi();
let supported_goal = "12345"; // String | Globally unique identifier for the supported goal in the goal relationship.
let opts = { 
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'resource_subtype': "subgoal", // String | If provided, filter to goal relationships with a given resource_subtype.
  'opt_fields': ["contribution_weight","offset","path","resource_subtype","supported_goal","supported_goal.name","supported_goal.owner","supported_goal.owner.name","supporting_resource","supporting_resource.name","uri"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getGoalRelationships(supported_goal, opts, (error, data, response) => {
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
 **supported_goal** | **String**| Globally unique identifier for the supported goal in the goal relationship. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **resource_subtype** | **String**| If provided, filter to goal relationships with a given resource_subtype. | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GoalRelationshipResponseArray**](GoalRelationshipResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="removeSupportingRelationship"></a>
# **removeSupportingRelationship**
> EmptyResponseData removeSupportingRelationship(bodygoal_gid)

Removes a supporting goal relationship

Removes a goal relationship for a given parent goal.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.GoalRelationshipsApi();
let body = new Asana.GoalGidRemoveSupportingRelationshipBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // GoalGidRemoveSupportingRelationshipBody | The supporting resource to be removed from the goal
let goal_gid = "12345"; // String | Globally unique identifier for the goal.

apiInstance.removeSupportingRelationship(bodygoal_gid, (error, data, response) => {
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
 **body** | [**GoalGidRemoveSupportingRelationshipBody**](GoalGidRemoveSupportingRelationshipBody.md)| The supporting resource to be removed from the goal | 
 **goal_gid** | **String**| Globally unique identifier for the goal. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updateGoalRelationship"></a>
# **updateGoalRelationship**
> GoalRelationshipResponseData updateGoalRelationship(bodygoal_relationship_gid, opts)

Update a goal relationship

An existing goal relationship can be updated by making a PUT request on the URL for that goal relationship. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated goal relationship record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.GoalRelationshipsApi();
let body = new Asana.GoalRelationshipsGoalRelationshipGidBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // GoalRelationshipsGoalRelationshipGidBody | The updated fields for the goal relationship.
let goal_relationship_gid = "12345"; // String | Globally unique identifier for the goal relationship.
let opts = { 
  'opt_fields': ["contribution_weight","resource_subtype","supported_goal","supported_goal.name","supported_goal.owner","supported_goal.owner.name","supporting_resource","supporting_resource.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.updateGoalRelationship(bodygoal_relationship_gid, opts, (error, data, response) => {
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
 **body** | [**GoalRelationshipsGoalRelationshipGidBody**](GoalRelationshipsGoalRelationshipGidBody.md)| The updated fields for the goal relationship. | 
 **goal_relationship_gid** | **String**| Globally unique identifier for the goal relationship. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GoalRelationshipResponseData**](GoalRelationshipResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

