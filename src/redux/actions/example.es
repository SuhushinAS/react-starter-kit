import example from 'src/redux/constants/example';

function exampleSimple () {
    return {type: example.SIMPLE};
}

function exampleGet () {
    return function (dispatch, getState, {api}) {
        dispatch({type: example.GET_LOAD});

        return api.Example.get()
            .then((response) => {
                if (response.errors.length) {
                    return dispatch({
                        type: example.GET_ERROR,
                        payload: {
                            errors: response.errors,
                        },
                    });
                }

                return dispatch({
                    type: example.GET_SUCCESS,
                    payload: {
                        data: response.data,
                        errors: response.errors,
                    },
                });
            })
            .catch((error) => {
                console.error(error);
                dispatch({type: example.GET_FAIL});
                throw(error);
            });
    };
}

export {
    exampleSimple,
    exampleGet,
};