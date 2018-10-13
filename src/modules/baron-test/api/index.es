// @flow

import BaseApi from 'api/BaseApi';
import type {
    TBaronTest, TBaronTestCreateResponse, TBaronTestDeleteResponse, TBaronTestEditResponse, TBaronTestGetResponse, TBaronTestListGetFilter,
    TBaronTestListGetResponse,
} from 'modules/baron-test/types.es';

export default class BaronTestApi extends BaseApi {
    listGet(filter: TBaronTestListGetFilter = null, limit: number = 0, offset: number = 0): Promise<TBaronTestListGetResponse> {
        return this.request('/api/v1/baron-test', 'GET', {
            data: {
                filter,
                limit,
                offset,
            },
            isCors: false,
        });
    }

    create(data: TBaronTest): Promise<TBaronTestCreateResponse> {
        return this.request('/api/v1/baron-test', 'CREATE', {
            data,
            isCors: false,
        });
    }

    update(baronTestId: number, data: TBaronTest): Promise<TBaronTestEditResponse> {
        return this.request(`/api/v1/baron-test?v=${baronTestId}`, 'PUT', {
            data,
            isCors: false,
        });
    }

    delete(baronTestId: number): Promise<TBaronTestDeleteResponse> {
        return this.request(`/api/v1/baron-test?v=${baronTestId}`, 'DELETE', {
            isCors: false,
        });
    }

    get(baronTestId: number): Promise<TBaronTestGetResponse> {
        return this.request(`/api/v1/baron-test?v=${baronTestId}`, 'GET', {
            isCors: false,
        });
    }
}
