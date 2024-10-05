import {TState} from 'app/model/types';
import {statusName} from 'modules/status/model/reducers';
import {TStatusStore} from 'modules/status/model/types';

export const selectStatus = (state: TState): TStatusStore => {
  return state[statusName] as TStatusStore;
};

export const selectStatusItem = (id: string) => (state: TState) => {
  return selectStatus(state)[id];
};
