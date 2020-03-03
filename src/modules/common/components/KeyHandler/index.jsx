import React from 'react';

export class KeyHandler extends React.Component {
    handlerAdd = (eventName) => {
        document.addEventListener(eventName, this.handler);
    };

    handlerRemove = (eventName) => {
        document.removeEventListener(eventName, this.handler);
    };

    handler = (e) => {
        const {keyList} = this.props;

        if (keyList[e.type]) {
            if (keyList[e.type][e.keyCode]) {
                keyList[e.type][e.keyCode](e);
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

    shouldComponentUpdate(props) {
        Object.keys(this.props.keyList).forEach(this.handlerRemove);
        Object.keys(props.keyList).forEach(this.handlerAdd);
        return false;
    }
}

export default KeyHandler;
