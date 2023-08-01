# Asana.StatusUpdateResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**title** | **String** | The title of the status update. | [optional] 
**resource_subtype** | **String** | The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The &#x60;resource_subtype&#x60;s for &#x60;status&#x60; objects represent the type of their parent. | [optional] 
**text** | **String** | The text content of the status update. | 
**html_text** | **String** | [Opt In](/docs/inputoutput-options). The text content of the status update with formatting as HTML. | [optional] 
**status_type** | **String** | The type associated with the status update. This represents the current state of the object this object is on. | 
**author** | [**CustomFieldResponsePeopleValue**](CustomFieldResponsePeopleValue.md) |  | [optional] 
**created_at** | **Date** | The time at which this resource was created. | [optional] 
**created_by** | [**CustomFieldResponsePeopleValue**](CustomFieldResponsePeopleValue.md) |  | [optional] 
**hearted** | **Boolean** | *Deprecated - please use liked instead* True if the status is hearted by the authorized user, false if not. | [optional] 
**hearts** | [**[GoalResponseLikes]**](GoalResponseLikes.md) | *Deprecated - please use likes instead* Array of likes for users who have hearted this status. | [optional] 
**liked** | **Boolean** | True if the status is liked by the authorized user, false if not. | [optional] 
**likes** | [**[GoalResponseLikes]**](GoalResponseLikes.md) | Array of likes for users who have liked this status. | [optional] 
**modified_at** | **Date** | The time at which this project status was last modified. *Note: This does not currently reflect any changes in associations such as comments that may have been added or removed from the status.* | [optional] 
**num_hearts** | **Number** | *Deprecated - please use likes instead* The number of users who have hearted this status. | [optional] 
**num_likes** | **Number** | The number of users who have liked this status. | [optional] 
**parent** | [**StatusUpdateResponseParent**](StatusUpdateResponseParent.md) |  | [optional] 

<a name="ResourceSubtypeEnum"></a>
## Enum: ResourceSubtypeEnum

* `project_status_update` (value: `"project_status_update"`)
* `portfolio_status_update` (value: `"portfolio_status_update"`)
* `goal_status_update` (value: `"goal_status_update"`)


<a name="StatusTypeEnum"></a>
## Enum: StatusTypeEnum

* `on_track` (value: `"on_track"`)
* `at_risk` (value: `"at_risk"`)
* `off_track` (value: `"off_track"`)
* `on_hold` (value: `"on_hold"`)
* `complete` (value: `"complete"`)
* `achieved` (value: `"achieved"`)
* `partial` (value: `"partial"`)
* `missed` (value: `"missed"`)
* `dropped` (value: `"dropped"`)

