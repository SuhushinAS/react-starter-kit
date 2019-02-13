// @flow

import common from 'modules/common/ducks/index.js';
import example from 'modules/example/ducks/index.js';
import {combineReducers} from 'redux';

const reducers = {
    common,
    example,
};

export type TReducers = typeof reducers;

export default combineReducers(reducers);
