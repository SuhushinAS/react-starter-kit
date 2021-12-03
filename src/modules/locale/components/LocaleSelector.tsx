import {useAppDispatch, useAppSelector} from 'app/hooks';
import {actionLocaleSetCurrent} from 'modules/locale/actions';
import {selectLocaleCurrent, selectLocaleList} from 'modules/locale/selectors';
import React, {useCallback} from 'react';

/**
 * Вывести вариант локали.
 * @param {*} locale Локаль
 * @return {JSX.Element} вариант локали.
 */
const renderLocaleOption = (locale: string) => (
  <option key={locale} value={locale}>
    {locale}
  </option>
);

/**
 * Компонент.
 * @return {*} Представление.
 */
export const LocaleSelectorContainer = () => {
  const dispatch = useAppDispatch();
  const localeCurrent = useAppSelector(selectLocaleCurrent);
  const localeList = useAppSelector(selectLocaleList);

  const onLocaleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(actionLocaleSetCurrent(event.target.value || ''));
    },
    [dispatch]
  );

  return (
    <select name="locale" onChange={onLocaleChange} value={localeCurrent}>
      {localeList.map(renderLocaleOption)}
    </select>
  );
};
