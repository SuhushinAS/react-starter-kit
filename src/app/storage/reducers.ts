import config from 'modules/config/redux';
import example from 'modules/example/reducers';
import load from 'modules/load/reducers';
import locale from 'modules/locale/reducers';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    config,
    example,
    load,
    locale,
});
