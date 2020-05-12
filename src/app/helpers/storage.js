import {reducers} from 'app/helpers/reducer';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';

import thunk from 'redux-thunk';

const reducerData = {};

/**
 * Хранилище.
 */
class Storage {
    /**
     * Создать хранилище.
     * @param {*} reducers Редьюсеры.
     * @param {*} middlewares Миддлвары.
     */
    constructor(reducers = {}, middlewares = []) {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const enhancer = composeEnhancers(applyMiddleware(...middlewares));

        this.addReducers(reducers);
        this.store = createStore(this.getRootReducer(), enhancer);
    }

    /**
     * Получить корневой редьюсер.
     * @return {*} корневой редьюсер.
     */
    getRootReducer() {
        return combineReducers(reducerData);
    }

    /**
     * Добавить редьюсеры.
     * @param {*} reducers редьюсеры.
     */
    addReducers(reducers = {}) {
        Object.keys(reducers).forEach((key) => {
            reducerData[key] = reducers[key];
        });
    }

    /**
     * Обновить стор.
     * @param {*} reducers редьюсеры.
     */
    updateStore(reducers = {}) {
        this.addReducers(reducers);
        this.store.replaceReducer(this.getRootReducer());
    }
}

export default new Storage(reducers, [thunk]);
