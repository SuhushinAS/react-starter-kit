import type {TDispatch} from 'app/types';
import {dispatchData} from 'modules/common/helpers/action';
import {api} from 'modules/common/helpers/api';
import {config} from 'modules/config/redux';
import {TConfig} from 'modules/config/types';
import {loadStop} from 'modules/status/actions';
import {status} from 'modules/status/reducers';

export const actionConfigGet = () => (dispatch: TDispatch) => {
  dispatch(status.actions.loadStart(config.actions.update.type));

  return api
    .requestLocal<TConfig>('/api/v1/config.json')
    .then(dispatchData(dispatch, config.actions.update))
    .then(loadStop(dispatch, config.actions.update.type));
};
