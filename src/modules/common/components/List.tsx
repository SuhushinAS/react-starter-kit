import React from 'react';
import './List.less';

type TListProps = {
  ItemComponent: any;
  list: string[];
};

/**
 * Вывести список.
 */
export class List extends React.Component<TListProps> {
  /**
   * Вывести компонент.
   * @return {*} Представление.
   */
  render() {
    return <div className="list">{this.props.list.map(this.renderItem)}</div>;
  }

  /**
   * Вывести элемент.
   * @param id Идентификатор.
   * @return {*} Представление.
   */
  renderItem = (id: string) => {
    const {ItemComponent} = this.props;

    return (
      <div className="list__item" key={id}>
        <ItemComponent id={id} />
      </div>
    );
  };
}
