import {Api} from 'helpers/api';

/**
 * Апи локалей.
 */
export class LocaleApi extends Api {
  /**
   * Получить словарь переводов.
   * @param {string} language Язык.
   * @return {*} Словарь.
   */
  getData(language) {
    return this.requestLocal(`/api/v1/locale-${language}.json`);
  }

  /**
   * Получить словарь переводов.
   * @return {*} Словарь.
   */
  getList() {
    return this.requestLocal('/api/v1/locale.json');
  }
}

export const localeApi = new LocaleApi();
