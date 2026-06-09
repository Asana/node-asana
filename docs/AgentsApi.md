# Asana.AgentsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAgent**](AgentsApi.md#getAgent) | **GET** /agents/{agent_gid} | Get an agent
[**getAgentsForWorkspace**](AgentsApi.md#getAgentsForWorkspace) | **GET** /workspaces/{workspace_gid}/agents | Get a list of agents in a workspace

<a name="getAgent"></a>
# **getAgent**

Get an agent

Returns the complete record for a single agent (AI Teammate).

([more information](https://developers.asana.com/reference/getagent))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let agentsApiInstance = new Asana.AgentsApi(client);
let agent_gid = "12345"; // String | Globally unique identifier for the agent.
let opts = { 
    'opt_fields': "behavior_guidance,description,name,photo,photo.image_1024x1024,photo.image_128x128,photo.image_21x21,photo.image_27x27,photo.image_36x36,photo.image_60x60,resource_subtype,workspace"
};
agentsApiInstance.getAgent(agent_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agent_gid** | **String**| Globally unique identifier for the agent. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getAgentsForWorkspace"></a>
# **getAgentsForWorkspace**

Get a list of agents in a workspace

Returns the compact records of agents (AI Teammates) configured. Use `opt_fields` to request additional fields in the workspace.

([more information](https://developers.asana.com/reference/getagentsforworkspace))

### Example
```javascript
const Asana = require('asana');

let client = new Asana.ApiClient();
client.authentications.token.accessToken = '<YOUR_ACCESS_TOKEN>';

let agentsApiInstance = new Asana.AgentsApi(client);
let workspace_gid = "12345"; // String | Globally unique identifier for the workspace or organization.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "behavior_guidance,description,name,offset,path,photo,photo.image_1024x1024,photo.image_128x128,photo.image_21x21,photo.image_27x27,photo.image_36x36,photo.image_60x60,resource_subtype,uri,workspace"
};
agentsApiInstance.getAgentsForWorkspace(workspace_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_gid** | **String**| Globally unique identifier for the workspace or organization. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

