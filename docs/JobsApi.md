# Asana.JobsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJob**](JobsApi.md#getJob) | **GET** /jobs/{job_gid} | Get a job by id

<a name="getJob"></a>
# **getJob**

Get a job by id

Returns the full record for a job.

([more information](https://developers.asana.com/reference/getjob))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let jobsApiInstance = new Asana.JobsApi();
let job_gid = "12345"; // String | Globally unique identifier for the job.
let opts = { 
    'opt_fields': "new_graph_export,new_graph_export.completed_at,new_graph_export.created_at,new_graph_export.download_url,new_project,new_project.name,new_project_template,new_project_template.name,new_task,new_task.created_by,new_task.name,new_task.resource_subtype,resource_subtype,status"
};
jobsApiInstance.getJob(job_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_gid** | **String**| Globally unique identifier for the job. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

