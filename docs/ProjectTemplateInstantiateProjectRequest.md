# Asana.ProjectTemplateInstantiateProjectRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the new project. | 
**team** | **String** | *Optional*. Sets the team of the new project. If the project template exists in an _organization_, you may specify a value for &#x60;team&#x60;. If no value is provided then it defaults to the same team as the project template. | [optional] 
**_public** | **Boolean** | Sets the project to public to its team. | [optional] 
**is_strict** | **Boolean** | *Optional*. If set to &#x60;true&#x60;, the endpoint returns an \&quot;Unprocessable Entity\&quot; error if you fail to provide a calendar date value for any date variable. If set to &#x60;false&#x60;, a default date is used for each unfulfilled date variable (e.g., the current date is used as the Start Date of a project). | [optional] 
**requested_dates** | [**[ProjectTemplateInstantiateProjectRequestRequestedDates]**](ProjectTemplateInstantiateProjectRequestRequestedDates.md) | Array of mappings of date variables to calendar dates. | [optional] 
**requested_roles** | [**[ProjectTemplateInstantiateProjectRequestRequestedRoles]**](ProjectTemplateInstantiateProjectRequestRequestedRoles.md) | Array of mappings of template roles to user ids | [optional] 
