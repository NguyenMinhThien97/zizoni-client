import * as Types from './../constants/ActionTypes';
var initialState = [];

const about = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ABOUT:
            return action.about;
        case Types.UPDATE_ABOUT:
            state[0] = about;
            return state;
        default: return state;
    }
};

export default about;