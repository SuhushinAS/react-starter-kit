import {useAppDispatch} from 'src/app/lib/hooks';
import {api} from 'src/modules/common/lib/api';
import {exampleActions} from 'src/modules/example/lib/reducers';
import {TExample} from 'src/modules/example/lib/types';
import {useStatusSet} from 'src/modules/status/lib/actions';
import {Status} from 'src/modules/status/lib/types';
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
