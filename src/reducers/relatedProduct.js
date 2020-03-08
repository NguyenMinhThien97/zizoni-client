import * as Types from './../constants/ActionTypes';
var initialState = [];

const relatedProduct = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_RELATED_PRODUCTS:
            state = action.relatedProduct;
            return [...state];
        default: return [...state];
    }
};

export default relatedProduct;