// @flow

// /* flow-include

import type {TypeApiResponseError, TypeApiResponseNotice, TypeGenApiResponse, TypeGenResponse} from 'api/types.es';

export type ExampleTypeListGetFilter = {
    name?: string,
} | null;

export type ExampleTypeStore = {|
    data: ExampleTypeData,
    isLoading: boolean,
    list: number[],
    more: boolean,
    simple: boolean,
|};

export type ExampleTypeData = {|
    [number]: ExampleType,
|};

export type ExampleType = {
    id: number,
    name: string,
};

export type ExampleTypeCreateResponseData = {|
    id: number,
|};
export type ExampleTypeCreateApiResponse = TypeGenApiResponse<ExampleTypeCreateResponseData, TypeApiResponseError, TypeApiResponseNotice>;
export type ExampleTypeCreateResponse = TypeGenResponse<ExampleTypeCreateApiResponse>;

export type ExampleTypeDeleteResponseData = {|
    success: boolean,
|};
export type ExampleTypeDeleteApiResponse = TypeGenApiResponse<ExampleTypeDeleteResponseData, TypeApiResponseError, TypeApiResponseNotice>;
export type ExampleTypeDeleteResponse = TypeGenResponse<ExampleTypeDeleteApiResponse>;

export type ExampleTypeEditResponseData = {|
    id: number,
|};
export type ExampleTypeEditApiResponse = TypeGenApiResponse<ExampleTypeEditResponseData, TypeApiResponseError, TypeApiResponseNotice>;
export type ExampleTypeEditResponse = TypeGenResponse<ExampleTypeEditApiResponse>;

export type ExampleTypeGetResponseData = ExampleType;
export type ExampleTypeGetApiResponse = TypeGenApiResponse<ExampleTypeGetResponseData, TypeApiResponseError, TypeApiResponseNotice>;
export type ExampleTypeGetResponse = TypeGenResponse<ExampleTypeGetApiResponse>;

export type ExampleTypeListGetResponseData = {|
    list: ExampleType[],
|};
export type ExampleTypeListGetApiResponse = TypeGenApiResponse<ExampleTypeListGetResponseData, TypeApiResponseError, TypeApiResponseNotice>;
export type ExampleTypeListGetResponse = TypeGenResponse<ExampleTypeListGetApiResponse>;

// */
