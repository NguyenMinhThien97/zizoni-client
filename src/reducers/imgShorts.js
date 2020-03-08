import * as Types from './../constants/ActionTypes';
var initialState = [];

const imgShorts = (state = initialState, action) => {
    var { imgShorts } = action;
    switch (action.type) {
        case Types.GET_IMGSHORTS:
            state = action.imgShorts;
            return [...state];
        default: return [...state];
    }
};

export default imgShorts;