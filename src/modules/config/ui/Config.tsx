import { ReactNode, useEffect } from 'react';
import { useAppSelector } from 'src/app/lib/hooks';
import { Api } from 'src/modules/common/lib/api';
import { useConfigGet } from 'src/modules/config/lib/actions';
import { configActions } from 'src/modules/config/lib/reducers';
import { selectConfig } from 'src/modules/config/lib/selectors';
import { selectStatusItem } from 'src/modules/status/lib/selectors';
import { Status } from 'src/modules/status/lib/types';

type TConfigProps = {
  children: ReactNode;
};

export const Config = (props: TConfigProps) => {
  const config = useAppSelector(selectConfig);
  const configStatus = useAppSelector(selectStatusItem(configActions.update.type));
  const configGet = useConfigGet();

  useEffect(() => {
    if (configStatus === undefined) {
      configGet();
    }
  }, [configGet, configStatus]);

  useEffect(() => {
    Api.host = config.host;
  }, [config]);

  if (Status.success !== configStatus) {
    return null;
  }

  return props.children;
};
