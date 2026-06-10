import {useAppDispatch} from 'src/app/lib/hooks';
import {statusActions} from 'src/modules/status/model/reducers';
import {Status} from 'src/modules/status/model/types';
import {useCallback} from 'react';

export const useStatusSet = (type: string) => {
  const dispatch = useAppDispatch();

  return useCallback(
    (status: Status) => {
      return dispatch(statusActions.setStatus({status, type}));
    },
    [dispatch, type]
  );
};
