// @flow
import React from 'react';

type THomeProps = {};

/**
 * Пример компонента.
 */
export class Home extends React.Component<THomeProps> {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {};

    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        return (
            <div className="home">
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;
