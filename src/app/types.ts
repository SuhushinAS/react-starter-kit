import {Action, ThunkAction} from '@reduxjs/toolkit';
import {store} from 'app/store';

export type TState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
export type TThunkAction = ThunkAction<void, TState, null, Action<string>>;
