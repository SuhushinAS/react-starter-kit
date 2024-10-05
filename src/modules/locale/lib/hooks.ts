import {getMessage} from 'modules/locale/lib/helpers';
import {TMessage} from 'modules/locale/model/types';
import {useMemo} from 'react';
import {useIntl} from 'react-intl';

export const useMessage = (): TMessage => {
  const intl = useIntl();

  return useMemo(() => getMessage(intl), [intl]);
};
