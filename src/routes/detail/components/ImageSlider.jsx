import React, { Component } from 'react';
import Slider from 'react-slick';
import './ImageSlider.scss';
import PropTypes from 'prop-types';

/******
**  author: 陈洪泽
**  desc: 图片展示浮层
*******/

export default class ImageSlider extends Component {
	state = {
		index: 1
	}
	changeIndex = index => {
		this.setState({
			index: index + 1
		});
	}
	render() {
		//Slider组件的设置
		const settings = {
			className: "imageSlider__content",
			afterChange: this.changeIndex
		};
		return (
			<div className="imageSlider" onClick={() => {this.props.handler();}}>
				<div className="imageSlider__index">{this.state.index} / 6</div>
				<Slider {...settings}>
					<div className="imageSlider__item">
						<div className="imageSlider__img" style={{"backgroundImage": "url('/source/image/asset1.jpeg')"}}>
						</div>
					</div>
					<div className="imageSlider__item">
						<div className="imageSlider__img" style={{"backgroundImage": "url('/source/image/asset2.jpeg')"}}>
						</div>
					</div>
					<div className="imageSlider__item">
						<div className="imageSlider__img" style={{"backgroundImage": "url('/source/image/asset3.jpeg')"}}>
						</div>
					</div>
					<div className="imageSlider__item">
						<div className="imageSlider__img" style={{"backgroundImage": "url('/source/image/asset4.jpeg')"}}>
						</div>
					</div>
					<div className="imageSlider__item">
						<div className="imageSlider__img" style={{"backgroundImage": "url('/source/image/asset5.jpeg')"}}>
						</div>
					</div>
					<div className="imageSlider__item">
						<div className="imageSlider__img" style={{"backgroundImage": "url('/source/image/asset6.jpeg')"}}>
						</div>
					</div>
				</Slider>
			</div>
		);
	}
}
ImageSlider.propTypes = {
	handler:  PropTypes.func.isRequired,
};
