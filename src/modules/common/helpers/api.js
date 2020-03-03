/**
 * АПИ.
 */
export default class Api {
    /**
     * Конструктор.
     * @param {string} host Хост.
     */
    constructor(host = '') {
        this.host = host;
    }

    /**
     * Получть JSON.
     * @param {*} response Ответ.
     * @return {*} JSON.
     */
    getJSON = (response) => response.json();

    /**
     * Отправить запрос.
     * @param {string} url Адрес.
     * @param {string} method Мтод
     * @param {*} data Данные.
     * @return {Promise<Response>} Ответ.
     */
    request(url = '', method = 'GET', data = {}) {
        return fetch(`${this.host}${url}`, {method: 'GET'}).then(this.getJSON);
    }
}
