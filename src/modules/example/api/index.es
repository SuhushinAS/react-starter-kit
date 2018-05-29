// @flow

import BaseApi from 'api/BaseApi';
import type {
    ExampleType, ExampleTypeCreateResponse, ExampleTypeDeleteResponse, ExampleTypeEditResponse, ExampleTypeGetResponse, ExampleTypeListGetFilter,
    ExampleTypeListGetResponse,
} from 'modules/example/types.es';

export default class ExampleApi extends BaseApi {
    listGet(filter: ExampleTypeListGetFilter = null, limit: number = 0, offset: number = 0): Promise<ExampleTypeListGetResponse> {
        return this.request('/api/v1/example', 'GET', {
            data: {
                filter,
                limit,
                offset,
            },
            isCors: false,
        });
    }

    create(data: ExampleType): Promise<ExampleTypeCreateResponse> {
        return this.request('/api/v1/example', 'CREATE', {
            data,
            isCors: false,
        });
    }

    update(exampleId: number, data: ExampleType): Promise<ExampleTypeEditResponse> {
        return this.request(`/api/v1/example?v=${exampleId}`, 'PUT', {
            data,
            isCors: false,
        });
    }

    delete(exampleId: number): Promise<ExampleTypeDeleteResponse> {
        return this.request(`/api/v1/example?v=${exampleId}`, 'DELETE', {
            isCors: false,
        });
    }

    get(exampleId: number): Promise<ExampleTypeGetResponse> {
        return this.request(`/api/v1/example?v=${exampleId}`, 'GET', {
            isCors: false,
        });
    }
}
