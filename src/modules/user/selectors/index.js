// @flow

import type {TState} from 'app/types.js';
import type {TUserData, TUserStore} from 'modules/user/types.js';
import {createSelector} from 'reselect';

/**
 * Селектор.
 * @param {*} state Состояние.
 * @return {*} Ветка.
 */
export function userSelector(state: TState): TUserStore {
    return state.user;
}

/**
 * Селектор данных.
 * @param {*} state Состояние.
 * @return {*} Данные.
 */
export function userSelectorData(state: TState): TUserData {
    return userSelector(state).data;
}

/**
 * Селектор данных.
 * @param {*} state Состояние.
 * @return {*} Данные.
 */
export function userSelectorItem(state: TState, id: string): TUserData {
    return userSelectorData(state)[id];
}

export const userSelectorList = createSelector([userSelectorData], (data) => Object.keys(data).map((id) => data[id]));
