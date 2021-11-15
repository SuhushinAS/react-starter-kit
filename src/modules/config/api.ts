import {Api} from 'helpers/api';

/**
 * Апи.
 */
export class ConfigApi extends Api {
  /**
   * Получить список.
   // * @param {*} filter Фильтр.
   // * @param {*} limit Лимит.
   // * @param {*} offset Смещение.
   * @return {*} Список.
   */
  get() {
    return this.requestLocal('/api/v1/config.json');
  }
}

export const configApi = new ConfigApi();
