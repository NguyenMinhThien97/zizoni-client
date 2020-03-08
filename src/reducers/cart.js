import * as Types from './../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data?data : [];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TO_CART:
            return [...state];
        default: return [...state];
    }
};

export default cart;