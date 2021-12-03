import {dispatchData} from 'modules/common/helpers/action';
import {api} from 'modules/common/helpers/api';
import {TAction} from 'modules/common/types';
import {example} from 'modules/example/reducers';
import {TExample} from 'modules/example/types';
import {loadStop} from 'modules/status/actions';
import {status} from 'modules/status/reducers';

/**
 * Получить список.
 * @param dispatch Диспатч.
 * @return {*} Список.
 */
export const actionExampleGetList: TAction<TExample[]> = (dispatch) => {
  dispatch(status.actions.loadStart(example.actions.getList.type));

  return api
    .requestLocal<TExample[]>('/api/v1/example.json')
    .then(dispatchData(dispatch, example.actions.getList))
    .then(loadStop(dispatch, example.actions.getList.type));
};
