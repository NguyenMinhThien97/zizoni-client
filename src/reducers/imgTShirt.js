import * as Types from './../constants/ActionTypes';
var initialState = [];

const imgTShirt = (state = initialState, action) => {
    var { imgTShirt } = action;
    switch (action.type) {
        case Types.GET_IMGTSHIRT:
            state = action.imgTShirt;
            return [...state];
        default: return [...state];
    }
};

export default imgTShirt;