var CustomFields = require('./gen/custom_fields');

/**
 * This is for compatibility reasons. Please use createEnumOption.
 */
CustomFields.prototype.addEnumOption = CustomFields.prototype.createEnumOption;

/**
 * This is for compatibility reasons. Please use createEnumOption.
 */
CustomFields.prototype.reorderEnumOption =
    CustomFields.prototype.insertEnumOption;

module.exports = CustomFields;
