import React, { Component } from 'react';

class ProductItem extends Component {

    render() {
        var { item } = this.props;
        return (
            <div>
                <div className="container-table-cart pos-relative">
                    <div className="wrap-table-shopping-cart bgwhite">
                    <table className="table-shopping-cart">
                        <tbody><tr className="table-head">
                            <th className="column-1" />
                            <th className="column-2">Product</th>
                            <th className="column-3">Price</th>
                            <th className="column-4 p-l-70">Quantity</th>
                            <th className="column-5">Total</th>
                        </tr>
                        <tr className="table-row">
                            <td className="column-1">
                            <div className="cart-img-product b-rad-4 o-f-hidden">
                                <img src={item.product.image_link} alt="IMG-PRODUCT" />
                            </div>
                            </td>
                            <td className="column-2">{item.product.name}</td>
                            <td className="column-3">{this.showPrice(item.product)}₫</td>
                            <td className="column-4">
                            <div className="flex-w bo5 of-hidden w-size17">
                                <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                                <i className="fs-12 fa fa-minus" aria-hidden="true" />
                                </button>
                                <input className="size8 m-text18 t-center num-product" type="number" name="num-product1" defaultValue={1} />
                                <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                                <i className="fs-12 fa fa-plus" aria-hidden="true" />
                                </button>
                            </div>
                            </td>
                            <td className="column-5">{this.showSubTotal(item.product.price,item.product.quantity)}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
    showPrice(product) {
        var sale = ((100-product.discount)/100) * product.price;
        if (product.discount <= 0) {
            return (format_number(product.price));
        }
        return (format_number(sale));
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
    showSubTotal = (price,quantity) => {
        return price+quantity;
    }
}
export default CartItem;