import React from 'react';
import './List.less';

type TListProps = {
  ItemComponent: any;
  list: string[];
};

export class List extends React.Component<TListProps> {
  render() {
    return <div className="list">{this.props.list.map(this.renderItem)}</div>;
  }

  renderItem = (id: string) => {
    const {ItemComponent} = this.props;

    return (
      <div className="list__item" key={id}>
        <ItemComponent id={id} />
      </div>
    );
  };
}
