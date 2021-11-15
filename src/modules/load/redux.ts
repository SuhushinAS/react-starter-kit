import {createReducer} from 'helpers/reducer';
import {loadActions} from 'modules/load/constants';
import {TLoadStore} from 'modules/load/types';

const initialState: TLoadStore = {
  data: {},
};

/**
 * Обработать загрузку.
 * @param {string} type Тип.
 * @return {*} Стейт.
 */
const reducerLoad = (type) => (state, id) => ({
  ...state,
  data: {
    ...state.data,
    [id]: type,
  },
});

const reducers = {
  [loadActions.start]: reducerLoad(true),
  [loadActions.stop]: reducerLoad(false),
};

export const load = createReducer<TLoadStore>(initialState, reducers);
