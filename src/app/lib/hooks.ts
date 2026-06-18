import {TDispatch, TState} from 'src/app/lib/types';
import {useDispatch, useSelector} from 'react-redux';
import {createSelector} from 'reselect';

export const useAppDispatch = useDispatch.withTypes<TDispatch>();
export const useAppSelector = useSelector.withTypes<TState>();
export const createAppSelector = createSelector.withTypes<TState>();
