import {createReducer, listGet, update} from 'modules/common/helpers/reducer';
import {exampleActions} from 'modules/example/constants';

const initialState = {
    data: {},
    list: [],
};

const reducers = {
    [exampleActions.listGet]: listGet,
    [exampleActions.update]: update,
};

export default createReducer(initialState, reducers);
