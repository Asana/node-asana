# Asana.ProjectMembershipResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | Type of the membership. | [optional] 
**user** | [**CustomFieldResponsePeopleValue**](CustomFieldResponsePeopleValue.md) |  | [optional] 
**project** | [**JobBaseNewProject**](JobBaseNewProject.md) |  | [optional] 
**member** | [**ProjectMembershipResponseMember**](ProjectMembershipResponseMember.md) |  | [optional] 
**write_access** | **String** | Whether the member has full access or comment-only access to the project. | [optional] 
**access_level** | **String** | Whether the member has admin, editor, commenter, or viewer access to the project. | [optional] 

<a name="WriteAccessEnum"></a>
## Enum: WriteAccessEnum

* `full_write` (value: `"full_write"`)
* `comment_only` (value: `"comment_only"`)


<a name="AccessLevelEnum"></a>
## Enum: AccessLevelEnum

* `admin` (value: `"admin"`)
* `editor` (value: `"editor"`)
* `commenter` (value: `"commenter"`)
* `viewer` (value: `"viewer"`)

