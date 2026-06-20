import {Component} from 'react';

type TKeyList = Record<string, Record<string, (e: Event) => void>>;

type TProps = {
  keyList: TKeyList;
};

export class KeyHandler extends Component<TProps, unknown> {
  handlerAdd = (eventName: string) => {
    document.addEventListener(eventName, this.handler);
  };

  handlerRemove = (eventName: string) => {
    document.removeEventListener(eventName, this.handler);
  };

  handler: EventListener = (e) => {
    const {keyList} = this.props;
    const handlersForType = keyList[e.type];

    if (handlersForType) {
      const keyCode = (e as KeyboardEvent).code;
      const fn = handlersForType[keyCode];

      if (fn) {
        fn(e);
      }
    }
  };

  render() {
    return null;
  }

  componentDidMount() {
    Object.keys(this.props.keyList).forEach(this.handlerAdd);
  }

  componentWillUnmount() {
    Object.keys(this.props.keyList).forEach(this.handlerRemove);
  }

  shouldComponentUpdate(props: TProps) {
    Object.keys(this.props.keyList).forEach(this.handlerRemove);
    Object.keys(props.keyList).forEach(this.handlerAdd);

    return false;
  }
}
