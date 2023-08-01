# Asana.CustomFieldsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomField**](CustomFieldsApi.md#createCustomField) | **POST** /custom_fields | Create a custom field
[**createEnumOptionForCustomField**](CustomFieldsApi.md#createEnumOptionForCustomField) | **POST** /custom_fields/{custom_field_gid}/enum_options | Create an enum option
[**deleteCustomField**](CustomFieldsApi.md#deleteCustomField) | **DELETE** /custom_fields/{custom_field_gid} | Delete a custom field
[**getCustomField**](CustomFieldsApi.md#getCustomField) | **GET** /custom_fields/{custom_field_gid} | Get a custom field
[**getCustomFieldsForWorkspace**](CustomFieldsApi.md#getCustomFieldsForWorkspace) | **GET** /workspaces/{workspace_gid}/custom_fields | Get a workspace&#x27;s custom fields
[**insertEnumOptionForCustomField**](CustomFieldsApi.md#insertEnumOptionForCustomField) | **POST** /custom_fields/{custom_field_gid}/enum_options/insert | Reorder a custom field&#x27;s enum
[**updateCustomField**](CustomFieldsApi.md#updateCustomField) | **PUT** /custom_fields/{custom_field_gid} | Update a custom field
[**updateEnumOption**](CustomFieldsApi.md#updateEnumOption) | **PUT** /enum_options/{enum_option_gid} | Update an enum option

<a name="createCustomField"></a>
# **createCustomField**
> CustomFieldResponseData createCustomField(opts)

Create a custom field

Creates a new custom field in a workspace. Every custom field is required to be created in a specific workspace, and this workspace cannot be changed once set.  A custom field’s name must be unique within a workspace and not conflict with names of existing task properties such as &#x60;Due Date&#x60; or &#x60;Assignee&#x60;. A custom field’s type must be one of &#x60;text&#x60;, &#x60;enum&#x60;, &#x60;multi_enum&#x60;, &#x60;number&#x60;, &#x60;date&#x60;, or &#x60;people&#x60;.  Returns the full record of the newly created custom field.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.CustomFieldsApi();
let opts = { 
  'body': new Asana.CustomFieldsBody.constructFromObject({data: {param1: "value1", param2: "value2",}}) // CustomFieldsBody | The custom field object to create.
  'opt_fields': ["asana_created_field","created_by","created_by.name","currency_code","custom_label","custom_label_position","date_value","date_value.date","date_value.date_time","description","display_value","enabled","enum_options","enum_options.color","enum_options.enabled","enum_options.name","enum_value","enum_value.color","enum_value.enabled","enum_value.name","format","has_notifications_enabled","is_formula_field","is_global_to_workspace","is_value_read_only","multi_enum_values","multi_enum_values.color","multi_enum_values.enabled","multi_enum_values.name","name","number_value","people_value","people_value.name","precision","resource_subtype","text_value","type"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createCustomField(opts, (error, data, response) => {
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
 **body** | [**CustomFieldsBody**](CustomFieldsBody.md)| The custom field object to create. | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CustomFieldResponseData**](CustomFieldResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createEnumOptionForCustomField"></a>
# **createEnumOptionForCustomField**
> EnumOptionData createEnumOptionForCustomField(custom_field_gid, opts)

Create an enum option

Creates an enum option and adds it to this custom field’s list of enum options. A custom field can have at most 500 enum options (including disabled options). By default new enum options are inserted at the end of a custom field’s list. Locked custom fields can only have enum options added by the user who locked the field. Returns the full record of the newly created enum option.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.CustomFieldsApi();
let custom_field_gid = "12345"; // String | Globally unique identifier for the custom field.
let opts = { 
  'body': new Asana.CustomFieldGidEnumOptionsBody.constructFromObject({data: {param1: "value1", param2: "value2",}}) // CustomFieldGidEnumOptionsBody | The enum option object to create.
  'opt_fields': ["color","enabled","name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createEnumOptionForCustomField(custom_field_gid, opts, (error, data, response) => {
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
 **custom_field_gid** | **String**| Globally unique identifier for the custom field. | 
 **body** | [**CustomFieldGidEnumOptionsBody**](CustomFieldGidEnumOptionsBody.md)| The enum option object to create. | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**EnumOptionData**](EnumOptionData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteCustomField"></a>
# **deleteCustomField**
> EmptyResponseData deleteCustomField(custom_field_gid)

Delete a custom field

A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field. Locked custom fields can only be deleted by the user who locked the field. Returns an empty data record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.CustomFieldsApi();
let custom_field_gid = "12345"; // String | Globally unique identifier for the custom field.

apiInstance.deleteCustomField(custom_field_gid, (error, data, response) => {
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
 **custom_field_gid** | **String**| Globally unique identifier for the custom field. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getCustomField"></a>
# **getCustomField**
> CustomFieldResponseData getCustomField(custom_field_gid, opts)

Get a custom field

Get the complete definition of a custom field’s metadata.  Since custom fields can be defined for one of a number of types, and these types have different data and behaviors, there are fields that are relevant to a particular type. For instance, as noted above, enum_options is only relevant for the enum type and defines the set of choices that the enum could represent. The examples below show some of these type-specific custom field definitions.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.CustomFieldsApi();
let custom_field_gid = "12345"; // String | Globally unique identifier for the custom field.
let opts = { 
  'opt_fields': ["asana_created_field","created_by","created_by.name","currency_code","custom_label","custom_label_position","date_value","date_value.date","date_value.date_time","description","display_value","enabled","enum_options","enum_options.color","enum_options.enabled","enum_options.name","enum_value","enum_value.color","enum_value.enabled","enum_value.name","format","has_notifications_enabled","is_formula_field","is_global_to_workspace","is_value_read_only","multi_enum_values","multi_enum_values.color","multi_enum_values.enabled","multi_enum_values.name","name","number_value","people_value","people_value.name","precision","resource_subtype","text_value","type"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getCustomField(custom_field_gid, opts, (error, data, response) => {
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
 **custom_field_gid** | **String**| Globally unique identifier for the custom field. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CustomFieldResponseData**](CustomFieldResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getCustomFieldsForWorkspace"></a>
# **getCustomFieldsForWorkspace**
> CustomFieldResponseArray getCustomFieldsForWorkspace(workspace_gid, opts)

Get a workspace&#x27;s custom fields

Returns a list of the compact representation of all of the custom fields in a workspace.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.CustomFieldsApi();
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'opt_fields': ["asana_created_field","created_by","created_by.name","currency_code","custom_label","custom_label_position","date_value","date_value.date","date_value.date_time","description","display_value","enabled","enum_options","enum_options.color","enum_options.enabled","enum_options.name","enum_value","enum_value.color","enum_value.enabled","enum_value.name","format","has_notifications_enabled","is_formula_field","is_global_to_workspace","is_value_read_only","multi_enum_values","multi_enum_values.color","multi_enum_values.enabled","multi_enum_values.name","name","number_value","offset","path","people_value","people_value.name","precision","resource_subtype","text_value","type","uri"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getCustomFieldsForWorkspace(workspace_gid, opts, (error, data, response) => {
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
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CustomFieldResponseArray**](CustomFieldResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="insertEnumOptionForCustomField"></a>
# **insertEnumOptionForCustomField**
> EnumOptionData insertEnumOptionForCustomField(custom_field_gid, opts)

Reorder a custom field&#x27;s enum

Moves a particular enum option to be either before or after another specified enum option in the custom field. Locked custom fields can only be reordered by the user who locked the field.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.CustomFieldsApi();
let custom_field_gid = "12345"; // String | Globally unique identifier for the custom field.
let opts = { 
  'body': new Asana.EnumOptionsInsertBody.constructFromObject({data: {param1: "value1", param2: "value2",}}) // EnumOptionsInsertBody | The enum option object to create.
  'opt_fields': ["color","enabled","name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.insertEnumOptionForCustomField(custom_field_gid, opts, (error, data, response) => {
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
 **custom_field_gid** | **String**| Globally unique identifier for the custom field. | 
 **body** | [**EnumOptionsInsertBody**](EnumOptionsInsertBody.md)| The enum option object to create. | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**EnumOptionData**](EnumOptionData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updateCustomField"></a>
# **updateCustomField**
> CustomFieldResponseData updateCustomField(custom_field_gid, opts)

Update a custom field

A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the custom field. A custom field’s &#x60;type&#x60; cannot be updated. An enum custom field’s &#x60;enum_options&#x60; cannot be updated with this endpoint. Instead see “Work With Enum Options” for information on how to update &#x60;enum_options&#x60;. Locked custom fields can only be updated by the user who locked the field. Returns the complete updated custom field record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.CustomFieldsApi();
let custom_field_gid = "12345"; // String | Globally unique identifier for the custom field.
let opts = { 
  'body': new Asana.CustomFieldsCustomFieldGidBody.constructFromObject({data: {param1: "value1", param2: "value2",}}) // CustomFieldsCustomFieldGidBody | The custom field object with all updated properties.
  'opt_fields': ["asana_created_field","created_by","created_by.name","currency_code","custom_label","custom_label_position","date_value","date_value.date","date_value.date_time","description","display_value","enabled","enum_options","enum_options.color","enum_options.enabled","enum_options.name","enum_value","enum_value.color","enum_value.enabled","enum_value.name","format","has_notifications_enabled","is_formula_field","is_global_to_workspace","is_value_read_only","multi_enum_values","multi_enum_values.color","multi_enum_values.enabled","multi_enum_values.name","name","number_value","people_value","people_value.name","precision","resource_subtype","text_value","type"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.updateCustomField(custom_field_gid, opts, (error, data, response) => {
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
 **custom_field_gid** | **String**| Globally unique identifier for the custom field. | 
 **body** | [**CustomFieldsCustomFieldGidBody**](CustomFieldsCustomFieldGidBody.md)| The custom field object with all updated properties. | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**CustomFieldResponseData**](CustomFieldResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updateEnumOption"></a>
# **updateEnumOption**
> EnumOptionData updateEnumOption(enum_option_gid, opts)

Update an enum option

Updates an existing enum option. Enum custom fields require at least one enabled enum option. Locked custom fields can only be updated by the user who locked the field. Returns the full record of the updated enum option.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.CustomFieldsApi();
let enum_option_gid = "124578"; // String | Globally unique identifier for the enum option.
let opts = { 
  'body': new Asana.EnumOptionsEnumOptionGidBody.constructFromObject({data: {param1: "value1", param2: "value2",}}) // EnumOptionsEnumOptionGidBody | The enum option object to update
  'opt_fields': ["color","enabled","name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.updateEnumOption(enum_option_gid, opts, (error, data, response) => {
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
 **enum_option_gid** | **String**| Globally unique identifier for the enum option. | 
 **body** | [**EnumOptionsEnumOptionGidBody**](EnumOptionsEnumOptionGidBody.md)| The enum option object to update | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**EnumOptionData**](EnumOptionData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

