# Asana.OrganizationExportsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganizationExport**](OrganizationExportsApi.md#createOrganizationExport) | **POST** /organization_exports | Create an organization export request
[**getOrganizationExport**](OrganizationExportsApi.md#getOrganizationExport) | **GET** /organization_exports/{organization_export_gid} | Get details on an org export request

<a name="createOrganizationExport"></a>
# **createOrganizationExport**

Create an organization export request

This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.

([more information](https://developers.asana.com/reference/createorganizationexport))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let organizationExportsApiInstance = new Asana.OrganizationExportsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The organization to export.
let opts = { 
    'opt_fields': "created_at,download_url,organization,organization.name,state"
};
organizationExportsApiInstance.createOrganizationExport(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The organization to export. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="getOrganizationExport"></a>
# **getOrganizationExport**

Get details on an org export request

Returns details of a previously-requested Organization export.

([more information](https://developers.asana.com/reference/getorganizationexport))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let organizationExportsApiInstance = new Asana.OrganizationExportsApi();
let organization_export_gid = "12345"; // String | Globally unique identifier for the organization export.
let opts = { 
    'opt_fields': "created_at,download_url,organization,organization.name,state"
};
organizationExportsApiInstance.getOrganizationExport(organization_export_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_export_gid** | **String**| Globally unique identifier for the organization export. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

