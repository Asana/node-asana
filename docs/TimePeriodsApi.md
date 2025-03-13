# Asana.TimePeriodsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTimePeriod**](TimePeriodsApi.md#getTimePeriod) | **GET** /time_periods/{time_period_gid} | Get a time period
[**getTimePeriods**](TimePeriodsApi.md#getTimePeriods) | **GET** /time_periods | Get time periods

<a name="getTimePeriod"></a>
# **getTimePeriod**

Get a time period

Returns the full record for a single time period.

([more information](https://developers.asana.com/reference/gettimeperiod))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timePeriodsApiInstance = new Asana.TimePeriodsApi();
let time_period_gid = "917392"; // String | Globally unique identifier for the time period.
let opts = { 
    'opt_fields': "display_name,end_on,parent,parent.display_name,parent.end_on,parent.period,parent.start_on,period,start_on"
};
timePeriodsApiInstance.getTimePeriod(time_period_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **time_period_gid** | **String**| Globally unique identifier for the time period. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getTimePeriods"></a>
# **getTimePeriods**

Get time periods

Returns compact time period records.

([more information](https://developers.asana.com/reference/gettimeperiods))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let timePeriodsApiInstance = new Asana.TimePeriodsApi();
let workspace = "31326"; // String | Globally unique identifier for the workspace.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'start_on': "2019-09-15", 
    'end_on': "2019-09-15", 
    'opt_fields': "display_name,end_on,offset,parent,parent.display_name,parent.end_on,parent.period,parent.start_on,path,period,start_on,uri"
};
timePeriodsApiInstance.getTimePeriods(workspace, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **String**| Globally unique identifier for the workspace. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **start_on** | **Date**| ISO 8601 date string | [optional] 
 **end_on** | **Date**| ISO 8601 date string | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

