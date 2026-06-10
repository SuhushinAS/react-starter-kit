import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from 'src/app/model/reducers';

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
  module.hot.accept('src/app/model/reducers', () =>
    store.replaceReducer(rootReducer)
  );
}
