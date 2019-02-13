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

export type TResponse = TGenApiResponse<TApiResponseData, TApiResponseError, TApiResponseNotice>;

export type TApiResponseData = any;

export type TApiResponseError = {|
    code: number,
    title: string,
    detail: string,
    data: any,
|};

export type TApiResponseNotice = {};

// */
