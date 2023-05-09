import {TState} from 'app/types';
import {config} from 'modules/config/redux';

export const selectConfig = (state: TState) => state[config.name];
