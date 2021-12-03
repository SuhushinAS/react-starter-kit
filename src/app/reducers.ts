import {config} from 'modules/config/redux';
import {example} from 'modules/example/reducers';
import {locale} from 'modules/locale/redux';
import {status} from 'modules/status/reducers';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  [config.name]: config.reducer,
  [example.name]: example.reducer,
  locale,
  [status.name]: status.reducer,
});
