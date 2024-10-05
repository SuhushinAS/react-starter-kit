import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {defaultLocale} from 'modules/locale/model/constants';
import type {TLocaleStore} from 'modules/locale/model/types';
import {TLocale} from 'modules/locale/model/types';

const initialState: TLocaleStore = {
  current: defaultLocale,
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
