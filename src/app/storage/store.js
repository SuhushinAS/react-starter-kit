// @flow
import {reducers} from 'app/storage/reducers';
import type {TStore} from 'app/types';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

export const store: TStore = getStore(reducers, [thunk]);

/**
 * Получить стор.
 * @param _reducers Редьюсеры.
 * @param middlewares Миддлвейры.
 * @return {*} Стор.
 */
function getStore(_reducers, middlewares: any[] = []): TStore {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    return createStore(combineReducers(_reducers), enhancer);
}
