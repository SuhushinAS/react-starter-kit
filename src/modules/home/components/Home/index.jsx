import React from 'react';

/**
 * Пример компонента.
 */
export class Home extends React.Component {
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
                <h1>Header 1</h1>
                <h2>Header 2</h2>
                <h3>Header 3</h3>
                <h4>Header 4</h4>
                <h5>Header 5</h5>
                <h6>Header 6</h6>
                <p>Paragraph</p>
            </div>
        );
    }
}

export default Home;
