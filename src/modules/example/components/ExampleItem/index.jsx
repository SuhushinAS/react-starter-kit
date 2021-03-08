// @flow
import type {TExample} from 'modules/example/types';
import React from 'react';

type TExampleItemProps = {
    item: TExample,
};

/**
 * Функциональный компонент.
 * @param {*} props Свойства компонента.
 * @return {*} Представление.
 */
export const ExampleItem = ({item}: TExampleItemProps) => {
    // Объявляем новую переменную состояния "count"
    // const [count, setCount] = React.useState(0);

    // По принципу componentDidMount и componentDidUpdate:
    // React.useEffect(() => {
    // По принципу componentWillUnmount;
    // return () => {};
    // });

    // const config = React.useContext(Context);

    return <div>{item.name}</div>;
};

ExampleItem.defaultProps = {
    name: 'ExampleItem',
};

export default ExampleItem;
