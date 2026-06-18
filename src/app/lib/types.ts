import {store} from 'src/app/lib/store';

export type AppStore = typeof store;
export type TGetState = AppStore['getState'];
export type TState = ReturnType<TGetState>;
export type TDispatch = AppStore['dispatch'];
