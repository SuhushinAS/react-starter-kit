import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

function configureStore(isDev = false, reducer, extraArgs) {
    const middlewares = [thunk.withExtraArgument(extraArgs)];
    return createStore(
        reducer,
        compose(
            applyMiddleware(...middlewares),
            (isDev && window.devToolsExtension) ? window.devToolsExtension() : (f) => f
        )
    );
}

export default configureStore;
