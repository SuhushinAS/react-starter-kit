import React from 'react';
import './style.less';

export default function Example (props, context, updater) {
    const {prop1, prop2} = props;
    return <div className="example-component">
        <p className="example-component__text">It is simple component in <em>functional style</em></p>
        <p>Prop list:</p>
        <ul>
            <li>prop1: {prop1}</li>
            <li>prop2: {prop2}</li>
        </ul>
    </div>;
}