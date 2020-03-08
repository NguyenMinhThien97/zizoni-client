import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAboutRequest } from './../../actions/index';

class Footer extends Component { 
	componentDidMount() {
		this.props.fetchAbout();
	}
	render() { 
		var { about } = this.props;
		return (
			<footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
			<div className="flex-w p-b-90">
				<div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
				<h4 className="s-text12 p-b-30">
					Về ZIZONI
				</h4>
				<div>
					<p className="s-text7 w-size27">
					{about.info}
					<br/> 
					HOTLINE : {about.phoneNumber} (9:30 - 22:00)
					<br/>
					{about.address}
					</p>
					<div className="flex-m p-t-30">
					<a href='https://www.facebook.com/fireshop97/'  className="fs-18 color1 p-r-20 fa fa-facebook" />
					<a href='https://www.instagram.com/fireshop97/'  className="fs-18 color1 p-r-20 fa fa-instagram" />
					</div>
				</div>
				</div>
				<div className="w-size10 p-t-30 p-l-15 p-r-15 respon4">
				<h4 className="s-text12 p-b-30">
					Danh mục nổi bật
				</h4>
				<ul>
					<li className="p-b-9">
					<Link to=""  className="s-text7">
						Áo sơ mi
					</Link>
					</li>
					<li className="p-b-9">
					<Link to=""  className="s-text7">
						Quần dài
					</Link>
					</li>
					<li className="p-b-9">
					<Link to=""  className="s-text7">
						Sweater
					</Link>
					</li>
					<li className="p-b-9">
					<Link to=""  className="s-text7">
						Áo khoác
					</Link>
					</li>
				</ul>
				</div>
				<div className="w-size10 p-t-30 p-l-15 p-r-15 respon4">
				<h4 className="s-text12 p-b-30">
					CHĂM SÓC KHÁCH HÀNG
				</h4>
				<ul>
					<li className="p-b-9">
					<Link to=""  className="s-text7">
						Hướng Dẫn Mua Hàng
					</Link>
					</li>
					<li className="p-b-9">
					<Link to=""  className="s-text7">
						Giao hàng &amp; Nhận hàng
					</Link>
					</li>
					<li className="p-b-9">
					<Link to=""  className="s-text7">
						Chính sách đổi trả
					</Link>
					</li>
					<li className="p-b-9">
					<Link to=""  className="s-text7">
						Khách Hàng VIP
					</Link>
					</li>
				</ul>
				</div>
				<div className="w-size8 p-t-30 p-l-15 p-r-15 respon3">
				<h4 className="s-text12 p-b-30">
				ĐĂNG KÝ NHẬN TIN TỪ ZIZONI
				</h4>
				<form>
					<div className="effect1 w-size9">
					<input className="s-text7 bg6 w-full p-b-5" type="text" name="email" placeholder="Nhập email của bạn" />
					<span className="effect1-line" />
					</div>
					<div className="w-size2 p-t-20">
					{/* Button */}
					<button className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
						Đăng Ký
					</button>
					</div>
				</form>
				</div>
			</div>
			<div className="t-center p-l-15 p-r-15">
				<img className="h-size2" src="images/icons/paypal.png" alt="IMG-PAYPAL"/>
				<img className="h-size2" src="images/icons/visa.png" alt="IMG-VISA"/>
				<img className="h-size2" src="images/icons/mastercard.png" alt="IMG-MASTERCARD"/>
				<div className="t-center s-text8 p-t-20">
				Copyright © 2018 ZIZONI
				</div>
			</div>
			</footer>
		);
 	}
 } 
 const mapStateToProps = state => {
	return {
		about : state.about,
	}
  }

  const mapDispatchToProps = (dispatch) => {
    return {
		fetchAbout : () => {
        dispatch(getAboutRequest());
      },
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Footer);