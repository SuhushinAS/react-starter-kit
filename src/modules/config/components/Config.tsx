import type {TDispatch} from 'app/types';
import {TState} from 'app/types';
import {Api} from 'modules/common/helpers/api';
import {actionConfigGet} from 'modules/config/actions';
import {selectConfig} from 'modules/config/selectors';
import type {TConfig} from 'modules/config/types';
import React from 'react';
import {connect} from 'react-redux';

type TConfigProps = {
  children: React.ReactNode;
  config: TConfig;
  dispatch: TDispatch;
};

export class ConfigComponent extends React.Component<TConfigProps, TConfig> {
  state;

  constructor(props: TConfigProps) {
    super(props);
    props.dispatch(actionConfigGet());
  }

  render() {
    if (this.state) {
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
      this.setState(config);
    }
  }
}

export const Config = connect((state: TState) => ({config: selectConfig(state)}))(ConfigComponent);
