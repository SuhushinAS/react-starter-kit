// @flow

import baronTest from 'modules/baron-test/ducks/index.es';
import common from 'modules/common/ducks/index.es';
import example from 'modules/example/ducks/index.es';
import {combineReducers} from 'redux';

const reducers = {
    baronTest,
    common,
    example,
};

export type TReducers = typeof reducers;

export default combineReducers(reducers);
