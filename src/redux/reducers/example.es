import example from 'src/redux/constants/example';

const initialState = {
    isLoading: false,
    data: null,
    errors: [],
    simple: false,
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case example.SIMPLE:
            return {
                ...state,
                simple: !state.simple,
            };

        case example.GET_LOAD:
            return {
                ...state,
                isLoading: true,
            };

        case example.GET_SUCCESS:
            return {
                ...state,
                data: payload.data,
                isLoading: false,
            };

        case example.GET_ERROR:
            return {
                ...state,
                errors: payload.errors,
                isLoading: false,
            };

        case example.GET_FAIL:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
}