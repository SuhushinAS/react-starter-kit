import {Api} from 'helpers/api';

/**
 * Апи.
 */
export class ExampleApi extends Api {
  /**
   * Получить список.
   // * @param {*} filter Фильтр.
   // * @param {*} limit Лимит.
   // * @param {*} offset Смещение.
   * @return {*} Список.
   */
  listGet() {
    return this.requestLocal('/api/v1/example.json');
  }
}

export const exampleApi = new ExampleApi();
