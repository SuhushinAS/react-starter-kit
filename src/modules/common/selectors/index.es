// @flow

import type {TypeState} from 'helpers/types.es';
import type {CommonTypeSearch, CommonTypeStore, CommonTypeTile} from 'modules/common/types.es';

/**
 * Селектор.
 * @param {*} state Состояние.
 * @return {*} Ветка.
 */
export function commonSelector(state: TypeState): CommonTypeStore {
    return state.commonReducer;
}

/**
 * Селектор.
 * @param {*} state Состояние.
 * @return {*} Ветка.
 */
export function commonSelectorHost(state: TypeState): ?string {
    return commonSelector(state).host;
}

/**
 * Селектор.
 * @param {*} state Состояние.
 * @return {*} Ветка.
 */
export function commonSelectorLoading(state: TypeState): number {
    return commonSelector(state).loading;
}

/**
 * Селектор.
 * @param {*} state Состояние.
 * @return {*} Ветка.
 */
export function commonSelectorSearch(state: TypeState): CommonTypeSearch {
    return commonSelector(state).search;
}

/**
 * Селектор.
 * @param {*} state Состояние.
 * @return {*} Ветка.
 */
export function commonSelectorTile(state: TypeState): CommonTypeTile {
    return commonSelector(state).tile;
}
