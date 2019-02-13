// @flow

// /* flow-include

import type {TApiResponseError, TApiResponseNotice, TGenApiResponse} from 'api/types.js';

export type TExampleListGetFilter = {
    name?: string,
} | null;

export type TExampleStore = {|
    data: TExampleData,
    isLoading: boolean,
    more: boolean,
|};

export type TExampleData = {|
    [number]: TExample,
|};

export type TExample = {
    id: number,
    name: string,
};

export type TExampleListGetResponseData = {|
    list: TExample[],
|};
export type TExampleListGetApiResponse = TGenApiResponse<TExampleListGetResponseData, TApiResponseError, TApiResponseNotice>;

// */
