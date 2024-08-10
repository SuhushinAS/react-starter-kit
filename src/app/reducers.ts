import {configName, configReducer} from 'modules/config/reducers';
import {exampleName, exampleReducer} from 'modules/example/reducers';
import {localeName, localeReducer} from 'modules/locale/reducers';
import {statusName, statusReducer} from 'modules/status/reducers';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  [configName]: configReducer,
  [exampleName]: exampleReducer,
  [localeName]: localeReducer,
  [statusName]: statusReducer,
});
