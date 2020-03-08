import * as Types from './../constants/ActionTypes';
var initialState = [];

var findIndex = (blogs, id) => {
    var result = -1;
    blogs.forEach((blog, index) => {
        if (blog.id === id) {
            result = index;
        }
    });
    return result;
}

const blogs = (state = initialState, action) => {
    var index = -1;
    var { id, blog } = action;
    switch (action.type) {
        case Types.GET_BLOG:
            state = action.blogs;
            return [...state];
        case Types.DELETE_BLOG:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_BLOG:
            state.push(action.blog);
            return [...state];
        case Types.UPDATE_BLOG:
            index = findIndex(state, blog.id);
            state[index] = blog;
            return [...state];
        default: return [...state];
    }
};

export default blogs;