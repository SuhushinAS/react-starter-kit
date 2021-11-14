import {store} from 'app/storage/store';
import {Action, ThunkAction} from '@reduxjs/toolkit';

export type TState = any;
export type TDispatch = typeof store.dispatch;
export type TThunkAction = ThunkAction<void, TState, null, Action<string>>;
