import type {TDispatch} from 'app/types';
import {dispatchData, normalizeListDefault} from 'helpers/action';
import {exampleApi} from 'modules/example/api';
import {exampleActions} from 'modules/example/constants';
import {loadStop} from 'modules/status/actions';
import {status} from 'modules/status/reducers';

/**
 * Получить список.
 * @return {*} Список.
 */
export const actionExampleListGet = () => (dispatch: TDispatch) => {
  dispatch(status.actions.loadStart(exampleActions.listGet));
  return exampleApi
    .listGet()
    .then(normalizeListDefault)
    .then(dispatchData(dispatch, exampleActions.listGet))
    .then(loadStop(dispatch, exampleActions.listGet));
};
