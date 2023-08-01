/*
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {EnumOptionRequest} from './EnumOptionRequest';

/**
 * The CustomFieldGidEnumOptionsBody model module.
 * @module model/CustomFieldGidEnumOptionsBody
 * @version 2.0.0
 */
export class CustomFieldGidEnumOptionsBody {
  /**
   * Constructs a new <code>CustomFieldGidEnumOptionsBody</code>.
   * @alias module:model/CustomFieldGidEnumOptionsBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CustomFieldGidEnumOptionsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomFieldGidEnumOptionsBody} obj Optional instance to populate.
   * @return {module:model/CustomFieldGidEnumOptionsBody} The populated <code>CustomFieldGidEnumOptionsBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CustomFieldGidEnumOptionsBody();
      if (data.hasOwnProperty('data'))
        obj.data = EnumOptionRequest.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/EnumOptionRequest} data
 */
CustomFieldGidEnumOptionsBody.prototype.data = undefined;

