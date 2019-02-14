// @flow

import Api from 'api/index.js';
import type {TUser, TUserListGetFilter, TUserListGetResponse, TUserUpdateResponse} from 'modules/user/types.js';

export default class UserApi extends Api {
    update(id: number, data: TUser): Promise<TUserUpdateResponse> {
        return this.request(`/api/v1/user?${id}`, 'PUT', {
            data,
            isCors: false,
        });
    }

    listGet(filter: TUserListGetFilter = null, limit: number = 0, offset: number = 0): Promise<TUserListGetResponse> {
        return this.request('/api/v1/user', 'GET', {
            data: {
                filter,
                limit,
                offset,
            },
            isCors: false,
        });
    }
}
