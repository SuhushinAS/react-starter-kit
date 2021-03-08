// @flow
import {createReducer, listGet, update} from 'helpers/reducer';
import {exampleActions} from 'modules/example/constants';
import type {TExampleStore} from 'modules/example/types';

const initialState: TExampleStore = {
    data: {},
    list: [],
};

const reducers = {
    [exampleActions.listGet]: listGet,
    [exampleActions.update]: update,
};

export default createReducer(initialState, reducers);
