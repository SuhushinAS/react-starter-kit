import {TDispatch} from 'app/types';
import {api} from 'modules/common/helpers/api';
import {exampleActions} from 'modules/example/reducers';
import {TExample} from 'modules/example/types';
import {statusError, statusLoading, statusSuccess} from 'modules/status/actions';

export const actionExampleGetList = (dispatch: TDispatch) => {
  dispatch(statusLoading(exampleActions.getList.type));

  return api
    .requestLocal<TExample[]>('/api/v1/example.json')
    .then((data) => {
      dispatch(exampleActions.getList(data));
      dispatch(statusSuccess(exampleActions.getList.type));
    })
    .catch(() => dispatch(statusError(exampleActions.getList.type)));
};
