# Asana.TablesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomFieldSettingForTable**](TablesApi.md#addCustomFieldSettingForTable) | **POST** /tables/{table_gid}/addCustomFieldSetting | Add a custom field to a table
[**createTable**](TablesApi.md#createTable) | **POST** /tables | Create a table
[**deleteTable**](TablesApi.md#deleteTable) | **DELETE** /tables/{table_gid} | Delete a table
[**getCustomFieldSettingsForTable**](TablesApi.md#getCustomFieldSettingsForTable) | **GET** /tables/{table_gid}/custom_field_settings | Get a table&#x27;s custom field settings
[**getCustomFieldSettingsForTableLegacy**](TablesApi.md#getCustomFieldSettingsForTableLegacy) | **GET** /tables/{table_gid}/getCustomFieldSettings | Get a table&#x27;s custom field settings
[**getTable**](TablesApi.md#getTable) | **GET** /tables/{table_gid} | Get a table
[**getTablesForWorkspace**](TablesApi.md#getTablesForWorkspace) | **GET** /workspaces/{workspace_gid}/tables | Get tables in a workspace
[**removeCustomFieldSettingForTable**](TablesApi.md#removeCustomFieldSettingForTable) | **POST** /tables/{table_gid}/removeCustomFieldSetting | Remove a custom field from a table
[**updateTable**](TablesApi.md#updateTable) | **PUT** /tables/{table_gid} | Update a table

<a name="addCustomFieldSettingForTable"></a>
# **addCustomFieldSettingForTable**

Add a custom field to a table

<b>Required scope: </b><code>tables:write</code>  Custom fields are associated with tables by way of custom field settings. This method creates a setting for the table. Unlike projects and portfolios, tables only support custom fields that are global (published) to the workspace. Reusing a non-global custom field, or creating a new field inline that isn't global, will fail with a `403 Forbidden` error.

([more information](https://developers.asana.com/reference/addcustomfieldsettingfortable))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tablesApiInstance = new Asana.TablesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | Information about the custom field setting.
let table_gid = "1337"; // String | Globally unique identifier for the table.
let opts = { 
    'opt_fields': "custom_field,custom_field.date_value,custom_field.date_value.date,custom_field.date_value.date_time,custom_field.display_value,custom_field.enabled,custom_field.enum_options,custom_field.enum_options.color,custom_field.enum_options.enabled,custom_field.enum_options.name,custom_field.enum_value,custom_field.enum_value.color,custom_field.enum_value.enabled,custom_field.enum_value.name,custom_field.id_prefix,custom_field.input_restrictions,custom_field.is_formula_field,custom_field.is_lookup_field,custom_field.multi_enum_values,custom_field.multi_enum_values.color,custom_field.multi_enum_values.enabled,custom_field.multi_enum_values.name,custom_field.name,custom_field.number_value,custom_field.representation_type,custom_field.text_value,custom_field.type,is_important"
};
tablesApiInstance.addCustomFieldSettingForTable(body, table_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| Information about the custom field setting. | 
 **table_gid** | **String**| Globally unique identifier for the table. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Properties can include nested fields. To learn more, see the [input/output options guide](/docs/inputoutput-options#selecting-nested-fields). | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createTable"></a>
# **createTable**

Create a table

<b>Required scope: </b><code>tables:write</code>  Creates a new table in a workspace.  Returns the full record of the newly created table.

([more information](https://developers.asana.com/reference/createtable))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tablesApiInstance = new Asana.TablesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The table to create.
let opts = { 
    'opt_fields': "created_at,custom_field_settings,custom_field_settings.custom_field,custom_field_settings.custom_field.date_value,custom_field_settings.custom_field.date_value.date,custom_field_settings.custom_field.date_value.date_time,custom_field_settings.custom_field.display_value,custom_field_settings.custom_field.enabled,custom_field_settings.custom_field.enum_options,custom_field_settings.custom_field.enum_options.color,custom_field_settings.custom_field.enum_options.enabled,custom_field_settings.custom_field.enum_options.name,custom_field_settings.custom_field.enum_value,custom_field_settings.custom_field.enum_value.color,custom_field_settings.custom_field.enum_value.enabled,custom_field_settings.custom_field.enum_value.name,custom_field_settings.custom_field.id_prefix,custom_field_settings.custom_field.input_restrictions,custom_field_settings.custom_field.is_formula_field,custom_field_settings.custom_field.is_lookup_field,custom_field_settings.custom_field.multi_enum_values,custom_field_settings.custom_field.multi_enum_values.color,custom_field_settings.custom_field.multi_enum_values.enabled,custom_field_settings.custom_field.multi_enum_values.name,custom_field_settings.custom_field.name,custom_field_settings.custom_field.number_value,custom_field_settings.custom_field.representation_type,custom_field_settings.custom_field.text_value,custom_field_settings.custom_field.type,custom_field_settings.is_important,modified_at,name,workspace,workspace.name"
};
tablesApiInstance.createTable(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The table to create. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Properties can include nested fields. To learn more, see the [input/output options guide](/docs/inputoutput-options#selecting-nested-fields). | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteTable"></a>
# **deleteTable**

Delete a table

<b>Required scope: </b><code>tables:delete</code>  A specific, existing table can be deleted by making a DELETE request on the URL for that table.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deletetable))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tablesApiInstance = new Asana.TablesApi(client);
let table_gid = "1337"; // String | Globally unique identifier for the table.

tablesApiInstance.deleteTable(table_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **table_gid** | **String**| Globally unique identifier for the table. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getCustomFieldSettingsForTable"></a>
# **getCustomFieldSettingsForTable**

Get a table&#x27;s custom field settings

<b>Required scope: </b><code>tables:read</code>  Returns a paginated list of the custom field settings for the given table.

([more information](https://developers.asana.com/reference/getcustomfieldsettingsfortable))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tablesApiInstance = new Asana.TablesApi(client);
let table_gid = "1337"; // String | Globally unique identifier for the table.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "custom_field,custom_field.date_value,custom_field.date_value.date,custom_field.date_value.date_time,custom_field.display_value,custom_field.enabled,custom_field.enum_options,custom_field.enum_options.color,custom_field.enum_options.enabled,custom_field.enum_options.name,custom_field.enum_value,custom_field.enum_value.color,custom_field.enum_value.enabled,custom_field.enum_value.name,custom_field.id_prefix,custom_field.input_restrictions,custom_field.is_formula_field,custom_field.is_lookup_field,custom_field.multi_enum_values,custom_field.multi_enum_values.color,custom_field.multi_enum_values.enabled,custom_field.multi_enum_values.name,custom_field.name,custom_field.number_value,custom_field.representation_type,custom_field.text_value,custom_field.type,is_important,offset,path,uri"
};
tablesApiInstance.getCustomFieldSettingsForTable(table_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **table_gid** | **String**| Globally unique identifier for the table. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Properties can include nested fields. To learn more, see the [input/output options guide](/docs/inputoutput-options#selecting-nested-fields). | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getCustomFieldSettingsForTableLegacy"></a>
# **getCustomFieldSettingsForTableLegacy**

Get a table&#x27;s custom field settings

<b>Required scope: </b><code>tables:read</code>  Returns a paginated list of the custom field settings for the given table.  Deprecated in favor of [Get a table's custom field settings](/reference/getcustomfieldsettingsfortable), which is otherwise identical. Kept for existing callers; new integrations should use the other endpoint instead.

([more information](https://developers.asana.com/reference/getcustomfieldsettingsfortablelegacy))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tablesApiInstance = new Asana.TablesApi(client);
let table_gid = "1337"; // String | Globally unique identifier for the table.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "custom_field,custom_field.date_value,custom_field.date_value.date,custom_field.date_value.date_time,custom_field.display_value,custom_field.enabled,custom_field.enum_options,custom_field.enum_options.color,custom_field.enum_options.enabled,custom_field.enum_options.name,custom_field.enum_value,custom_field.enum_value.color,custom_field.enum_value.enabled,custom_field.enum_value.name,custom_field.id_prefix,custom_field.input_restrictions,custom_field.is_formula_field,custom_field.is_lookup_field,custom_field.multi_enum_values,custom_field.multi_enum_values.color,custom_field.multi_enum_values.enabled,custom_field.multi_enum_values.name,custom_field.name,custom_field.number_value,custom_field.representation_type,custom_field.text_value,custom_field.type,is_important,offset,path,uri"
};
tablesApiInstance.getCustomFieldSettingsForTableLegacy(table_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **table_gid** | **String**| Globally unique identifier for the table. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Properties can include nested fields. To learn more, see the [input/output options guide](/docs/inputoutput-options#selecting-nested-fields). | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTable"></a>
# **getTable**

Get a table

<b>Required scope: </b><code>tables:read</code>  Returns the complete table record for a single table.

([more information](https://developers.asana.com/reference/gettable))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tablesApiInstance = new Asana.TablesApi(client);
let table_gid = "1337"; // String | Globally unique identifier for the table.
let opts = { 
    'opt_fields': "created_at,custom_field_settings,custom_field_settings.custom_field,custom_field_settings.custom_field.date_value,custom_field_settings.custom_field.date_value.date,custom_field_settings.custom_field.date_value.date_time,custom_field_settings.custom_field.display_value,custom_field_settings.custom_field.enabled,custom_field_settings.custom_field.enum_options,custom_field_settings.custom_field.enum_options.color,custom_field_settings.custom_field.enum_options.enabled,custom_field_settings.custom_field.enum_options.name,custom_field_settings.custom_field.enum_value,custom_field_settings.custom_field.enum_value.color,custom_field_settings.custom_field.enum_value.enabled,custom_field_settings.custom_field.enum_value.name,custom_field_settings.custom_field.id_prefix,custom_field_settings.custom_field.input_restrictions,custom_field_settings.custom_field.is_formula_field,custom_field_settings.custom_field.is_lookup_field,custom_field_settings.custom_field.multi_enum_values,custom_field_settings.custom_field.multi_enum_values.color,custom_field_settings.custom_field.multi_enum_values.enabled,custom_field_settings.custom_field.multi_enum_values.name,custom_field_settings.custom_field.name,custom_field_settings.custom_field.number_value,custom_field_settings.custom_field.representation_type,custom_field_settings.custom_field.text_value,custom_field_settings.custom_field.type,custom_field_settings.is_important,modified_at,name,workspace,workspace.name"
};
tablesApiInstance.getTable(table_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **table_gid** | **String**| Globally unique identifier for the table. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Properties can include nested fields. To learn more, see the [input/output options guide](/docs/inputoutput-options#selecting-nested-fields). | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTablesForWorkspace"></a>
# **getTablesForWorkspace**

Get tables in a workspace

<b>Required scope: </b><code>tables:read</code>  Returns the compact table records for all tables in the given workspace.

([more information](https://developers.asana.com/reference/gettablesforworkspace))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tablesApiInstance = new Asana.TablesApi(client);
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "created_at,custom_field_settings,custom_field_settings.custom_field,custom_field_settings.custom_field.date_value,custom_field_settings.custom_field.date_value.date,custom_field_settings.custom_field.date_value.date_time,custom_field_settings.custom_field.display_value,custom_field_settings.custom_field.enabled,custom_field_settings.custom_field.enum_options,custom_field_settings.custom_field.enum_options.color,custom_field_settings.custom_field.enum_options.enabled,custom_field_settings.custom_field.enum_options.name,custom_field_settings.custom_field.enum_value,custom_field_settings.custom_field.enum_value.color,custom_field_settings.custom_field.enum_value.enabled,custom_field_settings.custom_field.enum_value.name,custom_field_settings.custom_field.id_prefix,custom_field_settings.custom_field.input_restrictions,custom_field_settings.custom_field.is_formula_field,custom_field_settings.custom_field.is_lookup_field,custom_field_settings.custom_field.multi_enum_values,custom_field_settings.custom_field.multi_enum_values.color,custom_field_settings.custom_field.multi_enum_values.enabled,custom_field_settings.custom_field.multi_enum_values.name,custom_field_settings.custom_field.name,custom_field_settings.custom_field.number_value,custom_field_settings.custom_field.representation_type,custom_field_settings.custom_field.text_value,custom_field_settings.custom_field.type,custom_field_settings.is_important,modified_at,name,offset,path,uri,workspace,workspace.name"
};
tablesApiInstance.getTablesForWorkspace(workspace_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_gid** | **String**| Globally unique identifier for the workspace or organization. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Properties can include nested fields. To learn more, see the [input/output options guide](/docs/inputoutput-options#selecting-nested-fields). | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="removeCustomFieldSettingForTable"></a>
# **removeCustomFieldSettingForTable**

Remove a custom field from a table

<b>Required scope: </b><code>tables:write</code>  Removes a custom field setting from a table.

([more information](https://developers.asana.com/reference/removecustomfieldsettingfortable))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tablesApiInstance = new Asana.TablesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | Information about the custom field setting being removed.
let table_gid = "1337"; // String | Globally unique identifier for the table.

tablesApiInstance.removeCustomFieldSettingForTable(body, table_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| Information about the custom field setting being removed. | 
 **table_gid** | **String**| Globally unique identifier for the table. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updateTable"></a>
# **updateTable**

Update a table

<b>Required scope: </b><code>tables:write</code>  A specific, existing table can be updated by making a PUT request on the URL for that table. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated table record.

([more information](https://developers.asana.com/reference/updatetable))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let tablesApiInstance = new Asana.TablesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The updated fields for the table.
let table_gid = "1337"; // String | Globally unique identifier for the table.
let opts = { 
    'opt_fields': "created_at,custom_field_settings,custom_field_settings.custom_field,custom_field_settings.custom_field.date_value,custom_field_settings.custom_field.date_value.date,custom_field_settings.custom_field.date_value.date_time,custom_field_settings.custom_field.display_value,custom_field_settings.custom_field.enabled,custom_field_settings.custom_field.enum_options,custom_field_settings.custom_field.enum_options.color,custom_field_settings.custom_field.enum_options.enabled,custom_field_settings.custom_field.enum_options.name,custom_field_settings.custom_field.enum_value,custom_field_settings.custom_field.enum_value.color,custom_field_settings.custom_field.enum_value.enabled,custom_field_settings.custom_field.enum_value.name,custom_field_settings.custom_field.id_prefix,custom_field_settings.custom_field.input_restrictions,custom_field_settings.custom_field.is_formula_field,custom_field_settings.custom_field.is_lookup_field,custom_field_settings.custom_field.multi_enum_values,custom_field_settings.custom_field.multi_enum_values.color,custom_field_settings.custom_field.multi_enum_values.enabled,custom_field_settings.custom_field.multi_enum_values.name,custom_field_settings.custom_field.name,custom_field_settings.custom_field.number_value,custom_field_settings.custom_field.representation_type,custom_field_settings.custom_field.text_value,custom_field_settings.custom_field.type,custom_field_settings.is_important,modified_at,name,workspace,workspace.name"
};
tablesApiInstance.updateTable(body, table_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The updated fields for the table. | 
 **table_gid** | **String**| Globally unique identifier for the table. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Properties can include nested fields. To learn more, see the [input/output options guide](/docs/inputoutput-options#selecting-nested-fields). | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

