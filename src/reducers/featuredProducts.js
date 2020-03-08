import * as Types from './../constants/ActionTypes';
var initialState = [];

const featuredProducts = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_FEATURED_PRODUCTS:
            state = action.featuredProducts;
            return [...state];
        default: return [...state];
    }
};

export default featuredProducts;