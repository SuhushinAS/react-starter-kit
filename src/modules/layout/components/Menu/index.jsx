// @flow
import MenuItem from 'modules/layout/components/MenuItem';
import React from 'react';
import 'modules/layout/components/Menu/style.less';

type TMenuProps = {
    list: TMenuItem[],
};

type TMenuItem = {
    id: string,
    name: string,
    path: string,
};

/**
 * Меню.
 */
export class Menu extends React.Component<TMenuProps> {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        list: [
            {
                id: 'example',
                name: 'Example',
                path: '/example',
            },
        ],
    };

    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        return <ul className="menu">{this.props.list.map(this.renderItem)}</ul>;
    }

    /**
     * Вывести элемент.
     * @param {*} id Идентификатор.
     * @param {*} name Название.
     * @param {*} path Путь.
     * @return {*} Представление.
     */
    renderItem = ({id, name, path}: TMenuItem) => (
        <li className="menu__item" key={id}>
            <MenuItem name={name} path={path} />
        </li>
    );
}

export default Menu;
