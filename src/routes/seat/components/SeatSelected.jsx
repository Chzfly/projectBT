import React from 'react';
import './SeatSelected.scss';
import {connect} from 'react-redux';
import {removeSeat} from '../actions';

function SeatSelected({selectSeat, removeSeat}) {
	if(!selectSeat.length){
		return null;
	}
	return (
		<div className="seatSelected">
			<div className="seatSelected__wrap">
				<ul className="seatSelected__list">
					{
						selectSeat.map(item => (
							<li key={item.id} className="seatSelected__item">
								<div className="seatSelected__item--detail">
									<div className="seatSelected__item--pos">{item.rowIndex}排{item.colIndex}座</div>
									<div className="seatSelected__item--price"><i className="seatSelected__item--tag">卡</i>33元</div>
								</div>
								<div className="seatSelected__item--close" onClick={() => {
									removeSeat(item.id);
								}}></div>
							</li>
						))
					}
				</ul>
			</div>
			<div className="seatSelected__buy">{selectSeat.length * 33}元 确认选座</div>
		</div>
	);
}
const mapStateToProps = state => {
	return{
		selectSeat: state.selectSeat
	};
};

const mapDispatchToProps = dispatch => {
	return{
		removeSeat: id => {
			dispatch(removeSeat(id));
		}
	};
};
export default connect (mapStateToProps, mapDispatchToProps)(SeatSelected);
