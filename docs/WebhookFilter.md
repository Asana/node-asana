# Asana.WebhookFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_type** | **String** | The type of the resource which created the event when modified; for example, to filter to changes on regular tasks this field should be set to &#x60;task&#x60;. | [optional] 
**resource_subtype** | **String** | The resource subtype of the resource that the filter applies to. This should be set to the same value as is returned on the &#x60;resource_subtype&#x60; field on the resources themselves. | [optional] 
**action** | **String** | The type of change on the **resource** to pass through the filter. For more information refer to &#x60;Event.action&#x60; in the [event](/reference/events) schema. This can be one of &#x60;changed&#x60;, &#x60;added&#x60;, &#x60;removed&#x60;, &#x60;deleted&#x60;, and &#x60;undeleted&#x60; depending on the nature of what has occurred on the resource. | [optional] 
**fields** | **[String]** | *Conditional.* A whitelist of fields for events which will pass the filter when the resource is changed. These can be any combination of the fields on the resources themselves. This field is only valid for &#x60;action&#x60; of type &#x60;changed&#x60; | [optional] 
