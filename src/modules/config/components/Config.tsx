import {useAppDispatch, useAppSelector} from 'app/hooks';
import {Api} from 'modules/common/helpers/api';
import {actionConfigGet} from 'modules/config/actions';
import {configActions} from 'modules/config/reducers';
import {selectConfig} from 'modules/config/selectors';
import {selectStatusItem} from 'modules/status/selectors';
import {Status} from 'modules/status/types';
import React, {useEffect} from 'react';

type TConfigProps = {
  children: React.ReactNode;
};

export const Config = (props: TConfigProps) => {
  const config = useAppSelector(selectConfig);
  const configStatus = useAppSelector(selectStatusItem(configActions.update.type));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (configStatus === undefined) {
      dispatch(actionConfigGet());
    }
  }, [dispatch, configStatus]);

  useEffect(() => {
    Api.host = config.host;
  }, [config]);

  if (Status.success !== configStatus) {
    return null;
  }

  return props.children;
};
