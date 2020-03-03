import {reducers} from 'app/helpers/reducer';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';

import thunk from 'redux-thunk';

const reducerData = {};

class Storage {
    constructor(reducers = {}, middlewares = []) {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const enhancer = composeEnhancers(applyMiddleware(...middlewares));

        this.addReducers(reducers);
        this.store = createStore(this.getRootReducer(), enhancer);
    }

    getRootReducer() {
        return combineReducers(reducerData);
    }

    addReducers(reducers = {}) {
        Object.keys(reducers).forEach((key) => {
            reducerData[key] = reducers[key];
        });
    }

    updateStore(reducers = {}) {
        this.addReducers(reducers);
        this.store.replaceReducer(this.getRootReducer());
    }
}

export default new Storage(reducers, [thunk]);
