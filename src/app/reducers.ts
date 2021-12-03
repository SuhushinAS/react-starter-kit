import {config} from 'modules/config/redux';
import {example} from 'modules/example/redux';
import {load} from 'modules/load/redux';
import {locale} from 'modules/locale/redux';
import {status} from 'modules/status/reducers';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  config,
  example,
  load,
  locale,
  [status.name]: status.reducer,
});
