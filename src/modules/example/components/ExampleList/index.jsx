// @flow
import Item from 'modules/example/components/ExampleItem/index.jsx';
import type {TExample} from 'modules/example/types.js';
import React from 'react';

type TExampleListProps = {
    list: TExample[],
};

/**
 * Пример компонента.
 * @param {*} props Свойства компонента.
 * @return {*} Представление компонента.
 */
export default function ExampleList(props: TExampleListProps) {
    return (
        <ul>
            {props.list.map((item) => (
                <Item item={item} key={item.id} />
            ))}
        </ul>
    );
}

ExampleList.defaultProps = {
    list: [],
};
