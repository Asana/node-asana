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

Add a collaborator to a goal

Adds followers to a goal. Returns the goal the followers were added to. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

([more information](https://developers.asana.com/reference/addfollowers))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let goalsApiInstance = new Asana.GoalsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The followers to be added as collaborators
let goal_gid = "12345"; // String | Globally unique identifier for the goal.
let opts = { 
    'opt_fields': "current_status_update,current_status_update.resource_subtype,current_status_update.title,due_on,followers,followers.name,html_notes,is_workspace_level,liked,likes,likes.user,likes.user.name,metric,metric.can_manage,metric.currency_code,metric.current_display_value,metric.current_number_value,metric.initial_number_value,metric.is_custom_weight,metric.precision,metric.progress_source,metric.resource_subtype,metric.target_number_value,metric.unit,name,notes,num_likes,owner,owner.name,start_on,status,team,team.name,time_period,time_period.display_name,time_period.end_on,time_period.period,time_period.start_on,workspace,workspace.name"
};
goalsApiInstance.addFollowers(body, goal_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The followers to be added as collaborators | 
 **goal_gid** | **String**| Globally unique identifier for the goal. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createGoal"></a>
# **createGoal**

Create a goal

Creates a new goal in a workspace or team.  Returns the full record of the newly created goal.

([more information](https://developers.asana.com/reference/creategoal))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let goalsApiInstance = new Asana.GoalsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The goal to create.
let opts = { 
    'opt_fields': "current_status_update,current_status_update.resource_subtype,current_status_update.title,due_on,followers,followers.name,html_notes,is_workspace_level,liked,likes,likes.user,likes.user.name,metric,metric.can_manage,metric.currency_code,metric.current_display_value,metric.current_number_value,metric.initial_number_value,metric.is_custom_weight,metric.precision,metric.progress_source,metric.resource_subtype,metric.target_number_value,metric.unit,name,notes,num_likes,owner,owner.name,start_on,status,team,team.name,time_period,time_period.display_name,time_period.end_on,time_period.period,time_period.start_on,workspace,workspace.name"
};
goalsApiInstance.createGoal(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The goal to create. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createGoalMetric"></a>
# **createGoalMetric**

Create a goal metric

Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.

([more information](https://developers.asana.com/reference/creategoalmetric))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let goalsApiInstance = new Asana.GoalsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The goal metric to create.
let goal_gid = "12345"; // String | Globally unique identifier for the goal.
let opts = { 
    'opt_fields': "current_status_update,current_status_update.resource_subtype,current_status_update.title,due_on,followers,followers.name,html_notes,is_workspace_level,liked,likes,likes.user,likes.user.name,metric,metric.can_manage,metric.currency_code,metric.current_display_value,metric.current_number_value,metric.initial_number_value,metric.is_custom_weight,metric.precision,metric.progress_source,metric.resource_subtype,metric.target_number_value,metric.unit,name,notes,num_likes,owner,owner.name,start_on,status,team,team.name,time_period,time_period.display_name,time_period.end_on,time_period.period,time_period.start_on,workspace,workspace.name"
};
goalsApiInstance.createGoalMetric(body, goal_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The goal metric to create. | 
 **goal_gid** | **String**| Globally unique identifier for the goal. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteGoal"></a>
# **deleteGoal**

Delete a goal

A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deletegoal))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let goalsApiInstance = new Asana.GoalsApi();
let goal_gid = "12345"; // String | Globally unique identifier for the goal.

goalsApiInstance.deleteGoal(goal_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goal_gid** | **String**| Globally unique identifier for the goal. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getGoal"></a>
# **getGoal**

Get a goal

Returns the complete goal record for a single goal.

([more information](https://developers.asana.com/reference/getgoal))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let goalsApiInstance = new Asana.GoalsApi();
let goal_gid = "12345"; // String | Globally unique identifier for the goal.
let opts = { 
    'opt_fields': "current_status_update,current_status_update.resource_subtype,current_status_update.title,due_on,followers,followers.name,html_notes,is_workspace_level,liked,likes,likes.user,likes.user.name,metric,metric.can_manage,metric.currency_code,metric.current_display_value,metric.current_number_value,metric.initial_number_value,metric.is_custom_weight,metric.precision,metric.progress_source,metric.resource_subtype,metric.target_number_value,metric.unit,name,notes,num_likes,owner,owner.name,start_on,status,team,team.name,time_period,time_period.display_name,time_period.end_on,time_period.period,time_period.start_on,workspace,workspace.name"
};
goalsApiInstance.getGoal(goal_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goal_gid** | **String**| Globally unique identifier for the goal. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getGoals"></a>
# **getGoals**

Get goals

Returns compact goal records.

([more information](https://developers.asana.com/reference/getgoals))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let goalsApiInstance = new Asana.GoalsApi();
let opts = { 
    'portfolio': "159874", 
    'project': "512241", 
    'task': "78424", 
    'is_workspace_level': false, 
    'team': "31326", 
    'workspace': "31326", 
    'time_periods': "221693,506165", 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "current_status_update,current_status_update.resource_subtype,current_status_update.title,due_on,followers,followers.name,html_notes,is_workspace_level,liked,likes,likes.user,likes.user.name,metric,metric.can_manage,metric.currency_code,metric.current_display_value,metric.current_number_value,metric.initial_number_value,metric.is_custom_weight,metric.precision,metric.progress_source,metric.resource_subtype,metric.target_number_value,metric.unit,name,notes,num_likes,offset,owner,owner.name,path,start_on,status,team,team.name,time_period,time_period.display_name,time_period.end_on,time_period.period,time_period.start_on,uri,workspace,workspace.name"
};
goalsApiInstance.getGoals(opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio** | **String**| Globally unique identifier for supporting portfolio. | [optional] 
 **project** | **String**| Globally unique identifier for supporting project. | [optional] 
 **task** | **String**| Globally unique identifier for supporting task. | [optional] 
 **is_workspace_level** | **Boolean**| Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter. | [optional] 
 **team** | **String**| Globally unique identifier for the team. | [optional] 
 **workspace** | **String**| Globally unique identifier for the workspace. | [optional] 
 **time_periods** | **Object**| Globally unique identifiers for the time periods. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getParentGoalsForGoal"></a>
# **getParentGoalsForGoal**

Get parent goals from a goal

Returns a compact representation of all of the parent goals of a goal.

([more information](https://developers.asana.com/reference/getparentgoalsforgoal))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let goalsApiInstance = new Asana.GoalsApi();
let goal_gid = "12345"; // String | Globally unique identifier for the goal.
let opts = { 
    'opt_fields': "current_status_update,current_status_update.resource_subtype,current_status_update.title,due_on,followers,followers.name,html_notes,is_workspace_level,liked,likes,likes.user,likes.user.name,metric,metric.can_manage,metric.currency_code,metric.current_display_value,metric.current_number_value,metric.initial_number_value,metric.is_custom_weight,metric.precision,metric.progress_source,metric.resource_subtype,metric.target_number_value,metric.unit,name,notes,num_likes,owner,owner.name,start_on,status,team,team.name,time_period,time_period.display_name,time_period.end_on,time_period.period,time_period.start_on,workspace,workspace.name"
};
goalsApiInstance.getParentGoalsForGoal(goal_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goal_gid** | **String**| Globally unique identifier for the goal. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="removeFollowers"></a>
# **removeFollowers**

Remove a collaborator from a goal

Removes followers from a goal. Returns the goal the followers were removed from. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

([more information](https://developers.asana.com/reference/removefollowers))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let goalsApiInstance = new Asana.GoalsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The followers to be removed as collaborators
let goal_gid = "12345"; // String | Globally unique identifier for the goal.
let opts = { 
    'opt_fields': "current_status_update,current_status_update.resource_subtype,current_status_update.title,due_on,followers,followers.name,html_notes,is_workspace_level,liked,likes,likes.user,likes.user.name,metric,metric.can_manage,metric.currency_code,metric.current_display_value,metric.current_number_value,metric.initial_number_value,metric.is_custom_weight,metric.precision,metric.progress_source,metric.resource_subtype,metric.target_number_value,metric.unit,name,notes,num_likes,owner,owner.name,start_on,status,team,team.name,time_period,time_period.display_name,time_period.end_on,time_period.period,time_period.start_on,workspace,workspace.name"
};
goalsApiInstance.removeFollowers(body, goal_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The followers to be removed as collaborators | 
 **goal_gid** | **String**| Globally unique identifier for the goal. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updateGoal"></a>
# **updateGoal**

Update a goal

An existing goal can be updated by making a PUT request on the URL for that goal. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated goal record.

([more information](https://developers.asana.com/reference/updategoal))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let goalsApiInstance = new Asana.GoalsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The updated fields for the goal.
let goal_gid = "12345"; // String | Globally unique identifier for the goal.
let opts = { 
    'opt_fields': "current_status_update,current_status_update.resource_subtype,current_status_update.title,due_on,followers,followers.name,html_notes,is_workspace_level,liked,likes,likes.user,likes.user.name,metric,metric.can_manage,metric.currency_code,metric.current_display_value,metric.current_number_value,metric.initial_number_value,metric.is_custom_weight,metric.precision,metric.progress_source,metric.resource_subtype,metric.target_number_value,metric.unit,name,notes,num_likes,owner,owner.name,start_on,status,team,team.name,time_period,time_period.display_name,time_period.end_on,time_period.period,time_period.start_on,workspace,workspace.name"
};
goalsApiInstance.updateGoal(body, goal_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The updated fields for the goal. | 
 **goal_gid** | **String**| Globally unique identifier for the goal. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updateGoalMetric"></a>
# **updateGoalMetric**

Update a goal metric

Updates a goal's existing metric's `current_number_value` if one exists, otherwise responds with a 400 status code.  Returns the complete updated goal metric record.

([more information](https://developers.asana.com/reference/updategoalmetric))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let goalsApiInstance = new Asana.GoalsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The updated fields for the goal metric.
let goal_gid = "12345"; // String | Globally unique identifier for the goal.
let opts = { 
    'opt_fields': "current_status_update,current_status_update.resource_subtype,current_status_update.title,due_on,followers,followers.name,html_notes,is_workspace_level,liked,likes,likes.user,likes.user.name,metric,metric.can_manage,metric.currency_code,metric.current_display_value,metric.current_number_value,metric.initial_number_value,metric.is_custom_weight,metric.precision,metric.progress_source,metric.resource_subtype,metric.target_number_value,metric.unit,name,notes,num_likes,owner,owner.name,start_on,status,team,team.name,time_period,time_period.display_name,time_period.end_on,time_period.period,time_period.start_on,workspace,workspace.name"
};
goalsApiInstance.updateGoalMetric(body, goal_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The updated fields for the goal metric. | 
 **goal_gid** | **String**| Globally unique identifier for the goal. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

