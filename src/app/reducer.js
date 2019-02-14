// @flow

import type {TReducer} from 'app/types.js';
import common from 'modules/common/ducks/index.js';
import example from 'modules/example/ducks/index.js';
import user from 'modules/user/ducks/index.js';
import {combineReducers} from 'redux';

const reducers = {
    common,
    example,
    user,
};

export type TReducers = typeof reducers;

export default combineReducers(reducers);

/**
 * Создать редьюсер.
 * @param {*} initialState Начальное состояние.
 * @param {*} reducerList Набор редьюсеров.
 * @return {*} Редьюсер.
 */
export function createReducer<S, A: *>(initialState: S, reducerList: {[key: string]: TReducer<S, A>}): TReducer<S, A> {
    return (state: S = initialState, {type, payload}: A): S => {
        const reducer: (state: S, payload?: {}) => S = reducerList[type];

        if ('function' === typeof reducer) {
            return reducer(state, payload);
        }

        return state;
    };
}
