import React from 'react';

export const ConfigContext = React.createContext(undefined);

const withConfig = (Component) =>
    class ComponentWithConfig extends React.Component {
        renderComponent = (config) => config && <Component {...this.props} config={config} />;

        render() {
            return <ConfigContext.Consumer>{this.renderComponent}</ConfigContext.Consumer>;
        }
    };

export default withConfig;
