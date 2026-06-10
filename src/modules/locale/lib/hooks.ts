import {getMessage} from 'src/modules/locale/lib/helpers';
import {useMemo} from 'react';
import {useIntl} from 'react-intl';

export const useGetMessage = (): ReturnType<typeof getMessage> => {
  const intl = useIntl();

  return useMemo(() => getMessage(intl), [intl]);
};
