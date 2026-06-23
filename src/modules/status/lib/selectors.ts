import { TState } from 'src/app/lib/types';
import { statusName } from 'src/modules/status/lib/reducers';
import { TStatusStore } from 'src/modules/status/lib/types';

export const selectStatus = (state: TState): TStatusStore => {
  return state[statusName] as TStatusStore;
};

export const selectStatusItem = (id: string) => (state: TState) => {
  return selectStatus(state)[id];
};
