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

/**
 * The EmptyResponse model module.
 * @module model/EmptyResponse
 * @version 2.0.0
 */
export class EmptyResponse {
  /**
   * Constructs a new <code>EmptyResponse</code>.
   * An empty object. Some endpoints do not return an object on success. The success is conveyed through a 2-- status code and returning an empty object.
   * @alias module:model/EmptyResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EmptyResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmptyResponse} obj Optional instance to populate.
   * @return {module:model/EmptyResponse} The populated <code>EmptyResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmptyResponse();
    }
    return obj;
  }
}
