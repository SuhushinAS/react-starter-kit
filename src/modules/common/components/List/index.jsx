import React from 'react';
import './style.less';

class List extends React.Component {
    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        return <div className="list">{this.props.list.map(this.renderItem)}</div>;
    }

    /**
     * Вывести элемент.
     * @param {*} id Идентификатор.
     * @return {*} Представление.
     */
    renderItem = (id) => {
        const {ItemComponent} = this.props;

        return (
            <div className="list__item" key={id}>
                <ItemComponent id={id} />
            </div>
        );
    };
}

export default List;
