// @flow
import type {TDispatch} from 'app/types';
import {dispatchData, normalizeListDefault} from 'helpers/action';
import {exampleApi} from 'modules/example/api';
import {exampleActions} from 'modules/example/constants';
import {actionLoadStart, dispatchLoadStop} from 'modules/load/actions';

/**
 * Получить список.
 * @return {*} Список.
 */
export const actionExampleListGet = () => (dispatch: TDispatch) => {
    dispatch(actionLoadStart(exampleActions.listGet));
    return exampleApi
        .listGet()
        .then(normalizeListDefault)
        .then(dispatchData(dispatch, exampleActions.listGet))
        .then(dispatchLoadStop(dispatch, exampleActions.listGet));
};
