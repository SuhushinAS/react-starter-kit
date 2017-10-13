import BaseApi from './BaseApi';

export default class ApiExample extends BaseApi {
    get () {
        return this.request('/json/example.json', 'GET');
    }

    create (data) {
        return this.request('/json/example.json', 'CREATE', data);
    }

    update (data) {
        return this.request('/json/example.json', 'PUT', data);
    }

    delete (data) {
        return this.request('/json/example.json', 'DELETE', data);
    }
};