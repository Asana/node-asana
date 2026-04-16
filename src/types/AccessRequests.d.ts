import { User } from "./User";
import { ResourceObject } from "./objects";

interface AccessRequest extends ResourceObject {
  /**
   * The base type of this resource.
   */
  resource_type: "access_request";
  /**
   * The message included in the access request, if any.
   */
  message: string;
  /**
   * The current approval status of the request.
   * - approved
   * - denied
   * - pending
   */
  approval_status: "approved" | "denied" | "pending";
  /**
   * A user object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
   */
  requester: User;
}
