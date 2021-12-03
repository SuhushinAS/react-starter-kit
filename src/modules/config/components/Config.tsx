import type {TDispatch} from 'app/types';
import {TState} from 'app/types';
import {Api} from 'helpers/api';
import {actionConfigGet} from 'modules/config/actions';
import {selectConfig} from 'modules/config/selectors';
import type {TConfig} from 'modules/config/types';
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

type TConfigProps = {
  children: React.ReactNode;
  config: TConfig;
  dispatch: TDispatch;
};

type TConfigState = {
  config?: TConfig;
};

/**
 * Пример компонента.
 */
export class Config extends React.Component<TConfigProps, TConfigState> {
  state;

  /**
   * Конструктор компонента.
   * @param props Свойства переданные в компонент.
   */
  constructor(props: TConfigProps) {
    super(props);
    props.dispatch(actionConfigGet());
  }

  /**
   * Вывести компонент.
   * @return {*} Представление.
   */
  render() {
    if (this.state?.config) {
      return this.props.children;
    }

    return null;
  }

  /**
   * Вызывается сразу после render.
   * Не вызывается в момент первого render компонента.
   * @param props Предыдущие свойства.
   */
  componentDidUpdate(props) {
    const {config} = this.props;

    if (props.config !== config) {
      Api.host = config.host;
      this.setState({config});
    }
  }
}

export const ConfigContainer = compose(
  connect((state: TState) => ({
    config: selectConfig(state),
  }))
)(Config);
