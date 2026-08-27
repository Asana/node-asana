# Asana.AIStudioUsageAPIApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAiStudioRuns**](AIStudioUsageAPIApi.md#getAiStudioRuns) | **GET** /workspaces/{workspace_gid}/ai_studio/runs | Get AI Studio credit utilization
[**getAiStudioSeats**](AIStudioUsageAPIApi.md#getAiStudioSeats) | **GET** /workspaces/{workspace_gid}/ai_studio/seats | Get AI Studio seats

<a name="getAiStudioRuns"></a>
# **getAiStudioRuns**

Get AI Studio credit utilization

Returns one row per AI Studio run (rule execution) for the workspace, in ascending order (oldest first) so that incremental consumers can poll forward. Each row describes what ran, who it is attributed to, the model used, and the credits consumed.  Credit data is available from January 8th, 2025 onward, and is queryable for the full history since then (there is no limit on how far back you can query). A `start_at` earlier than January 8th, 2025 is silently clamped; it is not an error.  The list is always [paginated](/docs/pagination). When more results exist, the response includes a `next_page` with an `offset` that can be used to retrieve the next set of rows. The row `gid` is stable and can be used to de-duplicate rows across incremental loads.  This endpoint is restricted to [service accounts](https://help.asana.com/s/article/service-accounts) in organizations licensed for AI Studio.

([more information](https://developers.asana.com/reference/getaistudioruns))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let aiStudioUsageApiApiInstance = new Asana.AIStudioUsageAPIApi(client);
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
    'start_at': "2013-10-20T19:20:30+01:00", 
    'end_at': "2013-10-20T19:20:30+01:00", 
    'division_gid': "division_gid_example", 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
};
aiStudioUsageApiApiInstance.getAiStudioRuns(workspace_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_gid** | **String**| Globally unique identifier for the workspace or organization. | 
 **start_at** | **Date**| Inclusive lower bound. Runs are ordered and filtered by when their usage was recorded (the monotonic timestamp used for incremental polling), not by &#x60;run_started_at&#x60;. Omitted ⇒ the 2025-01-08 floor — no credit data exists before then, and there is no limit on how far back you can query. A value earlier than 2025-01-08 is treated as 2025-01-08 (not rejected), matching the audit log. | [optional] 
 **end_at** | **Date**| Filter to runs whose usage was recorded before this time (exclusive) — by when the run&#x27;s credit usage was recorded, not by &#x60;run_started_at&#x60;. Defaults to the time of the request. | [optional] 
 **division_gid** | **String**| Scope results to a single division (its gid). Omitted ⇒ the org&#x27;s first licensed division. Use this to retrieve only one division&#x27;s slice (e.g. for a division-level admin or billing owner) rather than the whole organization. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getAiStudioSeats"></a>
# **getAiStudioSeats**

Get AI Studio seats

Returns a current snapshot of AI Studio seat allocations for the workspace — who has access, at what license tier, and the state of each seat. This is a point-in-time snapshot; customers build their own history tables on top of periodic pulls.  The list is always [paginated](/docs/pagination). When more results exist, the response includes a `next_page` with an `offset` that can be used to retrieve the next set of rows.  This endpoint is restricted to [service accounts](https://help.asana.com/s/article/service-accounts) in organizations licensed for AI Studio.

([more information](https://developers.asana.com/reference/getaistudioseats))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let aiStudioUsageApiApiInstance = new Asana.AIStudioUsageAPIApi(client);
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
    'state': "state_example", 
    'division_gid': "division_gid_example", 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
};
aiStudioUsageApiApiInstance.getAiStudioSeats(workspace_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_gid** | **String**| Globally unique identifier for the workspace or organization. | 
 **state** | **String**| Filter seats to this state. | [optional] 
 **division_gid** | **String**| Scope results to a single division (its gid). Omitted ⇒ the org&#x27;s first licensed division. Use this to retrieve only one division&#x27;s slice (e.g. for a division-level admin or billing owner) rather than the whole organization. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

