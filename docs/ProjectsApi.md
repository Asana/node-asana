# Asana.ProjectsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomFieldSettingForProject**](ProjectsApi.md#addCustomFieldSettingForProject) | **POST** /projects/{project_gid}/addCustomFieldSetting | Add a custom field to a project
[**addFollowersForProject**](ProjectsApi.md#addFollowersForProject) | **POST** /projects/{project_gid}/addFollowers | Add followers to a project
[**addMembersForProject**](ProjectsApi.md#addMembersForProject) | **POST** /projects/{project_gid}/addMembers | Add users to a project
[**createProject**](ProjectsApi.md#createProject) | **POST** /projects | Create a project
[**createProjectForTeam**](ProjectsApi.md#createProjectForTeam) | **POST** /teams/{team_gid}/projects | Create a project in a team
[**createProjectForWorkspace**](ProjectsApi.md#createProjectForWorkspace) | **POST** /workspaces/{workspace_gid}/projects | Create a project in a workspace
[**deleteProject**](ProjectsApi.md#deleteProject) | **DELETE** /projects/{project_gid} | Delete a project
[**duplicateProject**](ProjectsApi.md#duplicateProject) | **POST** /projects/{project_gid}/duplicate | Duplicate a project
[**getProject**](ProjectsApi.md#getProject) | **GET** /projects/{project_gid} | Get a project
[**getProjects**](ProjectsApi.md#getProjects) | **GET** /projects | Get multiple projects
[**getProjectsForTask**](ProjectsApi.md#getProjectsForTask) | **GET** /tasks/{task_gid}/projects | Get projects a task is in
[**getProjectsForTeam**](ProjectsApi.md#getProjectsForTeam) | **GET** /teams/{team_gid}/projects | Get a team&#x27;s projects
[**getProjectsForWorkspace**](ProjectsApi.md#getProjectsForWorkspace) | **GET** /workspaces/{workspace_gid}/projects | Get all projects in a workspace
[**getTaskCountsForProject**](ProjectsApi.md#getTaskCountsForProject) | **GET** /projects/{project_gid}/task_counts | Get task count of a project
[**projectSaveAsTemplate**](ProjectsApi.md#projectSaveAsTemplate) | **POST** /projects/{project_gid}/saveAsTemplate | Create a project template from a project
[**removeCustomFieldSettingForProject**](ProjectsApi.md#removeCustomFieldSettingForProject) | **POST** /projects/{project_gid}/removeCustomFieldSetting | Remove a custom field from a project
[**removeFollowersForProject**](ProjectsApi.md#removeFollowersForProject) | **POST** /projects/{project_gid}/removeFollowers | Remove followers from a project
[**removeMembersForProject**](ProjectsApi.md#removeMembersForProject) | **POST** /projects/{project_gid}/removeMembers | Remove users from a project
[**updateProject**](ProjectsApi.md#updateProject) | **PUT** /projects/{project_gid} | Update a project

<a name="addCustomFieldSettingForProject"></a>
# **addCustomFieldSettingForProject**
> CustomFieldSettingResponseData addCustomFieldSettingForProject(bodyproject_gid)

Add a custom field to a project

Custom fields are associated with projects by way of custom field settings.  This method creates a setting for the project.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let body = new Asana.ProjectGidAddCustomFieldSettingBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // ProjectGidAddCustomFieldSettingBody | Information about the custom field setting.
let project_gid = "1331"; // String | Globally unique identifier for the project.

apiInstance.addCustomFieldSettingForProject(bodyproject_gid, (error, data, response) => {
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
 **body** | [**ProjectGidAddCustomFieldSettingBody**](ProjectGidAddCustomFieldSettingBody.md)| Information about the custom field setting. | 
 **project_gid** | **String**| Globally unique identifier for the project. | 

### Return type

[**CustomFieldSettingResponseData**](CustomFieldSettingResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="addFollowersForProject"></a>
# **addFollowersForProject**
> ProjectResponseData addFollowersForProject(bodyproject_gid, opts)

Add followers to a project

Adds the specified list of users as followers to the project. Followers are a subset of members who have opted in to receive \&quot;tasks added\&quot; notifications for a project. Therefore, if the users are not already members of the project, they will also become members as a result of this operation. Returns the updated project record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let body = new Asana.ProjectGidAddFollowersBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // ProjectGidAddFollowersBody | Information about the followers being added.
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
  'opt_fields': ["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","modified_at","name","notes","owner","permalink_url","project_brief","public","start_on","team","team.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.addFollowersForProject(bodyproject_gid, opts, (error, data, response) => {
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
 **body** | [**ProjectGidAddFollowersBody**](ProjectGidAddFollowersBody.md)| Information about the followers being added. | 
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**ProjectResponseData**](ProjectResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="addMembersForProject"></a>
# **addMembersForProject**
> ProjectResponseData addMembersForProject(bodyproject_gid, opts)

Add users to a project

Adds the specified list of users as members of the project. Note that a user being added as a member may also be added as a *follower* as a result of this operation. This is because the user&#x27;s default notification settings (i.e., in the \&quot;Notifcations\&quot; tab of \&quot;My Profile Settings\&quot;) will override this endpoint&#x27;s default behavior of setting \&quot;Tasks added\&quot; notifications to &#x60;false&#x60;. Returns the updated project record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let body = new Asana.ProjectGidAddMembersBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // ProjectGidAddMembersBody | Information about the members being added.
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
  'opt_fields': ["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","modified_at","name","notes","owner","permalink_url","project_brief","public","start_on","team","team.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.addMembersForProject(bodyproject_gid, opts, (error, data, response) => {
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
 **body** | [**ProjectGidAddMembersBody**](ProjectGidAddMembersBody.md)| Information about the members being added. | 
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**ProjectResponseData**](ProjectResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createProject"></a>
# **createProject**
> ProjectResponseData createProject(body, opts)

Create a project

Create a new project in a workspace or team.  Every project is required to be created in a specific workspace or organization, and this cannot be changed once set. Note that you can use the &#x60;workspace&#x60; parameter regardless of whether or not it is an organization.  If the workspace for your project is an organization, you must also supply a &#x60;team&#x60; to share the project with.  Returns the full record of the newly created project.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let body = new Asana.ProjectsBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // ProjectsBody | The project to create.
let opts = { 
  'opt_fields': ["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","modified_at","name","notes","owner","permalink_url","project_brief","public","start_on","team","team.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createProject(body, opts, (error, data, response) => {
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
 **body** | [**ProjectsBody**](ProjectsBody.md)| The project to create. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**ProjectResponseData**](ProjectResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createProjectForTeam"></a>
# **createProjectForTeam**
> ProjectResponseData createProjectForTeam(bodyteam_gid, opts)

Create a project in a team

Creates a project shared with the given team.  Returns the full record of the newly created project.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let body = new Asana.TeamGidProjectsBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // TeamGidProjectsBody | The new project to create.
let team_gid = "159874"; // String | Globally unique identifier for the team.
let opts = { 
  'opt_fields': ["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","modified_at","name","notes","owner","permalink_url","project_brief","public","start_on","team","team.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createProjectForTeam(bodyteam_gid, opts, (error, data, response) => {
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
 **body** | [**TeamGidProjectsBody**](TeamGidProjectsBody.md)| The new project to create. | 
 **team_gid** | **String**| Globally unique identifier for the team. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**ProjectResponseData**](ProjectResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createProjectForWorkspace"></a>
# **createProjectForWorkspace**
> ProjectResponseData createProjectForWorkspace(bodyworkspace_gid, opts)

Create a project in a workspace

Creates a project in the workspace.  If the workspace for your project is an organization, you must also supply a team to share the project with.  Returns the full record of the newly created project.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let body = new Asana.WorkspaceGidProjectsBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // WorkspaceGidProjectsBody | The new project to create.
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
  'opt_fields': ["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","modified_at","name","notes","owner","permalink_url","project_brief","public","start_on","team","team.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createProjectForWorkspace(bodyworkspace_gid, opts, (error, data, response) => {
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
 **body** | [**WorkspaceGidProjectsBody**](WorkspaceGidProjectsBody.md)| The new project to create. | 
 **workspace_gid** | **String**| Globally unique identifier for the workspace or organization. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**ProjectResponseData**](ProjectResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteProject"></a>
# **deleteProject**
> EmptyResponseData deleteProject(project_gid)

Delete a project

A specific, existing project can be deleted by making a DELETE request on the URL for that project.  Returns an empty data record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let project_gid = "1331"; // String | Globally unique identifier for the project.

apiInstance.deleteProject(project_gid, (error, data, response) => {
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

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="duplicateProject"></a>
# **duplicateProject**
> JobResponseData duplicateProject(project_gid, opts)

Duplicate a project

Creates and returns a job that will asynchronously handle the duplication.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
  'body': new Asana.ProjectGidDuplicateBody.constructFromObject({data: {param1: "value1", param2: "value2",}}) // ProjectGidDuplicateBody | Describes the duplicate's name and the elements that will be duplicated.
  'opt_fields': ["new_project","new_project.name","new_project_template","new_project_template.name","new_task","new_task.name","new_task.resource_subtype","resource_subtype","status"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.duplicateProject(project_gid, opts, (error, data, response) => {
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
 **body** | [**ProjectGidDuplicateBody**](ProjectGidDuplicateBody.md)| Describes the duplicate&#x27;s name and the elements that will be duplicated. | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**JobResponseData**](JobResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="getProject"></a>
# **getProject**
> ProjectResponseData getProject(project_gid, opts)

Get a project

Returns the complete project record for a single project.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
  'opt_fields': ["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","modified_at","name","notes","owner","permalink_url","project_brief","public","start_on","team","team.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getProject(project_gid, opts, (error, data, response) => {
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
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**ProjectResponseData**](ProjectResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getProjects"></a>
# **getProjects**
> ProjectResponseArray getProjects(opts)

Get multiple projects

Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned. *Note: This endpoint may timeout for large domains. Try filtering by team!*

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let opts = { 
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'workspace': "1331", // String | The workspace or organization to filter projects on.
  'team': "14916", // String | The team to filter projects on.
  'archived': false, // Boolean | Only return projects whose `archived` field takes on the value of this parameter.
  'opt_fields': ["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","modified_at","name","notes","offset","owner","path","permalink_url","project_brief","public","start_on","team","team.name","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getProjects(opts, (error, data, response) => {
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
 **workspace** | **String**| The workspace or organization to filter projects on. | [optional] 
 **team** | **String**| The team to filter projects on. | [optional] 
 **archived** | **Boolean**| Only return projects whose &#x60;archived&#x60; field takes on the value of this parameter. | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**ProjectResponseArray**](ProjectResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getProjectsForTask"></a>
# **getProjectsForTask**
> ProjectResponseArray getProjectsForTask(task_gid, opts)

Get projects a task is in

Returns a compact representation of all of the projects the task is in.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'opt_fields': ["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","modified_at","name","notes","offset","owner","path","permalink_url","project_brief","public","start_on","team","team.name","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getProjectsForTask(task_gid, opts, (error, data, response) => {
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

[**ProjectResponseArray**](ProjectResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getProjectsForTeam"></a>
# **getProjectsForTeam**
> ProjectResponseArray getProjectsForTeam(team_gid, opts)

Get a team&#x27;s projects

Returns the compact project records for all projects in the team.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let team_gid = "159874"; // String | Globally unique identifier for the team.
let opts = { 
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'archived': false, // Boolean | Only return projects whose `archived` field takes on the value of this parameter.
  'opt_fields': ["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","modified_at","name","notes","offset","owner","path","permalink_url","project_brief","public","start_on","team","team.name","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getProjectsForTeam(team_gid, opts, (error, data, response) => {
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
 **team_gid** | **String**| Globally unique identifier for the team. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **archived** | **Boolean**| Only return projects whose &#x60;archived&#x60; field takes on the value of this parameter. | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**ProjectResponseArray**](ProjectResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getProjectsForWorkspace"></a>
# **getProjectsForWorkspace**
> ProjectResponseArray getProjectsForWorkspace(workspace_gid, opts)

Get all projects in a workspace

Returns the compact project records for all projects in the workspace. *Note: This endpoint may timeout for large domains. Prefer the &#x60;/teams/{team_gid}/projects&#x60; endpoint.*

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'archived': false, // Boolean | Only return projects whose `archived` field takes on the value of this parameter.
  'opt_fields': ["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","modified_at","name","notes","offset","owner","path","permalink_url","project_brief","public","start_on","team","team.name","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getProjectsForWorkspace(workspace_gid, opts, (error, data, response) => {
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
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **archived** | **Boolean**| Only return projects whose &#x60;archived&#x60; field takes on the value of this parameter. | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**ProjectResponseArray**](ProjectResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTaskCountsForProject"></a>
# **getTaskCountsForProject**
> TaskCountResponseData getTaskCountsForProject(project_gid, opts)

Get task count of a project

Get an object that holds task count fields. **All fields are excluded by default**. You must [opt in](/docs/inputoutput-options) using &#x60;opt_fields&#x60; to get any information from this endpoint.  This endpoint has an additional [rate limit](/docs/rate-limits) and each field counts especially high against our [cost limits](/docs/rate-limits#cost-limits).  Milestones are just tasks, so they are included in the &#x60;num_tasks&#x60;, &#x60;num_incomplete_tasks&#x60;, and &#x60;num_completed_tasks&#x60; counts.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
  'opt_fields': ["num_completed_milestones","num_completed_tasks","num_incomplete_milestones","num_incomplete_tasks","num_milestones","num_tasks"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getTaskCountsForProject(project_gid, opts, (error, data, response) => {
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
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TaskCountResponseData**](TaskCountResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="projectSaveAsTemplate"></a>
# **projectSaveAsTemplate**
> JobResponseData projectSaveAsTemplate(bodyproject_gid, opts)

Create a project template from a project

Creates and returns a job that will asynchronously handle the project template creation. Note that while the resulting project template can be accessed with the API, it won&#x27;t be visible in the Asana UI until Project Templates 2.0 is launched in the app. See more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432).

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let body = new Asana.ProjectGidSaveAsTemplateBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // ProjectGidSaveAsTemplateBody | Describes the inputs used for creating a project template, such as the resulting project template's name, which team it should be created in.
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
  'opt_fields': ["new_project","new_project.name","new_project_template","new_project_template.name","new_task","new_task.name","new_task.resource_subtype","resource_subtype","status"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.projectSaveAsTemplate(bodyproject_gid, opts, (error, data, response) => {
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
 **body** | [**ProjectGidSaveAsTemplateBody**](ProjectGidSaveAsTemplateBody.md)| Describes the inputs used for creating a project template, such as the resulting project template&#x27;s name, which team it should be created in. | 
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**JobResponseData**](JobResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="removeCustomFieldSettingForProject"></a>
# **removeCustomFieldSettingForProject**
> EmptyResponseData removeCustomFieldSettingForProject(bodyproject_gid)

Remove a custom field from a project

Removes a custom field setting from a project.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let body = new Asana.ProjectGidRemoveCustomFieldSettingBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // ProjectGidRemoveCustomFieldSettingBody | Information about the custom field setting being removed.
let project_gid = "1331"; // String | Globally unique identifier for the project.

apiInstance.removeCustomFieldSettingForProject(bodyproject_gid, (error, data, response) => {
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
 **body** | [**ProjectGidRemoveCustomFieldSettingBody**](ProjectGidRemoveCustomFieldSettingBody.md)| Information about the custom field setting being removed. | 
 **project_gid** | **String**| Globally unique identifier for the project. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="removeFollowersForProject"></a>
# **removeFollowersForProject**
> ProjectResponseData removeFollowersForProject(bodyproject_gid, opts)

Remove followers from a project

Removes the specified list of users from following the project, this will not affect project membership status. Returns the updated project record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let body = new Asana.ProjectGidRemoveFollowersBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // ProjectGidRemoveFollowersBody | Information about the followers being removed.
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
  'opt_fields': ["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","modified_at","name","notes","owner","permalink_url","project_brief","public","start_on","team","team.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.removeFollowersForProject(bodyproject_gid, opts, (error, data, response) => {
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
 **body** | [**ProjectGidRemoveFollowersBody**](ProjectGidRemoveFollowersBody.md)| Information about the followers being removed. | 
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**ProjectResponseData**](ProjectResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="removeMembersForProject"></a>
# **removeMembersForProject**
> ProjectResponseData removeMembersForProject(bodyproject_gid, opts)

Remove users from a project

Removes the specified list of users from members of the project. Returns the updated project record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let body = new Asana.ProjectGidRemoveMembersBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // ProjectGidRemoveMembersBody | Information about the members being removed.
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
  'opt_fields': ["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","modified_at","name","notes","owner","permalink_url","project_brief","public","start_on","team","team.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.removeMembersForProject(bodyproject_gid, opts, (error, data, response) => {
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
 **body** | [**ProjectGidRemoveMembersBody**](ProjectGidRemoveMembersBody.md)| Information about the members being removed. | 
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**ProjectResponseData**](ProjectResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updateProject"></a>
# **updateProject**
> ProjectResponseData updateProject(bodyproject_gid, opts)

Update a project

A specific, existing project can be updated by making a PUT request on the URL for that project. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated project record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.ProjectsApi();
let body = new Asana.ProjectsProjectGidBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // ProjectsProjectGidBody | The updated fields for the project.
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
  'opt_fields': ["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","modified_at","name","notes","owner","permalink_url","project_brief","public","start_on","team","team.name","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.updateProject(bodyproject_gid, opts, (error, data, response) => {
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
 **body** | [**ProjectsProjectGidBody**](ProjectsProjectGidBody.md)| The updated fields for the project. | 
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**ProjectResponseData**](ProjectResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

