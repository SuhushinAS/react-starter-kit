import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';
import {getId, getNormalize} from 'modules/common/lib/normalize';
import {exampleIdKey} from 'modules/example/model/constants';
import {TExample, TExampleStore} from 'modules/example/model/types';

const getExampleId = getId<TExample>(exampleIdKey);

const normalizeExample = getNormalize<TExample>(getExampleId);

const initialState: TExampleStore = {
  data: {},
  list: [],
};

export const example = createSlice({
  initialState,
  name: 'example',
  reducers: {
    getList(state, {payload}: PayloadAction<TExample[]>) {
      return {...state, ...normalizeExample(payload)};
    },
  },
});

export const exampleActions = example.actions;
export const exampleName = example.name;
export const exampleReducer = example.reducer;
