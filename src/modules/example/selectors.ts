import {TState} from 'app/types';
import {getList} from 'modules/common/helpers/selectors';
import {exampleName} from 'modules/example/reducers';
import {TExample, TExampleMap, TExampleStore} from 'modules/example/types';
import {createSelector} from 'reselect';

export const selectExample = (state: TState): TExampleStore => state[exampleName];

export const selectExampleData = (state: TState): TExampleMap => selectExample(state).data;

export const selectExampleIdList = (state: TState): string[] => selectExample(state).list;

export const selectExampleList = createSelector([selectExampleData, selectExampleIdList], getList);

export const selectExampleItem =
  (id: string) =>
  (state: TState): TExample =>
    selectExampleData(state)[id];
