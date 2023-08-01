# Asana.ProjectDuplicateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the new project. | 
**team** | **String** | Sets the team of the new project. If team is not defined, the new project will be in the same team as the the original project. | [optional] 
**include** | **String** | A comma-separated list of elements that will be duplicated to the new project. Tasks are always included. ##### Fields - forms - members - notes - task_assignee - task_attachments - task_dates - task_dependencies - task_followers - task_notes - task_projects - task_subtasks - task_tags | [optional] 
**schedule_dates** | [**ProjectDuplicateRequestScheduleDates**](ProjectDuplicateRequestScheduleDates.md) |  | [optional] 
