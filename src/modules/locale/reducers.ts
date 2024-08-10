import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';
import type {TLocaleStore} from 'modules/locale/types';
import {TLocale} from 'modules/locale/types';

const initialState: TLocaleStore = {
  current: '',
  data: {},
  list: [],
};

type GetMessagesPayload = {
  data: TLocale;
  language: string;
};

export const locale = createSlice({
  initialState,
  name: 'locale',
  reducers: {
    getList(state, {payload}: PayloadAction<string[]>) {
      state.list = payload;
    },
    getMessages(state, {payload}: PayloadAction<GetMessagesPayload>) {
      const {data, language} = payload;

      state.data[language] = data;
    },
    setCurrent(state, {payload}: PayloadAction<string>) {
      state.current = payload;
    },
  },
});

export const localeActions = locale.actions;
export const localeName = locale.name;
export const localeReducer = locale.reducer;
