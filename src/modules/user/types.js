// @flow
// /* flow-include

import type {TApiResponseError, TApiResponseNotice, TGenApiResponse} from 'api/types.js';

export type TUserListGetFilter = {
    name?: string,
} | null;

export type TUserStore = {|
    data: TUserData,
    isLoading: boolean,
    more: boolean,
|};

export type TUserData = {|
    [number]: TUser,
|};

export type TUser = {
    id: number,
    name: string,
};

export type TUserListGetResponseData = {|
    list: TUser[],
|};
export type TUserListGetResponse = TGenApiResponse<TUserListGetResponseData, TApiResponseError, TApiResponseNotice>;

export type TUserUpdateResponse = TGenApiResponse<TUser, TApiResponseError, TApiResponseNotice>;

// */
