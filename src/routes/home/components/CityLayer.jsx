import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CityLayer.css';
import request from '../../../helpers/request';



class CityLayer extends Component {
	state = {
		hot: [],
		all: {}
	}

	getData = async () => {
		const data = await request('/city');
		const {hot, all} = data;

		this.setState({
			hot,
			all
		});
	}

	componentWillMount(){
		this.getData();
	}
	render() {

		const {onClose, onSelect} = this.props;
		const alphabetKeys = Object.keys(this.state.all);
		return (
			<div className="cityLayer">
				<div className="cityLayer__title">
					<div className="cityLayer__close" onClick={onClose} >关闭</div>
					选择城市
				</div>
				<div className="cityLayer__content">
					<div className="cityBlock" id="定位">
						<div className="cityBlock__label">定位城市</div>
						<div className="cityBlock__wrap">
							<div className="cityBlock__item">杭州</div>
						</div>
					</div>
					<div className="cityBlock" id="热门">
						<div className="cityBlock__label">热门城市</div>
						<div className="cityBlock__wrap">
							{this.state.hot.map(hot => <div
								key={hot.cityCode}
								className="cityBlock__item"
								onClick={() => onSelect(hot.regionName)}
							>{hot.regionName}</div>)}
						</div>
					</div>
					{alphabetKeys.map(alpha => {
						return(
							<div key={alpha} className="cityList" id={alpha}>
								<div className="cityList__label">{alpha}</div>
								<ul className="cityList__wrap">
									{this.state.all[alpha].map(city => <li
										key={city.cityCode}
										className="cityList__item"
										onClick={() => onSelect(city.regionName)}
									>{city.regionName}</li>)}
								</ul>
							</div>
						);
					})}

				</div>
				<div className="cityLayer__index cityIndex">
					<ul className="cityIndex__list">
						<li className="cityIndex__item"><a href="#定位">定位</a></li>
						<li className="cityIndex__item"><a href="#热门">热门</a></li>
						{alphabetKeys.map(alpha => <li key={alpha} className="cityIndex__item"><a href={`#${alpha}`}>{alpha}</a></li>)}
						<li className="cityIndex__item"><a href="#A">A</a></li>
					</ul>
				</div>
			</div>
		);
	}
}

CityLayer.propTypes = {
	onClose: PropTypes.func.isRequired,
	onSelect: PropTypes.func.isRequired
};

export default CityLayer;
