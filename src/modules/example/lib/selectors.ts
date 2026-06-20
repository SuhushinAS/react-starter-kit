import { createSelector } from 'reselect';
import { TState } from 'src/app/lib/types';
import { getList } from 'src/modules/common/lib/selectors';
import { exampleName } from 'src/modules/example/lib/reducers';
import { TExample, TExampleMap, TExampleStore } from 'src/modules/example/lib/types';

export const selectExample = (state: TState): TExampleStore => {
  return state[exampleName] as TExampleStore;
};

export const selectExampleData = (state: TState): TExampleMap => {
  return selectExample(state).data;
};

export const selectExampleIdList = (state: TState): string[] => {
  return selectExample(state).list;
};

export const selectExampleList = createSelector([selectExampleData, selectExampleIdList], getList);

export const selectExampleItem = (id: string) => {
  return (state: TState): TExample => {
    return selectExampleData(state)[id];
  };
};
