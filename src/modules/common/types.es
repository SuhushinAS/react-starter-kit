// @flow

import type {TypeApiResponseError, TypeApiResponseNotice, TypeGenApiResponse, TypeGenResponse} from 'api/types.es';

// /* flow-include

export type CommonTypeStore = {|
    host: ?string,
    loading: number,
    search: CommonTypeSearch,
    tile: CommonTypeTile,
|};

export type CommonTypeSearch = {|
    params: any,
|};

export type CommonTypeTile = {|
    params: any,
    url: string,
|};

export type CommonTypeKeyList = {
    [string]: {
        [number]: (any) => any,
    },
};

export type CommonTypeCreateResponseData = {|
    id: number,
|};
export type CommonTypeCreateApiResponse = TypeGenApiResponse<CommonTypeCreateResponseData, TypeApiResponseError, TypeApiResponseNotice>;
export type CommonTypeCreateResponse = TypeGenResponse<CommonTypeCreateApiResponse>;

// */
