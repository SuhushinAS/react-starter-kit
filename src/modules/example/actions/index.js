import {dispatchData, normalizeList} from 'modules/common/helpers/action';
import {exampleApi} from 'modules/example/api';
import {exampleActions} from 'modules/example/constants';
import {actionLoadStart, dispatchLoadStop} from 'modules/load/actions';

export const actionExampleListGet = () => (dispatch, getState) => {
    dispatch(actionLoadStart(exampleActions.listGet));
    return exampleApi
        .listGet()
        .then(normalizeList)
        .then(dispatchLoadStop(dispatch, exampleActions.listGet))
        .then(dispatchData(dispatch, exampleActions.listGet));
};
