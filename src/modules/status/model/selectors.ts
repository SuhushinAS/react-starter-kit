import {TState} from 'src/app/model/types';
import {statusName} from 'src/modules/status/model/reducers';
import {TStatusStore} from 'src/modules/status/model/types';

export const selectStatus = (state: TState): TStatusStore => {
  return state[statusName] as TStatusStore;
};

export const selectStatusItem = (id: string) => (state: TState) => {
  return selectStatus(state)[id];
};
