# Asana.AuditLogEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the &#x60;AuditLogEvent&#x60;, as a string. | [optional] 
**created_at** | **Date** | The time the event was created. | [optional] 
**event_type** | **String** | The type of the event. | [optional] 
**event_category** | **String** | The category that this &#x60;event_type&#x60; belongs to. | [optional] 
**actor** | [**AuditLogEventActor**](AuditLogEventActor.md) |  | [optional] 
**resource** | [**AuditLogEventResource**](AuditLogEventResource.md) |  | [optional] 
**details** | **Object** | Event specific details. The schema will vary depending on the &#x60;event_type&#x60;. | [optional] 
**context** | [**AuditLogEventContext**](AuditLogEventContext.md) |  | [optional] 
