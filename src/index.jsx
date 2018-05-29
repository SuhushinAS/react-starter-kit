// @flow

import getConfig from 'helpers/config.es';
import configureStore from 'helpers/store.es';
import App from 'modules/common/containers/App/index';
import {commonActionConfigSet} from 'modules/common/ducks/index.es';
import * as React from 'react';
import {render} from 'react-dom';
import 'style/index.less';

const root: HTMLElement | null = document.getElementById('root');

/**
 * Старт приложения
 * @return {undefined}
 */
(async() => {
    const config = await getConfig();
    const store = configureStore(config.host);

    store.dispatch(commonActionConfigSet(config));

    if (root) {
        render(<App store={store} />, root);
    }


    if (module.hot) {
        module.hot.accept('modules/common/containers/App/index.jsx', () => {
            if (root) {
                const HotApp = require('modules/common/containers/App/index.jsx').default;

                render(<HotApp store={store} />, root);
            }
        });
    }
})();
