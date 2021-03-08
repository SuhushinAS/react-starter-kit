// @flow
import type {TDispatch} from 'app/types';
import Api from 'helpers/api';
import {actionConfigGet} from 'modules/config/actions';
import {selectConfig} from 'modules/config/selectors';
import type {TConfig} from 'modules/config/types';
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

type TConfigProps = {
    apiList: Api[],
    children: React.Node,
    config: TConfig,
    dispatch: TDispatch,
};

/**
 * Пример компонента.
 */
export class Config extends React.Component<TConfigProps> {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        apiList: [],
    };

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
     * @return {*} Представление.
     */
    render() {
        const {children, config} = this.props;

        if (config) {
            return children;
        }

        return null;
    }

    /**
     * Вызывается сразу после render.
     * Не вызывается в момент первого render компонента.
     * @param {*} props Предыдущие свойства.
     * @return {undefined}
     */
    componentDidUpdate(props) {
        if (props.config !== this.props.config) {
            this.props.apiList.forEach(this.initHost);
        }
    }

    /**
     * Инициировать хост Апи.
     * @param api Апи.
     */
    initHost = (api) => {
        api.host = this.props.config.host;
    };
}

export default compose(connect((state) => ({config: selectConfig(state)})))(Config);
