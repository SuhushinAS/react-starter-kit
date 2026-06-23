import { combineReducers } from 'redux';
import { configName, configReducer } from 'src/modules/config/lib/reducers';
import { exampleName, exampleReducer } from 'src/modules/example/lib/reducers';
import { localeName, localeReducer } from 'src/modules/locale/lib/reducers';
import { statusName, statusReducer } from 'src/modules/status/lib/reducers';

export const rootReducer = combineReducers({
  [configName]: configReducer,
  [exampleName]: exampleReducer,
  [localeName]: localeReducer,
  [statusName]: statusReducer,
});
