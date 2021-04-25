// @flow
import type {TExample} from 'modules/example/types';
import React from 'react';

type TExampleItemProps = {
    item: TExample,
};

/**
 * Функциональный компонент.
 * @param {*} props Свойства компонента.
 * @return {JSX.Element} Представление.
 */
export const ExampleItem = ({item}: TExampleItemProps) => <div>{item.name}</div>;

ExampleItem.defaultProps = {
    name: 'ExampleItem',
};

export default ExampleItem;
