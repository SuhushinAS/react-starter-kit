// @flow

import type {TBaronTest} from 'modules/baron-test/types.es';
import * as React from 'react';

type TBaronTestListProps = {
    baronTestList: TBaronTest[],
};

/**
 * Пример компонента.
 * @param {*} props Свойства компонента.
 * @return {*} Представление компонента.
 */
export default function BaronTestList(props: TBaronTestListProps) {
    const {baronTestList} = props;

    if (0 < baronTestList.length) {
        return (
            <ul>
                {baronTestList.map(renderBaronTestItem)}
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
function renderBaronTestItem(item) {
    return (
        <li key={item.id}>{item.name}</li>
    );
}
