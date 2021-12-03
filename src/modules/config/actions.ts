import type {TDispatch} from 'app/types';
import {dispatchData} from 'helpers/action';
import {configApi} from 'modules/config/api';
import {configActions} from 'modules/config/constants';
import {loadStop} from 'modules/status/actions';
import {status} from 'modules/status/reducers';

/**
 * Получить список.
 * @return {*} Список.
 */
export const actionConfigGet = () => (dispatch: TDispatch) => {
  dispatch(status.actions.loadStart(configActions.update));

  return configApi.get().then(dispatchData(dispatch, configActions.update)).then(loadStop(dispatch, configActions.update));
};
