import bemCn from 'bem-cn';
import jQuery from 'jquery';
import React from 'react';
import ReactBaron from 'react-baron';

import './style.less';

export default function Baron(props) {
    const block = bemCn('baron'),
        clipper = block('clipper').mix(props.className),
        scroller = block('scroller'),
        track = block('track'),
        bar = block('bar');
    return <ReactBaron {...props} clipperCls={clipper()} scrollerCls={scroller()} trackCls={track()} barCls={bar()} barOnCls={block()} $={jQuery}>
        {props.children}
    </ReactBaron>;
};