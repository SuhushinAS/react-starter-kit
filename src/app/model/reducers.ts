import {configName, configReducer} from 'modules/config/model/reducers';
import {exampleName, exampleReducer} from 'modules/example/model/reducers';
import {localeName, localeReducer} from 'modules/locale/model/reducers';
import {statusName, statusReducer} from 'modules/status/model/reducers';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  [configName]: configReducer,
  [exampleName]: exampleReducer,
  [localeName]: localeReducer,
  [statusName]: statusReducer,
});
