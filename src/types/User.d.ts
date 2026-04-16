import { ResourceObject } from "./objects";

export interface User extends ResourceObject {
  /**
   * The base type of this resource.
   */
  resource_type: "user";
  name: string;
}
