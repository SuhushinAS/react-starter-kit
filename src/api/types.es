// @flow

// /* flow-include

export type TypeApiOptions = {
    data?: null | {} | any[],
    headers?: {},
    isCors?: boolean,
};

export type TypeGenApiResponse<Data, Errors, Notice> = {
    data: Data,
    errors: Errors[],
    notice: Notice[],
};

export type TypeApiResponse = TypeGenApiResponse<TypeApiResponseData, TypeApiResponseError, TypeApiResponseNotice>;

export type TypeApiResponseData = any;

export type TypeApiResponseError = {|
    code: number,
    title: string,
    detail: string,
    data: any,
|};

export type TypeApiResponseNotice = {};

export type TypeGenResponse<ApiResponse> = {
    data: ApiResponse,
    http: TypeHttpResponse,
};

export type TypeResponse = TypeGenResponse<TypeApiResponse>;

export type TypeHttpResponse = {
    ok: boolean,
    status: number,
    statusText: string,
};

// */
