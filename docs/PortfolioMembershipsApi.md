# Asana.PortfolioMembershipsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPortfolioMembership**](PortfolioMembershipsApi.md#getPortfolioMembership) | **GET** /portfolio_memberships/{portfolio_membership_gid} | Get a portfolio membership
[**getPortfolioMemberships**](PortfolioMembershipsApi.md#getPortfolioMemberships) | **GET** /portfolio_memberships | Get multiple portfolio memberships
[**getPortfolioMembershipsForPortfolio**](PortfolioMembershipsApi.md#getPortfolioMembershipsForPortfolio) | **GET** /portfolios/{portfolio_gid}/portfolio_memberships | Get memberships from a portfolio

<a name="getPortfolioMembership"></a>
# **getPortfolioMembership**

Get a portfolio membership

Returns the complete portfolio record for a single portfolio membership.

([more information](https://developers.asana.com/reference/getportfoliomembership))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let portfolioMembershipsApiInstance = new Asana.PortfolioMembershipsApi();
let portfolio_membership_gid = "1331"; // String | 
let opts = { 
    'opt_fields': "portfolio,portfolio.name,user,user.name"
};
portfolioMembershipsApiInstance.getPortfolioMembership(portfolio_membership_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_membership_gid** | **String**|  | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getPortfolioMemberships"></a>
# **getPortfolioMemberships**

Get multiple portfolio memberships

Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.

([more information](https://developers.asana.com/reference/getportfoliomemberships))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let portfolioMembershipsApiInstance = new Asana.PortfolioMembershipsApi();
let opts = { 
    'portfolio': "12345", 
    'workspace': "12345", 
    'user': "me", 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "offset,path,portfolio,portfolio.name,uri,user,user.name"
};
portfolioMembershipsApiInstance.getPortfolioMemberships(opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio** | **String**| The portfolio to filter results on. | [optional] 
 **workspace** | **String**| The workspace to filter results on. | [optional] 
 **user** | **String**| A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getPortfolioMembershipsForPortfolio"></a>
# **getPortfolioMembershipsForPortfolio**

Get memberships from a portfolio

Returns the compact portfolio membership records for the portfolio.

([more information](https://developers.asana.com/reference/getportfoliomembershipsforportfolio))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let portfolioMembershipsApiInstance = new Asana.PortfolioMembershipsApi();
let portfolio_gid = "12345"; // String | Globally unique identifier for the portfolio.
let opts = { 
    'user': "me", 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "offset,path,portfolio,portfolio.name,uri,user,user.name"
};
portfolioMembershipsApiInstance.getPortfolioMembershipsForPortfolio(portfolio_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_gid** | **String**| Globally unique identifier for the portfolio. | 
 **user** | **String**| A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user. | [optional] 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

