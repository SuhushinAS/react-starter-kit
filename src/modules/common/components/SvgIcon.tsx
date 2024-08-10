import React from 'react';
import './SvgIcon.less';

type TIconProps = {
  name: string;
};

type TIconState = TIcon;

type TImport = {
  default: TIcon;
};

type TIcon = {
  symbol: string;
  toString: any;
  view: string;
  viewBox: string;
};

export class SvgIcon extends React.PureComponent<TIconProps, TIconState> {
  static defaultProps = {
    name: '',
  };
  isMount = false;
  state = {
    symbol: '',
    view: '',
    viewBox: '',
  };

  constructor(props: TIconProps) {
    super(props);
    const {name} = props;

    if (name) {
      this.importSvg(name);
    } else {
      console.warn(`${name} is not correct`);
    }
  }

  componentDidMount() {
    this.isMount = true;
  }

  componentDidUpdate(props: TIconProps) {
    const {name} = this.props;
    if (name !== props.name) {
      this.importSvg(name);
    }
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  onError = (): void => {
    console.warn(`${this.props.name} is not found`);
  };

  onImport = (icon: TImport): void => {
    if (this.isMount) {
      this.setState({...icon.default});
    }
  };

  importSvg(name: string) {
    import(
      /* webpackChunkName: "icon" */
      `icons/${name}.svg`
    )
      .then(this.onImport)
      .catch(this.onError);
  }

  render() {
    const {symbol, viewBox} = this.state;

    if (symbol) {
      return (
        <svg className="svg-icon" viewBox={viewBox}>
          <use xlinkHref={symbol} />
        </svg>
      );
    }

    return null;
  }
}
