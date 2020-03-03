export default class Api {
    constructor(host = '') {
        this.host = host;
    }

    getJSON = (response) => response.json();

    request(url = '', method = 'GET', data = {}) {
        return fetch(`${this.host}${url}`, {method: 'GET'}).then(this.getJSON);
    }
}
