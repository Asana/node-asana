# Asana.BatchAPIApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBatchRequest**](BatchAPIApi.md#createBatchRequest) | **POST** /batch | Submit parallel requests

<a name="createBatchRequest"></a>
# **createBatchRequest**
> BatchResponseArray createBatchRequest(body, opts)

Submit parallel requests

Make multiple requests in parallel to Asana&#x27;s API.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.BatchAPIApi();
let body = new Asana.BatchBody.constructFromObject({data: {param1: "value1", param2: "value2",}}); // BatchBody | The requests to batch together via the Batch API.
let opts = { 
    'opt_fields': ["body","headers","status_code"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createBatchRequest(body, opts, (error, data, response) => {
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
 **body** | [**BatchBody**](BatchBody.md)| The requests to batch together via the Batch API. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**BatchResponseArray**](BatchResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

