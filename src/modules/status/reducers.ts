import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';
import {Status, TStatusStore} from 'modules/status/types';

const initialState: TStatusStore = {};

type SetStatusPayload = {
  status: Status;
  type: string;
};

export const status = createSlice({
  initialState,
  name: 'status',
  reducers: {
    setStatus(state, {payload}: PayloadAction<SetStatusPayload>) {
      state[payload.type] = payload.status;
    },
  },
});

export const statusActions = status.actions;
export const statusName = status.name;
export const statusReducer = status.reducer;
