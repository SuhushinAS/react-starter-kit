// @flow

import type {TApi} from 'helpers/api.es';
import {listGetSuccess} from 'helpers/ducks';
import {actionHandlerDefault, defaultReducer} from 'helpers/ducks.es';
import type {TDispatch, TGetState} from 'helpers/types.es';
import {commonActionLoadingDec, commonActionLoadingInc} from 'modules/common/ducks/index.es';
import type {TExampleListGetResponse, TExampleStore} from 'modules/example/types.es';

const exampleConst = {
    listGetFail: 'EXAMPLE__LIST-GET_FAIL',
    listGetStart: 'EXAMPLE__LIST-GET_START',
    listGetSuccess: 'EXAMPLE__LIST-GET_SUCCESS',
    simple: 'EXAMPLE__SIMPLE',
};

const initialState: TExampleStore = {
    data: {},
    isLoading: false,
    list: [],
    more: true,
    simple: false,
};

/**
 * Пример простого экшена.
 * @returns {{type: string}} Объект с типом для изменения состояния.
 */
export function exampleActionSimple() {
    return {type: exampleConst.simple};
}

/**
 * Экшн для получения списка.
 * @returns {function(*, *, *)} Функция, которая вызывает изменения состояния.
 */
export function exampleActionListGet() {
    return (dispatch: TDispatch, getState: TGetState, api: TApi) => {
        dispatch(commonActionLoadingInc());
        dispatch({type: exampleConst.listGetStart});

        return api.exampleApi.listGet().then((response: TExampleListGetResponse) => {
            if (0 === response.data.errors.length) {
                dispatch(commonActionLoadingDec());
                dispatch({
                    payload: {
                        data: response.data.data,
                    },
                    type: exampleConst.listGetSuccess,
                });

                return response;
            }

            throw response;
        }).catch((error) => {
            dispatch(commonActionLoadingDec());
            dispatch({type: exampleConst.listGetFail});

            return actionHandlerDefault(error);
        });
    };
}

const exampleReducerListGet = {
    [exampleConst.listGetFail]: (state) => ({
        ...state,
        isLoading: false,
    }),
    [exampleConst.listGetStart]: (state) => ({
        ...state,
        isLoading: true,
        list: [],
    }),
    [exampleConst.listGetSuccess]: listGetSuccess,
    [exampleConst.simple]: (state) => ({
        ...state,
        simple: !state.simple,
    }),
};

/**
 * Редьюсер - обновляет состояние в зависимости от действия.
 * @param {*} state Предыдущее состяние.
 * @param {string} type Название действия.
 * @param {*} payload Дополнительные данные для действия.
 * @returns {*} Функция для обновления состояния.
 */
export default defaultReducer(initialState, {
    ...exampleReducerListGet,
});
