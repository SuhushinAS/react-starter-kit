import type {TState} from 'app/types';
import isEqual from 'lodash.isequal';
import {TItem, TMap} from 'modules/common/types';
import {shallowEqual} from 'react-redux';
import {createSelector, createSelectorCreator, defaultMemoize} from 'reselect';

type TGetList = <T = TItem>(data: TMap<T>, list: string[]) => T[];

export const getList: TGetList = (data, list) => list.map((id) => data[id]);

export const createEqualSelector = createSelectorCreator(defaultMemoize, isEqual);
export const createShallowEqualSelector = createSelectorCreator(defaultMemoize, shallowEqual);

export const getParam = (key: string) => (_: TState, params: any) => params[key];

export const makeSelectParam = (key: string) => createEqualSelector(getParam(key), (param) => param);

export const makeSelectFilter = (selectList: any) =>
  createSelector([selectList, getParam('filter'), makeSelectParam('filterData')], (list, filter, filterData) =>
    filter ? list.filter((item) => filter(item, filterData)) : list
  );

export const makeSelectSort = (selectList: any) =>
  createSelector([selectList, getParam('sort'), makeSelectParam('sortData')], (list, sort, sortData) =>
    sort ? list.sort((a, b) => sort(a, b, sortData)) : list
  );

export const makeSelectProcess = (selectList: any) =>
  createSelector([selectList, getParam('process'), makeSelectParam('processData')], (list, process, processData) =>
    process ? process(list, processData) : list
  );

export const selectSection = (section: string) => (selectModule: any) => (state: TState) =>
  selectModule(state)[section];

export const selectData = selectSection('data');

export const selectIdList = selectSection('list');

export const selectItem = (data: any) => (state: TState, id: string) => data(state)[id];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const compare = (value1: any, value2: any, path: string[] = []): any => {
  if (value1 === value2) {
    return {};
  }

  if (Array.isArray(value1) && Array.isArray(value2)) {
    const length = Math.max(value1.length, value2.length);

    return new Array(length).fill(null).reduce(
      (acc, _, key) => {
        return {
          ...acc,
          ...compare(value1[key], value2[key], [...path, `[${key}]`]),
        };
      },
      {
        [path.join('.')]: {
          value1,
          value2,
        },
      }
    );
  }

  if ('object' === typeof value1 && 'object' === typeof value2) {
    const keys = [...new Set([...Object.keys(value1), ...Object.keys(value2)])];

    return keys.reduce(
      (acc, key) => {
        return {
          ...acc,
          ...compare(value1[key], value2[key], [...path, `${key}`]),
        };
      },
      {
        [path.join('.')]: {
          value1,
          value2,
        },
      }
    );
  }

  return {
    [path.join('.')]: {
      value1,
      value2,
    },
  };
};
