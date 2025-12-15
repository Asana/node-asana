# Asana.RatesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRate**](RatesApi.md#createRate) | **POST** /rates | Create a rate
[**deleteRate**](RatesApi.md#deleteRate) | **DELETE** /rates/{rate_gid} | Delete a rate
[**getRate**](RatesApi.md#getRate) | **GET** /rates/{rate_gid} | Get a rate
[**getRates**](RatesApi.md#getRates) | **GET** /rates | Get multiple rates
[**updateRate**](RatesApi.md#updateRate) | **PUT** /rates/{rate_gid} | Update a rate

<a name="createRate"></a>
# **createRate**

Create a rate

Creates a new rate for a `parent` + `resource` combination.

([more information](https://developers.asana.com/reference/createrate))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let ratesApiInstance = new Asana.RatesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The rate to create.
let opts = { 
    'opt_fields': "created_by,created_by.name,currency_code,parent,parent.name,rate,resource,resource.name"
};
ratesApiInstance.createRate(body, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The rate to create. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteRate"></a>
# **deleteRate**

Delete a rate

Deletes a rate.

([more information](https://developers.asana.com/reference/deleterate))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let ratesApiInstance = new Asana.RatesApi(client);
let rate_gid = "12345"; // String | Globally unique identifier for the rate.

ratesApiInstance.deleteRate(rate_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rate_gid** | **String**| Globally unique identifier for the rate. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getRate"></a>
# **getRate**

Get a rate

Returns the complete rate record for a single rate.

([more information](https://developers.asana.com/reference/getrate))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let ratesApiInstance = new Asana.RatesApi(client);
let rate_gid = "12345"; // String | Globally unique identifier for the rate.
let opts = { 
    'opt_fields': "created_by,created_by.name,currency_code,parent,parent.name,rate,resource,resource.name"
};
ratesApiInstance.getRate(rate_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rate_gid** | **String**| Globally unique identifier for the rate. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getRates"></a>
# **getRates**

Get multiple rates

Returns a list of `rate` records. The possible types for `parent` in this request are `project`. An additional `resource` (`user` GID or `placeholder` GID) can be passed in to filter to a specific rate.  Modifying placeholder rates is only available for Enterprise and Enterprise+ users.

([more information](https://developers.asana.com/reference/getrates))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let ratesApiInstance = new Asana.RatesApi(client);
let opts = { 
    'parent': "159874", 
    'resource': "1061493", 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "offset,path,uri"
};
ratesApiInstance.getRates(opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **String**| Globally unique identifier for &#x60;project&#x60;. | [optional] 
 **resource** | **String**| Globally unique identifier for &#x60;user&#x60; or &#x60;placeholder&#x60;. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateRate"></a>
# **updateRate**

Update a rate

An existing rate can be updated by making a PUT request on the URL for that rate. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged. (note that at this time, the only field that can be updated is the `rate` field.)  Returns the complete updated rate record.

([more information](https://developers.asana.com/reference/updaterate))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let ratesApiInstance = new Asana.RatesApi(client);
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The updated fields for the rate.
let rate_gid = "12345"; // String | Globally unique identifier for the rate.
let opts = { 
    'opt_fields': "created_by,created_by.name,currency_code,parent,parent.name,rate,resource,resource.name"
};
ratesApiInstance.updateRate(body, rate_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The updated fields for the rate. | 
 **rate_gid** | **String**| Globally unique identifier for the rate. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

