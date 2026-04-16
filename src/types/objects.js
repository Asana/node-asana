class ApiResponse {
  data;
  _response;

  _apiClient;
  _apiRequestData;
}
export class ApiRequestResponse extends ApiResponse {
  /**
   *
   * @param {ApiResponse} body
   */
  constructor(body) {
    super();
    this.data = body.data;
    this._response = body._response;
    this._apiClient = body._apiClient;
    this._apiRequestData = body._apiRequestData;
  }
  /**
   * Get the next page of results.
   * @returns A Promise that resolves to either a collection representing
   *     the next page of results, or an object with data: null if no more pages.
   */
  getNextPage() {
    const nextPage = this._response.next_page;
    if (
      typeof nextPage !== "object" ||
      nextPage === null ||
      !this.data ||
      this.data.length === 0
    ) {
      return Promise.resolve({ data: null });
    }

    this._apiRequestData.queryParams["offset"] = nextPage.offset;
    return this._apiClient
      .callApi(
        this._apiRequestData.path,
        this._apiRequestData.httpMethod,
        this._apiRequestData.pathParams,
        this._apiRequestData.queryParams,
        this._apiRequestData.headerParams,
        this._apiRequestData.formParams,
        this._apiRequestData.bodyParam,
        this._apiRequestData.authNames,
        this._apiRequestData.contentTypes,
        this._apiRequestData.accepts,
        this._apiRequestData.returnType,
      )
      .then((res) => {
        this._response = res;
        this.data = this.data.concat(res.data);
        return this;
      });
  }
}
