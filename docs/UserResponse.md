# Asana.UserResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**name** | **String** | *Read-only except when same user as requester*. The user’s name. | [optional] 
**email** | **String** | The user&#x27;s email address. | [optional] 
**photo** | [**UserBaseResponsePhoto**](UserBaseResponsePhoto.md) |  | [optional] 
**workspaces** | [**[GoalResponseWorkspace]**](GoalResponseWorkspace.md) | Workspaces and organizations this user may access. Note\\: The API will only return workspaces and organizations that also contain the authenticated user. | [optional] 
