# Asana.RolesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRole**](RolesApi.md#createRole) | **POST** /roles | Create a role
[**deleteRole**](RolesApi.md#deleteRole) | **DELETE** /roles/{role_gid} | Delete a role
[**getRole**](RolesApi.md#getRole) | **GET** /roles/{role_gid} | Get a role
[**getRoles**](RolesApi.md#getRoles) | **GET** /roles | Get multiple roles
[**updateRole**](RolesApi.md#updateRole) | **PUT** /roles/{role_gid} | Update a role

<a name="createRole"></a>
# **createRole**

Create a role

<b>Required scope: </b><code>roles:write</code>  Creates a new RBAC role in the workspace.

([more information](https://developers.asana.com/reference/createrole))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let rolesApiInstance = new Asana.RolesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The role to create.
let opts = { 
    'opt_fields': "base_role_type,creation_time,description,is_standard_role,modified_at,name,permissions,permissions.allowed_guest_invites,permissions.assign_roles,permissions.create_and_edit_ai_automations,permissions.create_and_edit_ai_teammates,permissions.create_app_authorization,permissions.create_global_custom_fields,permissions.create_pat_authorization,permissions.create_team,permissions.download_mobile_attachments,permissions.export_project_data,permissions.import_data,permissions.manage_roles,permissions.proactive_ai,permissions.share_goal_with_domain,permissions.share_portfolios_with_org,permissions.standard_ai,permissions.task_deletion_policy,permissions.upload_attachments,workspace,workspace.name"
};
rolesApiInstance.createRole(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The role to create. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteRole"></a>
# **deleteRole**

Delete a role

<b>Required scope: </b><code>roles:delete</code>  Deletes a role from a workspace.

([more information](https://developers.asana.com/reference/deleterole))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let rolesApiInstance = new Asana.RolesApi(client);
let role_gid = "12345"; // String | Globally unique identifier for the role.

rolesApiInstance.deleteRole(role_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_gid** | **String**| Globally unique identifier for the role. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getRole"></a>
# **getRole**

Get a role

<b>Required scope: </b><code>roles:read</code>  Returns the complete role record for a single role.

([more information](https://developers.asana.com/reference/getrole))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let rolesApiInstance = new Asana.RolesApi(client);
let role_gid = "12345"; // String | Globally unique identifier for the role.
let opts = { 
    'opt_fields': "base_role_type,creation_time,description,is_standard_role,modified_at,name,permissions,permissions.allowed_guest_invites,permissions.assign_roles,permissions.create_and_edit_ai_automations,permissions.create_and_edit_ai_teammates,permissions.create_app_authorization,permissions.create_global_custom_fields,permissions.create_pat_authorization,permissions.create_team,permissions.download_mobile_attachments,permissions.export_project_data,permissions.import_data,permissions.manage_roles,permissions.proactive_ai,permissions.share_goal_with_domain,permissions.share_portfolios_with_org,permissions.standard_ai,permissions.task_deletion_policy,permissions.upload_attachments,workspace,workspace.name"
};
rolesApiInstance.getRole(role_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_gid** | **String**| Globally unique identifier for the role. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getRoles"></a>
# **getRoles**

Get multiple roles

<b>Required scope: </b><code>roles:read</code>  Returns all RBAC roles for a workspace.

([more information](https://developers.asana.com/reference/getroles))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let rolesApiInstance = new Asana.RolesApi(client);
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'workspace': "1331", 
    'archived': false, 
    'opt_fields': "base_role_type,creation_time,description,is_standard_role,modified_at,name,offset,path,permissions,permissions.allowed_guest_invites,permissions.assign_roles,permissions.create_and_edit_ai_automations,permissions.create_and_edit_ai_teammates,permissions.create_app_authorization,permissions.create_global_custom_fields,permissions.create_pat_authorization,permissions.create_team,permissions.download_mobile_attachments,permissions.export_project_data,permissions.import_data,permissions.manage_roles,permissions.proactive_ai,permissions.share_goal_with_domain,permissions.share_portfolios_with_org,permissions.standard_ai,permissions.task_deletion_policy,permissions.upload_attachments,uri,workspace,workspace.name"
};
rolesApiInstance.getRoles(opts).then((result) => {
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
 **workspace** | **String**| The workspace or organization to filter roles on. | [optional] 
 **archived** | **Boolean**| Only return projects whose &#x60;archived&#x60; field takes on the value of this parameter. | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateRole"></a>
# **updateRole**

Update a role

<b>Required scope: </b><code>roles:write</code>  Updates a role in a workspace.

([more information](https://developers.asana.com/reference/updaterole))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let rolesApiInstance = new Asana.RolesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The updated fields for the role.
let role_gid = "12345"; // String | Globally unique identifier for the role.
let opts = { 
    'opt_fields': "base_role_type,creation_time,description,is_standard_role,modified_at,name,permissions,permissions.allowed_guest_invites,permissions.assign_roles,permissions.create_and_edit_ai_automations,permissions.create_and_edit_ai_teammates,permissions.create_app_authorization,permissions.create_global_custom_fields,permissions.create_pat_authorization,permissions.create_team,permissions.download_mobile_attachments,permissions.export_project_data,permissions.import_data,permissions.manage_roles,permissions.proactive_ai,permissions.share_goal_with_domain,permissions.share_portfolios_with_org,permissions.standard_ai,permissions.task_deletion_policy,permissions.upload_attachments,workspace,workspace.name"
};
rolesApiInstance.updateRole(body, role_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The updated fields for the role. | 
 **role_gid** | **String**| Globally unique identifier for the role. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

