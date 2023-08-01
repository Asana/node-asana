# Asana.StoryRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**created_at** | **Date** | The time at which this resource was created. | [optional] 
**resource_subtype** | **String** | The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. | [optional] 
**text** | **String** | The plain text of the comment to add. Cannot be used with html_text. | [optional] 
**html_text** | **String** | [Opt In](/docs/inputoutput-options). HTML formatted text for a comment. This will not include the name of the creator. | [optional] 
**is_pinned** | **Boolean** | *Conditional*. Whether the story should be pinned on the resource. | [optional] 
**sticker_name** | **String** | The name of the sticker in this story. &#x60;null&#x60; if there is no sticker. | [optional] 

<a name="StickerNameEnum"></a>
## Enum: StickerNameEnum

* `green_checkmark` (value: `"green_checkmark"`)
* `people_dancing` (value: `"people_dancing"`)
* `dancing_unicorn` (value: `"dancing_unicorn"`)
* `heart` (value: `"heart"`)
* `party_popper` (value: `"party_popper"`)
* `people_waving_flags` (value: `"people_waving_flags"`)
* `splashing_narwhal` (value: `"splashing_narwhal"`)
* `trophy` (value: `"trophy"`)
* `yeti_riding_unicorn` (value: `"yeti_riding_unicorn"`)
* `celebrating_people` (value: `"celebrating_people"`)
* `determined_climbers` (value: `"determined_climbers"`)
* `phoenix_spreading_love` (value: `"phoenix_spreading_love"`)

