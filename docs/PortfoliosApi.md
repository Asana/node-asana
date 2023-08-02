# Asana.PortfoliosApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomFieldSettingForPortfolio**](PortfoliosApi.md#addCustomFieldSettingForPortfolio) | **POST** /portfolios/{portfolio_gid}/addCustomFieldSetting | Add a custom field to a portfolio
[**addItemForPortfolio**](PortfoliosApi.md#addItemForPortfolio) | **POST** /portfolios/{portfolio_gid}/addItem | Add a portfolio item
[**addMembersForPortfolio**](PortfoliosApi.md#addMembersForPortfolio) | **POST** /portfolios/{portfolio_gid}/addMembers | Add users to a portfolio
[**createPortfolio**](PortfoliosApi.md#createPortfolio) | **POST** /portfolios | Create a portfolio
[**deletePortfolio**](PortfoliosApi.md#deletePortfolio) | **DELETE** /portfolios/{portfolio_gid} | Delete a portfolio
[**getItemsForPortfolio**](PortfoliosApi.md#getItemsForPortfolio) | **GET** /portfolios/{portfolio_gid}/items | Get portfolio items
[**getPortfolio**](PortfoliosApi.md#getPortfolio) | **GET** /portfolios/{portfolio_gid} | Get a portfolio
[**getPortfolios**](PortfoliosApi.md#getPortfolios) | **GET** /portfolios | Get multiple portfolios
[**removeCustomFieldSettingForPortfolio**](PortfoliosApi.md#removeCustomFieldSettingForPortfolio) | **POST** /portfolios/{portfolio_gid}/removeCustomFieldSetting | Remove a custom field from a portfolio
[**removeItemForPortfolio**](PortfoliosApi.md#removeItemForPortfolio) | **POST** /portfolios/{portfolio_gid}/removeItem | Remove a portfolio item
[**removeMembersForPortfolio**](PortfoliosApi.md#removeMembersForPortfolio) | **POST** /portfolios/{portfolio_gid}/removeMembers | Remove users from a portfolio
[**updatePortfolio**](PortfoliosApi.md#updatePortfolio) | **PUT** /portfolios/{portfolio_gid} | Update a portfolio

<a name="addCustomFieldSettingForPortfolio"></a>
# **addCustomFieldSettingForPortfolio**
> CustomFieldSettingResponseData addCustomFieldSettingForPortfolio(bodyportfolio_gid)

Add a custom field to a portfolio

Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the portfolio.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.PortfoliosApi();
let body = new Asana.PortfolioGidAddCustomFieldSettingBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // PortfolioGidAddCustomFieldSettingBody | Information about the custom field setting.
let portfolio_gid = "12345"; // String | Globally unique identifier for the portfolio.

apiInstance.addCustomFieldSettingForPortfolio(bodyportfolio_gid, (error, data, response) => {
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
 **body** | [**PortfolioGidAddCustomFieldSettingBody**](PortfolioGidAddCustomFieldSettingBody.md)| Information about the custom field setting. | 
 **portfolio_gid** | **String**| Globally unique identifier for the portfolio. | 

### Return type

[**CustomFieldSettingResponseData**](CustomFieldSettingResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="addItemForPortfolio"></a>
# **addItemForPortfolio**
> EmptyResponseData addItemForPortfolio(bodyportfolio_gid)

Add a portfolio item

Add an item to a portfolio. Returns an empty data block.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.PortfoliosApi();
let body = new Asana.PortfolioGidAddItemBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // PortfolioGidAddItemBody | Information about the item being inserted.
let portfolio_gid = "12345"; // String | Globally unique identifier for the portfolio.

apiInstance.addItemForPortfolio(bodyportfolio_gid, (error, data, response) => {
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
 **body** | [**PortfolioGidAddItemBody**](PortfolioGidAddItemBody.md)| Information about the item being inserted. | 
 **portfolio_gid** | **String**| Globally unique identifier for the portfolio. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="addMembersForPortfolio"></a>
# **addMembersForPortfolio**
> PortfolioResponseData addMembersForPortfolio(bodyportfolio_gid, opts)

Add users to a portfolio

Adds the specified list of users as members of the portfolio. Returns the updated portfolio record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.PortfoliosApi();
let body = new Asana.PortfolioGidAddMembersBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // PortfolioGidAddMembersBody | Information about the members being added.
let portfolio_gid = "12345"; // String | Globally unique identifier for the portfolio.
let opts = { 
  'opt_fields': ["color","created_at","created_by","created_by.name","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","due_on","members","members.name","name","owner","owner.name","permalink_url","project_templates","project_templates.name","public","start_on","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.addMembersForPortfolio(bodyportfolio_gid, opts, (error, data, response) => {
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
 **body** | [**PortfolioGidAddMembersBody**](PortfolioGidAddMembersBody.md)| Information about the members being added. | 
 **portfolio_gid** | **String**| Globally unique identifier for the portfolio. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**PortfolioResponseData**](PortfolioResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="createPortfolio"></a>
# **createPortfolio**
> PortfolioResponseData createPortfolio(body, opts)

Create a portfolio

Creates a new portfolio in the given workspace with the supplied name.  Note that portfolios created in the Asana UI may have some state (like the “Priority” custom field) which is automatically added to the portfolio when it is created. Portfolios created via our API will *not* be created with the same initial state to allow integrations to create their own starting state on a portfolio.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.PortfoliosApi();
let body = new Asana.PortfoliosBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // PortfoliosBody | The portfolio to create.
let opts = { 
  'opt_fields': ["color","created_at","created_by","created_by.name","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","due_on","members","members.name","name","owner","owner.name","permalink_url","project_templates","project_templates.name","public","start_on","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createPortfolio(body, opts, (error, data, response) => {
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
 **body** | [**PortfoliosBody**](PortfoliosBody.md)| The portfolio to create. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**PortfolioResponseData**](PortfolioResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deletePortfolio"></a>
# **deletePortfolio**
> EmptyResponseData deletePortfolio(portfolio_gid)

Delete a portfolio

An existing portfolio can be deleted by making a DELETE request on the URL for that portfolio.  Returns an empty data record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.PortfoliosApi();
let portfolio_gid = "12345"; // String | Globally unique identifier for the portfolio.

apiInstance.deletePortfolio(portfolio_gid, (error, data, response) => {
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
 **portfolio_gid** | **String**| Globally unique identifier for the portfolio. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getItemsForPortfolio"></a>
# **getItemsForPortfolio**
> ProjectResponseArray getItemsForPortfolio(portfolio_gid, opts)

Get portfolio items

Get a list of the items in compact form in a portfolio.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.PortfoliosApi();
let portfolio_gid = "12345"; // String | Globally unique identifier for the portfolio.
let opts = { 
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'opt_fields': ["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","modified_at","name","notes","offset","owner","path","permalink_url","project_brief","public","start_on","team","team.name","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getItemsForPortfolio(portfolio_gid, opts, (error, data, response) => {
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
 **portfolio_gid** | **String**| Globally unique identifier for the portfolio. | 
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

<a name="getPortfolio"></a>
# **getPortfolio**
> PortfolioResponseData getPortfolio(portfolio_gid, opts)

Get a portfolio

Returns the complete portfolio record for a single portfolio.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.PortfoliosApi();
let portfolio_gid = "12345"; // String | Globally unique identifier for the portfolio.
let opts = { 
  'opt_fields': ["color","created_at","created_by","created_by.name","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","due_on","members","members.name","name","owner","owner.name","permalink_url","project_templates","project_templates.name","public","start_on","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getPortfolio(portfolio_gid, opts, (error, data, response) => {
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
 **portfolio_gid** | **String**| Globally unique identifier for the portfolio. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**PortfolioResponseData**](PortfolioResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getPortfolios"></a>
# **getPortfolios**
> PortfolioResponseArray getPortfolios(workspace, opts)

Get multiple portfolios

Returns a list of the portfolios in compact representation that are owned by the current API user.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.PortfoliosApi();
let workspace = "1331"; // String | The workspace or organization to filter portfolios on.
let opts = { 
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'owner': "14916", // String | The user who owns the portfolio. Currently, API users can only get a list of portfolios that they themselves own, unless the request is made from a Service Account. In the case of a Service Account, if this parameter is specified, then all portfolios owned by this parameter are returned. Otherwise, all portfolios across the workspace are returned.
  'opt_fields': ["color","created_at","created_by","created_by.name","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","due_on","members","members.name","name","offset","owner","owner.name","path","permalink_url","project_templates","project_templates.name","public","start_on","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getPortfolios(workspace, opts, (error, data, response) => {
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
 **workspace** | **String**| The workspace or organization to filter portfolios on. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **owner** | **String**| The user who owns the portfolio. Currently, API users can only get a list of portfolios that they themselves own, unless the request is made from a Service Account. In the case of a Service Account, if this parameter is specified, then all portfolios owned by this parameter are returned. Otherwise, all portfolios across the workspace are returned. | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**PortfolioResponseArray**](PortfolioResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="removeCustomFieldSettingForPortfolio"></a>
# **removeCustomFieldSettingForPortfolio**
> EmptyResponseData removeCustomFieldSettingForPortfolio(bodyportfolio_gid)

Remove a custom field from a portfolio

Removes a custom field setting from a portfolio.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.PortfoliosApi();
let body = new Asana.PortfolioGidRemoveCustomFieldSettingBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // PortfolioGidRemoveCustomFieldSettingBody | Information about the custom field setting being removed.
let portfolio_gid = "12345"; // String | Globally unique identifier for the portfolio.

apiInstance.removeCustomFieldSettingForPortfolio(bodyportfolio_gid, (error, data, response) => {
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
 **body** | [**PortfolioGidRemoveCustomFieldSettingBody**](PortfolioGidRemoveCustomFieldSettingBody.md)| Information about the custom field setting being removed. | 
 **portfolio_gid** | **String**| Globally unique identifier for the portfolio. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="removeItemForPortfolio"></a>
# **removeItemForPortfolio**
> EmptyResponseData removeItemForPortfolio(bodyportfolio_gid)

Remove a portfolio item

Remove an item from a portfolio. Returns an empty data block.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.PortfoliosApi();
let body = new Asana.PortfolioGidRemoveItemBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // PortfolioGidRemoveItemBody | Information about the item being removed.
let portfolio_gid = "12345"; // String | Globally unique identifier for the portfolio.

apiInstance.removeItemForPortfolio(bodyportfolio_gid, (error, data, response) => {
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
 **body** | [**PortfolioGidRemoveItemBody**](PortfolioGidRemoveItemBody.md)| Information about the item being removed. | 
 **portfolio_gid** | **String**| Globally unique identifier for the portfolio. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="removeMembersForPortfolio"></a>
# **removeMembersForPortfolio**
> PortfolioResponseData removeMembersForPortfolio(bodyportfolio_gid, opts)

Remove users from a portfolio

Removes the specified list of users from members of the portfolio. Returns the updated portfolio record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.PortfoliosApi();
let body = new Asana.PortfolioGidRemoveMembersBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // PortfolioGidRemoveMembersBody | Information about the members being removed.
let portfolio_gid = "12345"; // String | Globally unique identifier for the portfolio.
let opts = { 
  'opt_fields': ["color","created_at","created_by","created_by.name","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","due_on","members","members.name","name","owner","owner.name","permalink_url","project_templates","project_templates.name","public","start_on","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.removeMembersForPortfolio(bodyportfolio_gid, opts, (error, data, response) => {
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
 **body** | [**PortfolioGidRemoveMembersBody**](PortfolioGidRemoveMembersBody.md)| Information about the members being removed. | 
 **portfolio_gid** | **String**| Globally unique identifier for the portfolio. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**PortfolioResponseData**](PortfolioResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="updatePortfolio"></a>
# **updatePortfolio**
> PortfolioResponseData updatePortfolio(bodyportfolio_gid, opts)

Update a portfolio

An existing portfolio can be updated by making a PUT request on the URL for that portfolio. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated portfolio record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.PortfoliosApi();
let body = new Asana.PortfoliosPortfolioGidBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // PortfoliosPortfolioGidBody | The updated fields for the portfolio.
let portfolio_gid = "12345"; // String | Globally unique identifier for the portfolio.
let opts = { 
  'opt_fields': ["color","created_at","created_by","created_by.name","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","due_on","members","members.name","name","owner","owner.name","permalink_url","project_templates","project_templates.name","public","start_on","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.updatePortfolio(bodyportfolio_gid, opts, (error, data, response) => {
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
 **body** | [**PortfoliosPortfolioGidBody**](PortfoliosPortfolioGidBody.md)| The updated fields for the portfolio. | 
 **portfolio_gid** | **String**| Globally unique identifier for the portfolio. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**PortfolioResponseData**](PortfolioResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

