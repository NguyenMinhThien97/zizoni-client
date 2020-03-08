import React, { Component } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SlideHeader from './../../component/SlideHome/SlideHeader'
import SlideProduct from '../../component/SlideHome/SlideProduct';
import { actFetchSlideRequest, getImagePantsRequest,getImageShortsRequest,getImageShirtRequest,getImageTShirtRequest,getImageCoatRequest , getFeaturedProductsRequest, getTopNewRequest } from './../../actions/index';
import SlideBlogs from './../../component/SlideBlogs/SlideBlogs';
import "normalize.css/normalize.css";

class Home extends Component { 
	componentDidMount() {
		this.props.fetchAllSlide();
		this.props.showImagePants();
		this.props.showImageShorts();
		this.props.showImageShirt();
		this.props.showImageTShirt();
		this.props.showImageCoat();
		this.props.showFeaturedProducts();
		this.props.showTopBlogs()
	}

	render(){
		
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

		var { slides } = this.props;
		var { imgPants } = this.props;
		var { imgShorts } = this.props;
		var { imgShirt } = this.props;
		var { imgTShirt } = this.props;
		var { imgCoat } = this.props;
		var { featuredProducts } = this.props;
		var { blogs } = this.props;
		return (
			<div>
			{this.showSlide(slides)}
			{/* Banner */}
			{/* <Banner/> */}
			<section className="banner bgwhite p-t-40 p-b-40">
				<div className="container">
				<div className="row">
					<div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
					{/* block1 */}
					<div className="block1 hov-img-zoom pos-relative m-b-30">
						<img src={imgPants} alt="IMG-BENNER" />
						<div className="block1-wrapbtn w-size2">
						{/* Button */}
						<Link to='/product/quan-dai' className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
							Quần Dài
						</Link>
						</div>
					</div>
					
					{/* block1 */}
					<div className="block1 hov-img-zoom pos-relative m-b-30">
						<img src={ imgShorts } alt="IMG-BENNER" />
						<div className="block1-wrapbtn w-size2">
						{/* Button */}
						<Link to='/product/quan-short' className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
							Quần Short
						</Link>
						</div>
					</div>
					</div>
					<div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
					{/* block1 */}
					<div className="block1 hov-img-zoom pos-relative m-b-30">
						<img src={ imgTShirt } alt="IMG-BENNER" />
						<div className="block1-wrapbtn w-size2">
						{/* Button */}
						<Link to='/product/ao-thun' className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
							Áo Thun
						</Link>
						</div>
					</div>
					{/* block1 */}
					<div className="block1 hov-img-zoom pos-relative m-b-30">
					<img src={ imgShirt } alt="IMG-BENNER" />
						<div className="block1-wrapbtn w-size2">
						{/* Button */}
						<Link to='/product/ao-somi' className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
							Áo Sơ Mi
						</Link>
						</div>
					</div>
					</div>
					<div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
					{/* block1 */}
					<div className="block1 hov-img-zoom pos-relative m-b-30">
						<img src={ imgCoat } alt="IMG-BENNER" />
						<div className="block1-wrapbtn w-size2">
						{/* Button */}
						<Link to='/product/ao-khoac' className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
							Áo Khoác
						</Link>
						</div>
					</div>
					{/* block2 */}
					<div className="block2 wrap-pic-w pos-relative m-b-30">
						<img src="images/icons/bg-01.jpg" alt="IMG" />
						<div className="block2-content sizefull ab-t-l flex-col-c-m">
						<h4 className="m-text4 t-center w-size3 p-b-8">
							ĐĂNG KÝ VÀ ĐƯỢC GIẢM GIÁ 20%
						</h4>
						<p className="t-center w-size4">
							Hãy là người thích tìm hiểu về những tin tức thời trang mới nhất và nhận được những lời đề nghị hữu ích từ chúng tôi
						</p>
						<div className="w-size2 p-t-25">
							{/* Button */}
							<Link to="/dang-ky" className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
							Đăng Ký Ngay
							</Link>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</section>
			{/* New Product */}
            <section className="newproduct bgwhite p-t-45 p-b-105">
			<div className="container">
				<div className="sec-title p-b-60">
					<h3 className="m-text5 t-center">
						SẢN PHẨM NỔI BẬT
					</h3>
				</div>
				{/* Slide2 */}
				<Slider  {...settings}>
					{this.showFeaturedProducts(featuredProducts)}
				</Slider>
                </div>
            </section>
			{/* Banner2 */}
			<section className="banner2 bg5 p-t-55 p-b-55">
				<div className="container">
				<div className="row">
					<div className="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
					<div className="hov-img-zoom pos-relative">
						<img src="images/banner-08.jpg" alt="IMG-BANNER" />
						<div className="ab-t-l sizefull flex-col-c-m p-l-15 p-r-15">
						<span className="m-text9 p-t-45 fs-20-sm">
							The Beauty
						</span>
						<h3 className="l-text1 fs-35-sm">
							Lookbook
						</h3>
						<a href="#" className="s-text4 hov2 p-t-20 ">
							View Collection
						</a>
						</div>
					</div>
					</div>
					<div className="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
					<div className="bgwhite hov-img-zoom pos-relative p-b-20per-ssm">
						<img src="images/shop-item-09.jpg" alt="IMG-BANNER" />
						<div className="ab-t-l sizefull flex-col-c-b p-l-15 p-r-15 p-b-20">
						<div className="t-center">
							<a href="product-detail.html" className="dis-block s-text3 p-b-5">
							Gafas sol Hawkers one
							</a>
							<span className="block2-oldprice m-text7 p-r-5">
							$29.50
							</span>
							<span className="block2-newprice m-text8">
							$15.90
							</span>
						</div>
						<div className="flex-c-m p-t-44 p-t-30-xl">
							<div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
							<span className="m-text10 p-b-1 days">
								69
							</span>
							<span className="s-text5">
								days
							</span>
							</div>
							<div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
							<span className="m-text10 p-b-1 hours">
								04
							</span>
							<span className="s-text5">
								hrs
							</span>
							</div>
							<div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
							<span className="m-text10 p-b-1 minutes">
								32
							</span>
							<span className="s-text5">
								mins
							</span>
							</div>
							<div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
							<span className="m-text10 p-b-1 seconds">
								05
							</span>
							<span className="s-text5">
								secs
							</span>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</section>
			{/* Blog */}
			<section className="blog bgwhite p-t-94 p-b-65">
				<div className="container">
				<div className="sec-title p-b-52">
					<h3 className="m-text5 t-center">
					BLOGS
					</h3>
				</div>
				<div className="row">
					{this.showTop3Blogs(blogs)}
				</div>
				</div>
			</section>
			{/* Shipping */}
			<section className="shipping bgwhite p-t-62 p-b-46">
				<div className="flex-w p-l-15 p-r-15">
				<div className="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
					<h4 className="m-text12 t-center">
					Giao hàng miễn phí trên toàn quốc
					</h4>
					<a href="#" className="s-text11 t-center">
					Bấm vào đây để biết thêm thông tin
					</a>
				</div>
				<div className="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 bo2 respon2">
					<h4 className="m-text12 t-center">
					Nhận đổi trả hàng trong 3 ngày
					</h4>
					<span className="s-text11 t-center">
					Đổi trả trong 24h đầu sau khi nhận hàng được miễn phí ship, 2 ngày còn lại khách chiệu phí ship đổi trả &amp; phải còn Thẻ/Mạc
					</span>
				</div>
				<div className="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
					<h4 className="m-text12 t-center">
					Thời gian mở cửa
					</h4>
					<span className="s-text11 t-center">
					Các ngày trong tuần từ 8h30' - 22h30'
					</span>
				</div>
				</div>
			</section>	
			</div>
		);
	 }
	 showSlide(slides) {
		var result = null;
		if (slides.length > 0) {
			result = slides.map((slide, index) => {
				return (
					<SlideHeader
						key={index}
						slide={slide}
						index={index}
					/>
				);
			});
		}
		return result;
	};
	showFeaturedProducts(featuredProducts) {
		var result = null;
		if (featuredProducts.length > 0) {
			result = featuredProducts.map((product, index) => {
				return (
					<SlideProduct
						key={index}
						product={product}
						index={index}
					/>
				);
			});
		}
		return result;
	}
	showTop3Blogs(blogs) {
		var result = null;
		if (blogs.length > 0) {
			result = blogs.map((blog, index) => {
				return (
					<SlideBlogs
						key={index}
						blog={blog}
						index={index}
					/>
				);
			});
		}
		return result;
	}

  
  }
  const mapStateToProps = state => {
	return {
		slides : state.slides,
		imgPants : state.imgPants,
		imgShorts : state.imgShorts,
		imgShirt : state.imgShirt,
		imgTShirt : state.imgTShirt,
		imgCoat : state.imgCoat,
		featuredProducts : state.featuredProducts,
		blogs : state.blogs,
	}
  }
  
  const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllSlide : () => {
			dispatch(actFetchSlideRequest());
		},
		showImagePants : () => {
			dispatch(getImagePantsRequest());
		},
		showImageShorts : () => {
			dispatch(getImageShortsRequest());
		},
		showImageShirt : () => {
			dispatch(getImageShirtRequest());
		},
		showImageTShirt : () => {
			dispatch(getImageTShirtRequest());
		},
		showImageCoat : () => {
			dispatch(getImageCoatRequest());
		},
		showFeaturedProducts : () =>{
			dispatch(getFeaturedProductsRequest());
		},
		showTopBlogs : () =>{
			dispatch(getTopNewRequest());
		}

	}
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);