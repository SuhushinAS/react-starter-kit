import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';
import type {TConfig} from 'modules/config/model/types';

const initialState: TConfig = {
  host: '',
};

export const config = createSlice({
  initialState,
  name: 'config',
  reducers: {
    update(state, {payload}: PayloadAction<TConfig>) {
      return {...state, ...payload};
    },
  },
});

export const configActions = config.actions;
export const configName = config.name;
export const configReducer = config.reducer;
