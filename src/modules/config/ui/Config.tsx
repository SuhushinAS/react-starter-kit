import { ReactNode, useEffect } from 'react';
import { useAppSelector } from 'src/app/lib/hooks';
import { useConfigGet } from 'src/modules/config/lib/actions';
import { configActions } from 'src/modules/config/lib/reducers';
import { selectStatusItem } from 'src/modules/status/lib/selectors';
import { Status } from 'src/modules/status/lib/types';

type TConfigProps = {
  children: ReactNode;
};

export const Config = ({ children }: TConfigProps) => {
  const configStatus = useAppSelector(selectStatusItem(configActions.update.type));
  const configGet = useConfigGet();

  useEffect(() => {
    if (configStatus === undefined) {
      configGet();
    }
  }, [configGet, configStatus]);

  if (Status.success !== configStatus) {
    return null;
  }

  return children;
};
