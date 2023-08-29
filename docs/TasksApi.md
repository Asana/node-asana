# Asana.TasksApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDependenciesForTask**](TasksApi.md#addDependenciesForTask) | **POST** /tasks/{task_gid}/addDependencies | Set dependencies for a task
[**addDependentsForTask**](TasksApi.md#addDependentsForTask) | **POST** /tasks/{task_gid}/addDependents | Set dependents for a task
[**addFollowersForTask**](TasksApi.md#addFollowersForTask) | **POST** /tasks/{task_gid}/addFollowers | Add followers to a task
[**addProjectForTask**](TasksApi.md#addProjectForTask) | **POST** /tasks/{task_gid}/addProject | Add a project to a task
[**addTagForTask**](TasksApi.md#addTagForTask) | **POST** /tasks/{task_gid}/addTag | Add a tag to a task
[**createSubtaskForTask**](TasksApi.md#createSubtaskForTask) | **POST** /tasks/{task_gid}/subtasks | Create a subtask
[**createTask**](TasksApi.md#createTask) | **POST** /tasks | Create a task
[**deleteTask**](TasksApi.md#deleteTask) | **DELETE** /tasks/{task_gid} | Delete a task
[**duplicateTask**](TasksApi.md#duplicateTask) | **POST** /tasks/{task_gid}/duplicate | Duplicate a task
[**getDependenciesForTask**](TasksApi.md#getDependenciesForTask) | **GET** /tasks/{task_gid}/dependencies | Get dependencies from a task
[**getDependentsForTask**](TasksApi.md#getDependentsForTask) | **GET** /tasks/{task_gid}/dependents | Get dependents from a task
[**getSubtasksForTask**](TasksApi.md#getSubtasksForTask) | **GET** /tasks/{task_gid}/subtasks | Get subtasks from a task
[**getTask**](TasksApi.md#getTask) | **GET** /tasks/{task_gid} | Get a task
[**getTasks**](TasksApi.md#getTasks) | **GET** /tasks | Get multiple tasks
[**getTasksForProject**](TasksApi.md#getTasksForProject) | **GET** /projects/{project_gid}/tasks | Get tasks from a project
[**getTasksForSection**](TasksApi.md#getTasksForSection) | **GET** /sections/{section_gid}/tasks | Get tasks from a section
[**getTasksForTag**](TasksApi.md#getTasksForTag) | **GET** /tags/{tag_gid}/tasks | Get tasks from a tag
[**getTasksForUserTaskList**](TasksApi.md#getTasksForUserTaskList) | **GET** /user_task_lists/{user_task_list_gid}/tasks | Get tasks from a user task list
[**removeDependenciesForTask**](TasksApi.md#removeDependenciesForTask) | **POST** /tasks/{task_gid}/removeDependencies | Unlink dependencies from a task
[**removeDependentsForTask**](TasksApi.md#removeDependentsForTask) | **POST** /tasks/{task_gid}/removeDependents | Unlink dependents from a task
[**removeFollowerForTask**](TasksApi.md#removeFollowerForTask) | **POST** /tasks/{task_gid}/removeFollowers | Remove followers from a task
[**removeProjectForTask**](TasksApi.md#removeProjectForTask) | **POST** /tasks/{task_gid}/removeProject | Remove a project from a task
[**removeTagForTask**](TasksApi.md#removeTagForTask) | **POST** /tasks/{task_gid}/removeTag | Remove a tag from a task
[**searchTasksForWorkspace**](TasksApi.md#searchTasksForWorkspace) | **GET** /workspaces/{workspace_gid}/tasks/search | Search tasks in a workspace
[**setParentForTask**](TasksApi.md#setParentForTask) | **POST** /tasks/{task_gid}/setParent | Set the parent of a task
[**updateTask**](TasksApi.md#updateTask) | **PUT** /tasks/{task_gid} | Update a task

<a name="addDependenciesForTask"></a>
# **addDependenciesForTask**
> EmptyResponseData addDependenciesForTask(bodytask_gid)

Set dependencies for a task

Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dependents and dependencies combined*.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let body = new Asana.TaskGidAddDependenciesBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TaskGidAddDependenciesBody | The list of tasks to set as dependencies.
let task_gid = "321654"; // String | The task to operate on.

apiInstance.addDependenciesForTask(bodytask_gid, (error, data, response) => {
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
 **body** | [**TaskGidAddDependenciesBody**](TaskGidAddDependenciesBody.md)| The list of tasks to set as dependencies. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="addDependentsForTask"></a>
# **addDependentsForTask**
> EmptyResponseData addDependentsForTask(bodytask_gid)

Set dependents for a task

Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents and dependencies combined*.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let body = new Asana.TaskGidAddDependentsBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TaskGidAddDependentsBody | The list of tasks to add as dependents.
let task_gid = "321654"; // String | The task to operate on.

apiInstance.addDependentsForTask(bodytask_gid, (error, data, response) => {
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
 **body** | [**TaskGidAddDependentsBody**](TaskGidAddDependentsBody.md)| The list of tasks to add as dependents. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="addFollowersForTask"></a>
# **addFollowersForTask**
> TaskResponseData addFollowersForTask(bodytask_gid, opts)

Add followers to a task

Adds followers to a task. Returns an empty data block. Each task can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated task record, described above.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let body = new Asana.TaskGidAddFollowersBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TaskGidAddFollowersBody | The followers to add to the task.
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.addFollowersForTask(bodytask_gid, opts, (error, data, response) => {
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
 **body** | [**TaskGidAddFollowersBody**](TaskGidAddFollowersBody.md)| The followers to add to the task. | 
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseData**](TaskResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="addProjectForTask"></a>
# **addProjectForTask**
> EmptyResponseData addProjectForTask(bodytask_gid)

Add a project to a task

Adds the task to the specified project, in the optional location specified. If no location arguments are given, the task will be added to the end of the project.  &#x60;addProject&#x60; can also be used to reorder a task within a project or section that already contains it.  At most one of &#x60;insert_before&#x60;, &#x60;insert_after&#x60;, or &#x60;section&#x60; should be specified. Inserting into a section in an non-order-dependent way can be done by specifying section, otherwise, to insert within a section in a particular place, specify &#x60;insert_before&#x60; or &#x60;insert_after&#x60; and a task within the section to anchor the position of this task.  Returns an empty data block.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let body = new Asana.TaskGidAddProjectBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TaskGidAddProjectBody | The project to add the task to.
let task_gid = "321654"; // String | The task to operate on.

apiInstance.addProjectForTask(bodytask_gid, (error, data, response) => {
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
 **body** | [**TaskGidAddProjectBody**](TaskGidAddProjectBody.md)| The project to add the task to. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="addTagForTask"></a>
# **addTagForTask**
> EmptyResponseData addTagForTask(bodytask_gid)

Add a tag to a task

Adds a tag to a task. Returns an empty data block.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let body = new Asana.TaskGidAddTagBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TaskGidAddTagBody | The tag to add to the task.
let task_gid = "321654"; // String | The task to operate on.

apiInstance.addTagForTask(bodytask_gid, (error, data, response) => {
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
 **body** | [**TaskGidAddTagBody**](TaskGidAddTagBody.md)| The tag to add to the task. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createSubtaskForTask"></a>
# **createSubtaskForTask**
> TaskResponseData createSubtaskForTask(bodytask_gid, opts)

Create a subtask

Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let body = new Asana.TaskGidSubtasksBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TaskGidSubtasksBody | The new subtask to create.
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createSubtaskForTask(bodytask_gid, opts, (error, data, response) => {
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
 **body** | [**TaskGidSubtasksBody**](TaskGidSubtasksBody.md)| The new subtask to create. | 
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseData**](TaskResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createTask"></a>
# **createTask**
> TaskResponseData createTask(body, opts)

Create a task

Creating a new task is as easy as POSTing to the &#x60;/tasks&#x60; endpoint with a data block containing the fields you’d like to set on the task. Any unspecified fields will take on default values.  Every task is required to be created in a specific workspace, and this workspace cannot be changed once set. The workspace need not be set explicitly if you specify &#x60;projects&#x60; or a &#x60;parent&#x60; task instead.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let body = new Asana.TasksBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TasksBody | The task to create.
let opts = { 
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createTask(body, opts, (error, data, response) => {
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
 **body** | [**TasksBody**](TasksBody.md)| The task to create. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseData**](TaskResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteTask"></a>
# **deleteTask**
> EmptyResponseData deleteTask(task_gid)

Delete a task

A specific, existing task can be deleted by making a DELETE request on the URL for that task. Deleted tasks go into the “trash” of the user making the delete request. Tasks can be recovered from the trash within a period of 30 days; afterward they are completely removed from the system.  Returns an empty data record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let task_gid = "321654"; // String | The task to operate on.

apiInstance.deleteTask(task_gid, (error, data, response) => {
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
 **task_gid** | **String**| The task to operate on. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="duplicateTask"></a>
# **duplicateTask**
> JobResponseData duplicateTask(bodytask_gid, opts)

Duplicate a task

Creates and returns a job that will asynchronously handle the duplication.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let body = new Asana.TaskGidDuplicateBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TaskGidDuplicateBody | Describes the duplicate's name and the fields that will be duplicated.
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': ["new_project","new_project.name","new_project_template","new_project_template.name","new_task","new_task.created_by","new_task.name","new_task.resource_subtype","resource_subtype","status"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.duplicateTask(bodytask_gid, opts, (error, data, response) => {
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
 **body** | [**TaskGidDuplicateBody**](TaskGidDuplicateBody.md)| Describes the duplicate&#x27;s name and the fields that will be duplicated. | 
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**JobResponseData**](JobResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="getDependenciesForTask"></a>
# **getDependenciesForTask**
> TaskResponseArray getDependenciesForTask(task_gid, opts)

Get dependencies from a task

Returns the compact representations of all of the dependencies of a task.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getDependenciesForTask(task_gid, opts, (error, data, response) => {
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
 **task_gid** | **String**| The task to operate on. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseArray**](TaskResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getDependentsForTask"></a>
# **getDependentsForTask**
> TaskResponseArray getDependentsForTask(task_gid, opts)

Get dependents from a task

Returns the compact representations of all of the dependents of a task.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getDependentsForTask(task_gid, opts, (error, data, response) => {
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
 **task_gid** | **String**| The task to operate on. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseArray**](TaskResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getSubtasksForTask"></a>
# **getSubtasksForTask**
> TaskResponseArray getSubtasksForTask(task_gid, opts)

Get subtasks from a task

Returns a compact representation of all of the subtasks of a task.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getSubtasksForTask(task_gid, opts, (error, data, response) => {
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
 **task_gid** | **String**| The task to operate on. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseArray**](TaskResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTask"></a>
# **getTask**
> TaskResponseData getTask(task_gid, opts)

Get a task

Returns the complete task record for a single task.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getTask(task_gid, opts, (error, data, response) => {
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
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseData**](TaskResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTasks"></a>
# **getTasks**
> TaskResponseArray getTasks(opts)

Get multiple tasks

Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a &#x60;project&#x60; or &#x60;tag&#x60; if you do not specify &#x60;assignee&#x60; and &#x60;workspace&#x60;.  For more complex task retrieval, use [workspaces/{workspace_gid}/tasks/search](/reference/searchtasksforworkspace).

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let opts = { 
    'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'assignee': "14641", // String | The assignee to filter tasks on. If searching for unassigned tasks, assignee.any = null can be specified. *Note: If you specify `assignee`, you must also specify the `workspace` to filter on.*
    'project': "321654", // String | The project to filter tasks on.
    'section': "321654", // String | The section to filter tasks on.
    'workspace': "321654", // String | The workspace to filter tasks on. *Note: If you specify `workspace`, you must also specify the `assignee` to filter on.*
    'completed_since': new Date("2012-02-22T02:06:58.158Z"), // Date | Only return tasks that are either incomplete or that have been completed since this time.
    'modified_since': new Date("2012-02-22T02:06:58.158Z"), // Date | Only return tasks that have been modified since the given time.  *Note: A task is considered “modified” if any of its properties change, or associations between it and other objects are modified (e.g.  a task being added to a project). A task is not considered modified just because another object it is associated with (e.g. a subtask) is modified. Actions that count as modifying the task include assigning, renaming, completing, and adding stories.*
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getTasks(opts, (error, data, response) => {
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
 **assignee** | **String**| The assignee to filter tasks on. If searching for unassigned tasks, assignee.any &#x3D; null can be specified. *Note: If you specify &#x60;assignee&#x60;, you must also specify the &#x60;workspace&#x60; to filter on.* | [optional] 
 **project** | **String**| The project to filter tasks on. | [optional] 
 **section** | **String**| The section to filter tasks on. | [optional] 
 **workspace** | **String**| The workspace to filter tasks on. *Note: If you specify &#x60;workspace&#x60;, you must also specify the &#x60;assignee&#x60; to filter on.* | [optional] 
 **completed_since** | **Date**| Only return tasks that are either incomplete or that have been completed since this time. | [optional] 
 **modified_since** | **Date**| Only return tasks that have been modified since the given time.  *Note: A task is considered “modified” if any of its properties change, or associations between it and other objects are modified (e.g.  a task being added to a project). A task is not considered modified just because another object it is associated with (e.g. a subtask) is modified. Actions that count as modifying the task include assigning, renaming, completing, and adding stories.* | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseArray**](TaskResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTasksForProject"></a>
# **getTasksForProject**
> TaskResponseArray getTasksForProject(project_gid, opts)

Get tasks from a project

Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
    'completed_since': "2012-02-22T02:06:58.158Z", // String | Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*. 
    'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getTasksForProject(project_gid, opts, (error, data, response) => {
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
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **completed_since** | **String**| Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.  | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseArray**](TaskResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTasksForSection"></a>
# **getTasksForSection**
> TaskResponseArray getTasksForSection(section_gid, opts)

Get tasks from a section

*Board view only*: Returns the compact section records for all tasks within the given section.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let section_gid = "321654"; // String | The globally unique identifier for the section.
let opts = { 
    'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'completed_since': "2012-02-22T02:06:58.158Z", // String | Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*. 
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getTasksForSection(section_gid, opts, (error, data, response) => {
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
 **section_gid** | **String**| The globally unique identifier for the section. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **completed_since** | **String**| Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.  | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseArray**](TaskResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTasksForTag"></a>
# **getTasksForTag**
> TaskResponseArray getTasksForTag(tag_gid, opts)

Get tasks from a tag

Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let tag_gid = "11235"; // String | Globally unique identifier for the tag.
let opts = { 
    'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getTasksForTag(tag_gid, opts, (error, data, response) => {
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
 **tag_gid** | **String**| Globally unique identifier for the tag. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseArray**](TaskResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTasksForUserTaskList"></a>
# **getTasksForUserTaskList**
> TaskResponseArray getTasksForUserTaskList(user_task_list_gid, opts)

Get tasks from a user task list

Returns the compact list of tasks in a user’s My Tasks list. *Note: Access control is enforced for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be filtered out if the API-authenticated user does not have access to them.* *Note: Both complete and incomplete tasks are returned by default unless they are filtered out (for example, setting &#x60;completed_since&#x3D;now&#x60; will return only incomplete tasks, which is the default view for “My Tasks” in Asana.)*

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let user_task_list_gid = "12345"; // String | Globally unique identifier for the user task list.
let opts = { 
    'completed_since': "2012-02-22T02:06:58.158Z", // String | Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*. 
    'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getTasksForUserTaskList(user_task_list_gid, opts, (error, data, response) => {
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
 **user_task_list_gid** | **String**| Globally unique identifier for the user task list. | 
 **completed_since** | **String**| Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.  | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseArray**](TaskResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="removeDependenciesForTask"></a>
# **removeDependenciesForTask**
> EmptyResponseData removeDependenciesForTask(bodytask_gid)

Unlink dependencies from a task

Unlinks a set of dependencies from this task.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let body = new Asana.TaskGidRemoveDependenciesBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TaskGidRemoveDependenciesBody | The list of tasks to unlink as dependencies.
let task_gid = "321654"; // String | The task to operate on.

apiInstance.removeDependenciesForTask(bodytask_gid, (error, data, response) => {
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
 **body** | [**TaskGidRemoveDependenciesBody**](TaskGidRemoveDependenciesBody.md)| The list of tasks to unlink as dependencies. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="removeDependentsForTask"></a>
# **removeDependentsForTask**
> EmptyResponseData removeDependentsForTask(bodytask_gid)

Unlink dependents from a task

Unlinks a set of dependents from this task.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let body = new Asana.TaskGidRemoveDependentsBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TaskGidRemoveDependentsBody | The list of tasks to remove as dependents.
let task_gid = "321654"; // String | The task to operate on.

apiInstance.removeDependentsForTask(bodytask_gid, (error, data, response) => {
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
 **body** | [**TaskGidRemoveDependentsBody**](TaskGidRemoveDependentsBody.md)| The list of tasks to remove as dependents. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="removeFollowerForTask"></a>
# **removeFollowerForTask**
> TaskResponseData removeFollowerForTask(bodytask_gid, opts)

Remove followers from a task

Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let body = new Asana.TaskGidRemoveFollowersBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TaskGidRemoveFollowersBody | The followers to remove from the task.
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.removeFollowerForTask(bodytask_gid, opts, (error, data, response) => {
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
 **body** | [**TaskGidRemoveFollowersBody**](TaskGidRemoveFollowersBody.md)| The followers to remove from the task. | 
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseData**](TaskResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="removeProjectForTask"></a>
# **removeProjectForTask**
> EmptyResponseData removeProjectForTask(bodytask_gid)

Remove a project from a task

Removes the task from the specified project. The task will still exist in the system, but it will not be in the project anymore.  Returns an empty data block.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let body = new Asana.TaskGidRemoveProjectBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TaskGidRemoveProjectBody | The project to remove the task from.
let task_gid = "321654"; // String | The task to operate on.

apiInstance.removeProjectForTask(bodytask_gid, (error, data, response) => {
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
 **body** | [**TaskGidRemoveProjectBody**](TaskGidRemoveProjectBody.md)| The project to remove the task from. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="removeTagForTask"></a>
# **removeTagForTask**
> EmptyResponseData removeTagForTask(bodytask_gid)

Remove a tag from a task

Removes a tag from a task. Returns an empty data block.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let body = new Asana.TaskGidRemoveTagBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TaskGidRemoveTagBody | The tag to remove from the task.
let task_gid = "321654"; // String | The task to operate on.

apiInstance.removeTagForTask(bodytask_gid, (error, data, response) => {
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
 **body** | [**TaskGidRemoveTagBody**](TaskGidRemoveTagBody.md)| The tag to remove from the task. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="searchTasksForWorkspace"></a>
# **searchTasksForWorkspace**
> TaskResponseArray searchTasksForWorkspace(workspace_gid, opts)

Search tasks in a workspace

To mirror the functionality of the Asana web app&#x27;s advanced search feature, the Asana API has a task search endpoint that allows you to build complex filters to find and retrieve the exact data you need. #### Premium access Like the Asana web product&#x27;s advance search feature, this search endpoint will only be available to premium Asana users. A user is premium if any of the following is true:  - The workspace in which the search is being performed is a premium workspace - The user is a member of a premium team inside the workspace  Even if a user is only a member of a premium team inside a non-premium workspace, search will allow them to find data anywhere in the workspace, not just inside the premium team. Making a search request using credentials of a non-premium user will result in a &#x60;402 Payment Required&#x60; error. #### Pagination Search results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Because of this, the traditional [pagination](https://developers.asana.com/docs/#pagination) available elsewhere in the Asana API is not available here. However, you can paginate manually by sorting the search results by their creation time and then modifying each subsequent query to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and can be specified by the &#x60;limit&#x60; query parameter. #### Eventual consistency Changes in Asana (regardless of whether they’re made though the web product or the API) are forwarded to our search infrastructure to be indexed. This process can take between 10 and 60 seconds to complete under normal operation, and longer during some production incidents. Making a change to a task that would alter its presence in a particular search query will not be reflected immediately. This is also true of the advanced search feature in the web product. #### Rate limits You may receive a &#x60;429 Too Many Requests&#x60; response if you hit any of our [rate limits](https://developers.asana.com/docs/#rate-limits). #### Custom field parameters | Parameter name | Custom field type | Accepted type | |---|---|---| | custom_fields.{gid}.is_set | All | Boolean | | custom_fields.{gid}.value | Text | String | | custom_fields.{gid}.value | Number | Number | | custom_fields.{gid}.value | Enum | Enum option ID | | custom_fields.{gid}.starts_with | Text only | String | | custom_fields.{gid}.ends_with | Text only | String | | custom_fields.{gid}.contains | Text only | String | | custom_fields.{gid}.less_than | Number only | Number | | custom_fields.{gid}.greater_than | Number only | Number |   For example, if the gid of the custom field is 12345, these query parameter to find tasks where it is set would be &#x60;custom_fields.12345.is_set&#x3D;true&#x60;. To match an exact value for an enum custom field, use the gid of the desired enum option and not the name of the enum option: &#x60;custom_fields.12345.value&#x3D;67890&#x60;.  **Not Supported**: searching for multiple exact matches of a custom field, searching for multi-enum custom field  *Note: If you specify &#x60;projects.any&#x60; and &#x60;sections.any&#x60;, you will receive tasks for the project **and** tasks for the section. If you&#x27;re looking for only tasks in a section, omit the &#x60;projects.any&#x60; from the request.*

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
    'text': "Bug", // String | Performs full-text search on both task name and description
    'resource_subtype': "milestone", // String | Filters results by the task's resource_subtype
    'assignee_any': "12345,23456,34567", // String | Comma-separated list of user identifiers
    'assignee_not': "12345,23456,34567", // String | Comma-separated list of user identifiers
    'portfolios_any': "12345,23456,34567", // String | Comma-separated list of portfolio IDs
    'projects_any': "12345,23456,34567", // String | Comma-separated list of project IDs
    'projects_not': "12345,23456,34567", // String | Comma-separated list of project IDs
    'projects_all': "12345,23456,34567", // String | Comma-separated list of project IDs
    'sections_any': "12345,23456,34567", // String | Comma-separated list of section or column IDs
    'sections_not': "12345,23456,34567", // String | Comma-separated list of section or column IDs
    'sections_all': "12345,23456,34567", // String | Comma-separated list of section or column IDs
    'tags_any': "12345,23456,34567", // String | Comma-separated list of tag IDs
    'tags_not': "12345,23456,34567", // String | Comma-separated list of tag IDs
    'tags_all': "12345,23456,34567", // String | Comma-separated list of tag IDs
    'teams_any': "12345,23456,34567", // String | Comma-separated list of team IDs
    'followers_not': "12345,23456,34567", // String | Comma-separated list of user identifiers
    'created_by_any': "12345,23456,34567", // String | Comma-separated list of user identifiers
    'created_by_not': "12345,23456,34567", // String | Comma-separated list of user identifiers
    'assigned_by_any': "12345,23456,34567", // String | Comma-separated list of user identifiers
    'assigned_by_not': "12345,23456,34567", // String | Comma-separated list of user identifiers
    'liked_by_not': "12345,23456,34567", // String | Comma-separated list of user identifiers
    'commented_on_by_not': "12345,23456,34567", // String | Comma-separated list of user identifiers
    'due_on_before': new Date("2019-09-15"), // Date | ISO 8601 date string
    'due_on_after': new Date("2019-09-15"), // Date | ISO 8601 date string
    'due_on': new Date("2019-09-15"), // Date | ISO 8601 date string or `null`
    'due_at_before': new Date("2019-04-15T01:01:46.055Z"), // Date | ISO 8601 datetime string
    'due_at_after': new Date("2019-04-15T01:01:46.055Z"), // Date | ISO 8601 datetime string
    'start_on_before': new Date("2019-09-15"), // Date | ISO 8601 date string
    'start_on_after': new Date("2019-09-15"), // Date | ISO 8601 date string
    'start_on': new Date("2019-09-15"), // Date | ISO 8601 date string or `null`
    'created_on_before': new Date("2019-09-15"), // Date | ISO 8601 date string
    'created_on_after': new Date("2019-09-15"), // Date | ISO 8601 date string
    'created_on': new Date("2019-09-15"), // Date | ISO 8601 date string or `null`
    'created_at_before': new Date("2019-04-15T01:01:46.055Z"), // Date | ISO 8601 datetime string
    'created_at_after': new Date("2019-04-15T01:01:46.055Z"), // Date | ISO 8601 datetime string
    'completed_on_before': new Date("2019-09-15"), // Date | ISO 8601 date string
    'completed_on_after': new Date("2019-09-15"), // Date | ISO 8601 date string
    'completed_on': new Date("2019-09-15"), // Date | ISO 8601 date string or `null`
    'completed_at_before': new Date("2019-04-15T01:01:46.055Z"), // Date | ISO 8601 datetime string
    'completed_at_after': new Date("2019-04-15T01:01:46.055Z"), // Date | ISO 8601 datetime string
    'modified_on_before': new Date("2019-09-15"), // Date | ISO 8601 date string
    'modified_on_after': new Date("2019-09-15"), // Date | ISO 8601 date string
    'modified_on': new Date("2019-09-15"), // Date | ISO 8601 date string or `null`
    'modified_at_before': new Date("2019-04-15T01:01:46.055Z"), // Date | ISO 8601 datetime string
    'modified_at_after': new Date("2019-04-15T01:01:46.055Z"), // Date | ISO 8601 datetime string
    'is_blocking': false, // Boolean | Filter to incomplete tasks with dependents
    'is_blocked': false, // Boolean | Filter to tasks with incomplete dependencies
    'has_attachment': false, // Boolean | Filter to tasks with attachments
    'completed': false, // Boolean | Filter to completed tasks
    'is_subtask': false, // Boolean | Filter to subtasks
    'sort_by': "modified_at", // String | One of `due_date`, `created_at`, `completed_at`, `likes`, or `modified_at`, defaults to `modified_at`
    'sort_ascending': false, // Boolean | Default `false`
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
// Custom fields query
opts['custom_fields_123_value'] = '456'; // The format of this query parameter should be custom_fields_<CUSTOM_FIELD_GID>_value. NOTE: searching for multiple exact matches of a custom field, searching for multi-enum custom field
apiInstance.searchTasksForWorkspace(workspace_gid, opts, (error, data, response) => {
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
 **text** | **String**| Performs full-text search on both task name and description | [optional] 
 **resource_subtype** | **String**| Filters results by the task&#x27;s resource_subtype | [optional] [default to milestone]
 **assignee_any** | **String**| Comma-separated list of user identifiers | [optional] 
 **assignee_not** | **String**| Comma-separated list of user identifiers | [optional] 
 **portfolios_any** | **String**| Comma-separated list of portfolio IDs | [optional] 
 **projects_any** | **String**| Comma-separated list of project IDs | [optional] 
 **projects_not** | **String**| Comma-separated list of project IDs | [optional] 
 **projects_all** | **String**| Comma-separated list of project IDs | [optional] 
 **sections_any** | **String**| Comma-separated list of section or column IDs | [optional] 
 **sections_not** | **String**| Comma-separated list of section or column IDs | [optional] 
 **sections_all** | **String**| Comma-separated list of section or column IDs | [optional] 
 **tags_any** | **String**| Comma-separated list of tag IDs | [optional] 
 **tags_not** | **String**| Comma-separated list of tag IDs | [optional] 
 **tags_all** | **String**| Comma-separated list of tag IDs | [optional] 
 **teams_any** | **String**| Comma-separated list of team IDs | [optional] 
 **followers_not** | **String**| Comma-separated list of user identifiers | [optional] 
 **created_by_any** | **String**| Comma-separated list of user identifiers | [optional] 
 **created_by_not** | **String**| Comma-separated list of user identifiers | [optional] 
 **assigned_by_any** | **String**| Comma-separated list of user identifiers | [optional] 
 **assigned_by_not** | **String**| Comma-separated list of user identifiers | [optional] 
 **liked_by_not** | **String**| Comma-separated list of user identifiers | [optional] 
 **commented_on_by_not** | **String**| Comma-separated list of user identifiers | [optional] 
 **due_on_before** | **Date**| ISO 8601 date string | [optional] 
 **due_on_after** | **Date**| ISO 8601 date string | [optional] 
 **due_on** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **due_at_before** | **Date**| ISO 8601 datetime string | [optional] 
 **due_at_after** | **Date**| ISO 8601 datetime string | [optional] 
 **start_on_before** | **Date**| ISO 8601 date string | [optional] 
 **start_on_after** | **Date**| ISO 8601 date string | [optional] 
 **start_on** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **created_on_before** | **Date**| ISO 8601 date string | [optional] 
 **created_on_after** | **Date**| ISO 8601 date string | [optional] 
 **created_on** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **created_at_before** | **Date**| ISO 8601 datetime string | [optional] 
 **created_at_after** | **Date**| ISO 8601 datetime string | [optional] 
 **completed_on_before** | **Date**| ISO 8601 date string | [optional] 
 **completed_on_after** | **Date**| ISO 8601 date string | [optional] 
 **completed_on** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **completed_at_before** | **Date**| ISO 8601 datetime string | [optional] 
 **completed_at_after** | **Date**| ISO 8601 datetime string | [optional] 
 **modified_on_before** | **Date**| ISO 8601 date string | [optional] 
 **modified_on_after** | **Date**| ISO 8601 date string | [optional] 
 **modified_on** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **modified_at_before** | **Date**| ISO 8601 datetime string | [optional] 
 **modified_at_after** | **Date**| ISO 8601 datetime string | [optional] 
 **is_blocking** | **Boolean**| Filter to incomplete tasks with dependents | [optional] 
 **is_blocked** | **Boolean**| Filter to tasks with incomplete dependencies | [optional] 
 **has_attachment** | **Boolean**| Filter to tasks with attachments | [optional] 
 **completed** | **Boolean**| Filter to completed tasks | [optional] 
 **is_subtask** | **Boolean**| Filter to subtasks | [optional] 
 **sort_by** | **String**| One of &#x60;due_date&#x60;, &#x60;created_at&#x60;, &#x60;completed_at&#x60;, &#x60;likes&#x60;, or &#x60;modified_at&#x60;, defaults to &#x60;modified_at&#x60; | [optional] [default to modified_at]
 **sort_ascending** | **Boolean**| Default &#x60;false&#x60; | [optional] [default to false]
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseArray**](TaskResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="setParentForTask"></a>
# **setParentForTask**
> TaskResponseData setParentForTask(bodytask_gid, opts)

Set the parent of a task

parent, or no parent task at all. Returns an empty data block. When using &#x60;insert_before&#x60; and &#x60;insert_after&#x60;, at most one of those two options can be specified, and they must already be subtasks of the parent.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let body = new Asana.TaskGidSetParentBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TaskGidSetParentBody | The new parent of the subtask.
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.setParentForTask(bodytask_gid, opts, (error, data, response) => {
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
 **body** | [**TaskGidSetParentBody**](TaskGidSetParentBody.md)| The new parent of the subtask. | 
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseData**](TaskResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updateTask"></a>
# **updateTask**
> TaskResponseData updateTask(bodytask_gid, opts)

Update a task

A specific, existing task can be updated by making a PUT request on the URL for that task. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated task record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TasksApi();
let body = new Asana.TasksTaskGidBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TasksTaskGidBody | The task to update.
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.updateTask(bodytask_gid, opts, (error, data, response) => {
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
 **body** | [**TasksTaskGidBody**](TasksTaskGidBody.md)| The task to update. | 
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskResponseData**](TaskResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

