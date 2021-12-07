import {TGetEntry, TGetId, TItem, TNormalize} from 'modules/common/types';

const idKey = 'id';

/**
 * Получить идентификатор.
 * @param key Свойство.
 * @return {*} Идентификатор.
 */
export const getId =
  <T = TItem>(key: keyof T): TGetId<T> =>
  (item) =>
    `${item[key]}`;

export const getIdDefault = getId(idKey);

/**
 * Получить данные.
 * @param _getId Получить идентификатор.
 * @return {*} данные.
 */
export const getEntries =
  <T = TItem>(_getId: TGetId<T>): TGetEntry<T> =>
  (item) =>
    [_getId(item), item];

export const getEntriesDefault = getEntries(getIdDefault);

type TGetNormalize = <T = TItem>(_getId: TGetId<T>) => TNormalize<T>;

/**
 * Получить нормализацию.
 * @param _getId Получить Id.
 * @return {*} Нормализация.
 */
export const getNormalize: TGetNormalize = (_getId) => (list) => ({
  data: Object.fromEntries(list.map(getEntries(_getId))),
  list: list.map(_getId),
});

export const normalizeDefault = getNormalize(getIdDefault);
