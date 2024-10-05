import baron from 'baron';
import {debounce} from 'modules/common/lib/debounce';
import React, {ReactNode, RefObject} from 'react';
import './Scroll.less';

type TProps = {
  children: ReactNode;
  dirList: TDirection[];
};

type TDirection = 'h' | 'v';

const getScrollbarWidth = () => {
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
};

const scrollbarWidth = getScrollbarWidth();

const needCustomScrollbar = 0 !== scrollbarWidth;

const getBarKey = (dir: TDirection) => {
  return `bar_${dir}`;
};

const getTrackKey = (dir: TDirection) => {
  return `track_${dir}`;
};

const scrollUpdate = (scroll: baron) => {
  scroll.update();
};

const scrollDispose = (scroll: baron) => {
  scroll.dispose();
};

export class Scroll extends React.Component<TProps, unknown> {
  instanceList: baron[] = [];
  isMount = false;
  rfs: Record<string, RefObject<HTMLDivElement>> = {
    scroll: React.createRef<HTMLDivElement>(),
    scroller: React.createRef<HTMLDivElement>(),
  };
  updateOnLayoutChange = debounce(() => {
    if (this.isMount) {
      this.instanceList.forEach(scrollUpdate);
    }
  }, 300);

  constructor(props: TProps) {
    super(props);
    this.rfs = this.props.dirList.reduce(this.rfsInit, this.rfs);
  }

  rfsInit = (acc, dir: TDirection) => {
    return {
      ...acc,
      [getBarKey(dir)]: React.createRef<HTMLDivElement>(),
      [getTrackKey(dir)]: React.createRef<HTMLDivElement>(),
    };
  };

  render() {
    return (
      <div className="Scroll" ref={this.rfs.scroll}>
        <div className="Scroll__Scroller" ref={this.rfs.scroller}>
          {this.props.children}
        </div>
        {this.props.dirList.map(this.renderScrollbar)}
      </div>
    );
  }

  renderScrollbar = (dir) => {
    return (
      <div
        className={`Scroll__Track Scroll__Track_${dir}`}
        key={dir}
        ref={this.rfs[getTrackKey(dir)]}
      >
        <div
          className={`Scroll__Bar Scroll__Bar_${dir}`}
          ref={this.rfs[getBarKey(dir)]}
        />
      </div>
    );
  };

  componentDidMount() {
    if (needCustomScrollbar) {
      this.instanceList = this.props.dirList.map(this.scrollInit);
      this.isMount = true;
      this.updateOnLayoutChange();
    }
  }

  scrollInit = (dir: TDirection) => {
    return baron({
      bar: this.rfs[getBarKey(dir)].current,
      barOnCls: `Scroll_On_${dir}`,
      direction: dir,
      impact: 'scroller',
      root: this.rfs.scroll.current,
      scroller: this.rfs.scroller.current,
      track: this.rfs[getTrackKey(dir)].current,
    });
  };

  componentDidUpdate() {
    this.updateOnLayoutChange();
  }

  componentWillUnmount() {
    this.isMount = false;
    this.instanceList.forEach(scrollDispose);
  }
}
