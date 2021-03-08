// @flow
import type {TReducers} from 'app/storage/reducers';
import type {TResponse} from 'helpers/api';
import type {Dispatch, Store} from 'redux';

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;

export type TActionDefault = {
    data?: {},
    type: string,
};
export type TState = $ObjMap<TReducers, $ExtractFunctionReturn>;
export type TGetState = () => TState;
export type TDispatch = Dispatch<TActionDefault>;
export type TThunk<A> = ((TDispatch, TGetState) => Promise<TResponse> | TResponse) => A;
export type TStore = Store<TState, TActionDefault, TDispatch>;
