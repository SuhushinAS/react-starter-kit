export default class BaseApi {
    constructor (base = '') {
        this.base = base;
    }

    /**
     * Метод посылает запрос на
     *
     * @param {string}      url
     * @param {string}      method
     * @param {FormData}    data
     * @param {object}      headers
     *
     * @returns {Promise}
     */
    request (url, method = 'GET', data = null, headers = {}) {
        const options = {
            method: 'GET', // Заменить на POST с реальным API
            credentials: 'include',
            headers: new Headers({
                ...headers,
                'X-HTTP-Method-Override': method,
            }),
            body: data,
        };

        return fetch(this.base + url, options).then((response) => response.json());
    }
};
