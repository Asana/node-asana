# Asana.GoalsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFollowers**](GoalsApi.md#addFollowers) | **POST** /goals/{goal_gid}/addFollowers | Add a collaborator to a goal
[**createGoal**](GoalsApi.md#createGoal) | **POST** /goals | Create a goal
[**createGoalMetric**](GoalsApi.md#createGoalMetric) | **POST** /goals/{goal_gid}/setMetric | Create a goal metric
[**deleteGoal**](GoalsApi.md#deleteGoal) | **DELETE** /goals/{goal_gid} | Delete a goal
[**getGoal**](GoalsApi.md#getGoal) | **GET** /goals/{goal_gid} | Get a goal
[**getGoals**](GoalsApi.md#getGoals) | **GET** /goals | Get goals
[**getParentGoalsForGoal**](GoalsApi.md#getParentGoalsForGoal) | **GET** /goals/{goal_gid}/parentGoals | Get parent goals from a goal
[**removeFollowers**](GoalsApi.md#removeFollowers) | **POST** /goals/{goal_gid}/removeFollowers | Remove a collaborator from a goal
[**updateGoal**](GoalsApi.md#updateGoal) | **PUT** /goals/{goal_gid} | Update a goal
[**updateGoalMetric**](GoalsApi.md#updateGoalMetric) | **POST** /goals/{goal_gid}/setMetricCurrentValue | Update a goal metric

<a name="addFollowers"></a>
# **addFollowers**
> GoalResponseData addFollowers(bodygoal_gid, opts)

Add a collaborator to a goal

Adds followers to a goal. Returns the goal the followers were added to. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.GoalsApi();
let body = new Asana.GoalGidAddFollowersBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // GoalGidAddFollowersBody | The followers to be added as collaborators
let goal_gid = "12345"; // String | Globally unique identifier for the goal.
let opts = { 
    'opt_fields': ["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.addFollowers(bodygoal_gid, opts, (error, data, response) => {
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
 **body** | [**GoalGidAddFollowersBody**](GoalGidAddFollowersBody.md)| The followers to be added as collaborators | 
 **goal_gid** | **String**| Globally unique identifier for the goal. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GoalResponseData**](GoalResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createGoal"></a>
# **createGoal**
> GoalResponseData createGoal(body, opts)

Create a goal

Creates a new goal in a workspace or team.  Returns the full record of the newly created goal.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.GoalsApi();
let body = new Asana.GoalsBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // GoalsBody | The goal to create.
let opts = { 
    'opt_fields': ["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createGoal(body, opts, (error, data, response) => {
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
 **body** | [**GoalsBody**](GoalsBody.md)| The goal to create. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GoalResponseData**](GoalResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createGoalMetric"></a>
# **createGoalMetric**
> GoalResponseData createGoalMetric(bodygoal_gid, opts)

Create a goal metric

Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.GoalsApi();
let body = new Asana.GoalGidSetMetricBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // GoalGidSetMetricBody | The goal metric to create.
let goal_gid = "12345"; // String | Globally unique identifier for the goal.
let opts = { 
    'opt_fields': ["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createGoalMetric(bodygoal_gid, opts, (error, data, response) => {
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
 **body** | [**GoalGidSetMetricBody**](GoalGidSetMetricBody.md)| The goal metric to create. | 
 **goal_gid** | **String**| Globally unique identifier for the goal. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GoalResponseData**](GoalResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteGoal"></a>
# **deleteGoal**
> EmptyResponseData deleteGoal(goal_gid)

Delete a goal

A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.  Returns an empty data record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.GoalsApi();
let goal_gid = "12345"; // String | Globally unique identifier for the goal.

apiInstance.deleteGoal(goal_gid, (error, data, response) => {
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
 **goal_gid** | **String**| Globally unique identifier for the goal. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getGoal"></a>
# **getGoal**
> GoalResponseData getGoal(goal_gid, opts)

Get a goal

Returns the complete goal record for a single goal.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.GoalsApi();
let goal_gid = "12345"; // String | Globally unique identifier for the goal.
let opts = { 
    'opt_fields': ["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getGoal(goal_gid, opts, (error, data, response) => {
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
 **goal_gid** | **String**| Globally unique identifier for the goal. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GoalResponseData**](GoalResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getGoals"></a>
# **getGoals**
> GoalResponseArray getGoals(opts)

Get goals

Returns compact goal records.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.GoalsApi();
let opts = { 
    'portfolio': "159874", // String | Globally unique identifier for supporting portfolio.
    'project': "512241", // String | Globally unique identifier for supporting project.
    'is_workspace_level': false, // Boolean | Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter.
    'team': "31326", // String | Globally unique identifier for the team.
    'workspace': "31326", // String | Globally unique identifier for the workspace.
    'time_periods': ["221693,506165"], // [String] | Globally unique identifiers for the time periods.
    'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'opt_fields': ["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","offset","owner","owner.name","path","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getGoals(opts, (error, data, response) => {
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
 **portfolio** | **String**| Globally unique identifier for supporting portfolio. | [optional] 
 **project** | **String**| Globally unique identifier for supporting project. | [optional] 
 **is_workspace_level** | **Boolean**| Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter. | [optional] 
 **team** | **String**| Globally unique identifier for the team. | [optional] 
 **workspace** | **String**| Globally unique identifier for the workspace. | [optional] 
 **time_periods** | [**[String]**](String.md)| Globally unique identifiers for the time periods. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GoalResponseArray**](GoalResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getParentGoalsForGoal"></a>
# **getParentGoalsForGoal**
> GoalResponseArray getParentGoalsForGoal(goal_gid, opts)

Get parent goals from a goal

Returns a compact representation of all of the parent goals of a goal.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.GoalsApi();
let goal_gid = "12345"; // String | Globally unique identifier for the goal.
let opts = { 
    'opt_fields': ["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getParentGoalsForGoal(goal_gid, opts, (error, data, response) => {
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
 **goal_gid** | **String**| Globally unique identifier for the goal. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GoalResponseArray**](GoalResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="removeFollowers"></a>
# **removeFollowers**
> GoalResponseData removeFollowers(bodygoal_gid, opts)

Remove a collaborator from a goal

Removes followers from a goal. Returns the goal the followers were removed from. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.GoalsApi();
let body = new Asana.GoalGidRemoveFollowersBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // GoalGidRemoveFollowersBody | The followers to be removed as collaborators
let goal_gid = "12345"; // String | Globally unique identifier for the goal.
let opts = { 
    'opt_fields': ["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.removeFollowers(bodygoal_gid, opts, (error, data, response) => {
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
 **body** | [**GoalGidRemoveFollowersBody**](GoalGidRemoveFollowersBody.md)| The followers to be removed as collaborators | 
 **goal_gid** | **String**| Globally unique identifier for the goal. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GoalResponseData**](GoalResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updateGoal"></a>
# **updateGoal**
> GoalResponseData updateGoal(bodygoal_gid, opts)

Update a goal

An existing goal can be updated by making a PUT request on the URL for that goal. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated goal record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.GoalsApi();
let body = new Asana.GoalsGoalGidBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // GoalsGoalGidBody | The updated fields for the goal.
let goal_gid = "12345"; // String | Globally unique identifier for the goal.
let opts = { 
    'opt_fields': ["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.updateGoal(bodygoal_gid, opts, (error, data, response) => {
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
 **body** | [**GoalsGoalGidBody**](GoalsGoalGidBody.md)| The updated fields for the goal. | 
 **goal_gid** | **String**| Globally unique identifier for the goal. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GoalResponseData**](GoalResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updateGoalMetric"></a>
# **updateGoalMetric**
> GoalResponseData updateGoalMetric(bodygoal_gid, opts)

Update a goal metric

Updates a goal&#x27;s existing metric&#x27;s &#x60;current_number_value&#x60; if one exists, otherwise responds with a 400 status code.  Returns the complete updated goal metric record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.GoalsApi();
let body = new Asana.GoalGidSetMetricCurrentValueBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // GoalGidSetMetricCurrentValueBody | The updated fields for the goal metric.
let goal_gid = "12345"; // String | Globally unique identifier for the goal.
let opts = { 
    'opt_fields': ["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.updateGoalMetric(bodygoal_gid, opts, (error, data, response) => {
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
 **body** | [**GoalGidSetMetricCurrentValueBody**](GoalGidSetMetricCurrentValueBody.md)| The updated fields for the goal metric. | 
 **goal_gid** | **String**| Globally unique identifier for the goal. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**GoalResponseData**](GoalResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

