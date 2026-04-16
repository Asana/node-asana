import { ApiClient } from "../ApiClient";
import Collection = require("../utils/collection");

export interface ResourceObject {
  /**
   * Globally unique identifier of the resource, as a string.
   */
  gid: string;
  /**
   * The base type of this resource.
   */
  resource_type: "user" | "project" | "access_request";
}

interface ApiRequestData {
  path: string;
  httpMethod: string;
  pathParams: { [key: string]: any };
  queryParams: { [key: string]: any };
  headerParams: { [key: string]: any };
  formParams: { [key: string]: any };
  bodyParam: any;
  authNames: string[];
  contentTypes: string[];
  accepts: string[];
  returnType: any;
}
export interface ApiResponse<Type> {
  data: Type;
  _response?: {
    data: Type;
    next_page: {
      offset: string;
      path: string;
      uri: string;
    };
  };

  errors: {
    message: string;
    help: string;
    phrase: string;
  }[];

  _apiClient: ApiClient;
  _apiRequestData: ApiRequestData;
}
export class ClassApiResponse<Type> implements ApiResponse<Type> {
  /**
   * Create a Collection object from a response containing a list of resources.
   * @param response_and_data The response and data from the API call.
   * @param apiClient The API client instance.
   * @param apiRequestData The request data used.
   */
  constructor(
    response_and_data: { response: any; data: any },
    apiClient: ApiClient,
    apiRequestData: ApiRequestData,
  );

  /**
   * @deprecated
   * Transforms a Promise of a raw response into a Promise for a Collection.
   * @param promise The promise to transform.
   * @param apiClient The API client instance.
   * @param apiRequestData The request data.
   * @returns A Promise that resolves to a Collection.
   */
  static fromApiClient(
    promise: Promise<{ response: any; data: any }>,
    apiClient: ApiClient,
    apiRequestData: ApiRequestData,
  ): Promise<Collection>;

  /**
   * @deprecated
   * Check if a response is a collection response.
   * @param responseData The response data to check.
   * @returns True if the response is a collection.
   */
  static isCollectionResponse(responseData: any): boolean;

  /**
   * Get the next page of results.
   * @returns A Promise that resolves to either a collection representing
   *     the next page of results, or an object with data: null if no more pages.
   */
  nextPage(): Promise<ClassApiResponse<Type> | { data: null }>;
}
