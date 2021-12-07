import {createSlice} from '@reduxjs/toolkit';
import {getId, getNormalize} from 'modules/common/helpers/normalize';
import {exampleIdKey} from 'modules/example/constants';
import {TExample, TExampleStore} from 'modules/example/types';

const getExampleId = getId(exampleIdKey);

const normalizeExample = getNormalize<TExample>(getExampleId);

const initialState: TExampleStore = {
  data: {},
  list: [],
};

export const example = createSlice({
  initialState,
  name: 'example',
  reducers: {
    getList: (state, {payload}) => ({...state, ...normalizeExample(payload.data)}),
  },
});
