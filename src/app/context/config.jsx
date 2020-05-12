import React from 'react';

export const ConfigContext = React.createContext(undefined);

/**
 * Добавить конфиг.
 * @param {*} Component Компонент.
 * @return {*} Компонент с конфигом.
 */
const withConfig = (Component) =>
    class ComponentWithConfig extends React.Component {
        renderComponent = (config) => config && <Component {...this.props} config={config} />;

        /**
         * Вывести компонент.
         * @return {*} Представление.
         */
        render() {
            return <ConfigContext.Consumer>{this.renderComponent}</ConfigContext.Consumer>;
        }
    };

export default withConfig;
