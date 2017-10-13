import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

function configureStore (isDev = false, reducer, extraArgs) {
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
