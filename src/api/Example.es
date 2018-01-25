import BaseApi from './BaseApi';

export default class ApiExample extends BaseApi {
    listGet() {
        return this.request('/api/example-list.json', 'GET');
    }

    create(data) {
        return this.request('/api/example-list.json', 'CREATE', false, data);
    }

    update(data) {
        return this.request('/api/example-list.json', 'PUT', false, data);
    }

    delete(data) {
        return this.request('/api/example-list.json', 'DELETE', false, data);
    }
};