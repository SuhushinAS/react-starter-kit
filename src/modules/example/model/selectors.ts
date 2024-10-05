import {TState} from 'app/model/types';
import {getList} from 'modules/common/lib/selectors';
import {exampleName} from 'modules/example/model/reducers';
import {
  TExample,
  TExampleMap,
  TExampleStore,
} from 'modules/example/model/types';
import {createSelector} from 'reselect';

export const selectExample = (state: TState): TExampleStore => {
  return state[exampleName] as TExampleStore;
};

export const selectExampleData = (state: TState): TExampleMap => {
  return selectExample(state).data;
};

export const selectExampleIdList = (state: TState): string[] => {
  return selectExample(state).list;
};

export const selectExampleList = createSelector(
  [selectExampleData, selectExampleIdList],
  getList
);

export const selectExampleItem = (id: string) => {
  return (state: TState): TExample => {
    return selectExampleData(state)[id];
  };
};
