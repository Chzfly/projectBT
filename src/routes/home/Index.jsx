import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import './Index.css';
import TopBar from './components/TopBar.jsx';
import Slider from './components/Slide.jsx';
import MovieItem from './components/MovieItem';
import TabMenu from '../../components/TabMenu.jsx';
import RenderToBody from '../../components/RenderToBody.jsx';
import CityLayer from './components/CityLayer.jsx';
import request from '../../helpers/request.js';
import {Link} from 'react-router-dom';

export default class Home extends Component {
	state = {
		city: '', //当前城市
		poster: [], //slide 海报
		movie: [], //当前热映电影
		cityLayerVisible: false //浮层是否展现
	}

	showCityLayer = () => {
		this.setState({
			cityLayerVisible: true
		});
	}

	hideCityLayer = () => {
		this.setState({
			cityLayerVisible: false
		});
	}
	changeCity = (city) => {
		this.setState({city});
		this.hideCityLayer();
	}

	componentWillMount(){
		this.getData();
	}

	getData = async () => {
		const data = await request('/index');
		const {city, poster, movie} = data;
		this.setState({
			city,
			poster,
			movie
		});
	}

	render() {
		const {city, poster, movie, cityLayerVisible} = this.state;
		return (
			<div className="home">
				<TopBar city={city} showCityLayer={this.showCityLayer}></TopBar>
				<div className="home__slide">
					<div className="home__slideWrap">
						<Slider data={poster}></Slider>
					</div>
				</div>
				<ul className="home__content">
					{movie.map(item => <Link to="detail" key={item.name}><li key={item.name}><MovieItem data={item}></MovieItem></li></Link>)}
				</ul>
				<TabMenu current="movie"></TabMenu>
				{cityLayerVisible && <RenderToBody>
						<CityLayer
							onClose={this.hideCityLayer}
							onSelect={this.changeCity}
						></CityLayer>
					</RenderToBody>}
			</div>
		);
	}
}



