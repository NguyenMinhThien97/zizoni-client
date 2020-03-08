import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import { actGetProductRequest, getRelatedProductRequest} from './../../actions/index';
// import SlideProductDetail from './../../component/SlideProductDetail/SlideProductDetail';
import SlideProduct from '../../component/SlideHome/SlideProduct';

class Product_Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDesplayContent :false,
            isDesplayAdditional: false,
            isDesplayReviews: false,
            isDesplayLike : false,
            num:1,

        }
    }
    componentDidMount(){
        var { match } = this.props;
        if(match){
            var id = match.params.id;
            var catalogID = match.params.catalogID;
            this.props.onShowProduct(id);
            this.props.showRelatedProduct(catalogID);           
        }
    }
    onToggleContent = () => {
        this.setState({
            isDesplayContent : !this.state.isDesplayContent
        });
    }
    onToggleAdditional = () => {
        this.setState({
            isDesplayAdditional : !this.state.isDesplayAdditional
        });
    }
    onToggleReviews = () => {
        this.setState({
            isDesplayReviews : !this.state.isDesplayReviews
        });
    }
    onTogglePlus = () => {
        this.setState({
            num: this.state.num+1
        });
    }
    onToggleMinus = () => {
        if(this.state.num > 1 ){
            this.setState({
                num : this.state.num-1
            });
        }
    }
    onToggleLike = () => {
        this.setState({
            isDesplayLike : !this.state.isDesplayLike
        });
    }
    showLike=(itemShow)=>{
        var final=itemShow.nb_like;
        var nb_like= itemShow.nb_like;
        if(itemShow.nb_like<=0){
            return '';
        }
        else if(itemShow.nb_like>0){
            if(!this.state.isDesplayLike && nb_like == final){
                return nb_like + '  người thích sản phẩm này';
            }
            if(this.state.isDesplayLike){
                nb_like+=1;
                return nb_like + '  người thích sản phẩm này'
            }
            if(!this.state.isDesplayLike && nb_like > final){
                nb_like-=1;
                return nb_like + '  người thích sản phẩm này';
            }
        }
    }
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
        };

        var { itemShow } = this.props;
        var { relatedProduct } = this.props;
        var { isDesplayContent } = this.state;
        var { isDesplayAdditional } = this.state;
        var { isDesplayReviews } = this.state;
        var { isDesplayLike } = this.state;
        var elmtaskContent = isDesplayContent ? itemShow.content : '';
        var elmtaskAdditiona = isDesplayAdditional ?'Giao hàng miễn phí cho đơn đặt hàng trên 500.000đ. Giảm thêm 5% khi like Page Facebook' : '';
        var elmtaskReviews = isDesplayReviews ? 'Chưa có nhận xét nào cho sản phẩm này!' : '';
        
        return (
            <div>
            <div className="bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm">
                <Link to='/' className="s-text16">
                Trang Chủ
                <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true" />
                </Link>
                {this.showCatalogName(itemShow)}
                <span className="s-text17">
                {itemShow.name}
                </span>
            </div>
            {/* Product Detail */}
            <div className="container bgwhite p-t-35 p-b-80 ">
                <div className="flex-w flex-sb">
                <div class="w-size13 p-t-30 respon5">
                    {/* <SlideProductDetail/> */}
                <div className="large-5 column">
                    <div className="xzoom-container">
                    <img className="xzoom" id="xzoom-default" src="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/original/01_b_car.jpg" xoriginal="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/original/01_b_car.jpg" />
                    <div className="xzoom-thumbs">
                        <a href="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/original/01_b_car.jpg"><img className="xzoom-gallery" width={80} src="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/thumbs/01_b_car.jpg" xpreview="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/preview/01_b_car.jpg" title="Chi tiết sản phẩm" /></a>
                        <a href="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/original/02_o_car.jpg"><img className="xzoom-gallery" width={80} src="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/preview/02_o_car.jpg" title="Chi tiết sản phẩm" /></a>
                        <a href="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/original/03_r_car.jpg"><img className="xzoom-gallery" width={80} src="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/preview/03_r_car.jpg" title="Chi tiết sản phẩm" /></a>
                        <a href="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/original/04_g_car.jpg"><img className="xzoom-gallery" width={80} src="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/preview/04_g_car.jpg" title="Chi tiết sản phẩm" /></a>
                    </div>
                    </div>        
                </div>
                </div>
                <div className="w-size14 respon5">
                    <h4 className="product-detail-name m-text16 p-b-13">
                    {itemShow.name}
                    </h4>
                    {this.showPrice(itemShow)}
                    <p className="s-text8 p-t-10">
                    Giao hàng miễn phí cho đơn đặt hàng trên 500.000đ. Giảm thêm 5% khi like Page Facebook
                    <p className="s-text8 p-t-10">
                    <i className={isDesplayLike ? "fa fa-heart":"fa fa-heart-o"} style={{fontSize: 18,color: 'red'}} onClick = {this.onToggleLike}/> {this.showLike(itemShow)}
                    </p>
                    </p>
                    <div className="p-t-33 p-b-30">
                    <div className="flex-m flex-w p-b-10">
                        <div className="s-text15 w-size15 t-left">
                        Size :
                        </div>
                        {this.showSize(itemShow)}
                    </div>
                    <div className="flex-m flex-w p-t-10">
                        <div className="s-text15 w-size15 t-left">
                        Màu :
                        </div>
                        {itemShow.color}
                    </div>
                    {/* <br/> */}
                    <div className="flex-m flex-w p-t-10">
                        <div className="s-text15 w-size15 t-left">
                            Số lượng :
                        </div>
                        <div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
                            <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2" onClick = {this.onToggleMinus} >
                            <i className="fs-12 fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="size8 m-text18 t-center num-product" type="number" name="num-product" defaultValue={1} value={this.state.num} />
                            <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2" onClick = {this.onTogglePlus} >
                            <i className="fs-12 fa fa-plus" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <div className="flex-m flex-w p-t-10">
                        <div className="btn-addcart-product-detail size9 m-r-22 m-t-10 m-b-10">
                            <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                                Thêm Vào Giỏ Hàng
                            </button>
                        </div>
                        <div className="size9 trans-0-4 m-t-10 m-b-10">
                            {/* Button */}
                            <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                            Mua Ngay
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="p-b-35">
                    <span className="s-text8 m-r-25">SKU:  ZIFE - {itemShow.id}</span>
                    </div>
                    {/*  */}
                    <div className="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content">
                    <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4" onClick = {this.onToggleContent}>
                        Mô Tả Sản Phẩm
                        <i className={isDesplayContent ? 'down-mark fs-12 color1 fa fa-minus' : 'up-mark fs-12 color1 fa fa-plus' } aria-hidden="true" />
                    </h5>
                        <p className="s-text8">
                        {elmtaskContent}
                        </p>
                    </div>
                    <div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
                    <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4" onClick = {this.onToggleAdditional}>
                        Thông Tin Thêm
                        <i className={isDesplayAdditional ? 'down-mark fs-12 color1 fa fa-minus' : 'up-mark fs-12 color1 fa fa-plus' } aria-hidden="true" />
                    </h5>
                        <p className="s-text8">
                        {elmtaskAdditiona}
                        </p>
                    </div>
                    <div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
                    <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4" onClick = {this.onToggleReviews}>
                        Nhận Xét
                        <i className={isDesplayReviews ? 'down-mark fs-12 color1 fa fa-minus' : 'up-mark fs-12 color1 fa fa-plus' } aria-hidden="true" />
                    </h5>
                        <p className="s-text8">
                        {elmtaskReviews}
                        </p>
                    </div>
                </div>
                </div>
            </div>
            {/* Relate Product */}
            <section className="relateproduct bgwhite p-t-45 p-b-138">
                <div className="container">
                <div className="sec-title p-b-60">
                    <h3 className="m-text5 t-center">
                    NHỮNG SẢN PHẨM LIÊN QUAN
                    </h3>
                </div>
                {/* Slide2 */}
                <Slider  {...settings}>
                {this.showRelatedProduct(relatedProduct , itemShow)}
                </Slider>
                </div>
            </section>
            </div>

        );
    }
    
