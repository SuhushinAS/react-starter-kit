// @flow
import type {TResponse} from 'api/types.js';
import type {TApi} from 'app/api.js';
import type {TReducers} from 'app/reducer.js';
import type {Dispatch as ReduxDispatch, Store as ReduxStore} from 'redux';

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;

export type TConfig = {
    host: string,
};
export type TActionDefault = {
    payload?: {},
    type: string,
};
export type TReducer<S, A: TActionDefault> = (S, A) => S;
export type TState = $ObjMap<TReducers, $ExtractFunctionReturn>;
export type TStore = ReduxStore<TState, TActionDefault, TDispatch>;
export type TGetState = () => TState;
export type TDispatch = ReduxDispatch<TActionDefault> & TThunk<TActionDefault>;
export type TThunk<A> = ((TDispatch, TGetState, TApi) => Promise<TResponse> | TResponse) => A;
