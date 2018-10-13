// @flow

import type {TApiResponseError, TApiResponseNotice, TGenApiResponse, TGenResponse} from 'api/types.es';

// /* flow-include

export type TCommonStore = {|
    host: ?string,
    loading: number,
    search: TCommonSearch,
    tile: TCommonTile,
|};

export type TCommonSearch = {|
    params: any,
|};

export type TCommonTile = {|
    params: any,
    url: string,
|};

export type TCommonKeyList = {
    [string]: {
        [number]: (any) => any,
    },
};

export type TCommonCreateResponseData = {|
    id: number,
|};
export type TCommonCreateApiResponse = TGenApiResponse<TCommonCreateResponseData, TApiResponseError, TApiResponseNotice>;
export type TCommonCreateResponse = TGenResponse<TCommonCreateApiResponse>;

// */
