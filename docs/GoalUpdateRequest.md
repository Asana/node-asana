# Asana.GoalUpdateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**name** | **String** | The name of the goal. | [optional] 
**html_notes** | **String** | The notes of the goal with formatting as HTML. | [optional] 
**notes** | **String** | Free-form textual information associated with the goal (i.e. its description). | [optional] 
**due_on** | **String** | The localized day on which this goal is due. This takes a date with format &#x60;YYYY-MM-DD&#x60;. | [optional] 
**start_on** | **String** | The day on which work for this goal begins, or null if the goal has no start date. This takes a date with &#x60;YYYY-MM-DD&#x60; format, and cannot be set unless there is an accompanying due date. | [optional] 
**is_workspace_level** | **Boolean** | *Conditional*. This property is only present when the &#x60;workspace&#x60; provided is an organization. Whether the goal belongs to the &#x60;workspace&#x60; (and is listed as part of the workspace’s goals) or not. If it isn’t a workspace-level goal, it is a team-level goal, and is associated with the goal’s team. | [optional] 
**liked** | **Boolean** | True if the goal is liked by the authorized user, false if not. | [optional] 
**team** | **String** | *Conditional*. This property is only present when the &#x60;workspace&#x60; provided is an organization. | [optional] 
**workspace** | **String** | The &#x60;gid&#x60; of a workspace. | [optional] 
**time_period** | **String** | The &#x60;gid&#x60; of a time period. | [optional] 
**owner** | **String** | The &#x60;gid&#x60; of a user. | [optional] 
**status** | **String** | The current status of this goal. When the goal is open, its status can be &#x60;green&#x60;, &#x60;yellow&#x60;, and &#x60;red&#x60; to reflect \&quot;On Track\&quot;, \&quot;At Risk\&quot;, and \&quot;Off Track\&quot;, respectively. When the goal is closed, the value can be &#x60;missed&#x60;, &#x60;achieved&#x60;, &#x60;partial&#x60;, or &#x60;dropped&#x60;. *Note* you can only write to this property if &#x60;metric&#x60; is set. | [optional] 
