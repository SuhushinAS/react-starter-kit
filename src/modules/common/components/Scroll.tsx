import baron from 'baron';
import {debounce} from 'modules/common/helpers/debounce';
import React, {ReactNode} from 'react';
import './Scroll.less';

type TScrollProps = {
  children: ReactNode;
  dirList: TDirection[];
};

type TDirection = 'h' | 'v';

/**
 * Получить размер скролла.
 * @return {*} Размер скролла.
 */
function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.setProperty('msOverflowStyle', 'scrollbar');
  document.body.appendChild(outer);

  const inner = document.createElement('div');
  outer.appendChild(inner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  if (outer.parentNode) {
    outer.parentNode.removeChild(outer);
  }

  return scrollbarWidth;
}

const scrollbarWidth = getScrollbarWidth();

const needCustomScrollbar = 0 !== scrollbarWidth;

/**
 * Получить ключ для бара.
 * @param dir Направление.
 * @return {*} Ключ для бара.
 */
function getBarKey(dir) {
  return `bar_${dir}`;
}

/**
 * Получить ключ для трека.
 * @param dir Направление.
 * @return {*} Ключ для трека.
 */
function getTrackKey(dir) {
  return `track_${dir}`;
}

/**
 * Компонент скролла
 */
export class Scroll extends React.Component<TScrollProps> {
  instanceList: baron[] = [];
  isMount = false;
  references = {
    scroll: React.createRef<HTMLDivElement>(),
    scroller: React.createRef<HTMLDivElement>(),
  };

  /**
   * Конструктор компонента.
   * @param props Свойства переданые в компонент.
   */
  constructor(props: TScrollProps) {
    super(props);
    this.references = this.props.dirList.reduce(this.referencesInit, this.references);
  }

  /**
   * Инициировать рефы для скроллбаров.
   * @param acc Аккумулятор.
   * @param dir Направление.
   * @return {*} Рефы для скроллбаров.
   */
  referencesInit = (acc, dir) => ({
    ...acc,
    [getBarKey(dir)]: React.createRef<HTMLDivElement>(),
    [getTrackKey(dir)]: React.createRef<HTMLDivElement>(),
  });

  /**
   * Вывести компонент.
   * @return {*} Представление.
   */
  render() {
    return (
      <div className="scroll" ref={this.references.scroll}>
        <div className="scroll__scroller" ref={this.references.scroller}>
          {this.props.children}
        </div>
        {this.props.dirList.map(this.renderScrollbar)}
      </div>
    );
  }

  /**
   * Вывести скролл.
   * @param dir Направление.
   * @return {*} Скролл.
   */
  renderScrollbar = (dir) => (
    <div className={`scroll__track scroll__track_${dir}`} key={dir} ref={this.references[getTrackKey(dir)]}>
      <div className={`scroll__bar scroll__bar_${dir}`} ref={this.references[getBarKey(dir)]} />
    </div>
  );

  /**
   * Компонент примонтировался.
   * В данный момент у нас есть возможность использовать refs,
   * а следовательно это то самое место, где мы хотели бы указать установку фокуса.
   * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
   */
  componentDidMount() {
    if (needCustomScrollbar) {
      this.instanceList = this.props.dirList.map(this.scrollInit);
      this.isMount = true;
      this.updateOnLayoutChange();
    }
  }

  /**
   * Инициировать скролл.
   * @param dir Направление.
   * @return {*} Скролл.
   */
  scrollInit = (dir) =>
    baron({
      bar: this.references[getBarKey(dir)].current,
      barOnCls: `scroll_on_${dir}`,
      direction: dir,
      impact: 'scroller',
      root: this.references.scroll.current,
      scroller: this.references.scroller.current,
      track: this.references[getTrackKey(dir)].current,
    });

  updateOnLayoutChange = debounce(() => {
    if (this.isMount) {
      this.instanceList.forEach(this.update);
    }
  }, 300);

  /**
   * Вызывается сразу после render.
   * Не вызывается в момент первого render'а компонента.
   */
  componentDidUpdate() {
    this.updateOnLayoutChange();
  }

  /**
   * Обновить
   * @param scroll Экземпляр скролла.
   */
  update(scroll) {
    scroll.update();
  }

  /**
   * Вызывается сразу перед тем, как компонент будет удален из DOM.
   */
  componentWillUnmount() {
    this.isMount = false;
    this.instanceList.forEach(this.dispose);
  }

  /**
   * Удалить.
   * @param scroll Экземпляр скролла.
   */
  dispose(scroll) {
    scroll.dispose();
  }
}

export default Scroll;
