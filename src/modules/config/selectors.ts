import {TState} from 'app/types';
import {config} from 'modules/config/redux';

/**
 * Выбрать модуль.
 * @param state Стейт.
 * @return {*} модуль.
 */
export const selectConfig = (state: TState) => state[config.name];
