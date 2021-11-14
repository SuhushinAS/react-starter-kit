import {createReducer} from 'helpers/reducer';
import {configActions} from 'modules/config/constants';
import type {TConfig} from 'modules/config/types';

const initialState: TConfig = {
    host: '',
};

const reducers = {
    [configActions.update]: (state, config) => ({...state, ...config}),
};

export default createReducer(initialState, reducers);
