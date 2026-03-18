# Asana.ProjectPortfolioSettingsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProjectPortfolioSetting**](ProjectPortfolioSettingsApi.md#getProjectPortfolioSetting) | **GET** /project_portfolio_settings/{project_portfolio_setting_gid} | Get a project portfolio setting
[**getProjectPortfolioSettingsForPortfolio**](ProjectPortfolioSettingsApi.md#getProjectPortfolioSettingsForPortfolio) | **GET** /portfolios/{portfolio_gid}/project_portfolio_settings | Get project portfolio settings for a portfolio
[**getProjectPortfolioSettingsForProject**](ProjectPortfolioSettingsApi.md#getProjectPortfolioSettingsForProject) | **GET** /projects/{project_gid}/project_portfolio_settings | Get project portfolio settings for a project
[**updateProjectPortfolioSetting**](ProjectPortfolioSettingsApi.md#updateProjectPortfolioSetting) | **PUT** /project_portfolio_settings/{project_portfolio_setting_gid} | Update a project portfolio setting

<a name="getProjectPortfolioSetting"></a>
# **getProjectPortfolioSetting**

Get a project portfolio setting

<b>Required scope: </b><code>project_portfolio_settings:read</code>  Returns the complete project portfolio setting record for a single project portfolio setting.

([more information](https://developers.asana.com/reference/getprojectportfoliosetting))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectPortfolioSettingsApiInstance = new Asana.ProjectPortfolioSettingsApi(client);
let project_portfolio_setting_gid = "1331"; // String | Globally unique identifier for the project portfolio setting.
let opts = { 
    'opt_fields': "created_at,is_access_control_inherited,portfolio,project"
};
projectPortfolioSettingsApiInstance.getProjectPortfolioSetting(project_portfolio_setting_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_portfolio_setting_gid** | **String**| Globally unique identifier for the project portfolio setting. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getProjectPortfolioSettingsForPortfolio"></a>
# **getProjectPortfolioSettingsForPortfolio**

Get project portfolio settings for a portfolio

<b>Required scope: </b><code>project_portfolio_settings:read</code>  Returns a compact representation of all of the project portfolio settings for the given portfolio.

([more information](https://developers.asana.com/reference/getprojectportfoliosettingsforportfolio))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectPortfolioSettingsApiInstance = new Asana.ProjectPortfolioSettingsApi(client);
let portfolio_gid = "12345"; // String | Globally unique identifier for the portfolio.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "created_at,is_access_control_inherited,offset,path,portfolio,project,uri"
};
projectPortfolioSettingsApiInstance.getProjectPortfolioSettingsForPortfolio(portfolio_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_gid** | **String**| Globally unique identifier for the portfolio. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getProjectPortfolioSettingsForProject"></a>
# **getProjectPortfolioSettingsForProject**

Get project portfolio settings for a project

<b>Required scope: </b><code>project_portfolio_settings:read</code>  Returns a compact representation of all of the project portfolio settings for the given project.

([more information](https://developers.asana.com/reference/getprojectportfoliosettingsforproject))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectPortfolioSettingsApiInstance = new Asana.ProjectPortfolioSettingsApi(client);
let project_gid = "1331"; // String | Globally unique identifier for the project.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "created_at,is_access_control_inherited,offset,path,portfolio,project,uri"
};
projectPortfolioSettingsApiInstance.getProjectPortfolioSettingsForProject(project_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_gid** | **String**| Globally unique identifier for the project. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateProjectPortfolioSetting"></a>
# **updateProjectPortfolioSetting**

Update a project portfolio setting

<b>Required scope: </b><code>project_portfolio_settings:write</code>  An existing project portfolio setting can be updated by making a PUT request on the URL for that setting. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated project portfolio setting record.

([more information](https://developers.asana.com/reference/updateprojectportfoliosetting))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let projectPortfolioSettingsApiInstance = new Asana.ProjectPortfolioSettingsApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The updated fields for the project portfolio setting.
let project_portfolio_setting_gid = "1331"; // String | Globally unique identifier for the project portfolio setting.
let opts = { 
    'opt_fields': "created_at,is_access_control_inherited,portfolio,project"
};
projectPortfolioSettingsApiInstance.updateProjectPortfolioSetting(body, project_portfolio_setting_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The updated fields for the project portfolio setting. | 
 **project_portfolio_setting_gid** | **String**| Globally unique identifier for the project portfolio setting. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

