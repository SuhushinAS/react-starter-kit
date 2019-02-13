// @flow

import BaseApi from 'api/BaseApi';
import type {
    TExample, TExampleCreateResponse, TExampleDeleteResponse, TExampleEditResponse, TExampleGetResponse, TExampleListGetFilter,
    TExampleListGetResponse,
} from 'modules/example/types.js';

export default class ExampleApi extends BaseApi {
    listGet(filter: TExampleListGetFilter = null, limit: number = 0, offset: number = 0): Promise<TExampleListGetResponse> {
        return this.request('/api/v1/example', 'GET', {
            data: {
                filter,
                limit,
                offset,
            },
            isCors: false,
        });
    }

    create(data: TExample): Promise<TExampleCreateResponse> {
        return this.request('/api/v1/example', 'CREATE', {
            data,
            isCors: false,
        });
    }

    update(exampleId: number, data: TExample): Promise<TExampleEditResponse> {
        return this.request(`/api/v1/example?v=${exampleId}`, 'PUT', {
            data,
            isCors: false,
        });
    }

    delete(exampleId: number): Promise<TExampleDeleteResponse> {
        return this.request(`/api/v1/example?v=${exampleId}`, 'DELETE', {
            isCors: false,
        });
    }

    get(exampleId: number): Promise<TExampleGetResponse> {
        return this.request(`/api/v1/example?v=${exampleId}`, 'GET', {
            isCors: false,
        });
    }
}
