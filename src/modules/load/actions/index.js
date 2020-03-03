import {loadActions} from 'modules/load/constants';

const actionLoad = (type) => (data) => ({data, type});

export const actionLoadStart = actionLoad(loadActions.start);

export const actionLoadStop = actionLoad(loadActions.stop);

export const dispatchLoadStop = (dispatch, key) => (data) => {
    dispatch(actionLoadStop(key));
    return data;
};
