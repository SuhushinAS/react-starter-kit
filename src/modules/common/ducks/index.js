// @flow

import type {TConfigData} from 'helpers/config.js';
import {actionHandlerDefault, defaultReducer} from 'helpers/ducks.js';
import type {TDispatch} from 'helpers/types.js';
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
        payload: {
            config,
        },
        type: commonConst.configSet,
    };
}

/**
 * Убрать загрузку.
 * @return {{payload: {isLoading: *}, type: string}} Данные для редьюсера.
 */
export function commonActionLoadingDec() {
    return {
        type: commonConst.loadingDec,
    };
}

/**
 * Добавить загрузку.
 * @return {{payload: {isLoading: *}, type: string}} Данные для редьюсера.
 */
export function commonActionLoadingInc() {
    return {
        type: commonConst.loadingInc,
    };
}

/**
 * Обработать успешный ответ.
 * @param {*} dispatch Функция для вызова редьюсера.
 * @param {string} type Тип для редьюсера.
 * @return {Function} Обработать успешный ответ.
 */
export function handleUpdateSuccess(dispatch: TDispatch, type: string) {
    return function(response: any) {
        if (0 === response.data.errors.length) {
            dispatch(commonActionLoadingDec());
            dispatch({
                payload: {
                    data: response.data.data,
                },
                type,
            });

            return response;
        }

        throw response;
    };
}

/**
 * Обработать успешный ответ.
 * @param {*} dispatch Функция для вызова редьюсера.
 * @param {string} type Тип для редьюсера.
 * @return {Function} Обработать успешный ответ.
 */
export function handleUpdateFail(dispatch: TDispatch, type: string) {
    return function(error: any) {
        dispatch(commonActionLoadingDec());
        dispatch({type});

        return actionHandlerDefault(error);
    };
}

const commonReducerConfig = {
    [commonConst.configSet]: (state, payload) => ({
        ...state,
        ...payload.config,
    }),
};

const commonReducerLoading = {
    [commonConst.loadingInc]: (state) => ({
        ...state,
        loading: state.loading + 1,
    }),
    [commonConst.loadingDec]: (state) => {
        let loading = state.loading - 1;

        if (0 > loading) {
            loading = 0;
        }

        return {
            ...state,
            loading,
        };
    },
};

/**
 * Редьюсер - обновляет состояние в зависимости от действия.
 * @param {*} state Предыдущее состяние.
 * @param {string} type Название действия.
 * @param {*} payload Дополнительные данные для действия.
 * @returns {*} Функция для обновления состояния.
 */
export default defaultReducer(initialState, {
    ...commonReducerConfig,
    ...commonReducerLoading,
});
