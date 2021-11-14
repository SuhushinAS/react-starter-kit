import React from 'react';
import './style.less';

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
   * @return {JSX.Element} Представление.
   */
  render() {
    return <div className="list">{this.props.list.map(this.renderItem)}</div>;
  }

  /**
   * Вывести элемент.
   * @param {*} id Идентификатор.
   * @return {JSX.Element} Представление.
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
