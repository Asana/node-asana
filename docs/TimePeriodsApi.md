# Asana.TimePeriodsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTimePeriod**](TimePeriodsApi.md#getTimePeriod) | **GET** /time_periods/{time_period_gid} | Get a time period
[**getTimePeriods**](TimePeriodsApi.md#getTimePeriods) | **GET** /time_periods | Get time periods

<a name="getTimePeriod"></a>
# **getTimePeriod**
> TimePeriodResponseData getTimePeriod(time_period_gid, opts)

Get a time period

Returns the full record for a single time period.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TimePeriodsApi();
let time_period_gid = "917392"; // String | Globally unique identifier for the time period.
let opts = { 
    'opt_fields': ["display_name","end_on","parent","parent.display_name","parent.end_on","parent.period","parent.start_on","period","start_on"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getTimePeriod(time_period_gid, opts, (error, data, response) => {
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
 **time_period_gid** | **String**| Globally unique identifier for the time period. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TimePeriodResponseData**](TimePeriodResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTimePeriods"></a>
# **getTimePeriods**
> TimePeriodResponseArray getTimePeriods(workspace, opts)

Get time periods

Returns compact time period records.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.TimePeriodsApi();
let workspace = "31326"; // String | Globally unique identifier for the workspace.
let opts = { 
    'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    'start_on': new Date("2019-09-15"), // Date | ISO 8601 date string
    'end_on': new Date("2019-09-15"), // Date | ISO 8601 date string
    'opt_fields': ["display_name","end_on","offset","parent","parent.display_name","parent.end_on","parent.period","parent.start_on","path","period","start_on","uri"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getTimePeriods(workspace, opts, (error, data, response) => {
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
 **workspace** | **String**| Globally unique identifier for the workspace. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **start_on** | **Date**| ISO 8601 date string | [optional] 
 **end_on** | **Date**| ISO 8601 date string | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**TimePeriodResponseArray**](TimePeriodResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

