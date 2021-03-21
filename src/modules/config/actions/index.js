// @flow
import type {TDispatch} from 'app/types';
import {dispatchData} from 'helpers/action';
import {configApi} from 'modules/config/api';
import {configActions} from 'modules/config/constants';
import {actionLoadStart, dispatchLoadStop} from 'modules/load/actions';

/**
 * Получить список.
 * @return {*} Список.
 */
export const actionConfigGet = () => (dispatch: TDispatch) => {
    dispatch(actionLoadStart(configActions.update));
    return configApi
        .get()
        .then(dispatchData(dispatch, configActions.update))
        .then(dispatchLoadStop(dispatch, configActions.update));
};
