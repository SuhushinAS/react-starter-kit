import {createReducer} from 'modules/common/helpers/reducer';
import {loadActions} from 'modules/load/constants';

const initialState = {
    data: {},
};

const reducerLoad = (type) => (state, id) => ({
    ...state,
    data: {
        ...state.data,
        [id]: type,
    },
});

const reducers = {
    [loadActions.start]: reducerLoad(true),
    [loadActions.stop]: reducerLoad(false),
};

export default createReducer(initialState, reducers);
