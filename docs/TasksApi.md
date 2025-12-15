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
[**getTaskForCustomID**](TasksApi.md#getTaskForCustomID) | **GET** /workspaces/{workspace_gid}/tasks/custom_id/{custom_id} | Get a task for a given custom ID
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

Set dependencies for a task

<b>Required scope: </b><code>tasks:write</code>  Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dependents and dependencies combined*.

([more information](https://developers.asana.com/reference/adddependenciesfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The list of tasks to set as dependencies.
let task_gid = "321654"; // String | The task to operate on.

tasksApiInstance.addDependenciesForTask(body, task_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The list of tasks to set as dependencies. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="addDependentsForTask"></a>
# **addDependentsForTask**

Set dependents for a task

<b>Required scope: </b><code>tasks:write</code>  Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents and dependencies combined*.

([more information](https://developers.asana.com/reference/adddependentsfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The list of tasks to add as dependents.
let task_gid = "321654"; // String | The task to operate on.

tasksApiInstance.addDependentsForTask(body, task_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The list of tasks to add as dependents. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="addFollowersForTask"></a>
# **addFollowersForTask**

Add followers to a task

<b>Required scope: </b><code>tasks:write</code>  Adds followers to a task. Returns an empty data block. Each task can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated task record, described above.

([more information](https://developers.asana.com/reference/addfollowersfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The followers to add to the task.
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,parent,parent.created_by,parent.name,parent.resource_subtype,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,workspace,workspace.name"
};
tasksApiInstance.addFollowersForTask(body, task_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The followers to add to the task. | 
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="addProjectForTask"></a>
# **addProjectForTask**

Add a project to a task

<b>Required scope: </b><code>tasks:write</code>  Adds the task to the specified project, in the optional location specified. If no location arguments are given, the task will be added to the end of the project.  `addProject` can also be used to reorder a task within a project or section that already contains it.  At most one of `insert_before`, `insert_after`, or `section` should be specified. Inserting into a section in an non-order-dependent way can be done by specifying section, otherwise, to insert within a section in a particular place, specify `insert_before` or `insert_after` and a task within the section to anchor the position of this task.  A task can have at most 20 projects multi-homed to it.  Returns an empty data block.

([more information](https://developers.asana.com/reference/addprojectfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The project to add the task to.
let task_gid = "321654"; // String | The task to operate on.

tasksApiInstance.addProjectForTask(body, task_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The project to add the task to. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="addTagForTask"></a>
# **addTagForTask**

Add a tag to a task

<b>Required scope: </b><code>tasks:write</code>  Adds a tag to a task. Returns an empty data block.

([more information](https://developers.asana.com/reference/addtagfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The tag to add to the task.
let task_gid = "321654"; // String | The task to operate on.

tasksApiInstance.addTagForTask(body, task_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The tag to add to the task. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createSubtaskForTask"></a>
# **createSubtaskForTask**

Create a subtask

<b>Required scope: </b><code>tasks:write</code>  Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.

([more information](https://developers.asana.com/reference/createsubtaskfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The new subtask to create.
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,parent,parent.created_by,parent.name,parent.resource_subtype,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,workspace,workspace.name"
};
tasksApiInstance.createSubtaskForTask(body, task_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The new subtask to create. | 
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createTask"></a>
# **createTask**

Create a task

<b>Required scope: </b><code>tasks:write</code>  Creating a new task is as easy as POSTing to the `/tasks` endpoint with a data block containing the fields you’d like to set on the task. Any unspecified fields will take on default values.  Every task is required to be created in a specific workspace, and this workspace cannot be changed once set. The workspace need not be set explicitly if you specify `projects` or a `parent` task instead.

([more information](https://developers.asana.com/reference/createtask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The task to create.
let opts = { 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,parent,parent.created_by,parent.name,parent.resource_subtype,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,workspace,workspace.name"
};
tasksApiInstance.createTask(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The task to create. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteTask"></a>
# **deleteTask**

Delete a task

<b>Required scope: </b><code>tasks:delete</code>  A specific, existing task can be deleted by making a DELETE request on the URL for that task. Deleted tasks go into the “trash” of the user making the delete request. Tasks can be recovered from the trash within a period of 30 days; afterward they are completely removed from the system.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deletetask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let task_gid = "321654"; // String | The task to operate on.

tasksApiInstance.deleteTask(task_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_gid** | **String**| The task to operate on. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="duplicateTask"></a>
# **duplicateTask**

Duplicate a task

<b>Required scope: </b><code>tasks:write</code>  Creates and returns a job that will asynchronously handle the duplication.

([more information](https://developers.asana.com/reference/duplicatetask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | Describes the duplicate's name and the fields that will be duplicated.
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': "new_graph_export,new_graph_export.completed_at,new_graph_export.created_at,new_graph_export.download_url,new_project,new_project.name,new_project_template,new_project_template.name,new_resource_export,new_resource_export.completed_at,new_resource_export.created_at,new_resource_export.download_url,new_task,new_task.created_by,new_task.name,new_task.resource_subtype,resource_subtype,status"
};
tasksApiInstance.duplicateTask(body, task_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| Describes the duplicate&#x27;s name and the fields that will be duplicated. | 
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="getDependenciesForTask"></a>
# **getDependenciesForTask**

Get dependencies from a task

<b>Required scope: </b><code>tasks:read</code>  Returns the compact representations of all of the dependencies of a task.

([more information](https://developers.asana.com/reference/getdependenciesfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,offset,parent,parent.created_by,parent.name,parent.resource_subtype,path,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,uri,workspace,workspace.name"
};
tasksApiInstance.getDependenciesForTask(task_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_gid** | **String**| The task to operate on. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getDependentsForTask"></a>
# **getDependentsForTask**

Get dependents from a task

<b>Required scope: </b><code>tasks:read</code>  Returns the compact representations of all of the dependents of a task.

([more information](https://developers.asana.com/reference/getdependentsfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,offset,parent,parent.created_by,parent.name,parent.resource_subtype,path,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,uri,workspace,workspace.name"
};
tasksApiInstance.getDependentsForTask(task_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_gid** | **String**| The task to operate on. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getSubtasksForTask"></a>
# **getSubtasksForTask**

Get subtasks from a task

<b>Required scope: </b><code>tasks:read</code>  Returns a compact representation of all of the subtasks of a task.

([more information](https://developers.asana.com/reference/getsubtasksfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,offset,parent,parent.created_by,parent.name,parent.resource_subtype,path,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,uri,workspace,workspace.name"
};
tasksApiInstance.getSubtasksForTask(task_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_gid** | **String**| The task to operate on. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTask"></a>
# **getTask**

Get a task

<b>Required scope: </b><code>tasks:read</code>  Returns the complete task record for a single task.

([more information](https://developers.asana.com/reference/gettask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,parent,parent.created_by,parent.name,parent.resource_subtype,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,workspace,workspace.name"
};
tasksApiInstance.getTask(task_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTaskForCustomID"></a>
# **getTaskForCustomID**

Get a task for a given custom ID

<b>Required scope: </b><code>tasks:read</code>  Returns a task given a custom ID shortcode.

([more information](https://developers.asana.com/reference/gettaskforcustomid))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let custom_id = "EX-1"; // String | Generated custom ID for a task.

tasksApiInstance.getTaskForCustomID(workspace_gid, custom_id).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_gid** | **String**| Globally unique identifier for the workspace or organization. | 
 **custom_id** | **String**| Generated custom ID for a task. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTasks"></a>
# **getTasks**

Get multiple tasks

<b>Required scope: </b><code>tasks:read</code>  Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a `project` or `tag` if you do not specify `assignee` and `workspace`.  For more complex task retrieval, use [workspaces/{workspace_gid}/tasks/search](/reference/searchtasksforworkspace).

([more information](https://developers.asana.com/reference/gettasks))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'assignee': "14641", 
    'project': "321654", 
    'section': "321654", 
    'workspace': "321654", 
    'completed_since': "2012-02-22T02:06:58.158Z", 
    'modified_since': "2012-02-22T02:06:58.158Z", 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,offset,parent,parent.created_by,parent.name,parent.resource_subtype,path,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,uri,workspace,workspace.name"
};
tasksApiInstance.getTasks(opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **assignee** | **String**| The assignee to filter tasks on. If searching for unassigned tasks, assignee.any &#x3D; null can be specified. *Note: If you specify &#x60;assignee&#x60;, you must also specify the &#x60;workspace&#x60; to filter on.* | [optional] 
 **project** | **String**| The project to filter tasks on. | [optional] 
 **section** | **String**| The section to filter tasks on. | [optional] 
 **workspace** | **String**| The workspace to filter tasks on. *Note: If you specify &#x60;workspace&#x60;, you must also specify the &#x60;assignee&#x60; to filter on.* | [optional] 
 **completed_since** | **Date**| Only return tasks that are either incomplete or that have been completed since this time. | [optional] 
 **modified_since** | **Date**| Only return tasks that have been modified since the given time.  *Note: A task is considered “modified” if any of its properties change, or associations between it and other objects are modified (e.g.  a task being added to a project). A task is not considered modified just because another object it is associated with (e.g. a subtask) is modified. Actions that count as modifying the task include assigning, renaming, completing, and adding stories.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTasksForProject"></a>
# **getTasksForProject**

Get tasks from a project

<b>Required scope: </b><code>tasks:read</code>  Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.

([more information](https://developers.asana.com/reference/gettasksforproject))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
    'completed_since': "2012-02-22T02:06:58.158Z", 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,offset,parent,parent.created_by,parent.name,parent.resource_subtype,path,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,uri,workspace,workspace.name"
};
tasksApiInstance.getTasksForProject(project_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **completed_since** | **String**| Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.  | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTasksForSection"></a>
# **getTasksForSection**

Get tasks from a section

<b>Required scope: </b><code>tasks:read</code>  *Board view only*: Returns the compact section records for all tasks within the given section.

([more information](https://developers.asana.com/reference/gettasksforsection))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let section_gid = "321654"; // String | The globally unique identifier for the section.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'completed_since': "2012-02-22T02:06:58.158Z", 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,offset,parent,parent.created_by,parent.name,parent.resource_subtype,path,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,uri,workspace,workspace.name"
};
tasksApiInstance.getTasksForSection(section_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section_gid** | **String**| The globally unique identifier for the section. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **completed_since** | **String**| Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.  | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTasksForTag"></a>
# **getTasksForTag**

Get tasks from a tag

<b>Required scope: </b><code>tasks:read</code>  Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.

([more information](https://developers.asana.com/reference/gettasksfortag))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let tag_gid = "11235"; // String | Globally unique identifier for the tag.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,offset,parent,parent.created_by,parent.name,parent.resource_subtype,path,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,uri,workspace,workspace.name"
};
tasksApiInstance.getTasksForTag(tag_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_gid** | **String**| Globally unique identifier for the tag. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTasksForUserTaskList"></a>
# **getTasksForUserTaskList**

Get tasks from a user task list

<b>Required scope: </b><code>tasks:read</code>  Returns the compact list of tasks in a user’s My Tasks list. *Note: Access control is enforced for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be filtered out if the API-authenticated user does not have access to them.* *Note: Both complete and incomplete tasks are returned by default unless they are filtered out (for example, setting `completed_since=now` will return only incomplete tasks, which is the default view for “My Tasks” in Asana.)*

([more information](https://developers.asana.com/reference/gettasksforusertasklist))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let user_task_list_gid = "12345"; // String | Globally unique identifier for the user task list.
let opts = { 
    'completed_since': "2012-02-22T02:06:58.158Z", 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,offset,parent,parent.created_by,parent.name,parent.resource_subtype,path,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,uri,workspace,workspace.name"
};
tasksApiInstance.getTasksForUserTaskList(user_task_list_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_task_list_gid** | **String**| Globally unique identifier for the user task list. | 
 **completed_since** | **String**| Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.  | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="removeDependenciesForTask"></a>
# **removeDependenciesForTask**

Unlink dependencies from a task

<b>Required scope: </b><code>tasks:write</code>  Unlinks a set of dependencies from this task.

([more information](https://developers.asana.com/reference/removedependenciesfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The list of tasks to unlink as dependencies.
let task_gid = "321654"; // String | The task to operate on.

tasksApiInstance.removeDependenciesForTask(body, task_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The list of tasks to unlink as dependencies. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="removeDependentsForTask"></a>
# **removeDependentsForTask**

Unlink dependents from a task

<b>Required scope: </b><code>tasks:write</code>  Unlinks a set of dependents from this task.

([more information](https://developers.asana.com/reference/removedependentsfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The list of tasks to remove as dependents.
let task_gid = "321654"; // String | The task to operate on.

tasksApiInstance.removeDependentsForTask(body, task_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The list of tasks to remove as dependents. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="removeFollowerForTask"></a>
# **removeFollowerForTask**

Remove followers from a task

<b>Required scope: </b><code>tasks:write</code>  Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.

([more information](https://developers.asana.com/reference/removefollowerfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The followers to remove from the task.
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,parent,parent.created_by,parent.name,parent.resource_subtype,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,workspace,workspace.name"
};
tasksApiInstance.removeFollowerForTask(body, task_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The followers to remove from the task. | 
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="removeProjectForTask"></a>
# **removeProjectForTask**

Remove a project from a task

<b>Required scope: </b><code>tasks:write</code>  Removes the task from the specified project. The task will still exist in the system, but it will not be in the project anymore.  Returns an empty data block.

([more information](https://developers.asana.com/reference/removeprojectfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The project to remove the task from.
let task_gid = "321654"; // String | The task to operate on.

tasksApiInstance.removeProjectForTask(body, task_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The project to remove the task from. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="removeTagForTask"></a>
# **removeTagForTask**

Remove a tag from a task

<b>Required scope: </b><code>tasks:write</code>  Removes a tag from a task. Returns an empty data block.

([more information](https://developers.asana.com/reference/removetagfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The tag to remove from the task.
let task_gid = "321654"; // String | The task to operate on.

tasksApiInstance.removeTagForTask(body, task_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The tag to remove from the task. | 
 **task_gid** | **String**| The task to operate on. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="searchTasksForWorkspace"></a>
# **searchTasksForWorkspace**

Search tasks in a workspace

<b>Required scope: </b><code>tasks:read</code>  To mirror the functionality of the Asana web app's advanced search feature, the Asana API has a task search endpoint that allows you to build complex filters to find and retrieve the exact data you need. #### Premium access Like the Asana web product's advance search feature, this search endpoint will only be available to premium Asana users. A user is premium if any of the following is true:  - The workspace in which the search is being performed is a premium workspace - The user is a member of a premium team inside the workspace  Even if a user is only a member of a premium team inside a non-premium workspace, search will allow them to find data anywhere in the workspace, not just inside the premium team. Making a search request using credentials of a non-premium user will result in a `402 Payment Required` error. #### Pagination Search results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Because of this, the traditional [pagination](https://developers.asana.com/docs/#pagination) available elsewhere in the Asana API is not available here. However, you can paginate manually by sorting the search results by their creation time and then modifying each subsequent query to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and can be specified by the `limit` query parameter. #### Eventual consistency Changes in Asana (regardless of whether they’re made though the web product or the API) are forwarded to our search infrastructure to be indexed. This process can take between 10 and 60 seconds to complete under normal operation, and longer during some production incidents. Making a change to a task that would alter its presence in a particular search query will not be reflected immediately. This is also true of the advanced search feature in the web product. #### Rate limits You may receive a `429 Too Many Requests` response if you hit any of our [rate limits](https://developers.asana.com/docs/#rate-limits). #### Custom field parameters | Parameter name | Custom field type | Accepted type | |---|---|---| | custom_fields.{gid}.is_set | All | Boolean | | custom_fields.{gid}.value | Text | String | | custom_fields.{gid}.value | Number | Number | | custom_fields.{gid}.value | Enum | Enum option ID | | custom_fields.{gid}.starts_with | Text only | String | | custom_fields.{gid}.ends_with | Text only | String | | custom_fields.{gid}.contains | Text only | String | | custom_fields.{gid}.less_than | Number only | Number | | custom_fields.{gid}.greater_than | Number only | Number |   For example, if the gid of the custom field is 12345, these query parameter to find tasks where it is set would be `custom_fields.12345.is_set=true`. To match an exact value for an enum custom field, use the gid of the desired enum option and not the name of the enum option: `custom_fields.12345.value=67890`.  **Not Supported**: searching for multiple exact matches of a custom field, searching for multi-enum custom field  *Note: If you specify `projects.any` and `sections.any`, you will receive tasks for the project **and** tasks for the section. If you're looking for only tasks in a section, omit the `projects.any` from the request.*

([more information](https://developers.asana.com/reference/searchtasksforworkspace))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
    'text': "Bug", 
    'resource_subtype': "milestone", 
    'assignee.any': "12345,23456,34567", 
    'assignee.not': "12345,23456,34567", 
    'portfolios.any': "12345,23456,34567", 
    'projects.any': "12345,23456,34567", 
    'projects.not': "12345,23456,34567", 
    'projects.all': "12345,23456,34567", 
    'sections.any': "12345,23456,34567", 
    'sections.not': "12345,23456,34567", 
    'sections.all': "12345,23456,34567", 
    'tags.any': "12345,23456,34567", 
    'tags.not': "12345,23456,34567", 
    'tags.all': "12345,23456,34567", 
    'teams.any': "12345,23456,34567", 
    'followers.any': "12345,23456,34567", 
    'followers.not': "12345,23456,34567", 
    'created_by.any': "12345,23456,34567", 
    'created_by.not': "12345,23456,34567", 
    'assigned_by.any': "12345,23456,34567", 
    'assigned_by.not': "12345,23456,34567", 
    'liked_by.not': "12345,23456,34567", 
    'commented_on_by.not': "12345,23456,34567", 
    'due_on.before': "2019-09-15", 
    'due_on.after': "2019-09-15", 
    'due_on': "2019-09-15", 
    'due_at.before': "2019-04-15T01:01:46.055Z", 
    'due_at.after': "2019-04-15T01:01:46.055Z", 
    'start_on.before': "2019-09-15", 
    'start_on.after': "2019-09-15", 
    'start_on': "2019-09-15", 
    'created_on.before': "2019-09-15", 
    'created_on.after': "2019-09-15", 
    'created_on': "2019-09-15", 
    'created_at.before': "2019-04-15T01:01:46.055Z", 
    'created_at.after': "2019-04-15T01:01:46.055Z", 
    'completed_on.before': "2019-09-15", 
    'completed_on.after': "2019-09-15", 
    'completed_on': "2019-09-15", 
    'completed_at.before': "2019-04-15T01:01:46.055Z", 
    'completed_at.after': "2019-04-15T01:01:46.055Z", 
    'modified_on.before': "2019-09-15", 
    'modified_on.after': "2019-09-15", 
    'modified_on': "2019-09-15", 
    'modified_at.before': "2019-04-15T01:01:46.055Z", 
    'modified_at.after': "2019-04-15T01:01:46.055Z", 
    'is_blocking': false, 
    'is_blocked': false, 
    'has_attachment': false, 
    'completed': false, 
    'is_subtask': false, 
    'sort_by': "modified_at", 
    'sort_ascending': false, 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,parent,parent.created_by,parent.name,parent.resource_subtype,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,workspace,workspace.name"
};
// Custom fields query
opts['custom_fields.123.is_set'] = true; // Boolean | Replace "123" with <YOUR_CUSTOM_FIELD_GID>. NOTE: searching for multiple exact matches of a custom field, searching for multi-enum custom field
opts['custom_fields.123.value'] = '456'; // String, Number, Enum option ID | Replace "123" with <YOUR_CUSTOM_FIELD_GID>. NOTE: searching for multiple exact matches of a custom field, searching for multi-enum custom field
opts['custom_fields.123.starts_with'] = 'start'; // String | Replace "123" with <YOUR_CUSTOM_FIELD_GID>. NOTE: searching for multiple exact matches of a custom field, searching for multi-enum custom field
opts['custom_fields.123.ends_with'] = 'end'; // String | Replace "123" with <YOUR_CUSTOM_FIELD_GID>. NOTE: searching for multiple exact matches of a custom field, searching for multi-enum custom field
opts['custom_fields.123.contains'] = 'first'; // String | Replace "123" with <YOUR_CUSTOM_FIELD_GID>. NOTE: searching for multiple exact matches of a custom field, searching for multi-enum custom field
opts['custom_fields.123.less_than'] = 10; // Number | Replace "123" with <YOUR_CUSTOM_FIELD_GID>. NOTE: searching for multiple exact matches of a custom field, searching for multi-enum custom field
opts['custom_fields.123.greater_than'] = 100; // Number | Replace "123" with <YOUR_CUSTOM_FIELD_GID>. NOTE: searching for multiple exact matches of a custom field, searching for multi-enum custom field
tasksApiInstance.searchTasksForWorkspace(workspace_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_gid** | **String**| Globally unique identifier for the workspace or organization. | 
 **text** | **String**| Performs full-text search on both task name and description | [optional] 
 **resource_subtype** | **String**| Filters results by the task&#x27;s resource_subtype | [optional] [default to milestone]
 **assignee.any** | **String**| Comma-separated list of user identifiers | [optional] 
 **assignee.not** | **String**| Comma-separated list of user identifiers | [optional] 
 **portfolios.any** | **String**| Comma-separated list of portfolio IDs | [optional] 
 **projects.any** | **String**| Comma-separated list of project IDs | [optional] 
 **projects.not** | **String**| Comma-separated list of project IDs | [optional] 
 **projects.all** | **String**| Comma-separated list of project IDs | [optional] 
 **sections.any** | **String**| Comma-separated list of section or column IDs | [optional] 
 **sections.not** | **String**| Comma-separated list of section or column IDs | [optional] 
 **sections.all** | **String**| Comma-separated list of section or column IDs | [optional] 
 **tags.any** | **String**| Comma-separated list of tag IDs | [optional] 
 **tags.not** | **String**| Comma-separated list of tag IDs | [optional] 
 **tags.all** | **String**| Comma-separated list of tag IDs | [optional] 
 **teams.any** | **String**| Comma-separated list of team IDs | [optional] 
 **followers.any** | **String**| Comma-separated list of user identifiers | [optional] 
 **followers.not** | **String**| Comma-separated list of user identifiers | [optional] 
 **created_by.any** | **String**| Comma-separated list of user identifiers | [optional] 
 **created_by.not** | **String**| Comma-separated list of user identifiers | [optional] 
 **assigned_by.any** | **String**| Comma-separated list of user identifiers | [optional] 
 **assigned_by.not** | **String**| Comma-separated list of user identifiers | [optional] 
 **liked_by.not** | **String**| Comma-separated list of user identifiers | [optional] 
 **commented_on_by.not** | **String**| Comma-separated list of user identifiers | [optional] 
 **due_on.before** | **Date**| ISO 8601 date string | [optional] 
 **due_on.after** | **Date**| ISO 8601 date string | [optional] 
 **due_on** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **due_at.before** | **Date**| ISO 8601 datetime string | [optional] 
 **due_at.after** | **Date**| ISO 8601 datetime string | [optional] 
 **start_on.before** | **Date**| ISO 8601 date string | [optional] 
 **start_on.after** | **Date**| ISO 8601 date string | [optional] 
 **start_on** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **created_on.before** | **Date**| ISO 8601 date string | [optional] 
 **created_on.after** | **Date**| ISO 8601 date string | [optional] 
 **created_on** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **created_at.before** | **Date**| ISO 8601 datetime string | [optional] 
 **created_at.after** | **Date**| ISO 8601 datetime string | [optional] 
 **completed_on.before** | **Date**| ISO 8601 date string | [optional] 
 **completed_on.after** | **Date**| ISO 8601 date string | [optional] 
 **completed_on** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **completed_at.before** | **Date**| ISO 8601 datetime string | [optional] 
 **completed_at.after** | **Date**| ISO 8601 datetime string | [optional] 
 **modified_on.before** | **Date**| ISO 8601 date string | [optional] 
 **modified_on.after** | **Date**| ISO 8601 date string | [optional] 
 **modified_on** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **modified_at.before** | **Date**| ISO 8601 datetime string | [optional] 
 **modified_at.after** | **Date**| ISO 8601 datetime string | [optional] 
 **is_blocking** | **Boolean**| Filter to incomplete tasks with dependents | [optional] 
 **is_blocked** | **Boolean**| Filter to tasks with incomplete dependencies | [optional] 
 **has_attachment** | **Boolean**| Filter to tasks with attachments | [optional] 
 **completed** | **Boolean**| Filter to completed tasks | [optional] 
 **is_subtask** | **Boolean**| Filter to subtasks | [optional] 
 **sort_by** | **String**| One of &#x60;due_date&#x60;, &#x60;created_at&#x60;, &#x60;completed_at&#x60;, &#x60;likes&#x60;, or &#x60;modified_at&#x60;, defaults to &#x60;modified_at&#x60; | [optional] [default to modified_at]
 **sort_ascending** | **Boolean**| Default &#x60;false&#x60; | [optional] [default to false]
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="setParentForTask"></a>
# **setParentForTask**

Set the parent of a task

<b>Required scope: </b><code>tasks:write</code>  Updates the parent of a given task. This endpoint can be used to make a task a subtask of another task, or to remove its existing parent. When using `insert_before` and `insert_after`, at most one of those two options can be specified, and they must already be subtasks of the parent. Returns the complete, updated record of the affected [task](/reference/tasks#/task).

([more information](https://developers.asana.com/reference/setparentfortask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The new parent of the subtask.
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,parent,parent.created_by,parent.name,parent.resource_subtype,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,workspace,workspace.name"
};
tasksApiInstance.setParentForTask(body, task_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The new parent of the subtask. | 
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updateTask"></a>
# **updateTask**

Update a task

<b>Required scope: </b><code>tasks:write</code>  A specific, existing task can be updated by making a PUT request on the URL for that task. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated task record.

([more information](https://developers.asana.com/reference/updatetask))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tasksApiInstance = new Asana.TasksApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The task to update.
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': "actual_time_minutes,approval_status,assignee,assignee.name,assignee_section,assignee_section.name,assignee_status,completed,completed_at,completed_by,completed_by.name,created_at,created_by,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,custom_type,custom_type.name,custom_type_status_option,custom_type_status_option.name,dependencies,dependents,due_at,due_on,external,external.data,followers,followers.name,hearted,hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,liked,likes,likes.user,likes.user.name,memberships,memberships.project,memberships.project.name,memberships.section,memberships.section.name,modified_at,name,notes,num_hearts,num_likes,num_subtasks,parent,parent.created_by,parent.name,parent.resource_subtype,permalink_url,projects,projects.name,resource_subtype,start_at,start_on,tags,tags.name,workspace,workspace.name"
};
tasksApiInstance.updateTask(body, task_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The task to update. | 
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

