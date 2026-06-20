import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getId, getNormalize } from 'src/modules/common/lib/normalize';
import { exampleIdKey } from 'src/modules/example/lib/constants';
import { TExample, TExampleStore } from 'src/modules/example/lib/types';

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
    getList(state, { payload }: PayloadAction<TExample[]>) {
      return { ...state, ...normalizeExample(payload) };
    },
  },
});

export const exampleActions = example.actions;
export const exampleName = example.name;
export const exampleReducer = example.reducer;
