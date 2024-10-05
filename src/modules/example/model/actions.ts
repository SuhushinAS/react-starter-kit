import {useAppDispatch} from 'app/lib/hooks';
import {api} from 'modules/common/lib/api';
import {exampleActions} from 'modules/example/model/reducers';
import {TExample} from 'modules/example/model/types';
import {useStatusSet} from 'modules/status/model/actions';
import {Status} from 'modules/status/model/types';
import {useCallback} from 'react';

export const useExampleGetList = () => {
  const dispatch = useAppDispatch();
  const exampleGetListStatusSet = useStatusSet(exampleActions.getList.type);

  return useCallback(() => {
    exampleGetListStatusSet(Status.loading);

    api
      .requestLocal<TExample[]>('/api/v1/example.json')
      .then((data) => {
        dispatch(exampleActions.getList(data));
        exampleGetListStatusSet(Status.success);
      })
      .catch(() => {
        exampleGetListStatusSet(Status.error);
      });
  }, [dispatch, exampleGetListStatusSet]);
};
