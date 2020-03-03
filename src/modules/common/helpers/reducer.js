export const createReducer = (initialState, reducers) => (state = initialState, {data, type}) => {
    const reducer = reducers[type];

    if ('function' === typeof reducer) {
        return reducer(state, data);
    }

    return state;
};

export const listGet = (state, {data, list}) => ({
    ...state,
    data,
    list,
});

export const update = (state, {item}) => ({
    ...state,
    data: {
        ...state.data,
        [item.id]: item,
    },
});
