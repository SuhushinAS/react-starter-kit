import {useAppSelector} from 'app/lib/hooks';
import {Api} from 'modules/common/lib/api';
import {useConfigGet} from 'modules/config/model/actions';
import {configActions} from 'modules/config/model/reducers';
import {selectConfig} from 'modules/config/model/selectors';
import {selectStatusItem} from 'modules/status/model/selectors';
import {Status} from 'modules/status/model/types';
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
