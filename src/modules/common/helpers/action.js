export const normalizeList = ({data}) => {
    const {list} = data;
    return {
        data: list.reduce(getData, {}),
        list: list.map(getId),
    };
};

export const getData = (acc, item) => ({...acc, [getId(item)]: item});

export const getId = (item) => item.id;

export const dispatchData = (dispatch, type) => (data) => dispatch({data, type});
