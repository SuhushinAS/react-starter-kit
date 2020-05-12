// import {ConfigContext} from 'app/context/config';
import {selectExampleItem} from 'modules/example/selectors';
import React from 'react';
import {connect} from 'react-redux';

/**
 * Функциональный компонент.
 * @param {*} props Свойства компонента.
 * @return {*} Представление.
 */
export const ExampleItem = ({exampleItem}) => {
    // Объявляем новую переменную состояния "count"
    // const [count, setCount] = React.useState(0);

    // По принципу componentDidMount и componentDidUpdate:
    // React.useEffect(() => {
    // По принципу componentWillUnmount;
    // return () => {};
    // });

    // const config = React.useContext(ConfigContext);

    return <div>{exampleItem.name}</div>;
};

ExampleItem.defaultProps = {
    name: 'ExampleItem',
};

export default connect((state, {id}) => ({
    exampleItem: selectExampleItem(state, id),
}))(ExampleItem);
