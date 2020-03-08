import * as Types from './../constants/ActionTypes';
var initialState = [];

const imgPants = (state = initialState, action) => {
    var { imgPants } = action;
    switch (action.type) {
        case Types.GET_IMGPANTS:
            state = action.imgPants;
            return [...state];
        default: return [...state];
    }
};

export default imgPants;