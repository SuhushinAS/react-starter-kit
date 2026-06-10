import {configName, configReducer} from 'src/modules/config/model/reducers';
import {exampleName, exampleReducer} from 'src/modules/example/model/reducers';
import {localeName, localeReducer} from 'src/modules/locale/model/reducers';
import {statusName, statusReducer} from 'src/modules/status/model/reducers';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  [configName]: configReducer,
  [exampleName]: exampleReducer,
  [localeName]: localeReducer,
  [statusName]: statusReducer,
});
