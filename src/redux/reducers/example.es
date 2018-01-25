import {exampleConst} from 'redux/actions/example';

const initialState = {
    data: null,
    errors: [],
    isLoading: false,
    list: [],
    simple: false,
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case exampleConst.simple:
            return {
                ...state,
                simple: !state.simple,
            };

        case exampleConst.getListStart:
            return {
                ...state,
                isLoading: true,
                list: [],
            };

        case exampleConst.getListSuccess:
            return {
                ...state,
                data: payload.data.reduce((prev, item) => ({
                    ...prev,
                    [item.id]: item,
                }), {}),
                isLoading: false,
                list: payload.data.map((item) => item.id),
            };

        case exampleConst.getListError:
            return {
                ...state,
                errors: payload.errors,
                isLoading: false,
            };

        case exampleConst.getListFail:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
};