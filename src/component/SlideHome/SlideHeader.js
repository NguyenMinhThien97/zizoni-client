import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import {Link} from 'react-router-dom';
import "normalize.css/normalize.css";

class SlideHeader extends Component { 
	render(){
		var { slide } = this.props;
		return (
			<div>
				<Slider className="slider-wrapper" autoplay={3000} >
					<div
					className="slider-content"
					style={{ background: `url('${slide.image}') no-repeat center center` }}>
					<div className="inner">
						<h1>{slide.title}</h1>
						<p>{slide.description}</p>
						<Link to={`${slide.link}`} className="buttonSlide">{slide.button}</Link>
					</div>
					</div>
				</Slider>
			</div>
		);
	}
}

export default SlideHeader;