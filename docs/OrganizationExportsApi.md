# Asana.OrganizationExportsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganizationExport**](OrganizationExportsApi.md#createOrganizationExport) | **POST** /organization_exports | Create an organization export request
[**getOrganizationExport**](OrganizationExportsApi.md#getOrganizationExport) | **GET** /organization_exports/{organization_export_gid} | Get details on an org export request

<a name="createOrganizationExport"></a>
# **createOrganizationExport**
> OrganizationExportResponseData createOrganizationExport(body, opts)

Create an organization export request

This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.OrganizationExportsApi();
let body = new Asana.OrganizationExportsBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // OrganizationExportsBody | The organization to export.
let opts = { 
  'opt_fields': ["created_at","download_url","organization","organization.name","state"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createOrganizationExport(body, opts, (error, data, response) => {
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
 **body** | [**OrganizationExportsBody**](OrganizationExportsBody.md)| The organization to export. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**OrganizationExportResponseData**](OrganizationExportResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="getOrganizationExport"></a>
# **getOrganizationExport**
> OrganizationExportResponseData getOrganizationExport(organization_export_gid, opts)

Get details on an org export request

Returns details of a previously-requested Organization export.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.OrganizationExportsApi();
let organization_export_gid = "12345"; // String | Globally unique identifier for the organization export.
let opts = { 
  'opt_fields': ["created_at","download_url","organization","organization.name","state"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getOrganizationExport(organization_export_gid, opts, (error, data, response) => {
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
 **organization_export_gid** | **String**| Globally unique identifier for the organization export. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**OrganizationExportResponseData**](OrganizationExportResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

