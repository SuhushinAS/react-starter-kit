// @flow

import type {TExample} from 'modules/example/types.js';
import React from 'react';

type TExampleListProps = {
    exampleList: TExample[],
};

/**
 * Пример компонента.
 * @param {*} props Свойства компонента.
 * @return {*} Представление компонента.
 */
export default function ExampleList(props: TExampleListProps) {
    const {exampleList} = props;

    if (0 < exampleList.length) {
        return (
            <ul>
                {exampleList.map(renderExampleItem)}
            </ul>
        );
    }

    return null;
}

/**
 * Вывод одного элемента.
 * @param {*} item Данные элемента.
 * @return {*} Представление элемента.
 */
function renderExampleItem(item) {
    return (
        <li key={item.id}>{item.name}</li>
    );
}
