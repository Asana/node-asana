# Asana.ProjectTemplateBase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**name** | **String** | Name of the project template. | [optional] 
**description** | **String** | Free-form textual information associated with the project template | [optional] 
**html_description** | **String** | The description of the project template with formatting as HTML. | [optional] 
**_public** | **Boolean** | True if the project template is public to its team. | [optional] 
**owner** | **AllOfProjectTemplateBaseOwner** | The current owner of the project template, may be null. | [optional] 
**team** | [**ProjectTemplateBaseTeam**](ProjectTemplateBaseTeam.md) |  | [optional] 
**requested_dates** | [**[ProjectTemplateBaseRequestedDates]**](ProjectTemplateBaseRequestedDates.md) | Array of date variables in this project template. Calendar dates must be provided for these variables when instantiating a project. | [optional] 
**color** | **String** | Color of the project template. | [optional] 
**requested_roles** | [**[ProjectTemplateBaseRequestedRoles]**](ProjectTemplateBaseRequestedRoles.md) | Array of template roles in this project template. User Ids can be provided for these variables when instantiating a project to assign template tasks to the user. | [optional] 

<a name="ColorEnum"></a>
## Enum: ColorEnum

* `dark_pink` (value: `"dark-pink"`)
* `dark_green` (value: `"dark-green"`)
* `dark_blue` (value: `"dark-blue"`)
* `dark_red` (value: `"dark-red"`)
* `dark_teal` (value: `"dark-teal"`)
* `dark_brown` (value: `"dark-brown"`)
* `dark_orange` (value: `"dark-orange"`)
* `dark_purple` (value: `"dark-purple"`)
* `dark_warm_gray` (value: `"dark-warm-gray"`)
* `light_pink` (value: `"light-pink"`)
* `light_green` (value: `"light-green"`)
* `light_blue` (value: `"light-blue"`)
* `light_red` (value: `"light-red"`)
* `light_teal` (value: `"light-teal"`)
* `light_brown` (value: `"light-brown"`)
* `light_orange` (value: `"light-orange"`)
* `light_purple` (value: `"light-purple"`)
* `light_warm_gray` (value: `"light-warm-gray"`)
* `_null` (value: `"null"`)

