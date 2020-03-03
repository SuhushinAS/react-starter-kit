import {selectData, selectItem} from 'modules/common/helpers/selector';

export const selectLoad = (state) => state.load;

export const selectLoadData = selectData(selectLoad);

export const selectLoadItem = selectItem(selectLoadData);
