// @flow

// /* flow-include

import type {TApiResponseError, TApiResponseNotice, TGenApiResponse, TGenResponse} from 'api/types.js';

export type TExampleListGetFilter = {
    name?: string,
} | null;

export type TExampleStore = {|
    data: TExampleData,
    isLoading: boolean,
    list: number[],
    more: boolean,
    simple: boolean,
|};

export type TExampleData = {|
    [number]: TExample,
|};

export type TExample = {
    id: number,
    name: string,
};

export type TExampleCreateResponseData = {|
    id: number,
|};
export type TExampleCreateApiResponse = TGenApiResponse<TExampleCreateResponseData, TApiResponseError, TApiResponseNotice>;
export type TExampleCreateResponse = TGenResponse<TExampleCreateApiResponse>;

export type TExampleDeleteResponseData = {|
    success: boolean,
|};
export type TExampleDeleteApiResponse = TGenApiResponse<TExampleDeleteResponseData, TApiResponseError, TApiResponseNotice>;
export type TExampleDeleteResponse = TGenResponse<TExampleDeleteApiResponse>;

export type TExampleEditResponseData = {|
    id: number,
|};
export type TExampleEditApiResponse = TGenApiResponse<TExampleEditResponseData, TApiResponseError, TApiResponseNotice>;
export type TExampleEditResponse = TGenResponse<TExampleEditApiResponse>;

export type TExampleGetResponseData = TExample;
export type TExampleGetApiResponse = TGenApiResponse<TExampleGetResponseData, TApiResponseError, TApiResponseNotice>;
export type TExampleGetResponse = TGenResponse<TExampleGetApiResponse>;

export type TExampleListGetResponseData = {|
    list: TExample[],
|};
export type TExampleListGetApiResponse = TGenApiResponse<TExampleListGetResponseData, TApiResponseError, TApiResponseNotice>;
export type TExampleListGetResponse = TGenResponse<TExampleListGetApiResponse>;

// */
