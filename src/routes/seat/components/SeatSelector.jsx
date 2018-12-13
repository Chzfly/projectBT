import React, { Component } from 'react';
import {data} from '../mock/seat.json';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addSeat, removeSeat} from '../actions';

//设备独立像素
const SEAT_WIDTH = 50;
const SEAT_HEIGHT = 50;
//设备像素比
const ratio = window.devicePixelRatio;
//物理像素
const DRAW_SEAT_WIDTH = SEAT_WIDTH * ratio;
const DRAW_SEAT_HEIGHT = SEAT_HEIGHT * ratio;
//获取最多有几行几列，模拟数据最大行列在最后一个数据里面，所以直接取值，如果数据不规则，需要遍历
const lastSeat = data[data.length - 1];
//设备独立像素，canvas边框大小，“相框”大小
const CANVAS_WIDTH = lastSeat.colIndex * SEAT_WIDTH;
const CANVAS_HEIGHT = lastSeat.rowIndex * SEAT_HEIGHT;
//物理像素，相当于画布大小
const DRAW_CANVAS_WIDTH = CANVAS_WIDTH * ratio;
const DRAW_CANVAS_HEIGHT = CANVAS_HEIGHT * ratio;


class SeatSelector extends Component {

	componentDidMount(){
		//初始化画布
		this.ctx = this.refs.canvas.getContext('2d');
		this.ctx.font = `${10 * ratio}px Arial`;
		this.ctx.fillStyle = '#fff';
		this.ctx.textAlign = 'center';
		//创建虚拟图片
		const emptyImage = new Image();
		const selectImage = new Image();
		const soldImage = new Image();
		let count = 0;

		const loadCallback = () => {
			count ++;
			if(count === 3){
				this.emptyImage = emptyImage;
				this.selectImage = selectImage;
				this.soldImage = soldImage;
				this.drawAllSeat();
			}
		};

		emptyImage.onload = loadCallback;
		selectImage.onload = loadCallback;
		soldImage.onload = loadCallback;

		emptyImage.src = './source/seat-empty.png';
		selectImage.src = './source/seat-selected.png';
    soldImage.src = './source/seat-sold.png';
	}


	componentDidUpdate(){
		this.ctx.clearRect(0, 0, DRAW_CANVAS_WIDTH, DRAW_CANVAS_HEIGHT);
		this.drawAllSeat();
		this.drawSelectSeat();
	}

	drawAllSeat = () => {
		const len = data.length;
		for(let i = 0; i < len; i ++){
			const { isSold, xPos, yPos,} = data[i];
      const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
			const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;
			//根据已售和空座绘制座位
			if(isSold){
				this.ctx.drawImage(this.soldImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
			}else{
				this.ctx.drawImage(this.emptyImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);

			}
		}
	}

	drawSelectSeat = () => {
		const {selectSeat} = this.props;
		const len = selectSeat.length;
		for(let i = 0; i < len; i ++){
			const {xPos, yPos, colIndex, rowIndex } = selectSeat[i];
      const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
			const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;
			this.ctx.drawImage(this.selectImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
			this.ctx.fillText(`${rowIndex}排`, offsetLeft + DRAW_SEAT_WIDTH / 2, offsetTop + DRAW_SEAT_HEIGHT / 2.5);
				this.ctx.fillText(`${colIndex}座`, offsetLeft + DRAW_SEAT_WIDTH / 2, offsetTop + DRAW_SEAT_HEIGHT / 3 * 2);
		}
	}

	clickSeat = (e) => {
		const offset = this.refs.canvas.getBoundingClientRect();
		const offsetLeft = e.pageX - offset.left;
		const offsetTop = e.pageY - offset.top;
		const xPos = Math.ceil(offsetLeft / SEAT_WIDTH);
		const yPos = Math.ceil(offsetTop / SEAT_HEIGHT);

		//根据点击找到对应座位的信息
		const seat = data.find(item => item.xPos === xPos && item.yPos === yPos);

		//根据改点坐标是否有对应座位，如果有对应座位那么根据座位的是否售卖情况进行不同的处理
		if(!seat || seat.isSold){
			return;
		}

		const seatIndex = this.props.selectSeat.findIndex(item => item.id === seat.id);
		if(seatIndex !== -1){
			//已经选过了 取消选座
			this.props.removeSeat(seat.id);
		}else{
			//没选过，添加到已选数组
			if(this.props.selectSeat.length >= 4){
				alert('不能超过四个座位！');
			}else{
				this.props.addSeat(seat);
			}
		}
	}
	render() {
		return (
			<div>
				<canvas
					ref="canvas"
					width={DRAW_CANVAS_WIDTH}
					height={DRAW_CANVAS_HEIGHT}
					style={{
						width: CANVAS_WIDTH,
						height: CANVAS_HEIGHT
					}}
					onClick={(e) => {
						this.clickSeat(e);
					}}
				></canvas>
			</div>
		);
	}
}
SeatSelector.propTypes = {
	selectSeat : PropTypes.array.isRequired,
	removeSeat: PropTypes.func.isRequired,
	addSeat: PropTypes.func.isRequired,
};
const mapStateToProps = state => {
	return{
		selectSeat: state.selectSeat
	};
};
const mapDispatchToProps = dispatch => {
	return {
		addSeat: seat => {
			dispatch(addSeat(seat));
		},
		removeSeat: id => {
			dispatch(removeSeat(id));
		}
	};
};
export default connect (mapStateToProps, mapDispatchToProps)(SeatSelector);
