import {TGetEntry, TGetId, TItem, TNormalize} from 'modules/common/types';

const idKey = 'id';

export const getId =
  <T = TItem>(key: keyof T): TGetId<T> =>
  (item) =>
    `${item[key]}`;

export const getIdDefault = getId(idKey);

export const getEntries =
  <T = TItem>(_getId: TGetId<T>): TGetEntry<T> =>
  (item) =>
    [_getId(item), item];

export const getEntriesDefault = getEntries(getIdDefault);

export const getNormalize =
  <T = TItem>(_getId: TGetId<T>): TNormalize<T> =>
  (list) => ({
    data: Object.fromEntries(list.map(getEntries(_getId))),
    list: list.map(_getId),
  });

export const normalizeDefault = getNormalize(getIdDefault);
