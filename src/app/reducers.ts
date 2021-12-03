import {config} from 'modules/config/redux';
import {example} from 'modules/example/redux';
import {locale} from 'modules/locale/redux';
import {status} from 'modules/status/reducers';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  [config.name]: config.reducer,
  example,
  locale,
  [status.name]: status.reducer,
});
