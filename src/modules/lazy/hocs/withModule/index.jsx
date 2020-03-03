import storage from 'app/helpers/storage';
import React from 'react';

const withModule = (name, reducers) => (Component) => {
    storage.updateStore({[name]: reducers});
    return (props) => {
        return <Component {...props} />;
    };
};

export default withModule;
