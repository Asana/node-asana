# Asana.RecordsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRecord**](RecordsApi.md#createRecord) | **POST** /records | Create a record
[**deleteRecord**](RecordsApi.md#deleteRecord) | **DELETE** /records/{record_gid} | Delete a record
[**getRecord**](RecordsApi.md#getRecord) | **GET** /records/{record_gid} | Get a record
[**getRecordsForTable**](RecordsApi.md#getRecordsForTable) | **GET** /tables/{table_gid}/records | Get records in a table
[**searchRecordsForWorkspace**](RecordsApi.md#searchRecordsForWorkspace) | **GET** /workspaces/{workspace_gid}/records/search | Search records in a workspace
[**updateRecord**](RecordsApi.md#updateRecord) | **PUT** /records/{record_gid} | Update a record

<a name="createRecord"></a>
# **createRecord**

Create a record

<b>Required scope: </b><code>records:write</code>  Creates a new record in a table.  Returns the full record of the newly created record.

([more information](https://developers.asana.com/reference/createrecord))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let recordsApiInstance = new Asana.RecordsApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The record to create.
let opts = { 
    'opt_fields': "comment_count,created_at,created_by,created_by.name,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.html_text_value,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_lookup_field,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,deleted_at,is_in_archived_table,modified_at,name,permalink_url,table,table.name,workspace,workspace.name"
};
recordsApiInstance.createRecord(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The record to create. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Properties can include nested fields. To learn more, see the [input/output options guide](/docs/inputoutput-options#selecting-nested-fields). | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteRecord"></a>
# **deleteRecord**

Delete a record

<b>Required scope: </b><code>records:delete</code>  A specific, existing record can be deleted by making a DELETE request on the URL for that record.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deleterecord))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let recordsApiInstance = new Asana.RecordsApi(client);
let record_gid = "7331"; // String | Globally unique identifier for the record.

recordsApiInstance.deleteRecord(record_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **record_gid** | **String**| Globally unique identifier for the record. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getRecord"></a>
# **getRecord**

Get a record

<b>Required scope: </b><code>records:read</code>  Returns the complete record for a single record.

([more information](https://developers.asana.com/reference/getrecord))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let recordsApiInstance = new Asana.RecordsApi(client);
let record_gid = "7331"; // String | Globally unique identifier for the record.
let opts = { 
    'opt_fields': "comment_count,created_at,created_by,created_by.name,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.html_text_value,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_lookup_field,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,deleted_at,is_in_archived_table,modified_at,name,permalink_url,table,table.name,workspace,workspace.name"
};
recordsApiInstance.getRecord(record_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **record_gid** | **String**| Globally unique identifier for the record. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Properties can include nested fields. To learn more, see the [input/output options guide](/docs/inputoutput-options#selecting-nested-fields). | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getRecordsForTable"></a>
# **getRecordsForTable**

Get records in a table

<b>Required scope: </b><code>records:read</code>  Returns the compact records for all records in the given table.

([more information](https://developers.asana.com/reference/getrecordsfortable))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let recordsApiInstance = new Asana.RecordsApi(client);
let table_gid = "1337"; // String | Globally unique identifier for the table.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'modified_since': "2012-02-22T02:06:58.147Z", 
    'sort_by': "created_at", 
    'opt_fields': "comment_count,created_at,created_by,created_by.name,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.html_text_value,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_lookup_field,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,deleted_at,is_in_archived_table,modified_at,name,offset,path,permalink_url,table,table.name,uri,workspace,workspace.name"
};
recordsApiInstance.getRecordsForTable(table_gid, opts).then((result) => {
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
 **modified_since** | **Date**| Only return records that have been modified since the given time. | [optional] 
 **sort_by** | **String**| Sort order for the records returned. If omitted, records are returned in their default order. | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Properties can include nested fields. To learn more, see the [input/output options guide](/docs/inputoutput-options#selecting-nested-fields). | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="searchRecordsForWorkspace"></a>
# **searchRecordsForWorkspace**

Search records in a workspace

<b>Required scope: </b><code>records:read</code>  To mirror the functionality of the Asana web app's advanced search feature, this endpoint allows you to build complex filters to find and retrieve records across all of a workspace's tables. Custom field filters are also supported, using the same `custom_fields.{gid}.*` query parameters documented for [task search](/reference/searchtasksforworkspace). #### Premium access Like task search, this endpoint is only available to premium Asana users. Making a search request using credentials of a non-premium user will result in a `402 Payment Required` error. #### Pagination Search results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Page sizes are limited to a maximum of 100 items, and can be specified by the `limit` query parameter. #### Eventual consistency Changes in Asana are forwarded to our search infrastructure to be indexed, which can take between 10 and 60 seconds to complete under normal operation. If you need read-your-write behavior, use [Get records in a table](/reference/getrecordsfortable) instead.

([more information](https://developers.asana.com/reference/searchrecordsforworkspace))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let recordsApiInstance = new Asana.RecordsApi(client);
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
    'limit': 50, 
    'text': "Renewal", 
    'teams.any': "12345,23456,34567", 
    'followers.any': "12345,23456,34567", 
    'followers.not': "12345,23456,34567", 
    'tables.any': "12345,23456,34567", 
    'tables.not': "12345,23456,34567", 
    'tables.all': "12345,23456,34567", 
    'created_on.before': "2019-09-15", 
    'created_on.after': "2019-09-15", 
    'created_on': "2019-09-15", 
    'created_at.before': "2019-04-15T01:01:46.055Z", 
    'created_at.after': "2019-04-15T01:01:46.055Z", 
    'sort_by': "modified_at", 
    'sort_ascending': false, 
    'opt_fields': "comment_count,created_at,created_by,created_by.name,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.html_text_value,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_lookup_field,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,deleted_at,is_in_archived_table,modified_at,name,permalink_url,table,table.name,workspace,workspace.name"
};
recordsApiInstance.searchRecordsForWorkspace(workspace_gid, opts).then((result) => {
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
 **text** | **String**| Performs full-text search on the record name | [optional] 
 **teams.any** | **String**| Comma-separated list of team IDs | [optional] 
 **followers.any** | **String**| Comma-separated list of user identifiers. This can either be the string \&quot;me\&quot;, an email, or the gid of a user. | [optional] 
 **followers.not** | **String**| Comma-separated list of user identifiers. This can either be the string \&quot;me\&quot;, an email, or the gid of a user. | [optional] 
 **tables.any** | **String**| Comma-separated list of table IDs | [optional] 
 **tables.not** | **String**| Comma-separated list of table IDs | [optional] 
 **tables.all** | **String**| Comma-separated list of table IDs | [optional] 
 **created_on.before** | **Date**| ISO 8601 date string | [optional] 
 **created_on.after** | **Date**| ISO 8601 date string | [optional] 
 **created_on** | **Date**| ISO 8601 date string or &#x60;null&#x60; | [optional] 
 **created_at.before** | **Date**| ISO 8601 datetime string | [optional] 
 **created_at.after** | **Date**| ISO 8601 datetime string | [optional] 
 **sort_by** | **String**| One of &#x60;created_at&#x60; or &#x60;modified_at&#x60;, defaults to &#x60;modified_at&#x60; | [optional] [default to modified_at]
 **sort_ascending** | **Boolean**| Default &#x60;false&#x60; | [optional] [default to false]
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Properties can include nested fields. To learn more, see the [input/output options guide](/docs/inputoutput-options#selecting-nested-fields). | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateRecord"></a>
# **updateRecord**

Update a record

<b>Required scope: </b><code>records:write</code>  A specific, existing record can be updated by making a PUT request on the URL for that record. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated record.

([more information](https://developers.asana.com/reference/updaterecord))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let recordsApiInstance = new Asana.RecordsApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The updated fields for the record.
let record_gid = "7331"; // String | Globally unique identifier for the record.
let opts = { 
    'opt_fields': "comment_count,created_at,created_by,created_by.name,custom_fields,custom_fields.asana_created_field,custom_fields.created_by,custom_fields.created_by.name,custom_fields.currency_code,custom_fields.custom_label,custom_fields.custom_label_position,custom_fields.date_value,custom_fields.date_value.date,custom_fields.date_value.date_time,custom_fields.default_access_level,custom_fields.description,custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,custom_fields.enum_options.color,custom_fields.enum_options.enabled,custom_fields.enum_options.name,custom_fields.enum_value,custom_fields.enum_value.color,custom_fields.enum_value.enabled,custom_fields.enum_value.name,custom_fields.format,custom_fields.has_notifications_enabled,custom_fields.html_text_value,custom_fields.id_prefix,custom_fields.input_restrictions,custom_fields.is_formula_field,custom_fields.is_global_to_workspace,custom_fields.is_lookup_field,custom_fields.is_value_read_only,custom_fields.multi_enum_values,custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,custom_fields.privacy_setting,custom_fields.reference_value,custom_fields.reference_value.name,custom_fields.representation_type,custom_fields.resource_subtype,custom_fields.text_value,custom_fields.type,deleted_at,is_in_archived_table,modified_at,name,permalink_url,table,table.name,workspace,workspace.name"
};
recordsApiInstance.updateRecord(body, record_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The updated fields for the record. | 
 **record_gid** | **String**| Globally unique identifier for the record. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Properties can include nested fields. To learn more, see the [input/output options guide](/docs/inputoutput-options#selecting-nested-fields). | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

