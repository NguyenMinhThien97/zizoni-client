import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Cart from './../reducers/cart';
import * as Message from './../constants/Message';
import CartItem from './../../component/CartITem/CartItem'

class Cart extends Component { 
	render(){
        var {cart} = this.props;
		return (
            <div>
                <section className="bg-title-page p-t-40 p-b-50 flex-col-c-m" style={{backgroundImage: 'url(images/heading-pages-01.jpg)'}}>
                    <h2 className="l-text2 t-center">
                    Cart
                    </h2>
                </section>
                {/* Cart */}
                <section className="cart bgwhite p-t-70 p-b-100">
                    <div className="container">
                    {/* Cart item */}
                    <div>
                        { this.showCartItem(cart) }
                    </div>
                    <div className="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm">
                        <div className="flex-w flex-m w-full-sm">
                        <div className="size11 bo4 m-r-10">
                            <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="coupon-code" placeholder="Coupon Code" />
                        </div>
                        <div className="size12 trans-0-4 m-t-10 m-b-10 m-r-10">
                            {/* Button */}
                            <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                            Apply coupon
                            </button>
                        </div>
                        </div>
                        <div className="size10 trans-0-4 m-t-10 m-b-10">
                        {/* Button */}
                        <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                            Update Cart
                        </button>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
    showCartItem = (cart) =>{
        var result = Message.MSG_CART_EMPTY;
        if (cart.length >0){
            result = cart.map((item, index) => {
                <CartItem 
                    key={index}
                    item={item}
                    index={index}
                />
            })
        }
        return result;
    }
}
CartContainer.propTypes = {
    cart : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({

        }).isRequired,
        quantity : PropTypes.number.PropTypes
    })

    ).PropTypes
}
const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

export default connect(mapStateToProps,null)(Cart);