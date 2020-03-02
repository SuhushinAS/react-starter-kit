// @flow
import type {TApi} from 'app/api.js';
import {createReducer} from 'app/reducer.js';
import type {TDispatch, TGetState} from 'app/types.js';
import {commonActionLoadingDec, commonActionLoadingInc} from 'modules/common/ducks/index.js';
import type {TExampleListGetResponse, TExampleStore} from 'modules/example/types.js';

const exampleConst = {
    listGet: 'EXAMPLE__LIST-GET',
    loadStart: 'EXAMPLE__LOAD_START',
    loadStop: 'EXAMPLE__LOAD_STOP',
};

const initialState: TExampleStore = {
    data: {},
    isLoading: false,
    more: true,
};

/**
 * Получить список.
 * @return {*} Данные для редьюсера.
 */
export function exampleActionListGet() {
    return (dispatch: TDispatch, getState: TGetState, api: TApi) => {
        dispatch(commonActionLoadingInc());
        dispatch({type: exampleConst.loadStart});

        return api.exampleApi
            .listGet()
            .then((response: TExampleListGetResponse) => {
                if (0 === response.errors.length) {
                    dispatch(commonActionLoadingDec());
                    dispatch({
                        payload: response.data,
                        type: exampleConst.listGet,
                    });

                    return response;
                }

                throw new Error(response);
            })
            .catch((error) => {
                dispatch(commonActionLoadingDec());
                dispatch({type: exampleConst.loadStop});

                console.error(error);
            });
    };
}

export default createReducer(initialState, {
    [exampleConst.listGet](state, {list, more}) {
        return {
            ...state,
            data: list.reduce(
                (prev, item) => ({
                    ...prev,
                    [item.id]: item,
                }),
                {}
            ),
            isLoading: false,
            more,
        };
    },
    [exampleConst.loadStart](state) {
        return {
            ...state,
            isLoading: true,
        };
    },
    [exampleConst.loadStop](state) {
        return {
            ...state,
            isLoading: false,
        };
    },
});
