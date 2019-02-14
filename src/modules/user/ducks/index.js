// @flow

import type {TApi} from 'app/api.js';
import {createReducer} from 'app/reducer.js';
import type {TDispatch, TGetState} from 'app/types.js';
import {commonActionLoadingDec, commonActionLoadingInc} from 'modules/common/ducks/index.js';
import type {TUserListGetResponse, TUserStore} from 'modules/user/types.js';

const userConst = {
    listGet: 'USER__LIST-GET',
    loadStart: 'USER__LOAD_START',
    loadStop: 'USER__LOAD_STOP',
    update: 'USER__LOAD_UPDATE',
};

const initialState: TUserStore = {
    data: {},
    isLoading: false,
    more: true,
};

/**
 * Редактировать данные.
 * @param {*} id Идентификатор.
 * @param {*} data Данные.
 * @return {*} Данные для редьюсера.
 */
export function userActionEdit(id, data) {
    return (dispatch: TDispatch, getState: TGetState, api: TApi) => {
        dispatch(commonActionLoadingInc());
        dispatch({type: userConst.loadStart});

        return api.userApi.update(id, data).then((response: TUserListGetResponse) => {
            if (0 === response.errors.length) {
                dispatch(commonActionLoadingDec());
                dispatch({
                    payload: data,
                    type: userConst.update,
                });

                return response;
            }

            throw new Error(response);
        }).catch((error) => {
            dispatch(commonActionLoadingDec());
            dispatch({type: userConst.loadStop});

            console.error(error);
        });
    };
}

/**
 * Получить список.
 * @return {*} Данные для редьюсера.
 */
export function userActionListGet() {
    return (dispatch: TDispatch, getState: TGetState, api: TApi) => {
        dispatch(commonActionLoadingInc());
        dispatch({type: userConst.loadStart});

        return api.userApi.listGet().then((response: TUserListGetResponse) => {
            if (0 === response.errors.length) {
                dispatch(commonActionLoadingDec());
                dispatch({
                    payload: response.data,
                    type: userConst.listGet,
                });

                return response;
            }

            throw new Error(response);
        }).catch((error) => {
            dispatch(commonActionLoadingDec());
            dispatch({type: userConst.loadStop});

            console.error(error);
        });
    };
}

export default createReducer(initialState, {
    [userConst.listGet](state, {list, more}) {
        return {
            ...state,
            data: list.reduce((prev, item) => ({
                ...prev,
                [item.id]: item,
            }), {}),
            isLoading: false,
            more,
        };
    },
    [userConst.loadStart](state) {
        return {
            ...state,
            isLoading: true,
        };
    },
    [userConst.loadStop](state) {
        return {
            ...state,
            isLoading: false,
        };
    },
    [userConst.update](state, payload) {
        return {
            ...state,
            data: {
                ...state.data,
                [payload.id]: payload,
            },
            isLoading: false,
        };
    },
});
