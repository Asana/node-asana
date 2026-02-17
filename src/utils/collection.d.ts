import { ApiClient } from '../ApiClient';

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

declare class Collection {
    data: any[];
    _response: any;
    _apiClient: ApiClient;
    _apiRequestData: ApiRequestData;

    constructor(response_and_data: { response: any; data: any }, apiClient: ApiClient, apiRequestData: ApiRequestData);

    static fromApiClient(
        promise: Promise<{ response: any; data: any }>,
        apiClient: ApiClient,
        apiRequestData: ApiRequestData
    ): Promise<Collection>;

    static isCollectionResponse(responseData: any): boolean;

    nextPage(): Promise<Collection | { data: null }>;
}

export = Collection;
