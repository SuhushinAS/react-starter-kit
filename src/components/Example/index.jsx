import React from 'react';
import './style.less';

export default function Example(props/*, context, updater*/) {
    const {exampleList} = props;
    if (0 < exampleList.length) {
        return (
            <ul>
                {exampleList.map(renderExampleItem)}
            </ul>
        );
    }
    return null;
}

function renderExampleItem(item) {
    return (
        <li key={item.id}>{item.name}</li>
    );
}