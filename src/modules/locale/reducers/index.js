// @flow
import {createReducer} from 'helpers/reducer';
import {localeActions} from 'modules/locale/constants';
import type {TLocaleStore} from 'modules/locale/types';

const initialState: TLocaleStore = {
    current: '',
    data: {},
    list: [],
};

const reducers = {
    [localeActions.getData]: (state, {data, locale}) => ({
        ...state,
        data: {
            ...state.data,
            [locale]: data,
        },
    }),
    [localeActions.getList]: (state, {list}) => ({
        ...state,
        list,
    }),
    [localeActions.setCurrent]: (state, {locale}) => ({
        ...state,
        current: locale,
    }),
};

export default createReducer(initialState, reducers);
