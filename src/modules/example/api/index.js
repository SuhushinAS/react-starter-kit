import Api from 'modules/common/helpers/api';

/**
 * Апи.
 */
export class ExampleApi extends Api {
    /**
     * Получить список.
     * @param {*} filter Фильтр.
     * @param {*} limit Лимит.
     * @param {*} offset Смещение.
     * @return {*} Список.
     */
    listGet(filter = null, limit = 0, offset = 0) {
        return this.request('/api/v1/example');
    }
}

export const exampleApi = new ExampleApi();
