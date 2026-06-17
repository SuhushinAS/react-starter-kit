import {TState} from 'src/app/lib/types';
import {configName} from 'src/modules/config/lib/reducers';

export const selectConfig = (state: TState) => {
  return state[configName];
};
