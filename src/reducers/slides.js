import * as Types from './../constants/ActionTypes';
var initialState = [];

var findIndex = (slides, id) => {
    var result = -1;
    slides.forEach((slide, index) => {
        if (slide.id === id) {
            result = index;
        }
    });
    return result;
}

const slides = (state = initialState, action) => {
    var index = -1;
    var { id, slide } = action;
    switch (action.type) {
        case Types.FETCH_SLIDE:
            state = action.slides;
            return [...state];
        case Types.DELETE_SLIDE:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_SLIDE:
            state.push(action.slide);
            return [...state];
        case Types.UPDATE_SLIDE:
            index = findIndex(state, slide.id);
            state[index] = slide;
            return [...state];
        default: return [...state];
    }
};

export default slides;