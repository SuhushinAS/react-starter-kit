import baron from 'baron';
import React from 'react';
import './style.less';

type TScrollProps = {
  children: React.ReactNode;
  direction: string;
};

const msOverflowStyleKey = 'msOverflowStyle';

/**
 * Получить размер скролла.
 * @return {number} Размер скролла.
 */
function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style[msOverflowStyleKey] = 'scrollbar';
  document.body.appendChild(outer);

  const inner = document.createElement('div');
  outer.appendChild(inner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  const {parentNode} = outer;

  if (parentNode) {
    parentNode.removeChild(outer);
  }

  return scrollbarWidth;
}

const scrollbarWidth = getScrollbarWidth();

const needCustomScrollbar = 0 !== scrollbarWidth;

/**
 * Пример компонента.
 */
export class Scroll extends React.Component<TScrollProps> {
  /**
   * Значения свойств по-умолчанию.
   * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
   */
  static defaultProps = {
    direction: 'v',
  };

  baron: baron;

  scrollRef = React.createRef<HTMLDivElement>();

  /**
   * Вывести компонент.
   * @return {JSX.Element} Представление.
   */
  render() {
    const {children, direction} = this.props;

    return (
      <div className={`scroll scroll_${direction}`} ref={this.scrollRef}>
        <div className="scroll__scroller">{children}</div>
        <div className={`scroll__track scroll__track_${direction}`}>
          <div className={`scroll__bar scroll__bar_${direction}`} />
        </div>
      </div>
    );
  }

  /**
   * Компонент примонтировался.
   * В данный момент у нас есть возможность использовать refs,
   * а следовательно это то самое место, где мы хотели бы указать установку фокуса.
   * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
   * @return {undefined}
   */
  componentDidMount() {
    if (needCustomScrollbar) {
      const {direction} = this.props;

      this.baron = baron({
        bar: '.scroll__bar',
        direction,
        impact: 'scroller',
        root: this.scrollRef.current,
        scroller: '.scroll__scroller',
        track: '.scroll__track',
      });
    }
  }

  /**
   * Вызывается сразу перед тем, как компонент будет удален из DOM.
   * @return {undefined}
   */
  componentWillUnmount() {
    if (this.baron) {
      this.baron.dispose();
    }
  }

  /**
   * Вызывается сразу после render.
   * Не вызывается в момент первого render компонента.
   * @return {undefined}
   */
  componentDidUpdate() {
    if (this.baron) {
      this.baron.update();
    }
  }
}
