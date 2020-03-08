import React, { Component } from 'react'; 
import {Route, Link} from 'react-router-dom';

const menus = [
	{
		name : 'Trang Chủ',
		to : '/',
		exact : true
	},
	{
		name : 'Quần Dài',
		to : '/product/quan-dai',
		exact : false
	},
	{
		name : 'Quần Short',
		to : '/product/quan-short',
		exact : false
	},
	{
		name : 'Áo Sơ Mi',
		to : '/product/ao-somi',
		exact : false
	},
	{
		name : 'Áo Thun',
		to : '/product/ao-thun',
		exact : false
	},
	{
		name : 'Áo Khoác',
		to : '/product/ao-khoac',
		exact : false
	},
	{
		name : 'Giày',
		to : '/product/giay',
		exact : false
	},
	{
		name : 'Blog',
		to : '/blog',
		exact : false
	}
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
	return (
			<Route
					path={to}
					exact={activeOnlyWhenExact}
					children={({ match }) => {
							var active = match ? 'sale-noti' : '';
							return (
									<li className={active}>
											<Link to={to}>
													{label}
											</Link>
									</li>
							);
					}}
			/>
	);
};

class Header extends Component { 
	render() { 
		return (
			<header className="header1">
		        <div className="container-menu-header">
		          <div className="topbar">
		            <div className="topbar-social">
		              <a href='https://www.facebook.com/fireshop97/' className="topbar-social-item fa fa-facebook" />
		              <a href='https://www.instagram.com/fireshop97/' className="topbar-social-item fa fa-instagram" />
		            </div>
		            <span className="topbar-child1">
								Giao hàng miễn phí cho đơn đặt hàng trên 500.000đ
		            </span>
		            <div className="topbar-child2">
		              <span className="topbar-email">
		                zizoni@gmail.com
		              </span>
		            </div>
		          </div>
		          <div className="wrap_header">
		            {/* Logo */}
		            <Link to='/' className="logo">
		              <img src="images/icons/logo.png" alt="IMG-LOGO" />
		            </Link>
		            {/* Menu */}
		            <div className="wrap_menu">
		              <nav className="menu">
		                <ul className="main_menu">
		                  {this.showMenus(menus)}
		                </ul>
		              </nav>
		            </div>
		            {/* Header Icon */}
		            <div className="header-icons">
		              <Link to='/dang-nhap' className="header-wrapicon1 dis-block">
		                <img src="images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
		              </Link>
		              <span className="linedivide1" />
		              <Link to='/gio-hang' className="header-wrapicon2">
		                <img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
		                <span className="header-icons-noti">0</span>
		              </Link>
		            </div>
		          </div>
		        </div>
		        {/* Header Mobile */}
		        <div className="wrap_header_mobile">
		          {/* Logo moblie */}
		          <a href="index.html" className="logo-mobile">
		            <img src="images/icons/logo.png" alt="IMG-LOGO" />
		          </a>
		          {/* Button show menu */}
		          <div className="btn-show-menu">
		            {/* Header Icon mobile */}
		            <div className="header-icons-mobile">
		              <a  className="header-wrapicon1 dis-block">
		                <img src="images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
		              </a>
		              <span className="linedivide2" />
		              <div className="header-wrapicon2">
		                <img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
		                <span className="header-icons-noti">0</span>
		                {/* Header cart noti */}
		                <div className="header-cart header-dropdown">
		                  <ul className="header-cart-wrapitem">
		                    <li className="header-cart-item">
		                      <div className="header-cart-item-img">
		                        <img src="images/item-cart-01.jpg" alt="IMG" />
		                      </div>
		                      <div className="header-cart-item-txt">
		                        <a  className="header-cart-item-name">
		                          White Shirt With Pleat Detail Back
		                        </a>
		                        <span className="header-cart-item-info">
		                          1 x $19.00
		                        </span>
		                      </div>
		                    </li>
		                    <li className="header-cart-item">
		                      <div className="header-cart-item-img">
		                        <img src="images/item-cart-02.jpg" alt="IMG" />
		                      </div>
		                      <div className="header-cart-item-txt">
		                        <a  className="header-cart-item-name">
		                          Converse All Star Hi Black Canvas
		                        </a>
		                        <span className="header-cart-item-info">
		                          1 x $39.00
		                        </span>
		                      </div>
		                    </li>
		                    <li className="header-cart-item">
		                      <div className="header-cart-item-img">
		                        <img src="images/item-cart-03.jpg" alt="IMG" />
		                      </div>
		                      <div className="header-cart-item-txt">
		                        <a  className="header-cart-item-name">
		                          Nixon Porter Leather Watch In Tan
		                        </a>
		                        <span className="header-cart-item-info">
		                          1 x $17.00
		                        </span>
		                      </div>
		                    </li>
		                  </ul>
		                  <div className="header-cart-total">
		                    Total: $75.00
		                  </div>
		                  <div className="header-cart-buttons">
		                    <div className="header-cart-wrapbtn">
		                      {/* Button */}
		                      <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
		                        View Cart
		                      </a>
		                    </div>
		                    <div className="header-cart-wrapbtn">
		                      {/* Button */}
		                      <a  className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
		                        Check Out
		                      </a>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
		              <span className="hamburger-box">
		                <span className="hamburger-inner" />
		              </span>
		            </div>
		          </div>
		        </div>
		        {/* Menu Mobile */}
		        <div className="wrap-side-menu">
		          <nav className="side-menu">
		            <ul className="main-menu">
		              <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
		                <span className="topbar-child1">
		                  Free shipping for standard order over $100
		                </span>
		              </li>
		              <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
		                <div className="topbar-child2-mobile">
		                  <span className="topbar-email">
		                    fashe@example.com
		                  </span>
		                  <div className="topbar-language rs1-select2">
		                    <select className="selection-1" name="time">
		                      <option>USD</option>
		                      <option>EUR</option>
		                    </select>
		                  </div>
		                </div>
		              </li>
		              <li className="item-topbar-mobile p-l-10">
		                <div className="topbar-social-mobile">
		                  <a  className="topbar-social-item fa fa-facebook" />
		                  <a  className="topbar-social-item fa fa-instagram" />
		                  <a  className="topbar-social-item fa fa-pinterest-p" />
		                  <a  className="topbar-social-item fa fa-snapchat-ghost" />
		                  <a  className="topbar-social-item fa fa-youtube-play" />
		                </div>
		              </li>
		              <li className="item-menu-mobile">
		                <a href="index.html">Home</a>
		                <ul className="sub-menu">
		                  <li><a href="index.html">Homepage V1</a></li>
		                  <li><a href="home-02.html">Homepage V2</a></li>
		                  <li><a href="home-03.html">Homepage V3</a></li>
		                </ul>
		                <i className="arrow-main-menu fa fa-angle-right" aria-hidden="true" />
		              </li>
		              <li className="item-menu-mobile">
		                <a href="product.html">Shop</a>
		              </li>
		              <li className="item-menu-mobile">
		                <a href="product.html">Sale</a>
		              </li>
		              <li className="item-menu-mobile">
		                <a href="cart.html">Features</a>
		              </li>
		              <li className="item-menu-mobile">
		                <a href="blog.html">Blog</a>
		              </li>
		              <li className="item-menu-mobile">
		                <a href="about.html">About</a>
		              </li>
		              <li className="item-menu-mobile">
		                <a href="contact.html">Contact</a>
		              </li>
		            </ul>
		          </nav>
		        </div>
		      </header>
		);
	 }
	 showMenus = (menus) => {
		var result = null;
		if(menus.length > 0){
				result = menus.map((menu, index) => {
						return (
								<MenuLink 
										key={index}
										label={menu.name}
										to={menu.to}
										activeOnlyWhenExact={menu.exact}
								/>
						);
				});
		}
		return result;
}
 } 

export default Header;