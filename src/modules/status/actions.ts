import {TDispatch} from 'app/types';
import {dispatchAction} from 'modules/common/helpers/action';
import {status} from 'modules/status/reducers';

type TLoadStop = <TD>(dispatch: TDispatch, type: string) => (data: TD) => TD;

export const loadStop: TLoadStop = (dispatch, type) => dispatchAction(dispatch, status.actions.loadStop(type));
