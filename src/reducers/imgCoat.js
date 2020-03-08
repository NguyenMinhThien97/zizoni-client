import * as Types from './../constants/ActionTypes';
var initialState = [];

const imgCoat = (state = initialState, action) => {
    var { imgCoat } = action;
    switch (action.type) {
        case Types.GET_IMGCOAT:
            state = action.imgCoat;
            return [...state];
        default: return [...state];
    }
};

export default imgCoat;