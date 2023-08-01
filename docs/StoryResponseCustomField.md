# Asana.StoryResponseCustomField

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**name** | **String** | The name of the custom field. | [optional] 
**resource_subtype** | **String** | The type of the custom field. Must be one of the given values.  | [optional] 
**type** | **String** | *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values.  | [optional] 
**enum_options** | [**[CustomFieldBaseEnumOptions]**](CustomFieldBaseEnumOptions.md) | *Conditional*. Only relevant for custom fields of type &#x60;enum&#x60;. This array specifies the possible values which an &#x60;enum&#x60; custom field can adopt. To modify the enum options, refer to [working with enum options](/reference/createenumoptionforcustomfield). | [optional] 
**enabled** | **Boolean** | *Conditional*. Determines if the custom field is enabled or not. | [optional] 
**is_formula_field** | **Boolean** | *Conditional*. This flag describes whether a custom field is a formula custom field. | [optional] 
**date_value** | [**CustomFieldBaseDateValue**](CustomFieldBaseDateValue.md) |  | [optional] 
**enum_value** | [**CustomFieldBaseEnumValue**](CustomFieldBaseEnumValue.md) |  | [optional] 
**multi_enum_values** | [**[CustomFieldBaseEnumOptions]**](CustomFieldBaseEnumOptions.md) | *Conditional*. Only relevant for custom fields of type &#x60;multi_enum&#x60;. This object is the chosen values of a &#x60;multi_enum&#x60; custom field. | [optional] 
**number_value** | **Number** | *Conditional*. This number is the value of a &#x60;number&#x60; custom field. | [optional] 
**text_value** | **String** | *Conditional*. This string is the value of a &#x60;text&#x60; custom field. | [optional] 
**display_value** | **String** | A string representation for the value of the custom field. Integrations that don&#x27;t require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types. | [optional] 

<a name="ResourceSubtypeEnum"></a>
## Enum: ResourceSubtypeEnum

* `text` (value: `"text"`)
* `_enum` (value: `"enum"`)
* `multi_enum` (value: `"multi_enum"`)
* `_number` (value: `"number"`)
* `_date` (value: `"date"`)
* `people` (value: `"people"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `text` (value: `"text"`)
* `_enum` (value: `"enum"`)
* `multi_enum` (value: `"multi_enum"`)
* `_number` (value: `"number"`)
* `_date` (value: `"date"`)
* `people` (value: `"people"`)

