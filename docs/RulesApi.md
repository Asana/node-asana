# Asana.RulesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**triggerRule**](RulesApi.md#triggerRule) | **POST** /rule_triggers/{rule_trigger_gid}/run | Trigger a rule

<a name="triggerRule"></a>
# **triggerRule**

Trigger a rule

Trigger a rule which uses an [\"incoming web request\"](/docs/incoming-web-requests) trigger.

([more information](https://developers.asana.com/reference/triggerrule))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let rulesApiInstance = new Asana.RulesApi();
let body = {"data": {"param1": "value1", "param2": "value2",}}; // Object | A dictionary of variables accessible from within the rule.
let rule_trigger_gid = "12345"; // String | The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.

rulesApiInstance.triggerRule(body, rule_trigger_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| A dictionary of variables accessible from within the rule. | 
 **rule_trigger_gid** | **String**| The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

