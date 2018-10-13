// @flow

import example from 'modules/example/ducks/index';
import {combineReducers} from 'redux';

const reducers = {
    example,
};

export type TReducers = typeof reducers;

export default combineReducers(reducers);
