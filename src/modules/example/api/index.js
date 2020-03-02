// @flow
import Api from 'api/index.js';
import type {TExampleListGetResponse} from 'modules/example/types.js';

export default class ExampleApi extends Api {
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
}
