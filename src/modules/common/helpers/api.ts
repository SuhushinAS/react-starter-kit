/**
 * АПИ.
 */
export class Api {
  static host = '';

  static options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  };

  /**
   * Конструктор.
   * @param host Хост.
   */
  constructor(host = '') {
    Api.host = host;
  }

  /**
   * Получть JSON.
   * @param response Ответ.
   * @return {*} JSON.
   */
  getJSON<T>(response: Response): Promise<T> {
    return response.json();
  }

  /**
   * Получить опции.
   * @param options Опции.
   * @return {*} Опции.
   */
  getOptions(options: RequestInit = {}): RequestInit {
    const {headers = {}} = options;

    return {
      ...Api.options,
      headers: {...Api.options.headers, ...headers},
      ...options,
    };
  }

  /**
   * Отправить запрос.
   * @param url Адрес.
   * @param options Опции.
   * @return {*} Запрос.
   */
  request<T>(url = '', options?: RequestInit): Promise<T> {
    return this.fetch<T>(url, Api.host, options);
  }

  /**
   * Отправить запрос.
   * @param url Адрес.
   * @param host Хост.
   * @param options Опции.
   * @return {*} Запрос.
   */
  fetch<T>(url = '', host = '', options = {}): Promise<T> {
    return fetch(`${host}${url}`, this.getOptions(options)).then((resp) => this.getJSON<T>(resp));
  }

  /**
   * Отправить запрос.
   * @param url Адрес.
   * @return {*} Ответ.
   */
  requestLocal<T>(url = ''): Promise<T> {
    return this.fetch(url, '/local');
  }
}

export const api = new Api();
