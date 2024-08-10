import type {TDispatch} from 'app/types';
import {api} from 'modules/common/helpers/api';
import {configActions} from 'modules/config/reducers';
import {TConfig} from 'modules/config/types';
import {statusError, statusLoading, statusSuccess} from 'modules/status/actions';

export const actionConfigGet = () => (dispatch: TDispatch) => {
  dispatch(statusLoading(configActions.update.type));

  return api
    .requestLocal<TConfig>('/api/v1/config.json')
    .then((data) => {
      dispatch(configActions.update(data));
      dispatch(statusSuccess(configActions.update.type));
    })
    .catch(() => dispatch(statusError(configActions.update.type)));
};
