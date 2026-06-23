import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getLocale } from 'src/modules/locale/lib/getLocale';
import type { TLocaleStore } from 'src/modules/locale/lib/types';
import { TLocale } from 'src/modules/locale/lib/types';

const initialState: TLocaleStore = {
  current: getLocale(),
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
    getList(state, { payload }: PayloadAction<string[]>) {
      state.list = payload;
    },
    getMessages(state, { payload }: PayloadAction<GetMessagesPayload>) {
      const { data, language } = payload;

      state.data[language] = data;
    },
    setCurrent(state, { payload }: PayloadAction<string>) {
      state.current = payload;
    },
  },
});

export const localeActions = locale.actions;
export const localeName = locale.name;
export const localeReducer = locale.reducer;
