// @flow

import type {TState} from 'helpers/types.es';
import type {TCommonSearch, TCommonStore, TCommonTile} from 'modules/common/types.es';

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

/**
 * Селектор.
 * @param {*} state Состояние.
 * @return {*} Ветка.
 */
export function commonSelectorLoading(state: TState): number {
    return commonSelector(state).loading;
}

/**
 * Селектор.
 * @param {*} state Состояние.
 * @return {*} Ветка.
 */
export function commonSelectorSearch(state: TState): TCommonSearch {
    return commonSelector(state).search;
}

/**
 * Селектор.
 * @param {*} state Состояние.
 * @return {*} Ветка.
 */
export function commonSelectorTile(state: TState): TCommonTile {
    return commonSelector(state).tile;
}
