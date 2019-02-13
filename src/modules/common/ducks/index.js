// @flow

import type {TConfig} from 'app/config.js';
import {createReducer} from 'app/reducer.js';
import type {TCommonStore} from 'modules/common/types.js';

const commonConst = {
    configSet: 'COMMON__CONFIG_SET',
    loadingDec: 'COMMON__LOADING_DEC',
    loadingInc: 'COMMON__LOADING_INC',
};

const initialState: TCommonStore = {
    host: null,
    loading: 0,
    search: {
        params: {},
    },
    tile: {
        params: null,
        url: '',
    },
};

/**
 * Задать конфиг.
 * @param {*} config Конфиг.
 * @return {{payload: {config: *}, type: string}} Данные для редьюсера.
 */
export function commonActionConfigSet(config: TConfigData) {
    return {
        payload: {config},
        type: commonConst.configSet,
    };
}

/**
 * Убрать загрузку.
 * @return {{payload: {isLoading: *}, type: string}} Данные для редьюсера.
 */
export function commonActionLoadingDec() {
    return {type: commonConst.loadingDec};
}

/**
 * Добавить загрузку.
 * @return {{payload: {isLoading: *}, type: string}} Данные для редьюсера.
 */
export function commonActionLoadingInc() {
    return {type: commonConst.loadingInc};
}

/**
 * Редьюсер - обновляет состояние в зависимости от действия.
 * @param {*} state Предыдущее состяние.
 * @param {string} type Название действия.
 * @param {*} payload Дополнительные данные для действия.
 * @returns {*} Функция для обновления состояния.
 */
export default createReducer(initialState, {
    [commonConst.configSet](state, payload) {
        return {
            ...state,
            ...payload.config,
        };
    },
    [commonConst.loadingDec](state) {
        return {
            ...state,
            loading: (state.loading || 1) - 1,
        };
    },
    [commonConst.loadingInc](state) {
        return {
            ...state,
            loading: state.loading + 1,
        };
    },
});
