import {TDispatch, TState} from 'app/types';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): TDispatch => useDispatch<TDispatch>();
export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
