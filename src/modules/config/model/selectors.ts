import {TState} from 'src/app/model/types';
import {configName} from 'src/modules/config/model/reducers';

export const selectConfig = (state: TState) => {
  return state[configName];
};
