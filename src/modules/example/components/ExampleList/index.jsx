// @flow

import type {ExampleType} from 'modules/example/types.es';
import * as React from 'react';

type ExampleListTypeProps = {
    exampleList: ExampleType[],
};

/**
 * Пример компонента.
 * @param {*} props Свойства компонента.
 * @return {*} Представление компонента.
 */
export default function ExampleList(props: ExampleListTypeProps) {
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
