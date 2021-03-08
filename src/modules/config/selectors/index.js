// @flow
import {moduleName} from 'modules/config/constants';
import type {TConfigState} from 'modules/config/types';

/**
 * Выбрать модуль.
 * @param {*} state Стейт.
 * @return {*} модуль.
 */
export const selectConfig = (state: TConfigState) => state[moduleName];
