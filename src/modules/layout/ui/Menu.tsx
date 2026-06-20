import { Component } from 'react';
import { MenuItem } from 'src/modules/layout/ui/MenuItem';
import './Menu.less';

type TMenuProps = {
  list: TMenuItem[];
};

type TMenuItem = {
  id: string;
  name: string;
  path: string;
};

export class Menu extends Component<TMenuProps> {
  static defaultProps = {
    list: [
      {
        id: 'example',
        name: 'Example',
        path: '/example',
      },
    ],
  };

  render() {
    return <ul className="Menu">{this.props.list.map(this.renderItem)}</ul>;
  }

  renderItem = ({ id, name, path }: TMenuItem) => (
    <li className="Menu__Item" key={id}>
      <MenuItem name={name} path={path} />
    </li>
  );
}
