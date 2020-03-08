import * as Types from './../constants/ActionTypes';
var initialState = [];

var findIndex = (catalog, id) => {
    var result = -1;
    catalog.forEach((catalog, index) => {
        if (catalog.id === id) {
            result = index;
        }
    });
    return result;
}

const catalog = (state = initialState, action) => {
    var index = -1;
    var { id, catalog } = action;
    switch (action.type) {
        case Types.FETCH_CATALOG:
            state = action.catalog;
            return [...state];
        case Types.DELETE_CATALOG:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_CATALOG:
            state.push(action.catalog);
            return [...state];
        case Types.UPDATE_CATALOG:
            index = findIndex(state, catalog.id);
            state[index] = catalog;
            return [...state];
        default: return [...state];
    }
};

export default catalog;