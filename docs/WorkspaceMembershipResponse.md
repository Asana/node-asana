# Asana.WorkspaceMembershipResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**user** | [**CustomFieldResponsePeopleValue**](CustomFieldResponsePeopleValue.md) |  | [optional] 
**workspace** | [**GoalResponseWorkspace**](GoalResponseWorkspace.md) |  | [optional] 
**user_task_list** | [**WorkspaceMembershipResponseUserTaskList**](WorkspaceMembershipResponseUserTaskList.md) |  | [optional] 
**is_active** | **Boolean** | Reflects if this user still a member of the workspace. | [optional] 
**is_admin** | **Boolean** | Reflects if this user is an admin of the workspace. | [optional] 
**is_guest** | **Boolean** | Reflects if this user is a guest of the workspace. | [optional] 
**vacation_dates** | [**WorkspaceMembershipResponseVacationDates**](WorkspaceMembershipResponseVacationDates.md) |  | [optional] 
**created_at** | **Date** | The time at which this resource was created. | [optional] 
