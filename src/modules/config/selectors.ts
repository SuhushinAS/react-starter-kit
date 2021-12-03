import {TState} from 'app/types';
import {moduleName} from 'modules/config/constants';

/**
 * Выбрать модуль.
 * @param state Стейт.
 * @return {*} модуль.
 */
export const selectConfig = (state: TState) => state[moduleName];
