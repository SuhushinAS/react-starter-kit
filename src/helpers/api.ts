/**
 * АПИ.
 */
export class Api {
  static host: string = '';

  static options: any = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  };

  /**
   * Конструктор.
   * @param {string} host Хост.
   */
  constructor(host: string = '') {
    Api.host = host;
  }

  /**
   * Получть JSON.
   * @param {*} response Ответ.
   * @return {*} JSON.
   */
  getJSON = (response: Response) => response.json();

  /**
   * Получить опции.
   * @param {*} options Опции.
   * @return {*} Опции.
   */
  getOptions(options: any = {}) {
    const {headers = {}} = options;
    return {
      ...Api.options,
      headers: {...Api.options.headers, ...headers},
      ...options,
    };
  }

  /**
   * Отправить запрос.
   * @param {string} url Адрес.
   * @param {*} options Опции.
   * @return {*} Запрос.
   */
  request(url: string = '', options) {
    return this.fetch(url, Api.host, options);
  }

  /**
   * Отправить запрос.
   * @param {string} url Адрес.
   * @param {string} host Хост.
   * @param {*} options Опции.
   * @return {*} Запрос.
   */
  fetch(url: string = '', host: string = '', options = {}) {
    return fetch(`${host}${url}`, this.getOptions(options)).then(this.getJSON);
  }

  /**
   * Отправить запрос.
   * @param {string} url Адрес.
   * @return {Promise<Response>} Ответ.
   */
  requestLocal(url = '') {
    return this.fetch(url, '/local');
  }
}

export type TApiResponseData = any;

export type TResponse = TGenApiResponse<TApiResponseData>;

export type TGenApiResponse<Data> = {
  body: Data;
  headers: THeaders;
};

export type THeaders = {
  ok: boolean;
  status: number;
  statusText: string;
};
