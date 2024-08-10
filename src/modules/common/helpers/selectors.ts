import {TItem, TMap} from 'modules/common/types';

type TGetList = <T = TItem>(data: TMap<T>, list: string[]) => T[];

export const getList: TGetList = (data, list) => list.map((id) => data[id]);

type Compare = Record<string, {from: unknown; to: unknown}>;

const isObject = (value: unknown): value is Record<string | number | symbol, unknown> => {
  return null !== value && 'object' === typeof value;
};

const compare = (from: unknown, to: unknown, path: string[] = []): Compare => {
  if (from === to) {
    return {};
  }

  if (Array.isArray(from) && Array.isArray(to)) {
    const length = Math.max(from.length, to.length);

    return new Array(length).fill(null).reduce((acc, _, key) => {
      return {
        ...acc,
        ...compare(from[key], to[key], [...path, `[${key}]`]),
      };
    }, {});
  }

  if (isObject(from) && isObject(to)) {
    const keys = [...new Set([...Object.keys(from), ...Object.keys(to)])];

    return keys.reduce((acc, key) => {
      return {
        ...acc,
        ...compare(from[key], to[key], [...path, `${key}`]),
      };
    }, {});
  }

  return {
    [path.join('.')]: {
      from,
      to,
    },
  };
};
