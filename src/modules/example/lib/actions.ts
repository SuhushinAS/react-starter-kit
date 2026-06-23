import { useCallback } from 'react';
import { useAppDispatch } from 'src/app/lib/hooks';
import { useRequestLocal } from 'src/modules/common/lib/api';
import { exampleActions } from 'src/modules/example/lib/reducers';
import { TExample } from 'src/modules/example/lib/types';
import { useStatusSet } from 'src/modules/status/lib/actions';
import { Status } from 'src/modules/status/lib/types';

export const useExampleGetList = () => {
  const dispatch = useAppDispatch();
  const exampleGetListStatusSet = useStatusSet(exampleActions.getList.type);
  const requestLocal = useRequestLocal();

  return useCallback(() => {
    exampleGetListStatusSet(Status.loading);

    requestLocal<TExample[]>('/api/v1/example.json')
      .then((data) => {
        dispatch(exampleActions.getList(data));
        exampleGetListStatusSet(Status.success);
      })
      .catch(() => {
        exampleGetListStatusSet(Status.error);
      });
  }, [dispatch, exampleGetListStatusSet, requestLocal]);
};
