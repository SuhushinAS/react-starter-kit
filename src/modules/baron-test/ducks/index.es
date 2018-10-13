// @flow

import type {TApi} from 'helpers/api.es';
import {listGetSuccess} from 'helpers/ducks';
import {actionHandlerDefault, defaultReducer} from 'helpers/ducks.es';
import type {TDispatch, TGetState} from 'helpers/types.es';
import {commonActionLoadingDec, commonActionLoadingInc} from 'modules/common/ducks/index.es';
import type {TBaronTestListGetResponse, TBaronTestStore} from 'modules/baron-test/types.es';

const baronTestConst = {
    listGetFail: 'BARON-TEST__LIST-GET_FAIL',
    listGetStart: 'BARON-TEST__LIST-GET_START',
    listGetSuccess: 'BARON-TEST__LIST-GET_SUCCESS',
    simple: 'BARON-TEST__SIMPLE',
};

const initialState: TBaronTestStore = {
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
export function baronTestActionSimple() {
    return {type: baronTestConst.simple};
}

/**
 * Экшн для получения списка.
 * @returns {function(*, *, *)} Функция, которая вызывает изменения состояния.
 */
export function baronTestActionListGet() {
    return (dispatch: TDispatch, getState: TGetState, api: TApi) => {
        dispatch(commonActionLoadingInc());
        dispatch({type: baronTestConst.listGetStart});

        return api.baronTestApi.listGet().then((response: TBaronTestListGetResponse) => {
            if (0 === response.data.errors.length) {
                dispatch(commonActionLoadingDec());
                dispatch({
                    payload: {
                        data: response.data.data,
                    },
                    type: baronTestConst.listGetSuccess,
                });

                return response;
            }

            throw response;
        }).catch((error) => {
            dispatch(commonActionLoadingDec());
            dispatch({type: baronTestConst.listGetFail});

            return actionHandlerDefault(error);
        });
    };
}

const baronTestReducerListGet = {
    [baronTestConst.listGetFail]: (state) => ({
        ...state,
        isLoading: false,
    }),
    [baronTestConst.listGetStart]: (state) => ({
        ...state,
        isLoading: true,
        list: [],
    }),
    [baronTestConst.listGetSuccess]: listGetSuccess,
    [baronTestConst.simple]: (state) => ({
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
    ...baronTestReducerListGet,
});
