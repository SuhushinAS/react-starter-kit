import {TDispatch} from 'app/types';
import {statusActions} from 'modules/status/reducers';
import {Status} from 'modules/status/types';

type TStatusSetAction = (status: Status) => (type: string) => (dispatch: TDispatch) => unknown;

export const statusSet: TStatusSetAction = (status) => (type) => (dispatch) => {
  return dispatch(statusActions.setStatus({status, type}));
};

export const statusLoading = statusSet(Status.loading);

export const statusError = statusSet(Status.error);

export const statusSuccess = statusSet(Status.success);
