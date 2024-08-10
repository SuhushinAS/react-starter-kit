import {TState} from 'app/types';
import {statusName} from 'modules/status/reducers';
import {TStatusStore} from 'modules/status/types';

export const selectStatus = (state: TState): TStatusStore => state[statusName];

export const selectStatusItem = (id: string) => (state: TState) => selectStatus(state)[id];
