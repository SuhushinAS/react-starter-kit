// @flow

import getConfig from 'helpers/config.js';
import configureStore from 'helpers/store.js';
import App from 'modules/common/containers/App/index.jsx';
import {commonActionConfigSet} from 'modules/common/ducks/index.js';
import * as React from 'react';
import {render} from 'react-dom';
import 'style/index.less';

const root: HTMLElement | null = document.getElementById('root');

if (root) {
    /**
     * Старт приложения
     * @return {undefined}
     */
    (async() => {
        const config = await getConfig();
        const store = configureStore(config.host);

        store.dispatch(commonActionConfigSet(config));

        render(<App store={store} />, root);

        if (module.hot) {
            module.hot.accept('modules/common/containers/App/index.jsx', () => render(<App store={store} />, root));
        }
    })();
}
