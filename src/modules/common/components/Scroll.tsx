import baron from 'baron';
import {debounce} from 'modules/common/helpers/debounce';
import React, {ReactNode} from 'react';
import './Scroll.less';

type TScrollProps = {
  children: ReactNode;
  dirList: TDirection[];
};

type TDirection = 'h' | 'v';

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

function getBarKey(dir) {
  return `bar_${dir}`;
}

function getTrackKey(dir) {
  return `track_${dir}`;
}

export class Scroll extends React.Component<TScrollProps> {
  instanceList: baron[] = [];
  isMount = false;
  references = {
    scroll: React.createRef<HTMLDivElement>(),
    scroller: React.createRef<HTMLDivElement>(),
  };
  updateOnLayoutChange = debounce(() => {
    if (this.isMount) {
      this.instanceList.forEach(this.update);
    }
  }, 300);

  constructor(props: TScrollProps) {
    super(props);
    this.references = this.props.dirList.reduce(this.referencesInit, this.references);
  }

  referencesInit = (acc, dir) => ({
    ...acc,
    [getBarKey(dir)]: React.createRef<HTMLDivElement>(),
    [getTrackKey(dir)]: React.createRef<HTMLDivElement>(),
  });

  render() {
    return (
      <div className="Scroll" ref={this.references.scroll}>
        <div className="Scroll__Scroller" ref={this.references.scroller}>
          {this.props.children}
        </div>
        {this.props.dirList.map(this.renderScrollbar)}
      </div>
    );
  }

  renderScrollbar = (dir) => (
    <div className={`Scroll__Track Scroll__Track_${dir}`} key={dir} ref={this.references[getTrackKey(dir)]}>
      <div className={`Scroll__Bar Scroll__Bar_${dir}`} ref={this.references[getBarKey(dir)]} />
    </div>
  );

  componentDidMount() {
    if (needCustomScrollbar) {
      this.instanceList = this.props.dirList.map(this.scrollInit);
      this.isMount = true;
      this.updateOnLayoutChange();
    }
  }

  scrollInit = (dir) =>
    baron({
      bar: this.references[getBarKey(dir)].current,
      barOnCls: `Scroll_On_${dir}`,
      direction: dir,
      impact: 'scroller',
      root: this.references.scroll.current,
      scroller: this.references.scroller.current,
      track: this.references[getTrackKey(dir)].current,
    });

  componentDidUpdate() {
    this.updateOnLayoutChange();
  }

  update(scroll) {
    scroll.update();
  }

  componentWillUnmount() {
    this.isMount = false;
    this.instanceList.forEach(this.dispose);
  }

  dispose(scroll) {
    scroll.dispose();
  }
}
