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
import {GoalRelationshipRequest} from './GoalRelationshipRequest';

/**
 * The GoalRelationshipsGoalRelationshipGidBody model module.
 * @module model/GoalRelationshipsGoalRelationshipGidBody
 * @version 2.0.5
 */
export class GoalRelationshipsGoalRelationshipGidBody {
  /**
   * Constructs a new <code>GoalRelationshipsGoalRelationshipGidBody</code>.
   * @alias module:model/GoalRelationshipsGoalRelationshipGidBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GoalRelationshipsGoalRelationshipGidBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalRelationshipsGoalRelationshipGidBody} obj Optional instance to populate.
   * @return {module:model/GoalRelationshipsGoalRelationshipGidBody} The populated <code>GoalRelationshipsGoalRelationshipGidBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GoalRelationshipsGoalRelationshipGidBody();
      if (data.hasOwnProperty('data'))
        obj.data = GoalRelationshipRequest.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/GoalRelationshipRequest} data
 */
GoalRelationshipsGoalRelationshipGidBody.prototype.data = undefined;

