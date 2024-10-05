import {TGetEntry, TGetId, TItem, TNormalize} from 'modules/common/model/types';

type GetId = <T = TItem>(key: keyof T) => TGetId<T>;

export const getId: GetId = (key) => {
  return (item) => {
    return `${item[key]}`;
  };
};

type GetEntries = <T = TItem>(_getId: TGetId<T>) => TGetEntry<T>;

export const getEntries: GetEntries = (_getId) => {
  return (item) => {
    return [_getId(item), item];
  };
};

type GetNormalize = <T = TItem>(_getId: TGetId<T>) => TNormalize<T>;

export const getNormalize: GetNormalize = (_getId) => {
  return (list) => {
    return {
      data: Object.fromEntries(list.map(getEntries(_getId))),
      list: list.map(_getId),
    };
  };
};
