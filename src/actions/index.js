import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProductsRequest = (catalogID) => {
    return dispatch => {
        return callApi(`/product/listProductsByCatalog/${catalogID}`, 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}

export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
}

export const actAddToCart = (products , quantity) => {
    return {
        type :Types.ADD_TO_CART,
        products,
        quantity
    }
}
export const actGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`product/listProduct/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data));
        });
    }
}

export const actGetProduct = (product) => {
    return {
        type : Types.GET_PRODUCT,
        product
    }
}
export const actFetchSlideRequest = () => {
    return dispatch => {
        return callApi('/slide/listSlide', 'GET', null).then(res => {
            dispatch(actFetchSlide(res.data));
        });
    };
}
export const actFetchSlide = (slides) => {
    return {
        type : Types.FETCH_SLIDE,
        slides
    }
}

export const actFetchCatalogRequest = () => {
    return dispatch => {
        return callApi('/catalog/listCatalog', 'GET', null).then(res => {
            dispatch(actFetchCatalog(res.data));
        });
    };
}
export const actFetchCatalog = (catalog) => {
    return {
        type : Types.FETCH_CATALOG,
        catalog
    }
}
export const getImagePantsRequest = () => {
    return dispatch => {
        return callApi('/catalog/findImage/1', 'GET', null).then(res => {
            dispatch(getImagePants(res.data));
        });
    };
}
export const getImagePants = (imgPants) => {
    return {
        type : Types.GET_IMGPANTS,
        imgPants
    }
}
export const getImageShortsRequest = () => {
    return dispatch => {
        return callApi('/catalog/findImage/2', 'GET', null).then(res => {
            dispatch(getImageShorts(res.data));
        });
    };
}
export const getImageShorts = (imgShorts) => {
    return {
        type : Types.GET_IMGSHORTS,
        imgShorts
    }
}
export const getImageShirtRequest = () => {
    return dispatch => {
        return callApi('/catalog/findImage/3', 'GET', null).then(res => {
            dispatch(getImageShirt(res.data));
        });
    };
}
export const getImageShirt = (imgShirt) => {
    return {
        type : Types.GET_IMGSHIRT,
        imgShirt
    }
}
export const getImageTShirtRequest = () => {
    return dispatch => {
        return callApi('/catalog/findImage/4', 'GET', null).then(res => {
            dispatch(getImageTShirt(res.data));
        });
    };
}
export const getImageTShirt = (imgTShirt) => {
    return {
        type : Types.GET_IMGTSHIRT,
        imgTShirt
    }
}
export const getImageCoatRequest = () => {
    return dispatch => {
        return callApi('/catalog/findImage/5', 'GET', null).then(res => {
            dispatch(getImageCoat(res.data));
        });
    };
}
export const getImageCoat = (imgCoat) => {
    return {
        type : Types.GET_IMGCOAT,
        imgCoat
    }
}

export const getFeaturedProductsRequest = () => {
    return dispatch => {
        return callApi('product/listFeaturedProducts', 'GET', null).then(res => {
            dispatch(getFeaturedProducts(res.data));
        });
    };
}
export const getFeaturedProducts = (featuredProducts) => {
    return {
        type : Types.GET_FEATURED_PRODUCTS,
        featuredProducts
    }
}
export const getRelatedProductRequest = (catalogID) => {
    return dispatch => {
        return callApi(`product/listRelatedProducts/${catalogID}`, 'GET', null).then(res => {
            dispatch(actRelatedProduct(res.data));
        });
    };
}

export const actRelatedProduct = (relatedProduct) => {
    return {
        type : Types.GET_RELATED_PRODUCTS,
        relatedProduct
    }
}

export const getAboutRequest = () => {
    return dispatch => {
        return callApi(`about/getAbout`, 'GET', null).then(res => {
            dispatch(getAbout(res.data));
        });
    };
}

export const getAbout = (about) => {
    return {
        type : Types.GET_ABOUT,
        about
    }
}
export const getTopNewRequest = () => {
    return dispatch => {
        return callApi('/new/topListNew', 'GET', null).then(res => {
            dispatch(getTopNew(res.data));
        });
    };
}
export const getTopNew = (blogs) => {
    return {
        type : Types.GET_BLOG,
        blogs
    }
}
export const getBlogRequest = (id) => {
    return dispatch => {
        return callApi(`/new/listNew/${id}`, 'GET', null).then(res => {
            dispatch(getBlog(res.data));
        });
    };
}
export const getBlog = (blog) => {
    return {
        type : Types.GET_BLOG,
        blog
    }
}