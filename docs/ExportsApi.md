# Asana.ExportsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGraphExport**](ExportsApi.md#createGraphExport) | **POST** /exports/graph | Initiate graph export

<a name="createGraphExport"></a>
# **createGraphExport**

Initiate graph export

Initiates a graph export job for a given parent object (team, portfolio, or project). The export will be processed asynchronously. Once initiated, use the [jobs](/reference/getjob) endpoint to monitor progress.  **Export Caching:** When exporting more than 1,000 tasks, the results are cached for 4 hours. Any new export requests made within this 4-hour window will return the same cached results rather than generating a fresh export.

([more information](https://developers.asana.com/reference/creategraphexport))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let exportsApiInstance = new Asana.ExportsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | A JSON payload specifying the parent object to export.

exportsApiInstance.createGraphExport(body).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| A JSON payload specifying the parent object to export. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

