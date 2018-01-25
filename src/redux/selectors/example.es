import {createSelector} from 'reselect';

function exampleSelectorGet(state) {
    return state.example;
}

function exampleSelectorDataGet(state) {
    return exampleSelectorGet(state).data;
}

const exampleSelectorListGet = createSelector([exampleSelectorGet], (example) => example.list.map((id) => example.data[id]));

export {
    exampleSelectorGet,
    exampleSelectorDataGet,
    exampleSelectorListGet,
};
