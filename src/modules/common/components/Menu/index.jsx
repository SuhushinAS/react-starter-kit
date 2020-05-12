import MenuItem from 'modules/common/components/MenuItem';
import React from 'react';
import './style.less';

/**
 * Меню.
 */
export class Menu extends React.Component {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        list: [],
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
    renderItem = ({id, name, path}) => (
        <li className="menu__item" key={id}>
            <MenuItem name={name} path={path} />
        </li>
    );
}

export default Menu;
