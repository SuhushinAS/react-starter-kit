import {ConfigContext} from 'app/context/config';
import Api from 'modules/common/helpers/api';
import React from 'react';

/**
 * Провайдер конфигурации.
 */
export class ConfigProvider extends React.Component {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        path: '/api/v1/config',
    };

    /**
     * Конструктор компонента.
     * @param {*} props Свойства переданые в компонент.
     * @return {undefined}
     */
    constructor(props) {
        super(props);
        this.api.request(props.path).then(this.handleGetConfig);
    }

    api = new Api();

    /**
     * Обработать получение Конфигурации.
     * @param {*} config Конфигурация.
     */
    handleGetConfig = (config) => {
        this.setState({config});
    };

    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        const {config} = this.state;

        return <ConfigContext.Provider value={config}>{config && this.props.children}</ConfigContext.Provider>;
    }

    state = {
        config: undefined,
    };
}

export default ConfigProvider;
