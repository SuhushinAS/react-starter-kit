import {useMemo} from 'react';
import {useIntl} from 'react-intl';
import {getMessage} from 'src/modules/locale/lib/getMessage';

export const useGetMessage = (): ReturnType<typeof getMessage> => {
  const intl = useIntl();

  return useMemo(() => getMessage(intl), [intl]);
};