// can giam do phan giai anh tren java
    showImageSlide(itemShow) {
        var imgList = itemShow.imagelist;
        var dem=0;
		if (itemShow.imagelist != undefined) {
            for (var i=0;i<imgList.length;i++)
                if (imgList[i]=="+"){
                dem++;
                }
            for(var j=0;j<dem+1;j++){
                var find = imgList.indexOf('+');
                if(find >=0){
                // document.write("Chuỗi cần lấy là: " + j + imgList.slice(0, find)+"<br>");
                imgList = imgList.replace(imgList.slice(0, find+1),"")
                }
                if(find<0){
                document.write(imgList+"<br>");
                }
            }
				return (
                    <div className="xzoom-thumbs">
                    <a href="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/original/01_b_car.jpg"><img className="xzoom-gallery" width={80} src="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/thumbs/01_b_car.jpg" xpreview="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/preview/01_b_car.jpg" title="Chi tiết sản phẩm" /></a>
                    <a href="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/original/02_o_car.jpg"><img className="xzoom-gallery" width={80} src="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/preview/02_o_car.jpg" title="Chi tiết sản phẩm" /></a>
                    <a href="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/original/03_r_car.jpg"><img className="xzoom-gallery" width={80} src="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/preview/03_r_car.jpg" title="Chi tiết sản phẩm" /></a>
                    <a href="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/original/04_g_car.jpg"><img className="xzoom-gallery" width={80} src="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/preview/04_g_car.jpg" title="Chi tiết sản phẩm" /></a>
                    </div>
				);
		}
	}
    showSize(itemShow){
        return (
            <select className="selection-2" name="size">
                <option>Chọn Size</option>
                <option>Size {itemShow.size}</option>
            </select>
        );
    }

    showPrice(itemShow) {
        var sale = ((100-itemShow.discount)/100) * itemShow.price;
        if(sale <=0){
            return (
                <span className="m-text17">
                    Vui lòng liên hệ
                </span>
            );
        }
        else if (itemShow.discount <= 0) {
            return (
                <span className="m-text17">
                    {this.format_number(sale)}₫
                </span>
            );
        }
        return (
            <div>
                <span className="block2-oldprice m-text7 p-r-5">
                {this.format_number(itemShow.price)}₫
                </span>
                <span className="block2-newprice m-text8 p-r-5" style={{fontSize: 35}}>
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
    showRelatedProduct(relatedProduct , itemShow) {
		var result = null;
		if (relatedProduct.length > 0) {
			result = relatedProduct.map((product, index) => {
                if(itemShow.id!=product.id){
                    return (
                        <SlideProduct
                            key={index}
                            product={product}
                            index={index}
                        />
                    );
                }
                if(index<=0){
                    return(
                        <h6>Không có sản phẩm tưng tự!</h6>
                    )
                }
			});
		}
		return result;
    }
    
    showCatalogName(itemShow){
        if(itemShow.catalogID==1){
            return (
                <Link to='/product/quan-dai' className="s-text16">
                    Quần Dài
                    <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true" />
                </Link>
            );
        }
        if(itemShow.catalogID==2){
            return (
                <Link to='/product/quan-short' className="s-text16">
                    Quần Short
                    <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true" />
                </Link>
            );
        }
        if(itemShow.catalogID==3){
            return (
                <Link to='/product/ao-somi' className="s-text16">
                    Áo Sơ Mi
                    <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true" />
                </Link>
            );

        }
        if(itemShow.catalogID==4){
            return (
                <Link to='/product/ao-thun' className="s-text16">
                    Áo Thun
                    <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true" />
                </Link>
            );

        }
        if(itemShow.catalogID==5){
            return (
                <Link to='/product/ao-khoac' className="s-text16">
                    Áo Khoác
                    <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true" />
                </Link>
            );

        }
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      onShowProduct : (id) => {
        dispatch(actGetProductRequest(id));
      },
      showRelatedProduct : (catalogID) => {
          dispatch(getRelatedProductRequest(catalogID));
      }
    }
}
const mapStateToProps = state => {
    return {
        itemShow: state.itemShow,
        relatedProduct : state.relatedProduct,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Product_Detail);
