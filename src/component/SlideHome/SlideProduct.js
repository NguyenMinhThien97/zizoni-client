import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Diacritics from 'diacritic';
import moment from 'moment';

class SlideProduct extends Component { 
	render(){
        var { product } = this.props;
		return (
			<div>
                <div className="item-slick2 p-l-15 p-r-15">
                    <div className="block2">
                        <div className={this.showicon(product)}>
                            <img src={product.image_link} alt="IMG-PRODUCT"/>
                            <div className="block2-overlay trans-0-4">
                                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                </a>
                                <div className="block2-btn-addcart w-size1 trans-0-4">
                                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="block2-txt p-t-20">
                            <Link to={`/quan-dai/${product.id}-${this.EditPath(product)}`} className="block2-name dis-block s-text3 p-b-5">
                                {product.name}
                            </Link>
                            {this.showPrice(product)}
                        </div>
                    </div>
                </div>
			</div>
		);
    }
    EditPath(product){
        var path = Diacritics.clean(product.name);
        return encodeURIComponent(path).replace(/%20/g, '-');
    }
    showPrice(product) {
        var sale = ((100-product.discount)/100) * product.price;
        if (product.discount <= 0) {
            return (
                <span className="block2-price m-text6 p-r-5">
                    {this.format_number(product.price)}₫
                </span>
            );
        }
        return (
            <div>
                <span className="block2-oldprice m-text7 p-r-5">
                {this.format_number(product.price)}₫
                </span>
                <span className="block2-newprice m-text8 p-r-5">
                {this.format_number(sale)}₫
                </span>
            </div>
        );
    }
    format_number(val){
        var v = Number(val);
        if (isNaN(v)) 
            { 
                return val; 
            }
        var sign = (v < 0) ? '-' : '';
        var res = Math.abs(v).toString().split('').reverse().join('').replace(/(\d{3}(?!$))/g, '$1,').split('').reverse().join('');
        return sign + res;
    }
    showicon(product){
        var today = moment(new Date(), 'YYYY-MM-DD') ;
        var createdDate = moment(product.created_date, 'YYYY-MM-DD') ;
        var diff = today.diff(createdDate, 'days');
        if(product.discount<=0 && diff <= 10){
            return "block2-img wrap-pic-w of-hidden pos-relative block2-labelnew";
        }
        else if(product.discount > 0 && diff <= 10 || product.discount > 0){
            return "block2-img wrap-pic-w of-hidden pos-relative block2-labelsale";
        }
        return "block2-img wrap-pic-w of-hidden pos-relative";
    }
   
}

export default SlideProduct;