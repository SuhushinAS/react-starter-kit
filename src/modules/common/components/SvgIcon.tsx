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

/**
 * Класс иконки.
 */
export class SvgIcon extends React.PureComponent<TIconProps, TIconState> {
  /**
   * Значения свойств по-умолчанию.
   * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
   */
  static defaultProps = {
    name: '',
  };
  isMount = false;
  state = {
    symbol: '',
    view: '',
    viewBox: '',
  };

  /**
   * Конструктор компонента.
   * @param props Свойства переданные в компонент.
   */
  constructor(props: TIconProps) {
    super(props);
    const {name} = props;

    if (name) {
      this.importSvg(name);
    } else {
      console.warn(`${name} is not correct`);
    }
  }

  /**
   * Компонент примонтировался.
   * В данный момент у нас есть возможность использовать refs,
   * а следовательно это то самое место, где мы хотели бы указать установку фокуса.
   * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
   */
  componentDidMount() {
    this.isMount = true;
  }

  /**
   * Вызывается сразу после render.
   * Не вызывается в момент первого render компонента.
   * @param props Предыдущие свойства.
   // * @param state Предыдущее состояние.
   */
  componentDidUpdate(props: TIconProps) {
    const {name} = this.props;
    if (name !== props.name) {
      this.importSvg(name);
    }
  }

  /**
   * Вызывается сразу перед тем, как компонент будет удален из DOM.
   */
  componentWillUnmount() {
    this.isMount = false;
  }

  /**
   * Обработать ошибку.
   */
  handleError = (): void => {
    console.warn(`${this.props.name} is not found`);
  };

  /**
   * Обработать импорт.
   * @param icon Иконка.
   */
  handleImport = (icon: TImport): void => {
    if (this.isMount) {
      this.setState({...icon.default});
    }
  };

  /**
   * Импоритровать СВГ.
   * @param name Название.
   */
  importSvg(name: string) {
    import(
      /* webpackChunkName: "icon" */
      `icons/${name}.svg`
    )
      .then(this.handleImport)
      .catch(this.handleError);
  }

  /**
   * Отображение компонента
   * @return {*} Представление компонента.
   */
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
