import {createSlice} from '@reduxjs/toolkit';
import type {TConfig} from 'modules/config/types';

const initialState: TConfig = {
  host: '',
};

export const config = createSlice({
  initialState,
  name: 'config',
  reducers: {
    update: (state, {payload}) => ({...state, ...payload}),
  },
});
