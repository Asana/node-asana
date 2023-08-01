# Asana.WebhookCompact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**active** | **Boolean** | If true, the webhook will send events - if false it is considered inactive and will not generate events. | [optional] 
**resource** | [**WebhookCompactResource**](WebhookCompactResource.md) |  | [optional] 
**target** | **String** | The URL to receive the HTTP POST. | [optional] 
