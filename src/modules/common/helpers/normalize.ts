import {TGetEntry, TGetId, TItem, TNormalize} from 'modules/common/types';

type GetId = <T = TItem>(key: keyof T) => TGetId<T>;

export const getId: GetId = (key) => (item) => `${item[key]}`;

type GetEntries = <T = TItem>(_getId: TGetId<T>) => TGetEntry<T>;

export const getEntries: GetEntries = (_getId) => (item) => [_getId(item), item];

type GetNormalize = <T = TItem>(_getId: TGetId<T>) => TNormalize<T>;

export const getNormalize: GetNormalize = (_getId) => (list) => ({
  data: Object.fromEntries(list.map(getEntries(_getId))),
  list: list.map(_getId),
});
