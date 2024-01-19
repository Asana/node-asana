# Asana.BatchAPIApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBatchRequest**](BatchAPIApi.md#createBatchRequest) | **POST** /batch | Submit parallel requests

<a name="createBatchRequest"></a>
# **createBatchRequest**

Submit parallel requests

Make multiple requests in parallel to Asana's API.

([more information](https://developers.asana.com/reference/createbatchrequest))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let batchApiApiInstance = new Asana.BatchAPIApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The requests to batch together via the Batch API.
let opts = { 
    'opt_fields': "body,headers,status_code"
};
batchApiApiInstance.createBatchRequest(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The requests to batch together via the Batch API. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

