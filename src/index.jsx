// @flow
import App from 'app/index.jsx';
import React from 'react';
import {render} from 'react-dom';
import 'style/index.less';

const root: HTMLElement | null = document.getElementById('root');

if (root) {
    render(<App />, root);

    if (module.hot) {
        module.hot.accept('app/index.jsx', () => render(<App />, root));
    }
}
