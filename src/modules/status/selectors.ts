import {TState} from 'app/types';
import {status} from 'modules/status/reducers';
import {TLoadMap, TStatusStore} from 'modules/status/types';

export const selectStatus = (state: TState): TStatusStore => state[status.name];

export const selectLoad = (state: TState): TLoadMap => selectStatus(state).load;

export const selectLoadItem =
  (id: string) =>
  (state: TState): boolean =>
    selectLoad(state)[id];
