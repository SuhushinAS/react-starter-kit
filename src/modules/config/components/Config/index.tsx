import {TState} from 'app/types';
import type {TDispatch} from 'app/types';
import Api from 'helpers/api';
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
    /**
     * Конструктор компонента.
     * @param {*} props Свойства переданные в компонент.
     * @return {undefined}
     */
    constructor(props: TConfigProps) {
        super(props);
        props.dispatch(actionConfigGet());
    }

    /**
     * Вывести компонент.
     * @return {JSX.Element} Представление.
     */
    render() {
        const {children} = this.props;
        const {config} = this.state || {};

        if (config) {
            return children;
        }

        return null;
    }

    state;

    /**
     * Вызывается сразу после render.
     * Не вызывается в момент первого render компонента.
     * @param {*} props Предыдущие свойства.
     * @return {undefined}
     */
    componentDidUpdate(props) {
        const {config} = this.props;
        if (props.config !== config) {
            Api.host = config.host;
            this.setState({config});
        }
    }
}

export default compose(connect((state: TState) => ({config: selectConfig(state)})))(Config);
