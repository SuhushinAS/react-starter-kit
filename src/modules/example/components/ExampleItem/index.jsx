// @flow

import type {TExample} from 'modules/example/types.js';
import React from 'react';

type TExampleListProps = {
    item: TExample,
};

/**
 * Пример компонента.
 * @param {*} props Свойства компонента.
 * @return {*} Представление компонента.
 */
export default function ExampleItem(props: TExampleListProps) {
    const {item} = props;
    return <li key={item.id}>{item.name}</li>;
}

ExampleItem.defaultProps = {
    item: {
        id: 0,
        name: '',
    },
};
