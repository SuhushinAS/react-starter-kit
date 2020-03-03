import React from 'react';

export class LazyModule extends React.PureComponent {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        loading: <div>Loading...</div>,
    };

    isMount = true;

    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        const {loading, props} = this.props;
        const {Component} = this.state;

        if (Component) {
            return <Component {...props} />;
        }

        return loading;
    }

    state = {};

    /**
     * Компонент примонтировался.
     * В данный момент у нас есть возможность использовать refs,
     * а следовательно это то самое место, где мы хотели бы указать установку фокуса.
     * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
     * @return {undefined}
     */
    componentDidMount() {
        this.importComponent();
    }

    /**
     * Вызывается сразу перед тем, как компонент будет удален из DOM.
     * @return {undefined}
     */
    componentWillUnmount() {
        this.isMount = false;
    }

    importComponent() {
        const {path} = this.props;

        if (path && 'string' === typeof path) {
            import(`modules/${path}`).then(this.handleImport, this.handleError);
        } else {
            console.warn(`${path} is not correct`);
        }
    }

    handleImport = (component) => {
        if (this.isMount) {
            this.setState({Component: component.default});
        }
    };

    handleError = () => {
        console.warn(`"${this.props.path}" is not found`);
    };
}

export default LazyModule;
