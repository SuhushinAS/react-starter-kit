// @flow

// /* flow-include

export type TApiOptions = {
    data?: null | {} | any[],
    headers?: {},
    isCors?: boolean,
};

export type TGenApiResponse<Data, Errors, Notice> = {
    data: Data,
    errors: Errors[],
    notice: Notice[],
};

export type TApiResponse = TGenApiResponse<TApiResponseData, TApiResponseError, TApiResponseNotice>;

export type TApiResponseData = any;

export type TApiResponseError = {|
    code: number,
    title: string,
    detail: string,
    data: any,
|};

export type TApiResponseNotice = {};

export type TGenResponse<ApiResponse> = {
    data: ApiResponse,
    http: THttpResponse,
};

export type TResponse = TGenResponse<TApiResponse>;

export type THttpResponse = {
    ok: boolean,
    status: number,
    statusText: string,
};

// */
