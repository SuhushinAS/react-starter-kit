import { useCallback } from 'react';
import { useAppDispatch } from 'src/app/lib/hooks';
import { api } from 'src/modules/common/lib/api';
import { configActions } from 'src/modules/config/lib/reducers';
import { TConfig } from 'src/modules/config/lib/types';
import { useStatusSet } from 'src/modules/status/lib/actions';
import { Status } from 'src/modules/status/lib/types';

export const useConfigGet = () => {
  const dispatch = useAppDispatch();
  const configUpdateStatusSet = useStatusSet(configActions.update.type);

  return useCallback(() => {
    configUpdateStatusSet(Status.loading);

    api
      .requestLocal<TConfig>('/api/v1/config.json')
      .then((data) => {
        dispatch(configActions.update(data));
        configUpdateStatusSet(Status.success);
      })
      .catch(() => {
        configUpdateStatusSet(Status.error);
      });
  }, [configUpdateStatusSet, dispatch]);
};
