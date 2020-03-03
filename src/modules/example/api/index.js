import Api from 'modules/common/helpers/api';

export class ExampleApi extends Api {
    listGet(filter = null, limit = 0, offset = 0) {
        return this.request('/api/v1/example');
    }
}

export const exampleApi = new ExampleApi();
