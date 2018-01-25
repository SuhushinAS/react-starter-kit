const exampleConst = {
    simple: 'Example Simple',

    getListError: 'Example List Get Error',
    getListFail: 'Example List Get Fail',
    getListStart: 'Example List Get Start',
    getListSuccess: 'Example List Get Success',
};

function exampleActionSimple() {
    return {type: exampleConst.simple};
}

function exampleActionListGet() {
    return function(dispatch, getState, {api}) {
        dispatch({type: exampleConst.getListStart});

        return api.Example.listGet()
            .then((response) => {
                if (response.errors.length) {
                    return dispatch({
                        type: exampleConst.getListError,
                        payload: {
                            errors: response.errors,
                        },
                    });
                }

                return dispatch({
                    type: exampleConst.getListSuccess,
                    payload: {
                        data: response.data,
                    },
                });
            })
            .catch((error) => {
                console.error(error);
                dispatch({type: exampleConst.getListFail});
                throw(error);
            });
    };
}

export {
    exampleConst,
    exampleActionSimple,
    exampleActionListGet,
};