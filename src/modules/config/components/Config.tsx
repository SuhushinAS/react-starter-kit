import {useAppSelector} from 'src/app/lib/hooks';
import {Api} from 'src/modules/common/lib/api';
import {useConfigGet} from 'src/modules/config/model/actions';
import {configActions} from 'src/modules/config/model/reducers';
import {selectConfig} from 'src/modules/config/model/selectors';
import {selectStatusItem} from 'src/modules/status/model/selectors';
import {Status} from 'src/modules/status/model/types';
import React, {useEffect} from 'react';

type TConfigProps = {
  children: React.ReactNode;
};

export const Config = (props: TConfigProps) => {
  const config = useAppSelector(selectConfig);
  const configStatus = useAppSelector(
    selectStatusItem(configActions.update.type)
  );
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
