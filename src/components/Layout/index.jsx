import React from 'react';
import bemCn from 'bem-cn';

import './style.less';

export default function Layout({children, direction, classList = []}) {
    const block = bemCn('layout'),
        row = block('row'),
        col = block('col');

    let childrenList = children.map((item, index) => {
        if (item) {
            const itemClassList = classList[index] ? classList[index] : [];
            switch (direction) {
                case 'vertical':
                    return <div className={[...itemClassList, row()].join(' ')} key={index}>
                        <div className={col()}>
                            {item}
                        </div>
                    </div>;
                case 'horizontal':
                    return <div className={[...itemClassList, col()].join(' ')} key={index}>
                        {item}
                    </div>;
                default:
                    return children;
            }
        }
        return null;
    });
    if ('horizontal' === direction) {
        childrenList = <div className={row()}>
            {childrenList}
        </div>;
    }
    return <div className={block()}>
        {childrenList}
    </div>;
}