import * as Types from './../constants/ActionTypes';
var initialState = [];

const imgShirt = (state = initialState, action) => {
    var { imgShirt } = action;
    switch (action.type) {
        case Types.GET_IMGSHIRT:
            state = action.imgShirt;
            return [...state];
        default: return [...state];
    }
};

export default imgShirt;