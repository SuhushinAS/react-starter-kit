// @flow

// /* flow-include

import type {TApiResponseError, TApiResponseNotice, TGenApiResponse, TGenResponse} from 'api/types.es';

export type TBaronTestListGetFilter = {
    name?: string,
} | null;

export type TBaronTestStore = {|
    data: TBaronTestData,
    isLoading: boolean,
    list: number[],
    more: boolean,
    simple: boolean,
|};

export type TBaronTestData = {|
    [number]: TBaronTest,
|};

export type TBaronTest = {
    id: number,
    name: string,
};

export type TBaronTestCreateResponseData = {|
    id: number,
|};
export type TBaronTestCreateApiResponse = TGenApiResponse<TBaronTestCreateResponseData, TApiResponseError, TApiResponseNotice>;
export type TBaronTestCreateResponse = TGenResponse<TBaronTestCreateApiResponse>;

export type TBaronTestDeleteResponseData = {|
    success: boolean,
|};
export type TBaronTestDeleteApiResponse = TGenApiResponse<TBaronTestDeleteResponseData, TApiResponseError, TApiResponseNotice>;
export type TBaronTestDeleteResponse = TGenResponse<TBaronTestDeleteApiResponse>;

export type TBaronTestEditResponseData = {|
    id: number,
|};
export type TBaronTestEditApiResponse = TGenApiResponse<TBaronTestEditResponseData, TApiResponseError, TApiResponseNotice>;
export type TBaronTestEditResponse = TGenResponse<TBaronTestEditApiResponse>;

export type TBaronTestGetResponseData = TBaronTest;
export type TBaronTestGetApiResponse = TGenApiResponse<TBaronTestGetResponseData, TApiResponseError, TApiResponseNotice>;
export type TBaronTestGetResponse = TGenResponse<TBaronTestGetApiResponse>;

export type TBaronTestListGetResponseData = {|
    list: TBaronTest[],
|};
export type TBaronTestListGetApiResponse = TGenApiResponse<TBaronTestListGetResponseData, TApiResponseError, TApiResponseNotice>;
export type TBaronTestListGetResponse = TGenResponse<TBaronTestListGetApiResponse>;

// */
