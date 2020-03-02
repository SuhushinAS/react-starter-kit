// @flow
import type {TState} from 'app/types.js';
import type {TCommonStore} from 'modules/common/types.js';

/**
 * Селектор.
 * @param {*} state Состояние.
 * @return {*} Ветка.
 */
export function commonSelector(state: TState): TCommonStore {
    return state.common;
}

/**
 * Селектор.
 * @param {*} state Состояние.
 * @return {*} Ветка.
 */
export function commonSelectorHost(state: TState): ?string {
    return commonSelector(state).host;
}
