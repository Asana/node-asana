# Asana.TimePeriodCompact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**end_on** | **String** | The localized end date of the time period in &#x60;YYYY-MM-DD&#x60; format. | [optional] 
**start_on** | **String** | The localized start date of the time period in &#x60;YYYY-MM-DD&#x60; format. | [optional] 
**period** | **String** | The cadence and index of the time period. The value is one of: &#x60;FY&#x60;, &#x60;H1&#x60;, &#x60;H2&#x60;, &#x60;Q1&#x60;, &#x60;Q2&#x60;, &#x60;Q3&#x60;, or &#x60;Q4&#x60;. | [optional] 
**display_name** | **String** | A string representing the cadence code and the fiscal year. | [optional] 

<a name="PeriodEnum"></a>
## Enum: PeriodEnum

* `FY` (value: `"FY"`)
* `H1` (value: `"H1"`)
* `H2` (value: `"H2"`)
* `Q1` (value: `"Q1"`)
* `Q2` (value: `"Q2"`)
* `Q3` (value: `"Q3"`)
* `Q4` (value: `"Q4"`)

