// @flow

import getApi from 'helpers/api';
import reducer from 'helpers/reducer';
import type {TypeStore} from 'helpers/types.es';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

/**
 * Функция для создания и настройки стора.
 * @param {string} host Хост сервера.
 * @return {*} Стор.
 */
export default function configureStore(host: string): TypeStore {
    const middlewares: any[] = [thunk.withExtraArgument(getApi(host))];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    const store: TypeStore = createStore(reducer, enhancer);

    if (module.hot) {
        /* $FlowFixMe */
        module.hot.accept('helpers/reducer.es', () => {
            const hotReducer = require('helpers/reducer.es').default;

            store.replaceReducer(hotReducer);
        });
    }

    return store;
}
