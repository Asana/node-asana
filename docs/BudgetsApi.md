# Asana.BudgetsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBudget**](BudgetsApi.md#createBudget) | **POST** /budgets | Create a budget
[**deleteBudget**](BudgetsApi.md#deleteBudget) | **DELETE** /budgets/{budget_gid} | Delete a budget
[**getBudget**](BudgetsApi.md#getBudget) | **GET** /budgets/{budget_gid} | Get a budget
[**getBudgets**](BudgetsApi.md#getBudgets) | **GET** /budgets | Get all budgets
[**updateBudget**](BudgetsApi.md#updateBudget) | **PUT** /budgets/{budget_gid} | Update a budget

<a name="createBudget"></a>
# **createBudget**

Create a budget

Creates a new budget.

([more information](https://developers.asana.com/reference/createbudget))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let budgetsApiInstance = new Asana.BudgetsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The budget to create.

budgetsApiInstance.createBudget(body).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The budget to create. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteBudget"></a>
# **deleteBudget**

Delete a budget

A specific, existing budget can be deleted by making a DELETE request on the URL for that budget.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deletebudget))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let budgetsApiInstance = new Asana.BudgetsApi();
let budget_gid = "12345"; // String | Globally unique identifier for the budget.

budgetsApiInstance.deleteBudget(budget_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budget_gid** | **String**| Globally unique identifier for the budget. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getBudget"></a>
# **getBudget**

Get a budget

Returns the complete budget record for a single budget.

([more information](https://developers.asana.com/reference/getbudget))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let budgetsApiInstance = new Asana.BudgetsApi();
let budget_gid = "12345"; // String | Globally unique identifier for the budget.
let opts = { 
    'opt_fields': "actual,actual.billable_status_filter,actual.units,actual.value,budget_type,estimate,estimate.billable_status_filter,estimate.enabled,estimate.source,estimate.units,estimate.value,parent,parent.name,total,total.enabled,total.units,total.value"
};
budgetsApiInstance.getBudget(budget_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budget_gid** | **String**| Globally unique identifier for the budget. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getBudgets"></a>
# **getBudgets**

Get all budgets

Gets all budgets for a given *parent*. This will at most return a list of size 1 for a given *parent*.

([more information](https://developers.asana.com/reference/getbudgets))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let budgetsApiInstance = new Asana.BudgetsApi();
let parent = "1331"; // String | Globally unique identifier for the budget's parent object. This currently can only be a `project`.

budgetsApiInstance.getBudgets(parent).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **String**| Globally unique identifier for the budget&#x27;s parent object. This currently can only be a &#x60;project&#x60;. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateBudget"></a>
# **updateBudget**

Update a budget

An existing budget can be updated by making a PUT request on the URL for that budget. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.

([more information](https://developers.asana.com/reference/updatebudget))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let budgetsApiInstance = new Asana.BudgetsApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The budget to update.
let budget_gid = "12345"; // String | Globally unique identifier for the budget.
let opts = { 
    'opt_fields': "actual,actual.billable_status_filter,actual.units,actual.value,budget_type,estimate,estimate.billable_status_filter,estimate.enabled,estimate.source,estimate.units,estimate.value,parent,parent.name,total,total.enabled,total.units,total.value"
};
budgetsApiInstance.updateBudget(body, budget_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The budget to update. | 
 **budget_gid** | **String**| Globally unique identifier for the budget. | 
 **opt_fields** | **Object**| This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

