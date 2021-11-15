import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from 'app/reducers';

const middlewareOptions = {
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
};

export const store = configureStore({
  devTools: 'production' !== process.env.NODE_ENV,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareOptions),
  reducer: rootReducer,
});

if (module.hot) {
  module.hot.accept('app/reducers', () => store.replaceReducer(rootReducer));
}
