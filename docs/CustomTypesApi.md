# Asana.CustomTypesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomTypes**](CustomTypesApi.md#getCustomTypes) | **GET** /custom_types | Get all custom types associated with an object

<a name="getCustomTypes"></a>
# **getCustomTypes**

Get all custom types associated with an object

Returns a list of all of the custom types associated with an object. Currently, only projects are supported. Note that, as in all queries to collections which return compact representation, `opt_fields` can be used to include more data than is returned in the compact representation. See the [documentation for input/output options](https://developers.asana.com/docs/inputoutput-options) for more information.

([more information](https://developers.asana.com/reference/getcustomtypes))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let customTypesApiInstance = new Asana.CustomTypesApi();
let project = "1331"; // String | Globally unique identifier for the project, which is used as a filter when retrieving all custom types.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "name,offset,path,status_options,status_options.color,status_options.completion_state,status_options.enabled,status_options.name,uri"
};
customTypesApiInstance.getCustomTypes(project, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **String**| Globally unique identifier for the project, which is used as a filter when retrieving all custom types. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

