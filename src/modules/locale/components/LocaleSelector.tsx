import type {TDispatch} from 'app/types';
import {TState} from 'app/types';
import {actionLocaleSetCurrent} from 'modules/locale/actions';
import {selectLocaleCurrent, selectLocaleList} from 'modules/locale/selectors';
import React from 'react';
import {connect} from 'react-redux';

type TLocaleSelectorProps = {
  dispatch: TDispatch;
  localeCurrent: string;
  localeList: string[];
};

/**
 * Пример компонента.
 */
export class LocaleSelector extends React.Component<TLocaleSelectorProps> {
  /**
   * Вывести компонент.
   * @return {*} Представление.
   */
  render() {
    const {localeCurrent, localeList} = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/no-onchange
      <select defaultValue={localeCurrent} name="locale" onChange={this.onLocaleChange}>
        {localeList.map(this.renderLocaleOption)}
      </select>
    );
  }

  /**
   * Вывести вариант локали.
   * @param locale Локаль
   * @return {*} Вариант локали.
   */
  renderLocaleOption = (locale) => (
    <option key={locale} value={locale}>
      {locale}
    </option>
  );

  /**
   * Обработать изменение локали.
   * @param e Событие.
   */
  onLocaleChange = (e) => {
    this.props.dispatch(actionLocaleSetCurrent(e.target.value));
  };
}

export const LocaleSelectorContainer = connect((state: TState) => ({
  localeCurrent: selectLocaleCurrent(state),
  localeList: selectLocaleList(state),
}))(LocaleSelector);
