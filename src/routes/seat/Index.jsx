import React, { Component } from 'react';
import './Index.scss';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import seatSelect from './reducers';

import MovieInfo from './components/MovieInfo';
import SeatSelected from './components/SeatSelected';
import SeatSelector from './components/SeatSelector';


let store = createStore(seatSelect);
export default class Index extends Component {
	// state = {
	// 	selectSeat: []
	// }
	// addSeat = (seat) =>{
	// 	this.setState({
	// 		selectSeat: [
	// 			...this.state.selectSeat,
	// 			seat
	// 		]
	// 	});
	// }
	// removeSeat = (id) => {
	// 	this.setState({
	// 		selectSeat: this.state.selectSeat.filter(item => item.id !== id)
	// 	});
	// }
	render() {
		return (
			<Provider store={store}>
				<div className="seat">
					<div className="tOperator">
							<i className="tOperator__icon tOperator__icon--blackBack" onClick={() => {
								window.history.back();
							}}/>
							万达影院
							<i className="tOperator__icon tOperator__icon--blackShare"/>
					</div>
					<MovieInfo></MovieInfo>
					<div className="seat__main">
							<div className="seat__tip" />
							<div className="seat__graph">
								<div className="seat__screen">B13屏幕</div>
								<div className="seat__map"><SeatSelector/></div>
							</div>
						</div>
					<SeatSelected></SeatSelected>
				</div>
			</Provider>

		);
	}
}
