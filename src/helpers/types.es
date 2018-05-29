// @flow

import type {TypeResponse} from 'api/types.es';
import type {TypeApi} from 'helpers/api.es';
import type {TypeReducers} from 'helpers/reducer.es';
import type {Dispatch as ReduxDispatch, Store as ReduxStore} from 'redux';

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;

export type TypeActionDefault = {
    payload?: {},
    type: string,
};
export type TypeReducer<S, A: TypeActionDefault> = (S, A) => S;
export type TypeState = $ObjMap<TypeReducers, $ExtractFunctionReturn>;
export type TypeStore = ReduxStore<TypeState, TypeActionDefault, TypeDispatch>;
export type TypeGetState = () => TypeState;
export type TypeDispatch =
    & ReduxDispatch<TypeActionDefault>
    & TypeThunk<TypeActionDefault>
export type TypeThunk<A> = ((TypeDispatch, TypeGetState, TypeApi) => Promise<TypeResponse> | TypeResponse) => A;
