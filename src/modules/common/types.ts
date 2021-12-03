import {TDispatch} from 'app/types';

export type TItem = {
  id: string;
};

export type TMap<T = TItem> = Record<string, T>;

export type TGetId<T = TItem> = (item: T) => string;

export type TGetEntry<T = TItem> = (item: T) => [string, T];

export type TNormalize<T = TItem> = (list: T[]) => {
  data: TMap<T>;
  list: string[];
};

export type TAction<TResult> = (dispatch: TDispatch) => Promise<TResult>;

export type TActionData<TResult, TData = never> = (data: TData) => (dispatch: TDispatch) => Promise<TResult>;
