import {useAppSelector} from 'app/lib/hooks';
import {
  useLocaleCurrent,
  useLocaleSetCurrent,
} from 'modules/locale/model/actions';
import {selectLocaleList} from 'modules/locale/model/selectors';
import React, {useCallback} from 'react';

const renderLocaleOption = (locale: string) => (
  <option key={locale} value={locale}>
    {locale}
  </option>
);

export const LocaleSelectorContainer = () => {
  const localeCurrent = useLocaleCurrent();
  const localeList = useAppSelector(selectLocaleList);
  const localeSetCurrent = useLocaleSetCurrent();

  const onLocaleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      localeSetCurrent(event.target.value || '');
    },
    [localeSetCurrent]
  );

  return (
    <select name="locale" onChange={onLocaleChange} value={localeCurrent}>
      {localeList.map(renderLocaleOption)}
    </select>
  );
};
