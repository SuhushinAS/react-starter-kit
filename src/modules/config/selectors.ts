import {TState} from 'app/types';
import {configName} from 'modules/config/reducers';

export const selectConfig = (state: TState) => state[configName];
