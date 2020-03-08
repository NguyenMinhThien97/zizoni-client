import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import itemShow from './itemShow';
import slides from './slides';
import catalog from './catalog';
import imgPants from './imgPants';
import imgShorts from './imgShorts';
import imgShirt from './imgShirt';
import imgTShirt from './imgTShirt';
import imgCoat from './imgCoat';
import featuredProducts from './featuredProducts';
import relatedProduct from './relatedProduct';
import about from './about';
import blogs from './blogs';

const appReducers = combineReducers({
    products,
    itemShow,
    slides,
    catalog,
    imgPants,
    imgShorts,
    imgShirt,
    imgTShirt,
    imgCoat,
    featuredProducts,
    relatedProduct,
    about,
    blogs,
});

export default appReducers;